import { TasksAction, TasksActionTypes } from "@contexts/Tasks/reducer/types";

import { Task } from "@models";

export const createTask = (task: Task): TasksAction => ({
  type: TasksActionTypes.CREATE_TASK,
  payload: task,
});
