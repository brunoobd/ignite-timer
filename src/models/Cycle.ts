import { Task } from "./Task";

export type CycleStatus = "inProgress" | "completed" | "interrupted";

export type Cycle = {
  id: number;
  taskId: Task["id"];
  duration: number;
  startDate: Date;
  status: CycleStatus;
};
