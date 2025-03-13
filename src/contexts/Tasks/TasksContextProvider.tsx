import { ReactNode, useEffect, useReducer } from "react";

import { getTasks, saveTasks } from "@storage/Tasks";

import { TasksContext } from "@contexts";
import { tasksReducer } from "@contexts/Tasks/reducer";
import { createTask } from "@contexts/Tasks/reducer/actions";

import { Task, TaskId, TaskTitle } from "@models";

import { getNextId } from "@utils";

export const TasksContextProvider = ({ children }: { children: ReactNode }) => {
  const [tasks, dispatch] = useReducer(tasksReducer, [], () => getTasks());

  const getTaskById = (taskId: TaskId) => {
    return tasks.find((task) => task.id === taskId);
  };

  const createNewTask = (taskTitle: TaskTitle): TaskId => {
    const taskId = getNextId<Task>(tasks);

    dispatch(createTask({ id: taskId, title: taskTitle }));

    return taskId;
  };

  useEffect(() => {
    saveTasks(tasks);
  }, [tasks]);

  return (
    <TasksContext.Provider value={{ tasks, getTaskById, createNewTask }}>
      {children}
    </TasksContext.Provider>
  );
};
