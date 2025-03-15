import { Task } from "@models";

export enum TasksActionTypes {
  CreateTask = "CREATE_TASK",
}

export type TasksAction = { type: TasksActionTypes.CreateTask; payload: Task };
