import { STORAGE_KEYS } from "@storage/keys";

import { Cycle } from "@models";

export const getCycles = (): Cycle[] => {
  const storedData = localStorage.getItem(STORAGE_KEYS.CYCLES);
  return storedData ? JSON.parse(storedData) : [];
};

export const saveCycles = (cycles: Cycle[]) => {
  localStorage.setItem(STORAGE_KEYS.CYCLES, JSON.stringify(cycles));
};
