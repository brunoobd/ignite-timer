import {
  CyclesAction,
  CyclesActionEnum,
  CreateCycleActionPayload,
  UpdateCycleActionPayload,
} from "./types";

export const createCycle = (payload: CreateCycleActionPayload): CyclesAction => ({
  type: CyclesActionEnum.CreateCycle,
  payload,
});

export const updateCycle = (payload: UpdateCycleActionPayload): CyclesAction => ({
  type: CyclesActionEnum.UpdateCycle,
  payload,
});
