# 무차별 대입 검색 (Brute Force Search)


## 무차별 대입 검색이란?

무차별 대입 검색(Brute Force Search)은 가능한 모든 경우의 수를 탐색하여 문제를 해결하는 가장 단순하고 직관적인 알고리즘 방법입니다.

이 방법은 문제 해결을 보장하지만, 효율적이지 않을 수 있습니다. 특히 입력 크기가 커지면 계산량이 급격히 증가하므로 비효율적입니다.


### 특징

1. **단순함**:
   - 모든 가능한 조합을 하나씩 시도하며 해결.
   - 설계와 구현이 직관적.
2. **완전 탐색**:
   - 최적해를 반드시 찾아냄.
3. **비효율성**:
   - 입력 크기가 커지면 시간 복잡도가 기하급수적으로 증가.
4. **시간 복잡도**:
   - 일반적으로 **O(n!)**, **O(2^n)**, 또는 **O(n^2)** 등의 높은 복잡도를 가짐.

### 무차별 대입 검색의 장단점


#### 장점

1. 구현 간단
   - 복잡한 알고리즘 설계 없이 바로 작성 가능.

2. 정확성 보장
   - 모든 경우를 탐색하므로 최적해를 항상 찾을 수 있음.

3. 적용 범위 넓음
   - 문제에 대한 제약 조건이 적을 때 유


#### 단점

1. 비효율성
   - 입력 크기가 커질수록 계산량이 폭발적으로 증가.

2. 실행 시간 길어짐
   - 실시간 응답이 필요한 문제에는 적합하지 않음.


### 활용 사례

1. **문자열 검색**:
   - 문자열에서 특정 패턴을 찾는 경우.
2. **조합/순열 문제**:
   - 가능한 모든 조합이나 순열을 생성하여 탐색.
3. **최적화 문제**:
   - 가능한 모든 해결책을 계산 후 최적값을 선택.


## 예제 1: 문자열 검색

문자열에서 특정 패턴을 찾기 위해 무차별 대입 검색을 사용하는 경우입니다.

- 모든 위치에서 패턴이 일치하는지 검사.
- 시간 복잡도: **O(n \* m)** (n: 텍스트 길이, m: 패턴 길이)

```javascript
function bruteForceSearch(text, pattern) {
  const textLength = text.length;
  const patternLength = pattern.length;

  for (let i = 0; i <= textLength - patternLength; i++) {
    let match = true;

    for (let j = 0; j < patternLength; j++) {
      if (text[i + j] !== pattern[j]) {
        match = false;
        break;
      }
    }

    if (match) {
      return i; // 패턴이 시작되는 인덱스 반환
    }
  }

  return -1; // 패턴을 찾지 못한 경우
}

console.log(bruteForceSearch("abcdef", "def")); // 출력: 3
console.log(bruteForceSearch("abcdef", "xyz")); // 출력: -1
```


## 예제 2: 배열의 두 숫자로 목표 합 찾기

주어진 배열에서 두 숫자의 합이 목표 값(target)이 되는 쌍을 찾는 문제.

- 모든 쌍을 탐색하여 합이 목표 값이 되는지 확인.
- **시간 복잡도**: O(n^2)

```javascript
function findPairBruteForce(arr, target) {
  const n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]]; // 쌍 반환
      }
    }
  }

  return null; // 쌍을 찾지 못한 경우
}

console.log(findPairBruteForce([1, 2, 3, 4, 5], 6)); // 출력: [1, 5]
console.log(findPairBruteForce([1, 2, 3, 4, 5], 10)); // 출력: null
```


## 예제 3: 모든 부분 집합 생성

배열의 모든 부분 집합을 생성하는 문제.

- 비트 연산을 활용하여 모든 조합을 생성.
- **시간 복잡도**: O(2^n)

```javascript
function generateSubsetsBruteForce(arr) {
  const subsets = [];
  const n = arr.length;

  for (let i = 0; i < (1 << n); i++) { // 2^n개의 부분 집합 탐색
    const subset = [];

    for (let j = 0; j < n; j++) {
      if (i & (1 << j)) { // i의 j번째 비트가 1이면 포함
        subset.push(arr[j]);
      }
    }

    subsets.push(subset);
  }

  return subsets;
}

console.log(generateSubsetsBruteForce([1, 2, 3]));
// 출력: [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3
```




## 예제 4: 세일즈맨 문제 (Travelling Salesman Problem, TSP)

모든 도시를 방문하고 시작점으로 돌아오는 최소 비용 경로를 찾는 문제.

- 모든 순열을 생성하여 경로 비용을 계산.
- **시간 복잡도**: O(n!)

```javascript
function travellingSalesmanBruteForce(graph, start) {
  const cities = graph.length;
  const permutations = [];
  const visited = Array(cities).fill(false);

  function generatePermutations(current, path) {
    if (path.length === cities - 1) {
      permutations.push([...path, start]); // 시작점으로 돌아옴
      return;
    }

    for (let i = 0; i < cities; i++) {
      if (!visited[i] && i !== start) {
        visited[i] = true;
        path.push(i);
        generatePermutations(current, path);
        path.pop();
        visited[i] = false;
      }
    }
  }

  generatePermutations(start, []);

  let minCost = Infinity;
  for (const perm of permutations) {
    let cost = 0;
    let prev = start;

    for (const city of perm) {
      cost += graph[prev][city];
      prev = city;
    }
    cost += graph[prev][start]; // 돌아오는 비용 추가
    minCost = Math.min(minCost, cost);
  }

  return minCost;
}

const graph = [
  [0, 10, 15, 20],
  [10, 0, 35, 25],
  [15, 35, 0, 30],
  [20, 25, 30, 0],
];

console.log(travellingSalesmanBruteForce(graph, 0)); // 출력최소 비용
```
