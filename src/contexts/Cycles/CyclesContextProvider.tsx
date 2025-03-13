import { ReactNode, useReducer } from "react";

import { CyclesContext } from "@contexts";
import { CycleStatus, CycleStatusEnum, TaskId } from "@models";
import { createCycle, updateCycle } from "@contexts/Cycles/reducer/actions";
import { cyclesReducer } from "@contexts/Cycles/reducer";

export const CyclesContextProvider = ({ children }: { children: ReactNode }) => {
  const [cycles, dispatch] = useReducer(cyclesReducer, []);
  const cycleInProgress = cycles.find((cycle) => cycle.status === CycleStatusEnum.InProgress);
  const hasCycleInProgress = !!cycleInProgress;

  const createNewCycle = (payload: { taskId: TaskId; duration: number }) => {
    dispatch(createCycle(payload));
  };

  const updateInProgressCycleStatus = (
    status: Exclude<CycleStatus, CycleStatusEnum.InProgress>
  ) => {
    if (hasCycleInProgress) {
      dispatch(updateCycle({ cycleId: cycleInProgress.id, updatedFields: { status } }));
    }
  };

  return (
    <CyclesContext.Provider
      value={{
        cycles,
        cycleInProgress,
        hasCycleInProgress,
        createNewCycle,
        updateInProgressCycleStatus,
      }}>
      {children}
    </CyclesContext.Provider>
  );
};
