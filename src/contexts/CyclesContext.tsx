import { Cycle, CycleStatus, TaskId } from "@models";
import { getNextId } from "@utils";
import { createContext, ReactNode, useState } from "react";

type CyclesContextType = {
  cycles: Cycle[];
  cycleInProgress: Cycle | undefined;
  hasCycleInProgress: boolean;
  updateInProgressCycleStatus: (status: Exclude<CycleStatus, "inProgress">) => void;
  createNewCycle: (taskId: TaskId, duration: number) => void;
};

export const CyclesContext = createContext<CyclesContextType>({} as CyclesContextType);

export const CyclesContextProvider = ({ children }: { children: ReactNode }) => {
  const [cycles, setCycles] = useState<Cycle[]>([]);
  const cycleInProgress = cycles.find((cycle) => cycle.status === "inProgress");
  const hasCycleInProgress = !!cycleInProgress;

  const createNewCycle = (taskId: TaskId, duration: number) => {
    const newCycleId = getNextId<Cycle>(cycles);

    setCycles((prevState) => [
      ...prevState,
      { id: newCycleId, taskId, duration, startDate: new Date(), status: "inProgress" },
    ]);
  };

  const updateInProgressCycleStatus = (status: Exclude<CycleStatus, "inProgress">) => {
    if (hasCycleInProgress) {
      setCycles((prevState) =>
        prevState.map(
          (cycle): Cycle => (cycle.status === "inProgress" ? { ...cycle, status } : cycle)
        )
      );
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
