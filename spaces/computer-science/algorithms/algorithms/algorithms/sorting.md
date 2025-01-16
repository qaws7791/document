# Sort



## Selection sort

매번 가장 작은 값을 찾아서 앞으로 보내는 정렬

시간 복잡도: O(n^2)

```javascript
/**
 * 매번 가장 작은 값을 찾아서 앞으로 보내는 정렬
 * @param {number[]} array
 * @returns {number[]}
 */

export default function selectionSort(array) {
  const arr = [...array]
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j]) minIndex = j
    }
    ;[arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
  }
  return arr
}

```



## Bubble sort

매번 인접한 두 원소를 비교하여 정렬하는 방식
시간 복잡도: O(n^2)

```javascript

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

```





## Insertion sort

매번 앞에서 부터 정렬된 배열을 만들어가는 방식
시간 복잡도: O(n^2)

```javascript

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

```



## Merge sort

병합 정렬은 분할 정복 알고리즘의 하나로, 다음과 같은 순서로 작동한다.

1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다.
2. (분할)그렇지 않은 경우에는 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.
3. (정복)각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.
4. (조합)두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다

시간 복잡도: O(nlogn)

```javascript
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
```



## 