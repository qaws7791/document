# 객체 리터럴

## 객체

### 객체란

- 객체는 이름과 값을 한 쌍으로 묶은 데이터의 집합
- 객체의 하나의 데이터 -> 프로퍼티
- 프로퍼티의 이름 -> 키
- Object, Function, Number, String, Array, Set 등이 모두 객체

### 객체리터럴로 객체 생성하기

- 객체 리터럴 : `{...}`

```js
var card = { suit: "하트", rank: "A" };
card.suit; // 하트
card["rank"]; // A
card.color; // undefined
var obj = {}; // 빈 객체
```

### 인스턴스 생성자로 객체 생성하기

- `new`생성자를 사용

```js
var obj = new Object();
function Card(suit, rank) {
  this.suit = suit;
  this.rank = rank;
}
var card = new Card("하트", "A");
```

### 객체의 프로퍼티 추가하기

- Java나 C++ 등과 달리 실행중에 객체의 프로퍼티 추가 삭제 가능

```js
card.value = 14;
console.log(card); // Object { suit: "하트", rank: "A", value: 14}
```

### 객체의 프로퍼티 삭제하기

- `delete` 연산자 이용

```js
delete card.rank;
console.log(card); // Object { suit: "하트", value: 14}
```

### 객체 속 프로퍼티 확인

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

### 객체는 참조 타입

- 객체 타입의 값을 변수에 대입하면 변수에는 객체의 참조가 저장
- 이 변수를 통해 객체의 값을 바꿀 수 있음

```js
var a = card;
console.log(a.suit); // 하트
a.suit = "스페이드";
console.log(a.suit); // 스페이드
console.log(card.suit); // 스페이드
```

### 객체 비교

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

