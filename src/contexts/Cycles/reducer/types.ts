import { TaskId, Cycle } from "@models";

export enum CyclesActionEnum {
  CreateCycle = "CREATE_CYCLE",
  UpdateCycle = "UPDATE_CYCLE",
}

export type CreateCycleActionPayload = { taskId: TaskId; duration: Cycle["duration"] };

export type UpdateCycleActionPayload = {
  cycleId: Cycle["id"];
  updatedFields: Partial<Omit<Cycle, "id">>;
};

export type CyclesAction =
  | {
      type: CyclesActionEnum.CreateCycle;
      payload: CreateCycleActionPayload;
    }
  | {
      type: CyclesActionEnum.UpdateCycle;
      payload: UpdateCycleActionPayload;
    };
