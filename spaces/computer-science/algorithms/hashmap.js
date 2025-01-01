const values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];

const hashMap = {};
const hashMap2 = new Map();

values.forEach((value, index) => {
  hashMap[value] = index;
  hashMap2.set(value, index);
});

console.log(hashMap);
console.log(hashMap2);

console.log(
  Object.values(hashMap)
    .filter((v) => v % 2 === 0)
    .slice(0, 2)
);

let count = 0;
for (const value of hashMap2.values()) {
  if (value % 2 === 0) {
    console.log(value);
    ++count;
    if (count === 2) {
      break;
    }
  }
}
