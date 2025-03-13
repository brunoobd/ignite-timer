import { TasksActionTypes, TasksAction } from "@contexts/Tasks/reducer/types";

import { Task } from "@models";

export type TasksState = Task[];

export function tasksReducer(state: TasksState, action: TasksAction): TasksState {
  switch (action.type) {
    case TasksActionTypes.CREATE_TASK:
      return [...state, action.payload];

    default:
      return state;
  }
}
