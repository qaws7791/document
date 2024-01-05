function findFloor(n, k) {
  let low = 1; // 1층
  let high = n; // 마지막 층
  while (true) {
    const mid = Math.floor((low + high) / 2); // 중간 층
    if (eggDrop(mid, k) > eggDrop(mid - 1, k)) {
      return mid;
    } else {
      high = mid - 1;
    }
  }
}

function countBrokenEggs(n, f) {
  let y = 0;
  let count = 0;
  const interval = Math.floor(Math.sqrt(n));
  while (y < n) {
    y += interval;
    count++;
    if (y >= f) {
      return count + findFloor(y, f);
    }
  }
  return count; // 달걀이 깨지지 않은 경우
}

function eggDrop(x, k) {
  return Math.ceil(k / x);
}

const n = 100;
const f = 99;
console.log(`The floor F is at or below: ${findFloor(n, f)}`);
console.log(`Broken Eggs: ${countBrokenEggs(n, f)}`);
