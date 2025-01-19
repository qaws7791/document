---
description: Console API에 대한 설명
---

# Console API

`console`객체는 브라우저의 디버깅 콘솔에 접근할 수 있는 메서드를 제공한다

`console` 객체는 **아무 전역 객체**에서나 접근할 수 있다



### assert()

주어진 가정이 거짓인 경우 콘솔에 오류 메시지를 출력

(참인 경우, 아무것도 하지 않음)

```javascript
console.assert(assertion, obj1 [, obj2, ..., objN]);
console.assert(assertion, msg [, subst1, ..., substN]);
```

`assertion` : 표현식

`objN` :  출력에 사용할 객체

```javascript
Assertion failed: {
    errorMsg: "the # is not even"
    number: 3
}
```



### clear()

(가능한  경우) 콘솔에 기록된 메시지를 모두 지움

```javascript
console.clear();
```



### count()

특정 `count()`의 호출 횟수를 출력

```javascript
console.count([label]);
```

`label`: _string 타입_. label을 지정하지 않으면 `default` 로 지정.

label에 따라 별도의 카운트를 유지 관리

```javascript
console.count(); // default: 1
console.count('count'); // count: 1
```



### debug()

메시지를 "디버그" 중요도로 콘솔에 출력

로그 수준은 "Debug" 또는 "Verbose"

```javascript
console.debug(obj1 [, obj2, ..., objN]);
console.debug(msg [, subst1, ..., substN]);
```



### dir()

주어진 자바스크립트 객체 속성을 펼치고 닫을 수 있는 계층목록으로 표시

```javascript
console.dir(object)
```



### dirxml()

주어진 XML/HTML 요소의 자식 요소를 인터랙티브한계층 목록으로 표시

```java
console.dirxml(object)
```



### error()

콘솔에 **에러 메시지**를 출력

```javascript
console.error(obj1 [, obj2, ..., objN]);
console.error(msg [, subst1, ..., substN]);
```



### group()

웹 콘솔 로그에 새로운 인라인 그룹을 생성

`console.groupEnd()` 호출 전까지 다음 모든 출력이 추가 수준으로 들여쓰기 됨

```javascript
console.group([label]);
```



## groupCollapsed()

`group()`와 비슷하지만, 그룹이 닫힌 상태로 생성되어 내용을 보려면 펼쳐야 한다

```javascript
groupCollapsed();
groupCollapsed(label);
```



### groupEnd()

웹  콘솔 로그의  현재 인라인 그룹에서 나옵니다

```javascript
groupEnd();
```



### info()

웹 콘솔에 정보 메시지를 출력

```javascript
info(obj1)
info(obj1, /* …, */ objN)
info(msg)
info(msg, subst1, /* …, */ substN)
```



### log()

웹 콘솔에 메시지를 출력

```javascript
log(obj1)
log(obj1, /* …, */ objN)
log(msg)
log(msg, subst1, /* …, */ substN)
```



#### 느린 로깅

console log를 출력한 때에는 obj 객체가 빈 객체지만 펼쳐보면 prop가 보인다

로그 메시지는 개체가 기록된 때가 아닌 **개체를 처음 본 시점의 개체 내용이 표시**

```javascript
const obj = {};
console.log(obj); // {} -> 펼치면 prop: 123이 표시됨
obj.prop = 123;
```

#### 심층 복사를 통해 기록된 시점의 데이터를 보기

```javascript
console.log(JSON.parse(JSON.stringify(obj)));
```

### table()

데이터를 표로 표시

```javascript
table(data)
table(data, columns)
```

`data` : 표시할 데이터. 배열 또는 객체

`columns` : 출력에 포함할 열을 이름을 포함하는 배열



행: 배열의 각 요소 또는 객체의 열거 가능한 속성

열: 첫 번째 열은 배열의 index 값 또는 객체의 속성 이름



### time()

타이머를 시작.

timeEnd()를 호출하여 밀리초 단위로 경과된 시간을 출력.

고유한 이름을 지정하여 구분

페이지당 최대 10,000개의 타이머를 실행 가능

```javascript
time()
time(label)
```

label을 생략하면 "default" 레이블이 사용됨



### timeEnd()

이전에 시작된 타이머를 중지

```javascript
timeEnd()
timeEnd(label)
```

label을 생략하면 "default" 레이블이 사용됨



### timeLog()

이전에 시작된 타이머의현재 값을 기록

```javascript
timeLog()
timeLog(label)
timeLog(label, val1)
timeLog(label, val1, /* …, */ valN)
```

label을 생략하면 "default" 레이블이 사용됨

`valN` : 타이머 출력 후 함께 출력할 추가 값들



### trace()

호출  시점의 스택을 출력

```javascript
trace()
trace(object1, /* …, */ objectN)
```

```javascript
function foo() {
  function bar() {
    console.trace();
  }
  bar();
}

foo();
//
bar
foo
<anonymous>
```



### warn()

경고 메시지를 출력

```
warn(obj1)
warn(obj1, /* …, */ objN)
warn(msg)
warn(msg, subst1, /* …, */ substN)

```
