import { STORAGE_KEYS } from "@storage/keys";

import { Task } from "@models";

export const getTasks = (): Task[] => {
  const storedData = localStorage.getItem(STORAGE_KEYS.TASKS);
  return storedData ? JSON.parse(storedData) : [];
};

export const saveTasks = (tasks: Task[]) => {
  localStorage.setItem(STORAGE_KEYS.TASKS, JSON.stringify(tasks));
};
