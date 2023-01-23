interface Task {
  id: string;
  text: string;
}

interface Column {
  id: string;
  title: string;
  max: number;
  tasks: Task[];
}

interface Board {
  id: string;
  name: string;
  lastOpen: string;
  backgroundImg?: string;
  columns: Column[];
}