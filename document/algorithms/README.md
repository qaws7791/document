# Algorithm





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

- Int -> String
  - `String(n)`
- String -> Int
  - `Number(s)`
  - `parseInt(s)`
  - `+s`



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

`\r`: Carriage Return

`\n`: Line Feed

줄바꿈에는 `\n`, `\n\r`, `\r`,`\r\n`이 사용 될 수 있다

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

하지만 아래와 같이 answer+= 구문에 추가적인 연산이 필요하기  때문에 조심해야 한다

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



## 유용한 함수

repeat: 문자열 반복

```javascript
console.log("*".repeat(5)) // *****
```
