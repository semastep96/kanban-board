import { makeAutoObservable, autorun } from 'mobx';
import { BoardsStorage } from '../helpers/BoardsStorage';

class Store {
  boards: Board[] = BoardsStorage.getBoards();

  constructor() {
    makeAutoObservable(this);
    autorun(() => BoardsStorage.saveBoards(this.boards));
  }

  addBoard(board: Board) {
    this.boards.unshift(board);
  }

  openBoard(boardId: string) {
    this.boards.forEach(board => {
      if(board.id === boardId) {
        board.lastOpen = new Date().toUTCString();
      }
    });
  }

  removeBoard(boardId: string) {
    this.boards = this.boards.filter((board) => board.id !== boardId);
  }

  createColumn(boardId: string, column: Column) {
    this.boards.forEach((board) => {
      if (board.id === boardId) {
        board.columns.push(column);
      }
    });
  }

  deleteColumn(boardId: string, columnId: string) {
    this.boards.forEach((board) => {
      if (board.id === boardId) {
        board.columns = board.columns.filter(
          (column) => column.id !== columnId
        );
      }
    });
  }

  createTask(boardId: string, columnId: string, task: Task) {
    this.boards.forEach((board) => {
      if (board.id === boardId) {
        board.columns.forEach((column) => {
          if (column.id === columnId) {
            console.log(column);
            column.tasks = [...column.tasks, task];
            console.log(column);
          }
        });
      }
    });
  }
}

export default new Store();
