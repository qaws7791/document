const set1 = new Set([1, 2, 3, 4, 5]);
const set2 = new Set([4, 5, 6, 7, 8]);

const isSuperset = (set, subset) => {
  return [...subset].every((item) => set.has(item));
};

const union = (set1, set2) => {
  return new Set([...set1, ...set2]);
};

const intersection = (set1, set2) => {
  return new Set([...set1].filter((item) => set2.has(item)));
};

const difference = (set1, set2) => {
  return new Set([...set1].filter((item) => !set2.has(item)));
};
