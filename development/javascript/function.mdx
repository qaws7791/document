## 함수 생성 및 호출


### 함수 리터럴 방식의  함수 선언

```js
function(x) { return x * x; };
```


### 함수 선언문 방식의 함수 선언

- 가장 기본적인 함수 작성 방법
- 호이스팅 가능
- 명확히 이름을 지정

```js
function square(x) { return x * x; };
```


### 함수 표현식 방식의 함수 선언

- 함수를 변수에 할당하는 방식
- **호이스팅 되지 않음**
- 일반적으로 함수 이름을 짓지 않는 익명 함수 형태로 사용

```js
const square = function(x) { return x * x; };
```


### 생성자 함수를 이용한 함수 생성

```js
const square = new Function('x','return x * x'};
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


## 함수 선언문만 호이스팅

- 변수 선언과 마찬가지로 함수 선언문을 프로그램의 첫머리로 끌어올린다
- 함수 선언문은 함수의 위치에 상관없이 유효 범위가 코드의 처음부터 시작
- 함수 표현식은 호이스팅 되지 않는다. 정의되기 전에 사용 할 수 없다.
- 호이스팅으로 인한 잠재적 문제를 피하기 위해서는 함수 표현식을 권장

```js
console.log(square(5)) // TypeError
const square = function(x) { return x*x;};
console.log(square(5)) // 25
```


# 함수 특징


## 함수는 일급 객체이다

- 함수 `square(x)`는 `function(x) {return x*x;}` 를 가리키는 일종의 객체
- 리터럴에 의해 생성되는 객체

```js
var sq = square;
console.log(sq(5)); // 25
```


## 함수는 값이다

- 변수, 배열, 프로퍼티 등에 할당 가능하다
- 함수의 인자나 리턴값으로 전달이 가능하다
- 동적 프로퍼티 할당 가능


## 함수가 가지는 기본 프로퍼티

- `length` : 함수가 기대하는 정상적인 인자의 개수
- `prototype`: 객체의 부모를 가리키는 [[Prototype]]과 다름. `constructor` 프로퍼티를 가리킴.  `constructor` 프로퍼티는 함수를 가리킴. `함수(prototype`) ↔ `constructor`


## 값에 의한 호출

- 값의 전달: 인수에 원시 값(여기서는 a = 3)을 넘기면 그 값 자체가 인자에 전달되어
  a의 값은 변하지 않는다

```javascript
function add1(x) { return x = x + 1;}
var a = 3;
var b = add1(a);
console.log("a = " + a + ", b = " + b); // a = 3, b = 4
```


## 참조에 의한 호출

- 참조전달: 인수에 객체(여기서는 `a={x:3, y:4}`)를 넘기면 참조 값을 p에 대입하므로 p를 수정하면 a까지 수정된다

```js
function add1(p) { p.x = p.x + 1; p.y = p.y + 1; return p; }
var a = {x:3, y:4};
var b = add1(a);
console.log(a,b); // Object {x=4, y=5} Object{x=4, y=5}
```


## 매개변수(parameter; 인자)

- 함수를 호출할 때 전달하는 값들

```javascript
// x, y를 인자로 받는 add 함수
function add(x,y) {
  return x+y
}

console.log(add(3,2)) // 5
console.log(add()) // NaN
```

- 매개변수는 기본값을 지정하여 매개변수가 없을 때 생기는 예외적 상황을 피할 수 있다.

```javascript
function add(x=0,y=0) {
  return x+y
}
console.log(add()) // 0
```


## 변수의 유효 범위(scope)

**어휘적 범위(lexical scope)**: 프로그램의 구문으로 유효 범위 지정

- 자신이 정의된 영역을 기준으로 함
- 스코프가 중첩되어 있을 때 표현식이나 문은 해당 레벨의 스코프나 더 높은 레벨(더 바깥)에 있는 변수만 접근 가능
- 더 낮거나 안쪽에 있는 스코프의 변수에는 접근할 수 없음

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


## 클로저(closure)

- 중첩 함수가 외부 함수보다 오래 유지되고, 외부 함수의 변수를 참조하고 있을 때, 외부 함수가 종료되어도 참조가 가능
- 함수가 정의된 스코프가 아닌 다른 스코프에서 함수가 실행되어도 스코프 밖의 변수를 계속 참조 가능한 경우
- 외부 함수의 변수들을 안전하게 보호하고 초기화없이 내부 함수를 사용

```javascript
const counter = (() => {
  let i = 0;
  return () => ++i;
})();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
```


## 함수 안의 변수 끌어올림

- 함수 안의 변수 선언부는 함수의 첫머리로 끌어올려진다.


## 함수 안에서 변수 선언 생략시 전역 변수

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


## 블록 유효 범위

- let과 const는 ES6부터 추가된 변수 선언자로 '선언된 `{...}` 안'의 '블록 유효 범위'를 갖는 변수를 선언한다
- **let 선언자**: 블록 유효 범위를 갖는 지역 변수 선언
  - 변수 끌어올림(호이스팅)이 되지 않는다
- **const 선언자**: 블록 유효 범위를 가지면서 한 번만 할당 가능한 상수를 선언
  - 상수 값은 수정 불가능
  - 상수 값이 객체나 배열일 경우 프로퍼티 또는 프로퍼티 값을 수정 가능


## 함수 리터럴로 함수 정의하기

- 함수 리터럴 = 익명 함수 = 무명 함수

```js
var square = function(x) { return x * x;};
```


## 객체의 메서드

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


## arguments 객체

- 함수를 호출할 떄 사용된 인자들이 배열 형태로 저장된 유사 배열 객체

```js
const add = function (a, b) {
  console.log(arguments);
  return a + b;
};

console.log(add(1)); // {0: 1} NaN
console.log(add(1, 2)); // {0: 1, 1: 2} 3
console.log(add(1, 2, 3)) // {0: 1, 1: 2, 2: 3} 3
```


## this 바인딩

- 객체 내의 메서드를 호출할 때는 해당 메서드를 호출한 객체로 바인딩
  - 예외적으로 객체의 메서드여도 즉시 실행 함수일 경우 스스로 실행되므로 전역 객체에 바인딩된다.
  - 객체의 메서드여도 함수에게 인자로 넘겨주면 전역객체를 가리킨다.
  
- 브라우저에서 자바스크립트 실행 시 전역 객체에 바인딩 (window 객체)
- 바인딩 하지 않으면 func2, func3의 this는 전역객체를 가리킴

```js
var value = 100;

var myObject = {
  value: 1,
  func1: function () {
    this.value += 1;
    console.log(this.value);

    func2 = function () {
      this.value += 1;
      console.log(this.value);

      func3= function () {
        this.value += 1;
        console.log(this.value);
      }
      func3() // 3. 100+2 = 102
    }
    func2() // 2. 100+1 = 101
  }
}
myObject.func1() // 1. 1+1 = 2
```

```js
var value = 100;

var myObject = {
  value: 1,
  func1: function () {
    var that = this; // this 바인딩
    this.value += 1;
    console.log(this.value);

    func2 = function () {
      that.value += 1;
      console.log(that.value);

      func3= function () {
        that.value += 1;
        console.log(that.value);
      }
      func3() // 3. 4
    }
    func2() // 2. 3
  }
}
myObject.func1() // 1. 2
```


## call과 apply를 통한 this 바인딩

- thisArg: func()호출에 사용할 this
- call과 apply 차이: call은 인자를 각각 넘기고, apply는 배열 형태로 넘긴다.

```js
func.call(thisArg[, arg1[, arg2[, ...]]])
func.apply(thisArg, [argsArray])
```


## bind()를 통한 바인딩

- this와 초기 인수를 받아 바인딩된 원본 함수의 복제본을 반환
- 사용 용도
  1. 미리 this 바인딩
  2. 부분 적용 함수 생성
  3. name 프로퍼티로 bind()되었는지 확인

```javascript
func.bind(thisArg[, arg1[, arg2[, ...]]])
```

```javascript
const newFunc = function () {}.bind(this);
```


## 생성자 함수 new

- Person() 생성자 함수의 `prototype` ->  Person.prototype 객체
- 생성된 빈 객체의 `[[prototype]]` 을  Person.prototype 객체와 연결
- 생성자 함수 호출 시에는 생성되는 객체에 this가 바인딩

```js
var person1 = new Person('john');
//person1의 [[prototype]] ->  Person.prototype 객체
```


## 객체 리터럴 방식과 생성자 함수 방식 차이

- 객체 리터럴 방식 `변수 = {...}`은 Object.prototype을 ``**proto**`로 가짐
- 생성자 함수 방식 `변수 = new Person()`은 Person.prototype을 ``**proto**`로 가짐


## call과 apply를 통한 this 바인딩

- thisArg: func()호출에 사용할 this
- call과 apply 차이: call은 인자를 각각 넘기고, apply는 배열 형태로 넘긴다.

```js
func.call(thisArg[, arg1[, arg2[, ...]]])
func.apply(thisArg, [argsArray])
```


## ... 연산자(나머지 연산자)

- 함수에서 여러 파라미터를 받을 때, 정의하지 않는 파라미터 나머지 부분을
  하나의 배열로 받을 수 있다.

```javascript
function f(a, b, ...theArgs) {
  // …
}
```


# 프로토타입 체이닝

- 해당 객체에 메서드나 프로퍼티가 존재하지 않으면
  `[[Prototype]]`링크를 따라 올라가면서 프로토타입 객체에서 검색


## 객체 리터럴 방식으로 생성된 객체의 프로토타입 체이닝

- `hasOwnProperty()`는 myObject의 prototype -> Object.prototype의 메서드

```js
var myObject = {
 name: 'foo'
}
console.log(myObject.hasOwnProperty('name')); // true
```


## 생성자 함수로 생성된 객체의 프로토타입 체이닝

- `hasOwnProperty()`는 Person()의 prototype -> Person.prototype -> Object.prototype의 메서드

```js
function Person(name) {
    this.name = name;
}
var foo = new Person('foo')
console.log(foo.hasOwnProperty('name')); // true
```


## 다양한 함수의 형태


### 화살표 함수

- this, super 바인딩 없음
- ❗ methods로 사용 불가
- new.target 키워드 없음
- 스코프 지정에 사용하는 call, apply, bind methods 불가능
- 생성자 사용 불가
- yield를 함수 내부에서 사용 불가

```javascript
 (param1, param2, …, paramN) => expression
 (param1, param2, …, paramN) => { return expression; }
```


### 고차함수

- 함수를 인자로 받거나 함수를 결과로 리턴하는 함수


### 콜백(callback) 함수

- 특정 조건, 이벤트 발생 시 호출되는 함수 (이벤트리스너)
- 함수의 인자로 넘겨져 코드 내부에서 호출되는 함수
- 콜백함수도 기본적으로 함수이므로 `this` 바인딩이 없지만 **addEventListener** 같은 경우는 `this` 바인딩이 되어 있다. -> <u>함수 내부에서 명시적으로 `this`바인딩</u>을 하기 때문
- 콜백함수를 사용하는 함수
  - eventlistener() 이벤트 리스너
  - setInterval() 타이머 함수
  - forEach(), map(), reduce 등 배열 함수

콜백 함수 특징

1. 호출 시점에 대한 제어권은 콜백함수를 받는 함수에게 있다.
2. 인자와 그 순서에 대한 제어권도 콜백함수를 받는 함수에게 있다.
3.

setTimeout()

- 타이머가 만료되면 주어진 함수나 코드를 실행
- 실행의 주체가 되어 함수 실행의 제어권을 가짐
- `clearTimeout()`을 통해 타이머 취소


### 함수를 리턴하는 함수

```js
var self = function () {
 console.log('a');
 return function () {
  console.log('b');
 }
}
self = self(); // a
self(); // b
```

함수 리턴값

1. 리턴 값 미지정 시: 일반 함수, 메서드 -> undefined
2. 리턴 값 미지정 시: 생성자 함수 -> 생성된 객체


### 즉시 실행 함수 표현 (IIFE)

- Immediately Invoked Function Expression

- 정의와 동시에 즉시 실행되는 함수

```javascript
(function (parameters) {    
    statements
})();
```

```js
(function (x) {
    console.log(x*x);
})(5); // 25
```


### 내부 함수

- 함수 내부에서 함수를 정의
- 변수가 존재하지 않으면 자신의 부모 함수의 변수에 접근
- 내부 함수는 부모 함수 내에서만 호출 가능

```js
function parent() {
  var a = 1;
  var b = 2;
  function child() {
    var b = 3;

    console.log(a,b); 
  }
  child()
}
parent() // child() -> 1,3
child() // ReferenceError: child is not defined
```

- 함수 외부에서 내부 함수를 호출하는 방법

```js
let func_parent = function () {
  var a = 1;
  var b = 2;
  function func_child() {
    var b = 3;

    console.log(a, b);
  }
  func_child();
  return func_child;
};
var inner = func_parent(); // 내부 함수를 리턴값으로 넘겨 받음
console.log(inner); // ƒ func_child() {...}
inner(); // 1,3

```

1. inner() 실행
2. func_child() 호출
3. console.log(a, b);
4. a는 정의되어 있지 않아 부모 함수에 있는지 확인하여 있으면 사용 (클로저)
   b는 정의되어 있음
5. 1,3 출력


### 제너레이터 함수(generator)

반복 가능한 객체를 통해 값을 반환하는 객체

- `function*` 키워드를 사용하여 선언
- `generator.next()`를 사용하면 다음 yield문에서 멈추고 value와 done을 가지는 객체를 반환
- `value`: yield에 의해 반환되는 값
- `done`: 제너레이터 함수가 종료되었는지 여부를 나타내는 Boolean 값

```javascript
function* generatorFunction() {
  yield 'First value';
  yield 'Second value';
  return 'Done';
}

const generator = generatorFunction();

console.log(generator.next()); // { value: 'First value', done: false }
console.log(generator.next()); // { value: 'Second value', done: false }
console.log(generator.next()); // { value: 'Done', done: true }

```

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

