# 배열

## 배열 리터럴로 배열 생성

### 배열 리터럴

```js
var evens = [2, 4, 6, 8];
```

### Array 생성자

```js
var evens = new Array(2, 4, 6, 8);
// [2, 4, 6, 8] 배열 요소 지정
var evens = new Array(4);
// [undefined, undefined, undefined, undefined] 배열 크기만 지정
```

## 배열 특징

### length 프로퍼티

- 배열에서 가장 큰 인덱스보다 1 큰 값
- 실제 배열의 원소

```js
evens.length; // 4
var arr = [];
console.log(arr.length); // 0
arr[0] = 0;
arr[1] = 1;
console.log(arr.length); // 2
arr[50] = 50; // 51인 이유 => arr[2]부터 arr[49]까지 undefined 할당
```

- 명시적으로 Array.length를 변경하면 앞에서 부터 잘림

```js
arr.length = 2;
console.log(arr); // [0, 1]
```

### 배열에 프로퍼티 추가

- 배열도 객체이므로 프로퍼티를 동적으로 생성이 가능하다.
- 배열 원소는 아니므로 length에는 영향을 미치지 않는다

```js
arr.name = "array";
console.log(arr.name); // array
```

### 배열 참조

```
evens[2] // 6
evens["2"] // 6
```

### 배열 요소 추가

- `push` 메서드 사용

```js
var a = ["A", "B", "C"];
a.push("D");
console.log(a); // ["A", "B", "C", "D"]
```

### 배열 요소 삭제

- `delete` 연산자 사용
- 삭제된 자리에는 undefined

```js
delete a[1];
console.log(a); // ["A", undefined, "C", "D"]
```

- splice() 사용
- 삭제된 자리는 사라짐

```js
a.splice(0, 1);
console.log(a); // [undefined, "C", "D"]
```



## 배열 함수

### concat()

둘 이상의 배열을 합쳐 새로운 배열을 반환

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



### join()

배열 또는 유사 배열 객체에서 모든 요소들을 이어 붙여 새로운 문자열로 반환한다.

commas 또는 특정 문자를 구분자로 사용한다

> 요소가 하나인 배열은 구분자 없이 반환된다.
>
> 요소가 없는(배열길이 0) 배열은 빈 문자열이 반환된다.

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
console.log(Array.prototype.join.call(arrayLike1)); // 
console.log(Array.prototype.join.call(arrayLike2)); // ,,
console.log(Array.prototype.join.call(arrayLike3)); // 0,1,2
```



### filter()

인자로 받는 함수의 반환 값이 `true`인 요소 만을 모아 **얕은 복사 배열**을 만들어 반환

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



### map()

함수를 인자로 받아 각각의 원소에 함수를 적용한 결과를 새로운 배열로 만들어 반환

```javascript
Array.map((element, index, array) => { /* … */ })
```

```javascript
const arr = [1, 2, 3, 4, 5];
const square = arr.map((element) => element * element);
console.log(square); // 1 4 9 16 25
```



### reduce()

리듀서 콜백 함수를 배열 요소 순서대로 실행하여 

각 단계의 반환 값을 뒤로 전달하여 최종 결과 값을 반환

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



### slice()

인덱스를 기준으로 배열을 잘라서 새로운 배열을 반환

```javascript
slice(start, end)
```

```javascript
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(2,4)) // [3,4]
```



### splice()

배열의 요소를 더하거나 / 대체하거나 / 삭제한 다음 삭제된 요소의 배열을 반환

```javascript
splice(start, deleteCount, item1, item2, itemN)
```

```javascript
const arr = ['a','b','d'];

arr.splice(2,0,"c") // add "c" -> ["a", "b", "c", "d"]

arr.splice(0,1,"A") // replace 'a' to "A" -> ["A", "b", "c", "d"]

arr.splice(3,1) // remove 'd' -> ["A", "b", "c"]

```



## 배열에서 찾기

### find()

배열에서 테스팅 함수를 만족하는 첫 번째 요소를 찾아  **요소의 값**을 반환

```javascript
Array.find((element, index, array) => { /* … */ })
```

```javascript
const array1 = [5, 12, 8, 130, 44];
const found = array1.find(element => element >100);

console.log(found); // 130
```

### findIndex()

배열에서 테스팅 함수를 만족하는 첫 번째 요소를 찾아 **요소의 인덱스**를 반환.

찾는 요소가 없는 경우 -1을 반환

```javascript
Array.findIndex((element, index, array) => { /* … */ })
```

```javascript
const array1 = [5, 12, 8, 130, 44];

const isLargeNumber = (element) => element > 13;

console.log(array1.findIndex(isLargeNumber)); // 3
```

### indexOf()

배열에서 주어진 값과 일치하는 첫 번째 요소를 찾아 **요소의 인덱스**를 반환

```javascript
Array.indexOf(searchElement, fromIndex)
```

```javascript
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison')); // 1
```



### includes()

배열의 요소 중에서 주어진 값과 일치하는 요소가 있으면 true를 반환

```javascript
includes(searchElement, fromIndex)
```

```javascript
const array1 = [1, 2, 3];
console.log(array1.includes(2)); // true
```

### some()

배열의 요소 중  한 요소라도 테스팅 함수를 통과하면 true를 반환 

```javascript
some((element, index, array) => { /* … */ })
```

```javascript
const array = [1, 2, 3, 4, 5];

// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));
// Expected output: true
```





