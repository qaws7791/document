// 시간 복잡도: O(n log n)
export default function quickSort(arr) {
  if (arr.length < 2) return arr;

  const pivot = arr[0];
  const left = [];
  const right = [];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] < pivot) left.push(arr[i]);
    else right.push(arr[i]);
  }

  return [...quickSort(left), pivot, ...quickSort(right)];
}

console.log(quickSort([20, 13, 3, 2, 10, 1, 5, 6]));
