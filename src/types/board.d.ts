interface Task {
  id: string;
  order: number;
  text: string;
}

interface Column {
  id: string;
  title: string;
  order: number;
  min: number;
  max: number;
  tasks: Task[];
}

interface Board {
  id: string;
  name: string;
  lastOpen: string;
  backgroundImg?: string;
  backgroundColor?: string;
  columns: Column[];
}