const USED_IDS: Record<string, true> = {};

export const id = () => {
  let newId = "";
  do {
    newId = Math.random().toString(36).slice(2, 9);
  } while (USED_IDS[newId]);

  USED_IDS[newId] = true;

  return newId;
};
