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

### Join()

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

### Filter()

인자로 받는 함수의 반환 값이 `true`인 요소 만을 모아 **얕은 복사 배열**을 만들어 반환

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
console.log(result);
```

### Map()

함수를 인자로 받아 각각의 원소에 함수를 적용한 결과를 새로운 배열로 만들어 반환

```javascript
map((element, index, array) => { /* … */ })
```

```javascript
const arr = [1, 2, 3, 4, 5];
const square = arr.map((x) => x * x);
console.log(square); // 1 4 9 16 25
```

### Reduce()

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
console.log(sum); // 15
```

