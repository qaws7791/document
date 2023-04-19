# 객체 리터럴

## 객체란

- 객체는 이름과 값을 한 쌍으로 묶은 데이터의 집합
- 객체의 하나의 데이터 -> 프로퍼티
- 프로퍼티의 이름 -> 키
- Object, Function, Number, String, Array, Set 등이 모두 객체

## 객체리터럴로 객체 생성하기

- 객체 리터럴 : `{...}`

```js
var card = { suit: "하트", rank: "A" };
card.suit; // 하트
card["rank"]; // A
card.color; // undefined
var obj = {}; // 빈 객체
```

## 인스턴스 생성자로 객체 생성하기

- `new`생성자를 사용

```js
var obj = new Object();
function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}
var card = new Card("하트", "A");
```

## 객체의 프로퍼티 값 읽기

- 점 표기법(.) 또는 대괄호([])를 사용할 수 있다.

```javascript
card.suit
card.['rank']
```

## 계산된 프로퍼티

- 프로퍼티의 이름을 참조하여 사용할 수 있다.

```javascript
const newProperty = 'color';
card[newProperty] = 'red'; // -> card.color = red;

console.log(card)
```

## 단축 프로퍼티

- 프로퍼티 이름과 참조하는 값의 이름이 같으면 단축하여 사용할 수 있다.

```javascript
function Card(suit, rank) {
    return { suit:suit, rank:rank }
}

function Card(suit, rank) {
    return { suit, rank }
}
```



## 객체의 프로퍼티 추가하기

- Java나 C++ 등과 달리 실행중에 객체의 프로퍼티 추가 삭제 가능

```js
card.value = 14;
console.log(card); // Object { suit: "하트", rank: "A", value: 14}
```

## 객체의 프로퍼티 삭제하기

- `delete` 연산자 이용

```js
delete card.rank;
console.log(card); // Object { suit: "하트", value: 14}
```

## 객체 속 특정 프로퍼티가 있는지 확인

- `in` 연산자 사용해 객체에 특정 프로퍼티가 있는지 확인

```js
var card = { suit: "하트", rank: "A" };
console.log("suit" in card); // true
console.log("color" in card); // false
```

- 객체는 Object 객체를 상속받기 때문에 "toString" 프로퍼티는 따로 생성하지 않아도 존재

```js
console.log("toString" in card); // true
```

## 객체는 참조 타입

- 객체 타입의 값을 변수에 대입하면 변수에는 객체의 참조가 저장
- 이 변수를 통해 객체의 값을 바꿀 수 있음

```js
var a = card;
console.log(a.suit); // 하트
a.suit = "스페이드";
console.log(a.suit); // 스페이드
console.log(card.suit); // 스페이드
```

## 객체 비교

- 객체의 비교는 참조 값을 비교 (==, === 동일)
- 값이 같아도 참조 값이 다르면 `false`
- 객체끼리 순서가 같다면 `JSON.stringify()`를 통해 값 비교 가능

```js
var objA = { value: 100 };
var objB = { value: 100 };
var objC = objB;

console.log(objA == objB); //false
console.log(objA === objB); //false

console.log(objB == objC); //true
console.log(objA == objC); //false
console.log(JSON.stringify(objA) === JSON.stringify(objB)); //true
```

## 반복문으로 객체 키,값 출력

```javascript
for (key in object) {
  console.log(`${key} : ${object[key]}`)
}
/*
"suit : 하트"
"rank : A"
"color : red"
/*
```

## 객체 정렬 순서

- 정수 프로퍼티(정수 또는 정수만 있는 문자열)는 순서대로 정렬
- 그 외 프로퍼티는 추가한 순서대로 정렬

## 객체의 메모리 참조

- 객체의 값은 기본적으로 값이 담긴 메모리 주소를 참조한다.

## assign() - 객체 복사

-  출처가 되는 객체의 열거 가능한 모든 자체 속성을 복사하여 대상 객체에 붙여 넣는다
- 동일한 키를 값는 속성은 출처 객체의 속성으로 덮어 쓴다.
- 출처 값이 객체에 대한 참조라면 참조 값만 한다.

```javascript
Object.assign(target, ...sources)
```

## 객체 합치기

```javascript
const o1 = { a: 1 };
const o2 = { b: 2 };
const o3 = { c: 3 };

const obj = Object.assign(o1, o2, o3);
console.log(obj); // { a: 1, b: 2, c: 3 }
console.log(o1);  // { a: 1, b: 2, c: 3 }, 목표 객체 자체가 변경됨.
```

## 객체 메서드 만들기

```javascript
user.print = function() {}
```



## Object.keys() - 객체의 속성 이름 배열

- `iterator`객체가 아닌 진짜 배열을 반환한다.

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.keys(object1));
// Expected output: Array ["a", "b", "c"]
```



## Object.values() - 객체 속성 값 배열

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]

```



## Object.entries() - 객체의 [속성,값] 배열

```javascript
const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.entries(object1));
// Expected output: Array [["a", "somestring"], ["b", 42], ["c", false]]
```

