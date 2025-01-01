function fiboDP(n) {
  const arr = [0, 1];
  for (let i = 2; i <= n; i++) {
    arr[i] = arr[i - 1] + arr[i - 2];
  }
  return arr[n];
}

function fiboDP2(n, memo = {}) {
  if (n <= 2) return 1;
  if (n in memo) return memo[n];

  memo[n] = fiboDP2(n - 1, memo) + fiboDP2(n - 2, memo);
  return memo[n];
}

console.time("fiboDP");
console.log(fiboDP(1000));
console.timeEnd("fiboDP");

console.time("fiboDP2");
console.log(fiboDP2(1000));
console.timeEnd("fiboDP2");
