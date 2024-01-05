// 매번 앞에서 부터 정렬된 배열을 만들어가는 방식
// 시간 복잡도: O(n^2)
export default function insertionSort(array) {
  const arr = [...array]
  for (let i = 1; i < arr.length; i++) {
    for (let j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]]
      else break
    }
  }
  return arr
}
