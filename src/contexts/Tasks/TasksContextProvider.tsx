import { ReactNode, useReducer } from "react";

import { TasksContext } from "@contexts";
import { tasksReducer } from "@contexts/Tasks/reducer";
import { createTask } from "@contexts/Tasks/reducer/actions";

import { Task, TaskId, TaskTitle } from "@models";
import { getNextId } from "@utils";

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, []);

  const getTaskById = (taskId: TaskId) => {
    return tasks.find((task) => task.id === taskId);
  };

  const createNewTask = (taskTitle: TaskTitle): TaskId => {
    const taskId = getNextId<Task>(tasks);

    dispatch(createTask({ id: taskId, title: taskTitle }));

    return taskId;
  };

  return (
    <TasksContext.Provider value={{ tasks, getTaskById, createNewTask }}>
      {children}
    </TasksContext.Provider>
  );
};
