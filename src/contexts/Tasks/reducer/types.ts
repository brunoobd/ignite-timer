import { Task } from "@models";

export enum TasksActionTypes {
  CREATE_TASK = "CREATE_TASK",
}

export type TasksAction = { type: TasksActionTypes.CREATE_TASK; payload: Task };
