# 알고리즘 개요

## 사칙연산

```javascript
a+b
a-b
a*b
parseInt(a/b)
a%b
```

### 조건문

```javascript
if (조건1)
  실행코드1
else if (조건2)
  실행코드2
else 
  실행코드3


```

## 반복문

```javascript
for(초기문; 조건문; 증감문) {
  실행코드
}
```

```javascript
while (조건문) {
  실행코드
}
```

## 형태 변환

* Int -> String
  * `String(n)`
* String -> Int
  * `Number(s)`
  * `parseInt(s)`
  * `+s`

## 숫자 변환

반올림

```javascript
// 소수점 아래 두번째 자리까지 출력
const num = 123.456
console.log(num.toFixed(2))
```

## 배열

### 배열 초기화

```javascript
//길이가 10이고 모든 원소가 0인 배열 
const arr = new Array(10).fill(0)
```

### 2차원 배열 만들기

```javascript
const array2d = (n) => Array.from(Array(n), () => new Array(n))
```

## Set 자료형

원소의 등장 여부 파악

```javascript
const set = new Set()

set.add(1)
set.add(2)
set.add(3)
set.add(1)

console.log(set.size) // 3
console.log(set.has(4)) // false

set.delete(1)

for (const item of set) console.log(item)
```

## 입출력

### 파일 입력받기

: Carriage Return

: Line Feed

줄바꿈에는 , `\n`, ,`\r`이 사용 될 수 있다

```javascript
// const fs = require('fs')
import fs from 'fs'
const input = fs.readFileSync('test.txt', 'utf8').toString().split('\r\n')

console.log(input)
```

### 백준 입력받기

```javascript
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const n = Number(input[0])
```

```bash
입력값
4 6 7
```

```javascript
const fs = require('fs')
const input = fs.readFileSync('/dev/stdin').toString().split('\n')
const [a,b,c] = input.split(' ').map(Number)
```

### 터미널에서 입력받기

```javascript
// const readline = require('node:readline');
// const { stdin: input, stdout: output } = require('node:process');
import * as readline from 'node:readline/promises'
import { stdin as input, stdout as output } from 'node:process'

const rl = readline.createInterface({ input, output })

const input = []
rl.on('line', (input) => {
  console.log(`Received: ${input}`)
  input.push(input)
}).on('close', () => {
  console.log('Input', input)
  process.exit(0)
})

```

### 출력 시간 단축하기

때로는 출력을 한 번에 하는 것이 더 빠를 수도 있다

하지만 아래와 같이 answer+= 구문에 추가적인 연산이 필요하기 때문에 조심해야 한다

```javascript
for(let i = 0; i < 100; i++) {
 console.log(i)
}
```

```javascript
// 문자열 이용. 시간은 배열에 비해 느리지만 메모리를 덜 사용
let answer = '';
for(let i = 0; i < 100; i++) {
 answer+= i + '\n'
}
console.log(answer)
```

```javascript
// 배열 이용. 메모리는 더 사용하지만 시간은 빠름
const answer = [];
for(let i = 0; i < 100; i++) {
 answer.push(i)
}
console.log(answer.join('\n'))
```

## Big-O 표기법(점근 표기법)

입력이 커짐에 따라 알고리즘의 실행 시간(시간 복잡도)과 메모리 사용량(공간 복잡도)이 얼마나 빠르게 증가하는지를 표현

* O(1) : 상수 - 리소스가 n과 독립적으로 증가한다
* O(log(n)) : 로그 - 이진 검색과 같이 느리게 증가한다
* O(n) : 선형 - 선형 검색과 같이 입력 횟수와 동일한 비율로 증가한다
* O(n \* log(n)) : 선형 - 우선순위 큐와 같이 증가한다
* O(n^2) : 제곱 - 리소스가 많아질 경우 복잡도가 빠르게 증가하여 관리하기 힘들어진다
* O(2^n) : 지수 - 지수적 증가는 n이 조금만 높아져도 매우 큰 값을 가지게 되므로 유의해야 한다

### 배열과 연결 리스트이 Big-O 비교

|           | 앞부분 삽입 | 뒤로 삽입  | 가운데 삽입 | 삭제             | 찾다     |
| --------- | ------ | ------ | ------ | -------------- | ------ |
| 정렬        | `O(n)` | `O(1)` | `O(n)` | `O(1) or O(n)` | `O(n)` |
| 단일 연결 리스트 | `O(1)` | `O(n)` | `O(n)` | `O(n)`         | `O(n)` |
| 이중 연결 리스트 | `O(1)` | `O(1)` | `O(n)` | `O(1) or O(n)` | `O(n)` |

## 유용한 함수

repeat: 문자열 반복

```javascript
console.log("*".repeat(5)) // *****
```

## 팁

* 배열에서 읽기 대 쓰기 비율이 높은 경우(읽기가 많은 경우) 정렬된 배열을 사용하여 검색 속도를 높일 수 있다
