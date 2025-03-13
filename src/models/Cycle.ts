import { TaskId } from "@models";

export enum CycleStatusEnum {
  InProgress = "inProgress",
  Completed = "completed",
  Interrupted = "interrupted",
}

export type CycleStatus =
  | CycleStatusEnum.InProgress
  | CycleStatusEnum.Completed
  | CycleStatusEnum.Interrupted;

export type Cycle = {
  id: number;
  taskId: TaskId;
  duration: number;
  startDate: Date;
  status: CycleStatus;
};
