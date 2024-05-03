# Sort



## Bubble Sort

- 매번 인접한 두 원소를 비교하여 정렬하는 방식
- 시간 복잡도: O(n^2)

```javascript
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
```



## Insertion Sort

- 매번 앞에서 부터 정렬된 배열을 만들어가는 방식
- 시간 복잡도: O(n^2)

```javascript

export default function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    while (i > 0 && arr[i - 1] > arr[i]) {
      [arr[i], arr[i - 1]] = [arr[i - 1], arr[i]];
      i--;
    }
  }
  return arr;
}
```



## Selection Sort

- 매번 가장 작은 값을 찾아서 앞으로 보내는 정렬
- 시간 복잡도: O(n^2)

```javascript
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
```



## MergeSort

병합 정렬은 분할 정복 알고리즘의 하나로, 다음과 같은 순서로 작동한다.

1. 리스트의 길이가 0 또는 1이면 이미 정렬된 것으로 본다.

2. (분할)그렇지 않은 경우에는 정렬되지 않은 리스트를 절반으로 잘라 비슷한 크기의 두 부분 리스트로 나눈다.

3. (정복)각 부분 리스트를 재귀적으로 합병 정렬을 이용해 정렬한다.

4. (조합)두 부분 리스트를 다시 하나의 정렬된 리스트로 합병한다.
5. 시간 복잡도: O(nlogn)

```javascript
function margeSort(arr) {
  if (arr.length < 2) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = margeSort(arr.slice(0, mid));
  const right = margeSort(arr.slice(mid));

  return merge(left, right);
}
```

```javascript
function merge(left, right) {
  const result = [];

  let leftIndex = 0,
    rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}
```





## Quick Sort

pivot을 기준으로 작은 값은 왼쪽, 큰 값은 오른쪽에 정렬

- 시간 복잡도: O(n log n)

```javascript

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
```

