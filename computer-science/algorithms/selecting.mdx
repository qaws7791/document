# 선택 문제 (Selection Problem)


## 선택 문제란

선택 문제는 **주어진 데이터에서 특정 순위에 해당하는 값을 찾는 문제**를 말합니다. 주로 데이터 과학에서 중앙값을 찾기 위해 사용됩니다.

이 문제는 다음과 같은 사례들을 포함합니다. k 값은 1부터 시작하여 배열의 길이까지의 범위 내에서 정의됩니다.

- k = 1: 최소값 찾기.
- k = n: 최대값 찾기.
- k = n/2: 중앙값 찾기.
- k = x: x번째로 작은 값 찾기.


### 선택 문제를 해결하는 방법들

1. **정렬 후 선택**
   - 배열을 정렬한 뒤, 원하는 순위의 요소를 선택.
   - 시간 복잡도: **O(n log n)** (정렬 시간 소요).
2. **우선순위 큐 (힙)을 사용한 선택**
   - 최대 힙 또는 최소 힙을 사용해 효율적으로 k번째 값을 찾음.
   - 시간 복잡도: **O(n log k)** (힙 크기와 삽입/삭제 작업에 의존).
3. **분할 기반 알고리즘 (Quickselect)**
   - 퀵 정렬의 아이디어를 활용하여 배열을 부분적으로 정렬하면서 k번째 요소를 찾음.
   - 평균 시간 복잡도: **O(n)**. 최악의 경우 **O(n²)** (분할이 비효율적일 때).


## 비트맵 정렬 활용 (Bitmap Selection)

비트맵 선택은 선택 문제를 해결하는 효율적인 방법 중 하나입니다. 비트맵 정렬을 사용하여 k번째의 값을 찾습니다. 비트맵 정렬의 제약 사항이 동일하게 적용됩니다.

- **시간 복잡도**:
  - 비트맵 생성: **O(n)**.
  - 비트맵 순회: **O(m)** (m은 비트맵 크기).
  - 전체 시간복잡도: **O(n + m)**.
- **공간 복잡도**: **O(m)**.

```javascript
function bitmapSort(arr, k, from = 0, to = arr.length - 1) {
//   if (k < 1 || k > to - from + 1) {
//     throw new Error('k는 배열의 범위를 벗어났습니다.');
//   }

  const copied = arr.slice(from, to + 1);
  const minKey = Math.min(...copied);
  const maxKey = Math.max(...copied);

  const bitmap = new Array(maxKey - minKey + 1).fill(false);

  // 비트맵 생성
  for (let i = from; i <= to; i++) {
    if (bitmap[arr[i] - minKey]) {
      throw new Error('입력 데이터에 중복된 값이 있습니다.');
    } else {
      bitmap[arr[i] - minKey] = true;
    }
  }

  // k번째 값을 찾기 위해 비트맵을 순회
  let count = 0;
  for (let i = 0; i < bitmap.length; i++) {
    if (bitmap[i]) {
      count++;
      if (count === k) {
        return i + minKey;
      }
    }
  }
//   throw new Error('k번째 값을 찾을 수 없습니다.');
}
```


## 계수 정렬 활용 (Counting Selection)

계수 선택은 선택 문제를 해결하는 또 다른 효율적인 방법입니다. 계수 정렬을 사용하여 k번째의 값을 찾습니다.

- **시간 복잡도**:
  - 계수 생성: **O(n)**.
  - 계수 순회: **O(m)** (m은 계수 크기).
  - 전체 시간복잡도: **O(n + m)**.
- **공간 복잡도**: **O(m)**.


```javascript
function countingSelection(arr, k, from = 0, to = arr.length - 1) {
//   if (k < 1 || k > to - from + 1) {
//     throw new Error('k는 배열의 범위를 벗어났습니다.');
//   }

  const copied = arr.slice(from, to + 1);
  const minKey = Math.min(...copied);
  const maxKey = Math.max(...copied);

  const count = new Array(maxKey - minKey + 1).fill(0);

  // 카운트 배열 생성
  for (let i = from; i <= to; i++) {
    count[arr[i] - minKey]++;
  }

  // k번째 값 찾기
  let cumulativeCount = 0;
  for (let i = 0; i < count.length; i++) {
    cumulativeCount += count[i];
    if (cumulativeCount >= k) {
      return i + minKey;
    }
  }

//   throw new Error('k번째 값을 찾을 수 없습니다.');
}
```


## 선택 정렬 활용 (Selection by comparison)

선택 정렬을 기반으로 하는 선택 문제 해결 방법입니다. 선택 정렬은 배열에서 최소값을 찾아 앞으로 이동시키는 방식으로 정렬하는 알고리즘입니다. 정렬과 다른 점은 k번째 값을 찾기 위해 배열을 전체 정렬하지 않고 k번째 값을 찾으면 멈추는 것입니다. 앞부분부터 정렬하기 때문에 k 값이 증가하면 성능이 떨어집니다.

- **시간 복잡도**:
  - 최소값 찾기: **O(n)**.
  - k번째 값 찾기: **O(kn)**.
  - 전체 시간복잡도: **O(n + kn)**.
- **공간 복잡도**: **O(1)**.

```javascript
function selection(arr, k, from = 0, to = arr.length - 1) {
  if (k < 1 || k > to - from + 1) {
    throw new Error('k는 배열의 범위를 벗어났습니다.');
  }

  for (let i = from; i <= from + k - 1; i++) {
    let minIndex = i;

    // 현재 범위에서 최소값 찾기
    for (let j = i + 1; j <= to; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }

    // 최소값을 현재 위치로 스왑
    if (minIndex !== i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  // k번째로 작은 값 반환
  return arr[from + k - 1];
}
```


## 퀵 정렬 활용 (Quickselect)


- **시간 복잡도**:
  - 평균 시간 복잡도: **O(n)**.
  - 최악 시간 복잡도: **O(n²)**.
- **공간 복잡도**:
  - 평균 시간 복잡도: **O(log n)** (재귀 호출로 인한 스택 공간).
  - 최악 시간 복잡도: **O(n)**

```javascript
function quickSelection(arr, k, from = 0, to = arr.length - 1) {
    // if (k < 1 || k > to - from + 1) {
    //     throw new Error('k는 배열의 범위를 벗어났습니다.');
    // }

    function quickSelect(from, to, kSmallest) {
        if (from === to) {
            return arr[from]; // 범위가 한 요소일 때 반환
        }

        // 피벗 분할
        const pivotIndex = partition(arr, from, to);

        if (kSmallest === pivotIndex) {
            return arr[pivotIndex]; // k번째 값과 피벗이 같으면 반환
        } else if (kSmallest < pivotIndex) {
            return quickSelect(from, pivotIndex - 1, kSmallest); // 왼쪽 탐색
        } else {
            return quickSelect(pivotIndex + 1, to, kSmallest); // 오른쪽 탐색
        }
    }

    // k는 1-based이므로 0-based 인덱스로 변환
    return quickSelect(from, to, from + k - 1);
}

function partition(arr, from, to) {
    const pivot = arr[to];
    let i = from - 1;

    for (let j = from; j < to; j++) {
        if (arr[j] < pivot) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[to]] = [arr[to], arr[i + 1]];
    return i + 1; // 피벗의 최종 위치 반환
}
```


### 중간값의 중간값 방법(Median of Medians)

중간값의 중간값 방법은 선택 문제를 해결하는 또 다른 방법입니다. 이상적으로 피벗이 중앙값 이 되어 양쪽이 균등하게 나누어 지는 것이 좋습니다. 중간값의 중간값 방법은 피벗이 대략적으로 중앙값이 되도록 하는 방법입니다. 이 방법은 피벗을 선택할 때 중간값의 중간값을 사용함으로써 quickselect의 시간 복잡도가 최악의 경우에도 이차에서 선형으로 개선됩니다. quicksort에서 이 피벗 전략을 사용할 경우 최악의 경우 시간 복잡도가 O(n log n)를 가집니다.

중간값의 중간값 알고리즈은 대략적인 중간값을 계산합니다. 30번째와 70번째 백분위수 사이에 있는 것이 보장됩니다. 따라서 검색 집합은 최소 30% 감소하게 됩니다. 문제는 원래 크기의 70%로 줄어듭니다.


- **원리**:
  1. 배열을 최대 5개의 요소를 가진 그룹으로 나눕니다.
  2. 재귀적으로 그룹의 실제 중앙값을 구합니다.
  3. 최종적인 중앙값을 사용하여 배열을 분할하고 정렬합니다.


- **시간 복잡도**:
  - 최악 시간 복잡도:
    - cn: 그룹 정렬과 분할, T(n/5): 중앙값 계산, T(7n/10): 분할하고 선택.
    - **T(n) ≤ cn + T(n/5) + T(7n/10)**.
    - **T(n) = O(n)**.
  - 최상 시간 복잡도: **O(n)**.
- **공간 복잡도**: **O(n)**.

```javascript
function quickSelection(arr, k, from = 0, to = arr.length - 1) {
    // k가 배열 범위를 벗어날 경우 에러 처리
    // if (k < 1 || k > to - from + 1) {
    //     throw new Error('k는 배열의 범위를 벗어났습니다.');
    // }

    function quickSelect(from, to, kSmallest) {
        if (from === to) {
            return arr[from]; // 범위가 한 요소일 때 반환
        }

        // 중간값의 중간값을 피벗으로 선택
        const pivotIndex = medianOfMedians(arr, from, to);

        // 피벗을 기준으로 분할
        const pivotFinalIndex = partition(arr, from, to, pivotIndex);

        if (kSmallest === pivotFinalIndex) {
            return arr[pivotFinalIndex]; // k번째 값과 피벗이 같으면 반환
        } else if (kSmallest < pivotFinalIndex) {
            return quickSelect(from, pivotFinalIndex - 1, kSmallest); // 왼쪽 탐색
        } else {
            return quickSelect(pivotFinalIndex + 1, to, kSmallest); // 오른쪽 탐색
        }
    }

    // k는 1-based이므로 0-based 인덱스로 변환
    return quickSelect(from, to, from + k - 1);
}

function partition(arr, from, to, pivotIndex) {
    const pivotValue = arr[pivotIndex];
    [arr[pivotIndex], arr[to]] = [arr[to], arr[pivotIndex]]; // 피벗을 끝으로 이동
    let i = from - 1;

    for (let j = from; j < to; j++) {
        if (arr[j] < pivotValue) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[to]] = [arr[to], arr[i + 1]]; // 피벗을 제자리로 이동
    return i + 1; // 피벗의 최종 위치 반환
}

function medianOfMedians(arr, from, to) {
    const size = to - from + 1;

    // 그룹으로 나누고 각 그룹의 중간값 계산
    const medians = [];
    for (let i = from; i <= to; i += 5) {
        const group = arr.slice(i, Math.min(i + 5, to + 1));
        group.sort((a, b) => a - b); // 그룹 정렬
        medians.push(group[Math.floor(group.length / 2)]);
    }

    // 중간값 배열이 하나일 경우 그 중간값 반환
    if (medians.length === 1) {
        return from + arr.indexOf(medians[0]); // 원래 배열의 인덱스 반환
    }

    // 중간값 배열에서 중간값을 재귀적으로 찾음
    const mid = Math.floor(medians.length / 2);
    return medianOfMedians(medians, 0, medians.length - 1);
}
```


## 3의 중간값 방법 (Median of Three)

퀵 정렬에서 피벗을 선택하는 방법 중 하나로 3개의 요소 중 중간값을 선택하는 방법입니다. 이 방법은 피벗을 선택하는 데 있어서 최악의 경우 시간 복잡도를 줄일 수 있습니다.

- **원리**:
  1. 배열의 첫 번째, 중간, 마지막 요소를 비교하여 중간값을 피벗으로 선택합니다.
  2. 중앙값들을 모아 집합을 만듭니다.
  3. 집합의 중앙값을 피벗으로 선택합니다.
  4. 이 방법을 재귀적으로 반복하고 피벗을 선택합니다.
  5. 선택된 피벗을 사용하여 quicksort를 수행합니다.
- **시간 복잡도**:
  - 최악 시간 복잡도: **O(n log n)**.
  - 반복 알고리즘(Repeat algorithm)을 사용하는 경우:
    - T(n/9): 부분 배열에서 중간값을 찾는 시간, T(7n/9): 피벗을 기준으로 큰 부분 배열에 대해 재귀적으로 선택 문제를 해결, O(n): 배열을 그룹화하고 중간값을 계산하며 분할
    - **T(n) ≤ T(n/9) + T(7n/9) + O(n)**.
    - **T(n) = O(n)**.
- **공간 복잡도**: **O(log n)**.

```javascript
function quickSelection(arr, k, from = 0, to = arr.length - 1) {
    // k가 배열 범위를 벗어날 경우 에러 처리
    // if (k < 1 || k > to - from + 1) {
    //     throw new Error('k는 배열의 범위를 벗어났습니다.');
    // }

    function quickSelect(from, to, kSmallest) {
        if (from === to) {
            return arr[from]; // 범위가 한 요소일 때 반환
        }

        // 3의 중간값으로 피벗 선택
        const pivotIndex = medianOfThree(arr, from, to);

        // 피벗을 기준으로 분할
        const pivotFinalIndex = partition(arr, from, to, pivotIndex);

        if (kSmallest === pivotFinalIndex) {
            return arr[pivotFinalIndex]; // k번째 값과 피벗이 같으면 반환
        } else if (kSmallest < pivotFinalIndex) {
            return quickSelect(from, pivotFinalIndex - 1, kSmallest); // 왼쪽 탐색
        } else {
            return quickSelect(pivotFinalIndex + 1, to, kSmallest); // 오른쪽 탐색
        }
    }

    // k는 1-based이므로 0-based 인덱스로 변환
    return quickSelect(from, to, from + k - 1);
}

function partition(arr, from, to, pivotIndex) {
    const pivotValue = arr[pivotIndex];
    [arr[pivotIndex], arr[to]] = [arr[to], arr[pivotIndex]]; // 피벗을 끝으로 이동
    let i = from - 1;

    for (let j = from; j < to; j++) {
        if (arr[j] < pivotValue) {
            i++;
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    [arr[i + 1], arr[to]] = [arr[to], arr[i + 1]]; // 피벗을 제자리로 이동
    return i + 1; // 피벗의 최종 위치 반환
}

// 3개의 값 중 중간값을 찾는 함수
function medianOfThree(arr, from, to) {
    const mid = Math.floor((from + to) / 2);

    const a = arr[from];
    const b = arr[mid];
    const c = arr[to];

    // 3개의 값 중 중간값의 인덱스를 반환
    if ((a < b && b < c) || (c < b && b < a)) {
        return mid;
    } else if ((b < a && a < c) || (c < a && a < b)) {
        return from;
    } else {
        return to;
    }
}
```
