## 등차수열의 합

1부터 n까지의 합

```
n * (n + 1) / 2
```



## 피보나치 수

- 반복문이 재귀보다 더 빠름

```javascript
function fibonacci(n) {
  return n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2);
}
```

```javascript
function fibonacci2(n) {
  let a = 1,
    b = 0,
    temp;

  while (n >= 0) {
    temp = a;
    a = a + b;
    b = temp;
    n--;
  }

  return b;
}
```



## 팩토리얼

- 반복문이 재귀보다 더 빠름

```javascript
function factorial(n) {
  return n <= 1 ? 1 : n * factorial(n - 1);
}
```

```javascript
function factorial2(n) {
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
}
```





## 순열 (permutation)

```javascript
permutation("abc")
// [ 'abc', 'acb', 'bac', 'bca', 'cab', 'cba' ]
```

```javascript
function permutation(str) {
  if (str.length === 0) return [""];
  const result = [];
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    const remaining = str.slice(0, i) + str.slice(i + 1);
    const perms = permutation(remaining);
    perms.forEach((perm) => {
      result.push(current + perm);
    });
  }
  return result;
}
```





## 슬라이드 윈도우 - 선형

```javascript
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
    
  // 첫 번째 윈도우의 합
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
    
  // 윈도우를 한 칸씩 뒤로 이동 => 뒤에꺼 추가 + 앞에꺼 제거
  for (let i = num; i < arr.length; i++) {
    tempSum += arr[i] - arr[i - num]
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
```





# 집합 공식







# 백트래킹



- arr 배열에서 요소들의 합이 target이 되는 요소들의 조합을 모두 반환하는 함수

```javascript
function solution(arr, target) {
  const result = [];
  const check = (index, sum, path) => {
    if (sum === target) {
      result.push(path);
      return;
    }
    if (index >= arr.length) {
      return;
    }
    check(index + 1, sum + arr[index], [...path, arr[index]]);
    check(index + 1, sum, path);
  };
  check(0, 0, []);
  return result;
}
```

