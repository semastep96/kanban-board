import { dragTaskItem } from './../types/dragTypes';
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
    this.boards.forEach((board) => {
      if (board.id === boardId) {
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
            column.tasks = [...column.tasks, task];
          }
        });
      }
    });
  }

  dragTask(
    taskInfo: dragTaskItem,
    targetColumnId: string,
    dropTaskId?: string
  ) {
    if (taskInfo.taskId === dropTaskId) {
      return;
    }
    const board = this.boards.find((board) => board.id === taskInfo.boardId);
    const dragColumn = board?.columns.find(
      (column) => column.id === taskInfo.columnId
    );

    const dropColumn = board?.columns.find(
      (column) => column.id === targetColumnId
    );

    const dragIndex = dragColumn?.tasks.findIndex(
      (task) => task.id === taskInfo.taskId
    );

    const isNotDragTaskIndexFound =
      (!dragIndex && dragIndex !== 0) || dragIndex == -1;

    if (isNotDragTaskIndexFound) {
      throw Error('Not found task: ' + taskInfo.taskText);
    }

    const extracted = dragColumn?.tasks.splice(dragIndex, 1);
    if (!extracted?.length) {
      throw Error('Not found task: ' + taskInfo.taskText);
    }
    const task = extracted[0];

    if (!dropTaskId) {
      console.log('hre');
      dropColumn?.tasks.unshift(task);
      return;
    }

    const dropIndex = dropColumn?.tasks.findIndex(
      (task) => task.id === dropTaskId
    );

    const isNotDropTaskIndexFound =
      (!dropIndex && dropIndex !== 0) || dropIndex == -1;

    if (isNotDropTaskIndexFound) {
      throw Error('Not found drop task:(');
    }

    dropColumn?.tasks.splice(dropIndex + 1, 0, task);
  }
}

export default new Store();
