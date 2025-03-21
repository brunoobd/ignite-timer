export const getNextId = <T extends { id: number }>(items: T[]): number => {
  return items.length ? Math.max(...items.map((item) => item.id)) + 1 : 0;
};
