// 매번 가장 작은 값을 찾아서 앞으로 보내는 정렬
// 시간 복잡도: O(n^2)

/**
 * 매번 가장 작은 값을 찾아서 앞으로 보내는 정렬
 * @param {number[]} array
 * @returns {number[]}
 */

export default function selectionSort(array) {
  const arr = [...array];
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j;
    }
    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }
  return arr;
}
