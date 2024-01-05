// 병합 정렬은 분할 정복 알고리즘의 하나로, 다음과 같은 순서로 작동한다.
// 1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다.
// 2. (분할)그렇지 않은 경우에는 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
// 3. (정복)각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
// 4. (조합)두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
// 시간 복잡도: O(nlogn)
export default function margeSort(array) {
  const arr = [...array]
  if (arr.length < 2) return arr
  const mid = Math.floor(arr.length / 2)
  const left = arr.slice(0, mid)
  const right = arr.slice(mid)
  return merge(margeSort(left), margeSort(right))
}

function merge(left, right) {
  const result = []
  while (left.length && right.length) {
    if (left[0] <= right[0]) result.push(left.shift())
    else result.push(right.shift())
  }
  while (left.length) result.push(left.shift())
  while (right.length) result.push(right.shift())
  return result
}

console.log(margeSort([5, 4, 3, 2, 1]))
