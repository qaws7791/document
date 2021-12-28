# Javascript

[TOC]



------

# 자바스크립트란

## 프로그래밍 언어란

### 프로그래밍 언어 정의

- 프로그래밍 언어: 컴퓨터 프로그램을 작성하기 위한 언어
- 컴퓨터는 기계어만 이해할 수 있다

### 컴파일 언어 vs 인터프리터 언어

- 컴파일: 소스 코드 -> 기계어로 번역
- 컴파일러: 컴파일을 수행하는 소프트웨어
- 컴파일 언어: C, C++, Java, objective C 등
- 인터프리터 언어: 한 줄마다 기계어로 번역해서 실행하는 프로그래밍 언어
- 인터프리터: 프로그램을 번역해서 실행시키는 소프트웨어

### 프로그래밍 언어 유형

- 절차적 언어
- 객체 지향 언어
- 함수형 언어
- 논리형 언어

## 자바스크립트 특징

### 1.인터프리터 언어이다

- 웹 브라우저에 JIT 컴파일러(Just In Time Compiler) 내장으로 빠른 실행 속도

### 2.동적 프로토타입 기반 객체 지향 언어이다

- 프로토타입을 상속하는 프로토타입 기반 객체 지향 언어

### 3.동적 타입 언어이다

- 프로그램 실행 도중 변수에 저장되는 데이터 타입에 따라 타입이 동적으로 바뀌는 언어

### 4.함수가 일급 객체이다

- 자바스크립트의 함수는 객체이다
- 함수에 함수를 인자로 넘길 수도 있다
- 함수형 프로그래밍 가능

### 5.함수가 클로저를 정의한다

- 자바스크립트의 함수는 클로저(closure)를 정의
- 클로저를 통해 변수를 은닉하거나 영속성을 보장하는 등의 다양한 기능 구현

## 자바스크립트의 기술적 요소

### 1. ECMAScript(코어 언어)

### 2. 클라이언트 측의 자바스크립트 고유 기술

​	웹브라우저의 주요 API

- Window 인터페이스 : 브라우저 및 창 조작
- DOM : HTML 문저 제어
- XMLHttpRequest : 서버와 비동기 통신

​	HTML5의 주요 API

- Drag and Drop : 드래그와 드롭으로 데이터 전달
- Blob : 이진 데이터 조작
- File : 로컬 파일 시스템 읽기 쓰기
- Web Workers : 여러 프로그램을 멀티 스레드 병렬 처리
- Web Storage : 데이터를 로컬에 저장
- indexed Database : 로컬에 키-값 타입의 관계형 데이터베이스 기능 제공
- WebSockets : 서버와 양방향 통신
- Geolocation : GPS 등의 위치 정보 기능
- Canvas : 2차원, 3차원의 그래픽스 기능

### 3.서버 측의 자바스크립트 고유 기술

- Node.js

# 변수와 값

## 변수

### 변수 선언

- 변수: 값을 담기 위해 이름을 붙인 상자
- var(선언자) number(변수 이름);

```javascript
var number;
var number_1,number_2;
x=2;
```

- 변수를 선언하지 않고 값을 대입하면 자바스크립트 엔진이 자동으로 변수를 전역 변수로 선언

```javascript
x = 2;
console.log(x); // 2
```

### 변수 끌어올림(hoisting)

- 변수 선언부를 프로그램 첫 머리로 끌어올림

```
console.log(x); // 2
var x;
```

- 단, 선언과 대입이 동시에 이루어지는 변수는 끌어 올려지지 않는다.

```
console.log(x); // undefined
var x = 5;
console.log(x); // 5
```

- 같은 이름으로 끌어올려지는 변수는 모두 끌어올린 후 하나의 영역에 할당

### 변수 명명 규칙

- 사용 가능 문자: 알파벳(a~z, A~Z), 숫자(0~9), 밑줄(_), 달러 기호($)
- 첫 글자로 숫자는 사용 불가
- 예약어를 식별자로 사용 불가

### 캐멀 표기법(로어 캐멀 표기법)

- 두 번째 이후 단어의 첫 글자를 대문자로 표기
- ex) newName, createLifeGame

### 파스칼 표기법(어퍼 캐멀 표기법)

- 각 단어의 첫 글자를 대문자로 표기
- ex) NewName, CreateLiftGame

### 밑줄 표기법(스네이크 표기법)

- 모든 단어를 소문자로 표기하고 단어 사이를 밑줄(_)로 구분
- ex) new_name, create_life_game

### 일반적인 표기법

- 기본적으로 영어 단어를 사용
- 변수 이름: 캐멀 표기법이나 밑줄 표기법 사용
- 루프 카운터 변수: i, j, k 등
- 상수: 대문자
- 논리값 변수: 변수 이름 앞에 is
- 생성자 변수: 파스칼 표기법

## 데이터 타입

- 자바스크립트는 동적 타입 언어

### 데이터 타입 분류

- 원시 타입
  - 숫자
  - 문자열
  - 논리값
  - 특수한 값(undefined, null)
  - 심벌
- 객체 타입

### 숫자

- 자바스크립트에서는 숫자를 모두 64비트 부동소수점으로 표현
- 배열 인덱스와 비트 연산은 32비트 정수 처리
- **리터럴(literal)**: 프로그램에 직접 작성할 수 있는 상수 값

숫자 리터럴

|         분류          |    표기법     |    예시     |           설명            | 비고 |
| :-------------------: | :-----------: | :---------: | :-----------------------: | :--: |
|    **정수 리터럴**    |    10진수     |     123     |     정수 그대로 표현      |      |
|                       |    16진수     |    0x2a     |       숫자 앞에 0x        |      |
|                       |     8진수     |    0o73     |       숫자 앞에 0o        | ES6  |
|                       |     2진수     |    0b101    |       숫자 앞에 0b        | ES6  |
| **부동소수점 리터럴** |   정수.소수   |    3.14     |     소수 그대로 표현      |      |
|                       |     소수      |    0.123    | 정수부 0일때 0은 생략가능 |      |
|                       | 가수부e지수부 |   6.02e23   |        6.02*10^23         |      |
|                       | 가수부E지수부 | 1.16199E-35 |     1.1616199*10^-35      |      |

특수한 값

| 분류              | 표기법                   | 설명                 | 비고 |
| ----------------- | ------------------------ | -------------------- | ---- |
| 전역 변수         | Infinity                 | 플러스 무한대        |      |
| 전역 변수         | NaN                      | 부정 값              |      |
| Number의 프로퍼티 | Number.PISITIVE_INFINITY | 플러스 무한대        |      |
| Number의 프로퍼티 | Number.NEGATIVE_INFINITY | 마이너스 무한대      |      |
| Number의 프로퍼티 | Number.MAX_VALUE         | 표현 가능한 최댓값   |      |
| Number의 프로퍼티 | Number.MIN_VALUE         | 표현 가능한 최소값   |      |
| Number의 프로퍼티 | Number.NaN               | 부정 값              |      |
| Number의 프로퍼티 | Number.EPSILON           | 2.22044604925031e-16 | ES6  |
| Number의 프로퍼티 | Number.MIN_SAFE_INTEGER  | -9007199254740990    | ES6  |
| Number의 프로퍼티 | Number.MAX_SAFE_INTEGER  | 9007199254740990     | ES6  |

### 문자열

- 16비트 유니코드 문자(UTF-16)
- 문자열에 '' 또는 ""를 감싸서 사용
- HTML 요소에 자바스크립트를 넣을 때는 문자열처럼 감싸서 작성

```html
<input type="button" value="Click" onClick="alert('Thanks!')"/>
```

- 문자열안에서 특수한 문자들은 이스케이프 시퀀스로 표현해야 한다.
- 이스케이프 시퀀스는 역슬래시(\) 뒤에 특정 문자를 넣어 표현

| 이스케이프 스퀀스 | 의미                                             | 비고 |
| ----------------- | ------------------------------------------------ | ---- |
| \0                | 널(null)문자                                     |      |
| \b                | 백스페이스 문자                                  |      |
| \t                | 수평 탭 문자                                     |      |
| \n                | 개행 문자                                        |      |
| \v                | 수직 탭 문자                                     |      |
| \f                | 다음 페이지 문자                                 |      |
| \r                | 캐리지 리턴 문자(CR)                             |      |
| \\'               | 작은따옴표 문자                                  |      |
| \\"               | 큰따옴표 문자                                    |      |
| \\                | 역슬래시 문자                                    |      |
| \xXX              | 두 자릿수 16진수 XX로 지정된 Latin-1 문자        |      |
| \uXXXX            | 네 자릿수 16진수 XXXX로 지정된 유니코드 문자     |      |
| \u{XXXXX}         | 16진수 코드 포인트 XXXXXX로 지정된 유니코드 문자 | ES6  |

### 논리값(boolean)

- 논리 데이터 유형으로 true 또는 false 두 가지 종류를 가짐

### 특수한 값

- **undefined**: 정의되지 않은 상태
  - 값을 아직 할당하지 않은 변수의 값
  - 없는 객체의 프로퍼티를 읽으려고 했을 때의 값
  - 없는 배열의 요소를 읽으려고 했을 때의 값
  - 아무것도 반환하지 않는 함수가 반환하는 값
  - 함수를 호출했을 때 전달받지 못한 인수의 값
- **null**: 아무것도 없음
  - 보통 프로그램에서 무언가를 검색했지만 찾지 못했을 때 반환되는 값

### ECMAScript 6부터 추가된 데이터 타입

### 1.심벌(symbol)

- 자기 자신을 제외한 그 어떤 값과도 유일힌 값
- 호출할 때마다 새로운 값을 반환

```js
var sym1 = Symbol();
var sym2 = Symbol();
console.log(sym1 == sym2); // false
```

```js
var HEART = Symbol("하트");
console.log(HEART.toString()); // Symbol(하트)
```

- 심벌과 문자열 연결

```js
var sym1 = Symbol.for("club");
var sym2 = Symbol.for("club");
console.log(sym1 == sym2); // true
```

- 심벌에 for로 연결된 문자열은 keyFor을 통해 구할 수 있다

```js
var sym1 = Symbol.for("club");
console.log(Symbol.keyFor(sym1)); // club

var sym2 = Symbol("club");
console.log(Symbol.keyFor(sym2)); // undefined
```

### 2.템플릿 리터럴(templete literals )

- ``로 묶은 문자열
- \n이 아닌 일반적인 줄 바꿈을 통해 줄바꿈 가능

```js
`I'm going to learn Javascript`
```

- 보간 표현식: 템프릿 리터럴 안에 플레이스 홀더를 ${...}을 통해 넣을 수 있다

```js
var a = 2, b = 3;
console.log(`${a} + ${b} = ${a+b}`); // 2 + 3 = 5
```

# 객체 리터럴

## 객체

### 객체란

- 객체는 이름과 값을 한 쌍으로 묶은 데이터의 집합
- 객체의 하나의 데이터 -> 프로퍼티
- 프로퍼티의 이름 -> 키

### 객체 생성하기

- 객체 리터럴 : `{...}`

```js
var card = { suit: "하트", rank: "A" };
card.suit // 하트
card["rank"] // A
card.color // undefined
var obj = {}; // 빈 객체
```

### 생성자로 객체 생성

- `new`생성자를 사용

```js
function Card(suit, rank) {
	this.suit = suit;
	this.rank = rank;
}
var card = new Card("하트", "A");
```

### 프로퍼티 추가하기

- Java나 C++ 등과 달리 실행중에 객체의 프로퍼티 추가 삭제 가능

```js
card.value = 14;
console.log(card); // Object { suit: "하트", rank: "A", value: 14}
```

### 프로퍼티 삭제하기

- `delete` 연산자 이용

```js
delete card.rank;
console.log(card); // Object { suit: "하트", value: 14}
```

### 객체 속 프로퍼티 확인

- `in` 연산자 사용해 객체에 특정 프로퍼티가 있는지 확인

```js
var card = { suit: "하트", rank: "A" };
console.log("suit" in card) // true
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



## 함수

### 함수 선언

```js
function square(x) { return x * x; }
```

### 함수 호출

```js
square(3) // 9
```

### 인수

```js
function distance(p,q) {
	var dx = q.x - p.x;
	var dy = q.y - p.y;
	return Math.sqrt(dx*dx+dy*dy);
}
```

### 함수 선언문 호이스팅

- 변수 선언과 마찬가지로 함수 선언문을 프로그램의 첫머리로 끌어올린다

### 함수는 객체

- 함수 `square(x)`는 `function(x) {return x*x;}` 를 가리키는 일종의 객체

```js
var sq = square;
console.log(sq(5)); // 25
```

### 값에 의한 호출

- 값의 전달: 인수에 원시 값(여기서는 a = 3)을 넘기면 그 값 자체가 인자에 전달되어
  a의 값은 변하지 않는다

```
function add1(x) { return x = x + 1;}
var a = 3;
var b = add1(a);
console.log("a = " + a + ", b = " + b); // a = 3, b = 4
```

### 참조에 의한 호출

- 참조전달: 인수에 객체(여기서는 a={x:3, y:4})를 넘기면 참조 값을 p에 대입하므로 p를 수정하면 a까지 수정된다

```js
function add1(p) { p.x = p.x + 1; p.y = p.y + 1; return p; }
var a = {x:3, y:4};
var b = add1(a);
console.log(a,b); // Object {x=4, y=5} Object{x=4, y=5}
```

### 변수의 유효 범위(Scope)

**어휘적 범위**: 프로그램의 구문으로 유효 범위 지정

**동적 범위**: 프로그램 실행 중 유효 범위 지정

- 자바스크립트는 어휘적 범위 방식을 채택

**전역 변수**: 함수 바깥에서 선언된 변수. 유효 범위가 전체 프로그램

**지역 변수**: 함수 안에서 선언된 변수와 함수 인자. 유효 범위가 변수가 선언된 함수 내부

- 지역 변수의 유효 범위 안에서는 같은 이름의 전역 변수는 숨겨진다

```js
var a = "global";
function f() {
	var a = "local";
	console.log(a); // local
	return a;
}
f();
console.log(a); // global
```

### 함수 안의 변수 끌어올림

- 함수 안의 변수 선언부는 함수의 첫머리로 끌어올려진다.

### 함수 안에서 변수 선언 생략시 전역 변수

- 함수안에서 변수를 선언하지 않고 값을 대입하면 전역 변수로 선언된다.

```js
function f() {
	a = "loacl";
	console.log(a); // local
	return a;
}
f();
console.log(a); // local
```

### 블록 유효 범위

- let과 const는 ES6부터 추가된 변수 선언자로 '선언된 {...} 안'의 '블록 유효 범위'를 갖는 변수를 선언한다
- **let 선언자**: 블록 유효 범위를 갖는 지역 변수 선언
  - 변수 끌어올림(호이스팅)이 되지 않는다
- **const 선언자**: 블록 유효 범위를 가지면서 한 번만 할당 가능한 상수를 선언
  - 상수 값은 수정 불가능
  - 상수 값이 객체나 배열일 경우 프로퍼티 또는 프로퍼티 값을 수정 가능

### 함수 리터럴로 함수 정의하기

- 함수 리터럴 = 익명 함수 = 무명 함수

```js
var square = function(x) { return x * x;};
```

### 객체의 메서드

- 메서드: 객체의 프로퍼티 중  함수 객체를 값으로 담고 있는 프로퍼티
- 일반적으로 메서드가 속한 객체의 상태를 바꾸거나 이용하는 용도로 사용

```js
var circle = {
	center: { x:1.0, y:2.0 },
	radius: 2.5,
	area: function() {
		return Math.PI * this.radius * this.radius;
	}
};
```

## 배열

### 배열 리터럴로 배열 생성

- 배열 리터럴`[..]` 로 배열을 생성

```js
var evens = [2, 4, 6, 8];
```

- 빈 배열 생성

```js
var empty = [];
console.log(empty); // []
```

### Array 생성자로 배열 생성

```js
var evens = new Array(2, 4, 6, 8);
```

### length 프로퍼티

```js
evens.length // 4
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

```js
delete a[1];
console.log(a); // ["A", undefined, "C", "D"]
```

