const storageBoardsKey = 'boards';

export const BoardsStorage = {
  saveBoards(boards: Board[]) {
    localStorage.setItem(storageBoardsKey, JSON.stringify(boards));
  },
  getBoards(): Board[] {
    const fromStorage = localStorage.getItem(storageBoardsKey);
    if (!fromStorage) return [];
    return JSON.parse(fromStorage);
  },
};
