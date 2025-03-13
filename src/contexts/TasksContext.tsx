import { Task, TaskId } from "@models";
import { getNextId } from "@utils";
import { createContext, ReactNode, useState } from "react";

type TasksContextType = {
  tasks: Task[];
  getTaskById: (taskId: TaskId) => Task | undefined;
  createNewTask: (taskTitle: string) => TaskId;
};

export const TasksContext = createContext<TasksContextType>({} as TasksContextType);

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, setTasks] = useState<Task[]>([]);

  console.log(tasks);

  const getTaskById = (taskId: TaskId) => {
    return tasks.find((task) => task.id === taskId);
  };

  const createNewTask = (taskTitle: string): TaskId => {
    const newTaskId = getNextId<Task>(tasks);

    setTasks((prevState) => [...prevState, { id: newTaskId, title: taskTitle }]);

    return newTaskId;
  };

  return (
    <TasksContext.Provider value={{ tasks, getTaskById, createNewTask }}>
      {children}
    </TasksContext.Provider>
  );
};
