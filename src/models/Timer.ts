import { Task } from "./Task";

export type TimerStatus = "inProgress" | "completed" | "interrupted";

export type Timer = {
  id: number;
  task: Task;
  duration: number;
  startDate: Date;
  status: TimerStatus;
};
