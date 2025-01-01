// 매번 앞에서 부터 정렬된 배열을 만들어가는 방식
// 시간 복잡도: O(n^2)
export default function insertionSort(array) {
  const arr = [...array];
  for (let i = 1; i < arr.length; i++) {
    while (i > 0 && arr[i - 1] > arr[i]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i--;
    }
  }
  return arr;
}

console.log(insertionSort([5, 4, 3, 2, 1])); // [1, 2, 3, 4, 5]
