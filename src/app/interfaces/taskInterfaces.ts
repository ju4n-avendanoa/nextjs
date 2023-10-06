export interface Tasks {
  id: string;
  title: string;
  description: string;
  createdAt: Date;
}

export interface TaskState {
  tasks: Tasks[];
  favorites: string[];
  description: string;
  title: string;
  setDescription: (description: string) => void;
  setTitle: (title: string) => void;
  getTasks: (userId: string | undefined) => Promise<void>;
  addFavorite: (id: string) => Promise<void>;
  deleteFavorites: (id: string) => Promise<void>;
  deleteTask: (id: string) => Promise<void>;
}
