# 배열 생성

## 배열 리터럴

```javascript
var evens = [2, 4, 6, 8];
```

## Array 생성자

```javascript
var evens = new Array(2, 4, 6, 8);
// [2, 4, 6, 8] 배열 요소 지정
var evens = new Array(4);
// [undefined, undefined, undefined, undefined] 배열 크기만 지정
```

## 배열 특징

- 길이나 요소의 자료형이 정해져 있지 않다. -> 밀집성을 보장하지 않는다
- 타입이 지정된 배열은 `typed array`를 사용하자

## length 프로퍼티 (배열 길이)

- 배열에서 가장 큰 인덱스보다 1 큰 값
- 실제 배열의 원소
- 임의로 늘려도 요소에 변화는 없다.
- 임의로 줄이면 요소가 지워진다.

```javascript
evens.length; // 4
var arr = [];
console.log(arr.length); // 0
arr[0] = 0;
arr[1] = 1;
console.log(arr.length); // 2
arr[50] = 50; // 51인 이유 => arr[2]부터 arr[49]까지 undefined 할당
```

- 명시적으로 Array.length를 변경하면 앞에서 부터 잘림

```javascript
arr.length = 2;
console.log(arr); // [0, 1]
```

## 프로퍼티 추가하기

- 배열도 객체이므로 프로퍼티를 동적으로 생성이 가능하다.
- 배열 원소는 아니므로 length에는 영향을 미치지 않는다

```javascript
arr.name = "array";
console.log(arr.name); // array
```

## 배열 요소 접근하기

```javascript
evens[2] // 6
evens["2"] // 6
```

## 요소 추가하기

- `push` 메서드 사용 -> 배열의 마지막에 추가
- `unshift` 메서드 사용 -> 배열의 처음에 추가

```javascript
var a = ["B", "C","D"];
a.push("E");
a.unshift("A")
console.log(a); // ["A", "B", "C", "D", "E"]
```

## 요소 삭제하기

- `delete` 연산자 사용
- 삭제된 자리에는 undefined
- `pop()` 메서드 사용 -> 배열 마지막 요소 삭제
- `shift()` 메서드 사용 -> 배열 처음 요소 삭제
- `splice()` 사용 -> 원래 배열의 삭제된 자리는 사라짐,요소가 삭제된 배열이 반환

```javascript
var a = ["A", "B", "C","D","E"];
delete a[1]; // ["A", undefined, "C", "D", "E"]
a.pop(); // ["A", undefined, "C", "D"]
a.shift(); // [undefined, "C", "D"]
a.splice(0,1); // ["C", "D"]
```

## 배열 복사하기

```javascript
arr = [1.2,3]
copiedArr = [...arr]
```

# 정적 메서드

## Array.from() - 얕은 복사로 배열 생성

- 유사 배열 객체나 반복 가능한 객체에서 얕은 복사를 통해 새로운 Array 생성

```javascript
  Array.from(arrayLike[, mapFn[, thisArg]])
```

```javascript
console.log(Array.from([1, 2, 3], x => x * 2)); // [2, 4, 6]
console.log(Array.from([1, 2, 3], x => x * 3)); // [3, 6, 9]
```



## Array.isArray() - Array인지 확인

- `Array`이면 `true`를, 아니면 false를 반환

```javascript
   Array.isArray([1, 2, 3]); // true
   Array.isArray('foo');   // false
```



## Array.of() - Array 인스턴스 생성

- Array() 처럼 `Array`를 생성하지만, 정수가 들어올 경우 정수가 요소인 배열을 생성

```javascript
  Array.of(element0[, element1[, ...[, elementN]]])
```



```javascript
Array.of(5); // [5]
Array.of(1,2,3,4) // [1,2,3,4]
Array(5); // [,,,,]
Array(1,2,3,4) // [1,2,3,4]
```



# 인스턴스 메서드

## Array.at() - 인덱스로 요소 찾아 반환

- 정수 값을 입력으로 받아, 해당 값에 해당하는 인덱스의 요소를 반환

```javascript
at(index)
```

```javascript
const arr = [10,20,30,40];
console.log(arr.at(2)) // 30
console.log(arr.at(-1)) // 40
```



## Array.concat() - 배열을 합쳐 새로운 배열 반환

- 둘 이상의 배열을 합쳐 새로운 배열을 반환
- 기존 배열을 변경하지 않는다.

```javascript
concat(value0, value1, /* … ,*/ valueN)
```

```javascript
const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// ["a", "b", "c", "d", "e", "f"]
```



## Array.entries() - Iterator 생성

- 배열의 각 인덱스에 대한 키/값 쌍을 가지는 `iterator` 객체를 생성하여 반환

```javascript
entries()
```

```javascript
const array1 = ['a', 'b', 'c'];

const iterator1 = array1.entries(); // [object Array Iterator]
console.log(iterator1.next().value) // [0, "a"]
```

```javascript
for (const [index, element] of array1.entries()) {
  console.log(index, element);
}
// 0 'a'
// 1 'b'
// 2 'c'
```

```javascript
for (const element of arrayEntries) {
  console.log(element);
}
```



## Array.every() - 배열의 모든 요소가 참인지 확인

- 배열 안의 모든 요소가 주어진 함수에 대해 true이면 true를 반환

```javascript
every((element, index, array) => { ... } )
```

```javascript
arr = [0,1,2,3,4]
console.log(arr.every((element) => element < 5)) //true
```



## Array.fill() - 단일 값으로 배열 채우기

- 배열의 시작 인덱스에서 끝 인덱스의 이전까지 정적인 값 하나로 채운다.
- 원본 배열이 변경되고, 반환되는 값도 변경된 배열이다.

```javascript
   arr.fill(value[, start[, end]])
```

```javascript
arr = [1,2,3,4]

console.log(arr.fill(0)) // [0,0,0,0]
console.log(arr) // [0,0,0,0]
console.log(arr.fill(1,2,4)) // [0, 0, 1, 1]
```



## Array.filter() - 요소를 거르기

- 인자로 받는 함수의 반환 값이 `true`인 요소 만을 모아 새로운 **얕은 복사 배열**을 만들어 반환

```javascript
Array.filter((element, index, array) => { /* … */ })
```

```javascript
const words = [
    "spray",
    "limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
];
const result = words.filter((word) => word[0] === "e");
console.log(result); [ "elite", "exuberant"]
```



## Array.find() - 조건을 만족하는 단일 요소의 값 찾기

- 배열에서 테스팅 함수를 만족하는 **첫 번째 요소**를 찾아  **요소의 값**을 반환
- 요소를 찾을 수 없다면 `undefined`를 반환

```javascript
Array.find((element, index, array) => { /* … */ })
```

```javascript
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element >100);

console.log(found); // 130
```

### 

## Array.findIndex() - 조건을 만족하는 단일 요소의 인덱스 찾기

- 배열에서 테스팅 함수를 만족하는 첫 번째 요소를 찾아 **요소의 인덱스**를 반환.
- 찾는 요소가 없는 경우 -1을 반환

```javascript
Array.findIndex((element, index, array) => { /* … */ })
```

```javascript
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber)); // 3
```



## Array.flat() - 배열 평탄화

- 모든 하위 배열 요소를 지정한 깊이까지 재귀적으로 이어붙인 새로운 배열 반환
- `depth`의 기본 값은 1이다.
- 요소 값이 빈 곳은 알아서 삭제한다.

```javascript
const newArr = arr.flat([depth])
```

```javascript
arr = [[1,2,3],[4,5,6],[7,8,9]]

console.log(arr.flat(1)) // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

```javascript
arr = [[1,2,3],[4,,]]

console.log(arr.flat(1)) // [1, 2, 3, 4]
```



## Array.forEach() - 함수를 배열의 각 요소에 실행

- 주어진 함수를 배열의 각 요소에 대해 실행
- 반환 값은 항상 `undefind`이다.

```javascript
Array.forEach((element, index, array) => { /* … */ })
```

```javascript
arr = [1,2,3]

arr.forEach((element,index) => console.log(index,element))
// 0 1
// 1 2
// 2 3
```



## Array.includes() - 배열의 요소 포함 여부 확인

- 배열의 요소 중에서 주어진 값과 일치하는 요소가 있으면 true를 반환, 그렇지 않으면 false 반환


```javascript
arr.includes(valueToFind[, fromIndex])
```

```javascript
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // true
```



## Array.indexOf() - 특정 요소의 인덱스 찾기

- 배열에서 주어진 값과 일치하는 첫 번째 요소를 찾아 **요소의 인덱스**를 반환
- 존재하지 않으면 -1 반환

```javascript
Array.indexOf(searchElement, fromIndex)
```

```javascript
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
```





## Array.join() - 모든 요소를 붙여 문자열로 반환

- 배열 또는 유사 배열 객체에서 모든 요소들을 이어 붙여 새로운 문자열로 반환한다.


commas 또는 특정 문자를 구분자로 사용한다

> 요소가 하나인 배열은 구분자 없이 반환된다.
>
> 요소가 없는(배열길이 0) 배열은 빈 문자열이 반환된다.

```javascript
   arr.join([separator])
```

```javascript
arr.join() // 쉼표로 구분하기
arr.join("") // 구분자 없이 이어 붙이기
arr.join("/") // /를 구분자로 사용하기
```

- 빈 요소는 `underfined`와 동일하게 처리되고, 똑같이 구분자를 생성한다.

```javascript
[1, , 3].join() // "1,,3"
[1, undefined, 3].join() // "1,,3"
```

- 배열이 아닌 논 배열 객체라도 `length` 프로퍼티가 있다면 
  이를 통해 각각의 인덱스에 접근하여 `join()`을 사용할 수 있다.

```javascript
const arrayLike1 = { 0: 0, 1: 1, 2: 2 };
const arrayLike2 = { length: 3};
const arrayLike3 = { length: 3, 0: 0, 1: 1, 2: 2 };
console.log(Array.join.call(arrayLike1)); // 
console.log(Array.join.call(arrayLike2)); // ,,
console.log(Array.join.call(arrayLike3)); // 0,1,2
```



## Array.keys() -  배열의 인덱스 iterrator 반환

- 배열의 각 인덱스 Iterator를 반환

```javascript
arr.keys()
```

```javascript
const arr = ['a', 'b', 'c'];

for (const key of arr.keys()) {
  console.log(key, arr[key]);
}
// 0 "a"
// 1 "b"
// 2 "c"
```



## Array.lastIndexOf() - 배열의 특정 값을 가진 마지막 요소 인덱스 반환

- 배열에서 주어진 값을 가지는 요소 중 마지막 요소의 인덱스를 반환
- 요소가 존재하지 않으면 -1을 반환
- 탐색은 역순으로 이루어 진다. 
  즉 맨 뒤에서 부터 검사하여 주어진 값을 가진 요소가 처음 나올 때 그 인덱스를 반환한다.
- fromIndex의 기본 값은 `array.length-1`이다.

```javascript
arr.lastIndexOf(searchElement[, fromIndex])
```

```javascript
var array = [2, 5, 9, 2];
array.lastIndexOf(2);     // 3
array.lastIndexOf(7);     // -1
array.lastIndexOf(2, 3);  // [2, 5, 9, 2]에서 탐색 -> 3
array.lastIndexOf(2, 2);  // [2, 5, 9]에서 탐색 -> 0
array.lastIndexOf(2, -2); // [2, 5, 9]에서 탐색 -> 0
array.lastIndexOf(2, -1); // [2, 5, 9, 2]에서 탐색 -> 3
```



## Array.map() - 함수 매핑하여 배열 만들기

- 함수를 인자로 받아 각각의 원소에 함수를 적용한 결과를 **새로운 배열**로 만들어 반환


```javascript
Array.map((element, index, array) => { /* … */ })
```

```javascript
const arr = [1, 2, 3, 4, 5];
const square = arr.map((element) => element * element);
console.log(square); // 1 4 9 16 25
```



## Array.pop() - 배열 마지막 요소 꺼내오기

- 배열의 마지막 요소를 제거하고 그 요소를 반환
- 배열에서 제거한 요소를 반환하고, 빈 배열의 경우 `undefined`를 반환

```javascript
   arr.pop()
```

```javascript
var array = [1,2,3,4];
console.log(array.pop()) // 4
console.log(array) // [1,2,3]
```



## Array.push() - 배열의 마지막에 요소를 추가

- 배열의 마지막에 하나 이상의 요소를 추가하고, 바뀐 배열의 `length`를 반환
- 반환 값은 바뀐 배열의 길이이다.

```javascript
arr.push(element1[, ...[, elementN]])
```

```javascript
var array = [1,2,3,4];
console.log(array.push(5,6)) // 6
console.log(array) // [1, 2, 3, 4, 5, 6]
```



## Array.reduce() - 각 요소에 리듀서 함수 실행하여 단일 결과값 반환

- 리듀서 콜백 함수를 배열 요소 왼쪽에서 오른쪽 순서대로 실행하여 

- 각 단계의 반환 값을 뒤로 전달하여 최종 결과 값을 반환


```javascript
reduce((accumulator, currentValue, currentIndex, array) => { /* … */ }, initialValue)
```

```javascript
const arr = [1, 2, 3, 4, 5];
const sum = arr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0);

// accumulator + currentValue
// 		0 	   + 	1 => 1
// 		1 	   + 	2 => 3
// 		3 	   + 	3 => 6
// 		6 	   + 	4 => 10
// 		10 	   + 	5 => 15
console.log(sum); // 15
```



## Array.reduceRight() - 오른쪽에서 왼쪽으로 가는 reduce()

- 함수의 동작 방식은 같으며, 배열 요소를 가져오는 순서만 반대이다.



## Array.reverse() - 배열 순서 반전

- 배열의 순서를 뒤집어 원본 배열의 순서를 반대로 하고 원본 배열의 참조를 반환
- 원본 배열도 변경된다.

```javascript
a.reverse()
```

```javascript
var array = [1,2,3,4];
console.log(array.reverse()) // [4, 3, 2, 1]
console.log(array) // [4, 3, 2, 1]
```



## Array.shift() - 배열의 첫 요소를 꺼내오기

- 배열의 첫 번째 요소를 제거하고, 제거된 요소를 반환
- 배열의 요소가 제거되기 때문에, 배열의 길이도 변한다.
- 배열의 길이가 0이면 `undefined` 반환

```javascript
  arr.shift()
```

```javascript
var array = [1,2,3,4];
console.log(array.shift()) // 1
console.log(array) // [2, 3, 4]
```



## Array.slice() - 배열의 일부를 잘라 반환

- 인덱스를 기준으로 배열의 일부를 잘라서 새로운 배열을 반환
- 원본 배열은 바뀌지 않는다.

```javascript
slice(start, end)
```

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2,4)) // [3,4]
```



## Array.some() - 조건을 만족하는 요소가 하나라도 있는지

- 배열의 요소 중  한 요소라도 테스팅 함수를 통과하면 `true`를 반환 
- 그렇지 않으면 `false` 반환
- 원본 배열을 변경하지 않는다.

```javascript
some((element, index, array) => { /* … */ })
```

```javascript
const array = [1, 2, 3, 4, 5];

// 짝수를 확인하는 함수
const even = (element) => element % 2 === 0;

console.log(array.some(even)); // 배열에 짝수가 하나라도 존재하는지 확인
// true
```



## Array.sort() - 배열을 정렬

- 원본 배열을 정렬하여 반환
- 기본 정렬 순서는 문자열의 유니코드 코드 포인트를 따른다.
- 원래 배열이 변경된다.
- `compareFunction`이 제공되지 않으면 요소를 문자열로 변환하여 유니 코드 순서를 따른다.
  숫자도 문자열로 변경되기 때문에, 2보다 11이 먼저 온다.

```javascript
arr.sort([compareFunction])
```

```javascript
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

```javascript
// 숫자 타입 오름차순 정렬
arr.sort((a,b)=> a-b )
// 숫자 타입 내림차순 정렬
arr.sort((a,b)=> b-a)
```

```javascript
var array = [3,2,5,1,4];
console.log(array.sort()) // [1, 2, 3, 4, 5]
console.log(array) // [1, 2, 3, 4, 5]
```



## Array.splice() - 배열 요소 조작

- 배열의 요소를 더하거나 / 대체하거나 / 삭제한 다음 삭제된 요소의 배열을 반환
- 아무것도 제거되지 않았다면 빈 배열을 반환

```javascript
 array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

```javascript
const arr = ['a','b','d'];

arr.splice(2,0,"c") // add "c" -> ["a", "b", "c", "d"]

arr.splice(0,1,"A") // replace 'a' to "A" -> ["A", "b", "c", "d"]

arr.splice(3,1) // remove 'd' -> ["A", "b", "c"]

```



## Array.unshift() - 배열의 새로운 요소를 맨 앞에 추가

- 새로운 요소를 배열의 맨 앞에 추가하고, 바뀐 배열의 길이를 반환

```javascript
  arr.toLocaleString([locales[, options]]);
```

```javascript
const arr = [1, 2, 3];

console.log(arr.unshift(4, 5)); // 5
console.log(arr); // [4, 5, 1, 2, 3]
```









