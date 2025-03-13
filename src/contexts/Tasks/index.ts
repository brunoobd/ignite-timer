import { createContext } from "react";

import { Task, TaskId } from "@models";

type TasksContextType = {
  tasks: Task[];
  getTaskById: (taskId: TaskId) => Task | undefined;
  createNewTask: (taskTitle: string) => TaskId;
};

export const TasksContext = createContext<TasksContextType>({} as TasksContextType);
