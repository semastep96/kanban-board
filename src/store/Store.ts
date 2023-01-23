import { makeAutoObservable } from 'mobx';

class Store {
  boards: Board[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addBoard(board: Board) {
    this.boards.unshift(board);
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
}

export default new Store();
