export enum dragTypes {
  task = 'Task',
}

export interface dragTaskItem {
  taskId: string;
  taskText: string;
  boardId: string;
  columnId: string;
}
