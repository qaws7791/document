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

## Object.assign() - 객체 복사

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



# Map

-  키-값 쌍과 키의 원래 삽입 순서를 기억하는 객체
- 키는 오직 단 하나만 존재 -> 유일성

```javascript
const map1 = new Map();

map1.set('a', 1);
map1.set('b', 2);
map1.set('c', 3);
console.dir(map1) // Map(3){ 0: {"a" => 1}, 1: {"b" => 2}, 2: { "c" => 3}, size: 3}
console.log(map1.get('a'));
// Expected output: 1

map1.set('a', 97);

console.log(map1.get('a'));
// Expected output: 97

console.log(map1.size);
// Expected output: 3

map1.delete('b');

console.log(map1.size);
// Expected output: 2

```

## Map.get()

- Map 객체에서 특정 요소를 반환

## Map.set()

- Map 객체에서 키/값 쌍을 추가하거나 업데이트

## Map.has()

- Map 객체에서 해당 키가 존재하는지 확인하여 부울값 변환

## Map.keys()

```javascript
for (const key of map1.keys()) {
    console.log(key)
}
// [Map Iterator] { a, b, c }
```

## Map.values()

```javascript
for (const value of map1.values()) {
    console.log(value)
}
// [Map Iterator] { 1, 2, 3 }
```

## Map.entries()

- 객체의 [key, value] 쌍을 삽입 순서대로 순회하는 새로운 반복자 객체를 반환

```javascript
for (const entry of map1.entries()) {
    console.log(entry)
} // [Map Iterator] { ['a', 1], ['b', 2], ['c', 3]}
```

## Map.clear()

- Map 객체의 모든 요소를 삭제

```javascript
map.clear()
```

## Map.delete()

- Map 객체에서 특정 요소를 삭제
- 요소가 존재하여 삭제 완료되면 `true`, 해당 요소가 없으면 `false`

```javascript
map.delete('a')
```

## Map.forEach()

- 배열 `forEach`와 비슷한 기능
- 각 키/값 쌍에 대해 함수를 실행

```javascript
map.forEach((value, key, map ) => {}, thisArg)
```



## Map과 Object 차이

- Map은 기본적인 키가 없음
- Map은 사용자가 제공한 키와 값만 안전하게 사용
- Map의 키는 모든 값이 될 수 있다
- Map은 삽입 순서대로 정렬
- Map은 size 속성을 통해 속성 개수를 가져올 수 있음
- Map은 Iterable함(순회 가능)
- 삽입 삭제가 빈번할 때 Object보다 나은 성능

# Set

- 자료형에 관계없이 원시 값과 객체 참조 <u>모두 유일한 값만 저장</u>

```javascript
var mySet = new Set();

mySet.add(1); // Set { 1 }
mySet.add(5); // Set { 1, 5 }
mySet.add(5); // Set { 1, 5 }
mySet.add('some text'); // Set { 1, 5, 'some text' }
var o = {a: 1, b: 2};
mySet.add(o);

mySet.add({a: 1, b: 2}); // o와 다른 객체를 참조하므로 괜찮음

mySet.has(1); // true
mySet.has(3); // false, 3은 set에 추가되지 않았음
mySet.has(5);              // true
mySet.has(Math.sqrt(25));  // true
mySet.has('Some Text'.toLowerCase()); // true
mySet.has(o); // true

mySet.size; // 5

mySet.delete(5); // set에서 5를 제거함
mySet.has(5);    // false, 5가 제거되었음

mySet.size; // 4, 방금 값을 하나 제거했음
console.log(mySet);// Set {1, "some text", Object {a: 1, b: 2}, Object {a: 1, b: 2}}
```

## Set.add()

- Set 객체에 동일한 값을 가진 요소가 없는 경우 객체에 새 값을 추가합니다

```javascript
set.add(value)
```

## Set.clear()

- Set 객체에서 모든 요소를 제거

```javascript
set.clear()
```

## Set.delete()

- 해당 값이 Set 객체에 있는 경우 삭제합니다
- 해당 값이 Set 객체에 있으면 true, 없으면 false를 반환합니다

```javascript
set.delete(value)
```

## Set.entries()

## Set.forEach()

## Set.has()

## Set.keys()

## Set.values()

- Map과 동일



# Generator

반복 가능한 객체를 통해 값을 반환하는 객체

- `generator.next()`를 사용하면 다음 yield문에서 멈추고 value와 done을 가지는 객체를 반환

```javascript
function* infinite() {
  let counter = 0;

  while (true) {
    yield {counter: counter++};
  }
}

const generator = infinite();

console.log(generator.next()); //  { done: false, value: { counter: 0 }}
console.log(generator.next().value.counter); // 1
console.log(generator.next().value.counter); // 2
```

