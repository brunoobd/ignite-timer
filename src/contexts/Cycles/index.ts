import { createContext } from "react";

import { CreateCycleActionPayload } from "@contexts/Cycles/reducer/types";

import { Cycle, CycleStatus } from "@models";

type CyclesContextType = {
  cycles: Cycle[];
  cycleInProgress: Cycle | undefined;
  hasCycleInProgress: boolean;
  createNewCycle: (payload: CreateCycleActionPayload) => void;
  updateInProgressCycleStatus: (status: Exclude<CycleStatus, "inProgress">) => void;
};

export const CyclesContext = createContext<CyclesContextType>({} as CyclesContextType);
