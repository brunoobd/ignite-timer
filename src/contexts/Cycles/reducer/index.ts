import { CyclesActionEnum, CyclesAction } from "@contexts/Cycles/reducer/types";

import { Cycle, CycleStatusEnum } from "@models";
import { getNextId } from "@utils";

export type CyclesState = Cycle[];

export function cyclesReducer(state: CyclesState, action: CyclesAction): CyclesState {
  switch (action.type) {
    case CyclesActionEnum.CreateCycle: {
      const { taskId, duration } = action.payload;

      return [
        ...state,
        {
          id: getNextId<Cycle>(state),
          taskId,
          duration,
          startDate: new Date(),
          status: CycleStatusEnum.InProgress,
        },
      ];
    }

    case CyclesActionEnum.UpdateCycle: {
      const { cycleId, updatedFields } = action.payload;

      return state.map((cycle) => (cycle.id === cycleId ? { ...cycle, ...updatedFields } : cycle));
    }

    default:
      return state;
  }
}
