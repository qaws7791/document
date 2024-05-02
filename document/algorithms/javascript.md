

### 값의 타입 확인하기

```javascript
typeof 123 === 'number'
typeof 'abcd' === 'string'
typeof {} === 'object'
typeof [] === 'object'
```







# String

### 문자열 치환하기

```javascript
'ABCD'.replaceAll('B','C') // 'ACCD'
```

```javascript
function replaceAll(str, find, replace) {
  return str.split(find).join(replace)
}
```



### 문자열을 배열로 변환

```javascript
"ABCD".split("") // [ 'A', 'B', 'C', 'D' ]
```



### 구분자로 문자열 나누기

```javascript
'A B C D'.split(' ') // ['A', 'B', 'C', 'D']
```

```javascript
"hello world".split(/\W+/) // ['hello', 'world']
```



### 대문자로 변환

```javascript
'a'.toUpperCase() // 'A'
```



### 소문자로 변환

```
'A'.toLowerCase() // 'a'
```



### 문자열 뒤집기

- 문자열이 한글이 포함되는 경우 for문이 가장 빠름, 영문인 경우 reduce()가 가장 빠름

```javascript
function reverseString(str) {
  return str.split("").reverse().join("")
}
```

```javascript
function reverseString2(str) {
  let reversed = ""
  for (let character of str) {
    reversed = character + reversed
  }
  return reversed
}
```

```javascript
function reverseString3(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "")
}
```



### 문자열의 시작 부분이 일치하는지 확인

```javascript
"ABCDEFG".startsWith("ABC") // true
```

```javascript
function startsWith(string, chars) {
  return string.slice(0, chars.length) === chars
}
```



### 문자열의 끝 부분이 일치하는지 확인

```javascript
"ABCDEFG".endsWith("EFG") // true
```

```javascript
function endsWith(str, target) {
  return str.slice(-target.length) === target
}
```



### 문자열에서 특정 문자의 출현 횟수 구하기

```javascript
"ABBBAAA".split("A").length - 1 // 4
```

```javascript
"ABBBAAA".match(new RegExp("A", "g")).length // 4
```



### 중복되는 문자가 있는지 확인하기

- 두 번째 방식(for 문 사용)이 더 빠름

```javascript
function areAllCharactersUnique(str) {
  return new Set(str).size === str.length
}

```

```javascript
function areAllCharactersUnique2(str) {
  const set = new Set()
  for (const char of str) {
    if (set.has(char)) {
      return false
    }
    set.add(char)
  }
  return true
}
```



### anagram - 두 문자열이 같은 문자들로 이루어졌는지 확인하기 

```javascript
validAnagrams("anagram", "nagaram") // true
```

```javascript
function validAnagrams(str1, str2) {
  if (str1.length !== str2.length) {
    return false
  }
  const lookup = new Map()
  for (const char of str1) {
    lookup.set(char, (lookup.get(char) || 0) + 1)
  }

  for (const char of str2) {
    if (!lookup.has(char) || lookup.get(char) === 0) {
      return false
    }
    lookup.set(char, lookup.get(char) - 1)
  }
  return true
}
```



## 정규식

### 영문만 필터링하기

```javascript
filterAlpha("abcd!@#$%^&*()_+1234567890") // 'abcd'
```

```javascript
function filterAlpha(str) {
  return str.replace(/[^a-zA-Z]/g, "")
}
```



# Array

### 값이 채워진 배열 생성

```javascript
new Array(4).fill(0) // [0, 0, 0, 0]
```



### 자연수 배열 만들기

```javascript
new Array(4).fill(0).map((v, i) => i + 1) // [1, 2, 3, 4]
Array.from({ length: 4 }, (_, i) => i + 1) // [1, 2, 3, 4]
[...Array(4)].map((_, i) => i + 1)
```



### Range 배열 만들기

- Array.from이 반복문보다  빠름

```javascript
function numberRange(start, end) {
  const range = []
  for (var i = start i <= end i++) {
    range.push(i)
  }
  return range
}
```

```javascript
function numberRange2(start, end) {
  return Array.from({ length: end - start + 1 }, (_, i) => i + start)
}
```



### 배열채우기

- `수정된 배열 반환`

```javascript
[0, 0, 0, 0].fill(1, 1, 3) // [0, 1, 1, 0]
```



### 배열의 마지막에 요소 추가

- `배열의 새로운 길이 반환`

```javascript
['one', 'two', 'three'].push('four') // 4
```



### 배열의 맨 앞에 요소 추가

```javascript
['one', 'two', 'three'].unshift('zero') // 4
```



### 배열의 마지막 요소 꺼내기

```javascript
['one', 'two', 'three'].pop() // 'three'
```



### 배열의 첫 번째 요소 꺼내기

- `배열의 길이 감소`

```javascript
['one', 'two', 'three'].shift() // 'one'
[].shift() // undefined
```



### 배열의 모든 원소의 합 구하기

```javascript
function sumOfArray(array) {
	return array.reduce((acc,cur) => acc+cur)
}
```



### 배열 정렬하기

```javascript
array.sort() // 오름차순 정렬
array.sort((a,b) => b - a) // 내림차순 정렬
```



### 배열 뒤집기

- `원본 변형` , `참조 반환`

```javascript
['one', 'two', 'three'].reverse() // [ 'three', 'two', 'one' ]
```



### 배열 자르기

- `얕은 복사본` `slice(start, end)` `start인덱스부터 end-start길이 만큼 자르기`

```javascript
['one', 'two', 'three'].slice(1) // ['two', 'three']
['one', 'two', 'three'].slice(1,2) // ['two']
```



### 배열 평탄화

```javascript
function flattenArray2(arr) {
  const result = []
  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray2(item))
    } else {
      result.push(item)
    }
  })
  return result
}
```





### 요소의 인덱스 찾기

```javascript
[1,2,3].indexOf(2) // 1
[1,2,3].indexOf(4) // -1
```



### 중복 제거하기

```javascript
removeDuplicates([1, 2, 2, 3, 4]) // [ 1, 2, 3, 4]
```

```javascript
function removeDuplicates(arr) {
  return Array.from(new Set(arr))
}
```



### 두 배열의 공통 원소 찾기

- Intersection
- `arr1.filter((elem) => arr2.includes(elem))` 방식보다 빠름

```javascript
function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  const intersection = new Set()
  for (const elem of set1) {
    if (set2.has(elem)) {
      intersection.add(elem)
    }
  }
  return Array.from(intersection)
}
```



### 조건을 만족하는 요소 찾기

```javascript
[1, 2, 3].find((x) => x === 2) // 2
[1, 2, 3].find((x) => x === 4) // undefined
```



### 조건을 만족하는 요소의 인덱스 찾기

```javascript
[1, 2, 3].findIndex((x) => x === 2) // 1
[1, 2, 3].findIndex((x) => x === 4) // undefined
```



### 배열에서 특정 값이 포함되어 있는지 확인하기

```javascript
['one', 'two', 'three'].includes('one') // true
```



### 배열의 모든 요소가 조건을 만족하는지 확인하기

```javascript
[1, 2, 3, 4].every((value, index) => value === index + 1) // true
```



# Number

### 정수 부분 가져오기

```javascript
function getInt(number) {
	return parseInt(number)
}
```



# Date

'2024.01.01' 형태의 문자열 파싱하기

```javascript
function parseDate(date) {
	return date.split('.').map(Number)
}
```



# Math

### 절댓값 만들기

```javascript
Math.abs(-1) // 1
```

```javascript
function abs(x) {
    if (x >= 0) {
        return x
    } else {
        return -x
    }
}
```



### 소숫점 올림

```javascript
Math.ceil(1.5) // 2
```

```javascript
function ceil(x) {
  return x % 1 === 0 ? x : x + 1 - (x % 1)
}
```



### 소숫점 버림

```javascript
Math.floor(1.5) // 1
```

```javascript
function floor(x) {
  return x - (x % 1)
}
```



### 최댓값

```javascript
Math.max(1, 2, 3, 4) // 4
```

```javascript
function max(...numbers) {
  return numbers.reduce((large, number) => (large > number ? large : number))
}
```



### 최솟값

```javascript
Math.min(1, 2, 3, 4) // 1
```

```javascript
function min(...numbers) {
  return numbers.reduce((min, number) => (number < min ? number : min))
}
```



### x의 y제곱

```javascript
Math.pow(2, 10) // 1024
```



### 반올림

```javascript
Math.round(0.9) // 1
Math.round(0.4) // 0
```

```javascript
function round(value) {
  return (value + 0.5) | 0
}
```



### 제곱근

```javascript
Math.sqrt(9) // 3
```

```javascript
function sqrt(value) {
  return value ** 0.5
}
```





# 객체

### 객체의 키 값들을 배열로 변환

```javascript
Object.keys({ a: 1, b: 2 }) // [ 'a', 'b' ]
```

```javascript
function keys(obj) {
  const tempKeys = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      tempKeys.push(key)
    }
  }
  return tempKeys
}
```



### 객체의 값들을 배열로 변환

```javascript
Object.values({ a: 1, b: 2 }) // [ 1, 2 ]
```

```javascript
function values(obj) {
  const tempValues = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      tempValues.push(obj[key])
    }
  }
  return tempValues
}
```



### 객체의 키,값 쌍을 배열로 변환

```javascript
Object.entries({ a: 1, b: 2 }) // [ [ 'a', 1 ], [ 'b', 2 ] ]
```

```javascript
function entries(obj) {
  const tempEntries = []
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      tempEntries.push([key, obj[key]])
    }
  }
  return tempEntries
}
```





## Map 객체

### 배열로 변환

```javascript
[...map.values()]
```

```javascript
Array.from(map.values())
```



### 카운터

> [!TIP]
>
> Map을 사용하는 것이 훨씬 빠름

```javascript
wordCounter("Hello world!") // 5ms
wordCounter2("Hello world!") // 0.1ms
```

```javascript
function wordCounter(str) {
  const words = str.toLowerCase().split(/\W+/)

  const wordCount = words.reduce((acc, word) => {
    if (acc[word]) {
      acc[word]++
    } else {
      acc[word] = 1
    }
    return acc
  }, {})

  return wordCount
}
```

```javascript
function wordCounter2(str) {
  const words = str.toLowerCase().split(/\W+/)
  const map = new Map()
  words.forEach((word) => {
    if (map.has(word)) {
      map.set(word, map.get(word) + 1)
    } else {
      map.set(word, 1)
    }
  })

  return Object.fromEntries(map.entries())
}
```



## Set 객체

### 배열로 초기화

```javascript
new Set([1, 2, 3, 4, 5])
```



### 배열로 변환

```javascript
[...set] // [ 1, 2, 3, 4, 5 ]
```

