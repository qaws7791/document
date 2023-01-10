**변수와 객체**

[TOC]



##  변수

### 변수 선언

- 변수: 값을 담기 위해 이름을 붙인 상자
- var(선언자) number(변수 이름);

```javascript
var number;
var number_1 = 1,number_2 = 2;
```

- ❗변수를 선언하지 않고 값을 대입하면 자바스크립트 엔진이 자동으로 변수를 전역 변수로 선언

```javascript
x = 2;
console.log(typeof(x)) // number
```



### 전역변수(global variable)와 지역변수(local variable)

- 전역변수: 전역 객체(`window`)에서 접근 가능한 변수

  > ❗전역 변수는 높은 접근성 때문에 사용하지 않는 것이 좋다

- 지역변수: 함수 또는 블록 내에서만 접근 가능한 변수

### 변수 타입

- `var`: 함수 스코프 , 전역 변수, 선택적인 값 초기화를 하는 변수

  > ❗`var`은 호이스팅 및 재선언의 위험으로 사용하지 않는 것이 좋다

- `let`: 블록 스코프, 지역 변수, 선택적인 값 초기화를 하는 변수

- `const`: 재할당, 재선언이 불가능한 상수로, 배열일 때는 항목에 대한 업데이트 및 제거 가능

  > 재할당 되지 않을 것임을 알려줌으로써 코드 읽기가 쉬워진다.
  >
  > `const`를 `let`보다 위에서 선언하자.

```js
var x = "var type";
let y = "let type";
console.log(this.x); // var type
console.log(this.y); // undefined
console.log(this); // Window(전역객체)
```



### 변수 끌어올림(hoisting)

- 변수 선언부를 프로그램 첫 머리로 끌어올림

- ❗`var` 변수는 호이스팅 시 `underfined`로 변수를 초기화

- ❗`let`과 `const`도 호이스팅 되나 선언부 전에 사용하면 에러가 발생

- 선언을 해야만 호이스팅이 작동

  - ```js
    //선언을 통한 호이스팅
    console.log(x); // undefined
    var x;
    ```

  - ```js
    //선언을 통한 호이스팅
    console.log(x); // undefined
    var x = 2;
    console.log(x); // 2
    ```

- ❗선언하지 않으면 호이스팅이 되지 않음

  - ```js
    console.log(x); // Uncaught ReferenceError: x is not defined
    x;
    ```

  - ```js
    console.log(x); // Uncaught ReferenceError: x is not defined
    x = 2; 
    ```

- let과 const 호이스팅

  - ```js
    console.log(x); // Uncaught ReferenceError: Cannot access 'num' before initialization
    let x = 2;
    ```


> 같은 이름으로 끌어 올려지는 변수는 모두 끌어올린 후 하나의 영역에 할당된다.

### 변수 명명 규칙

- 사용 가능 문자: 알파벳(a~z, A~Z), 숫자(0~9), 밑줄(_), 달러 기호($)
- ❗첫 글자로 숫자는 사용 불가
- ❗예약어를 식별자로 사용 불가
- 지역 변수 명은 '_'로 시작한다.

### 캐멀 표기법(로어 캐멀 표기법)

- 두 번째 이후 단어의 첫 글자를 대문자로 표기 -> 함수 및 변수 표기
- ex) newName, createLifeGame

### 파스칼 표기법(어퍼 캐멀 표기법)

- 각 단어의 첫 글자를 대문자로 표기 -> 생성자, 클래스 표기
- ex) NewName, CreateLiftGame

### 밑줄 표기법(스네이크 표기법)

- 모든 단어를 소문자로 표기하고 단어 사이를 밑줄(_)로 구분 -> 상수 표기
- ex) new_name, create_life_game



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

### 특수한 값

| 분류              | 표기법                   | 설명                    | 비고 |
| ----------------- | ------------------------ | ----------------------- | ---- |
| 전역 변수         | Infinity                 | 플러스 무한대           |      |
| 전역 변수         | NaN                      | 부정 값(수치 계산 오류) |      |
| Number의 프로퍼티 | Number.PISITIVE_INFINITY | 플러스 무한대           |      |
| Number의 프로퍼티 | Number.NEGATIVE_INFINITY | 마이너스 무한대         |      |
| Number의 프로퍼티 | Number.MAX_VALUE         | 표현 가능한 최댓값      |      |
| Number의 프로퍼티 | Number.MIN_VALUE         | 표현 가능한 최소값      |      |
| Number의 프로퍼티 | Number.NaN               | 부정 값                 |      |
| Number의 프로퍼티 | Number.EPSILON           | 2.22044604925031e-16    | ES6  |
| Number의 프로퍼티 | Number.MIN_SAFE_INTEGER  | -9007199254740990       | ES6  |
| Number의 프로퍼티 | Number.MAX_SAFE_INTEGER  | 9007199254740990        | ES6  |

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
  - null 값 확인: `nullVar === null`을 통해 확인 (typeof 사용하면 안됨)

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

------

## 배열



### 배열 리터럴로 배열 생성

- 배열 리터럴`[..]` 로 배열을 생성

```js
var evens = [2, 4, 6, 8];
```

### Array 생성자로 배열 생성

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
evens.length // 4
var arr = [];
console.log(arr.length); // 0
arr[0]= 0;
arr[1]=1;
console.log(arr.length); // 2
arr[50]=50; // 51인 이유 => arr[2]부터 arr[49]까지 undefined 할당
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
arr.name = 'array';
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
a.splice(0,1);
console.log(a); // [undefined, "C", "D"]
```



#  자바스크립트 연산자

### + 연산자

- 숫자 타입 -> 더하기
- 문자열 타입 -> 문자열 합치기

```js
console.log(1 + 2); // 3
console.log(1 + "2"); // 12
console.log("1" + 2); // 12
console.log("1" + "2"); //12
```

### typeof  연산자

- 타입을 문자열로 리턴

```js
console.log(typeof 1); // number 
console.log(typeof "1"); // string
console.log(typeof true); // boolean
console.log(typeof {}); // object
console.log(typeof []); // object
console.log(typeof function () {}); //function
```

### == 과 === 연산자

- `==`: 피연산자의 타입이 다를 경우 타입 변환 후 비교
- `===` : 타입 변환없이 비교

```js
console.log(1 == '1'); // true
console.log(1 == [1]); // true
console.log(1 === [1]); // false
console.log(1 === '1'); // false
```

### !! 연산자

- 숫자는 0일 경우 false
- 문자열은 비어있을 경우 false
- 예외값 false
- 객체는 비어 있어도 true

```js
console.log(!!-1); // true
console.log(!!1); // true
console.log(!!0); // false

console.log(!!"a"); // true
console.log(!!""); // false

console.log(!!true); // true
console.log(!!false); // false

console.log(!!null); // false
console.log(!!NaN); // false
console.log(!!undefined); // false
console.log(!!{}); // true
console.log(!![]); // true
```

# 객체 리터럴



## 객체

### 객체란

- 객체는 이름과 값을 한 쌍으로 묶은 데이터의 집합
- 객체의 하나의 데이터 -> 프로퍼티
- 프로퍼티의 이름 -> 키
- Object, Function, Number, String, Array, Set  등이 모두 객체

### 객체리터럴로 객체 생성하기

- 객체 리터럴 : `{...}`

```js
var card = { suit: "하트", rank: "A" };
card.suit // 하트
card["rank"] // A
card.color // undefined
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

