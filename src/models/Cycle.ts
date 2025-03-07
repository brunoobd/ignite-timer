import { Task } from "./Task";

export type CycleStatus = "inProgress" | "completed" | "interrupted";

export type Cycle = {
  id: number;
  task: Task;
  duration: number;
  startDate: Date;
  status: CycleStatus;
};
