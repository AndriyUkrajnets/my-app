export type Todo = {
  id: number;
  text: string;
  completed: boolean;
};

export type Filter = "ALL" | "ACTIVE" | "COMPLETED";
