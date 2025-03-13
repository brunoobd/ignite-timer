import { ReactNode, useEffect, useReducer } from "react";

import { getCycles, saveCycles } from "@storage/Cycles";

import { CyclesContext } from "@contexts";
import { cyclesReducer } from "@contexts/Cycles/reducer";
import { createCycle, updateCycle } from "@contexts/Cycles/reducer/actions";

import { CycleStatus, CycleStatusEnum, TaskId } from "@models";

export const CyclesContextProvider = ({ children }: { children: ReactNode }) => {
  const [cycles, dispatch] = useReducer(cyclesReducer, [], () => getCycles());
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

  useEffect(() => {
    saveCycles(cycles);
  }, [cycles]);

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
