// 매번 인접한 두 원소를 비교하여 정렬하는 방식
// 시간 복잡도: O(n^2)
export default function bubbleSort(array) {
  const arr = [...array]
  for (let i = arr.length - 1; i > 0; i--) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
    }
  }
  return arr
}
console.log(bubbleSort([5, 4, 3, 2, 1]))
