export const BoardsHelper = {
  createBoard(name: string, bgImage: string, columns: string[]): Board {
    return {
      id: name + new Date().getTime() + Math.random(),
      name: name,
      lastOpen: new Date().toUTCString(),
      backgroundImg: bgImage,
      columns: columns.map((columnName) => this.createColumn(columnName)),
    };
  },
  createColumn(columnTitle: string, max = 0): Column {
    return {
      id: columnTitle + new Date().getTime() + Math.random(),
      title: columnTitle,
      max: max,
      tasks: [],
    };
  },
  createTask(text: string): Task {
    return {
      id: text + new Date().getTime() + Math.random(),
      text,
    };
  },
};
