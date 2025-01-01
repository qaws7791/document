# JSX

* JavaScript 코드 내에서 HTML과 유사한 코드를 작성하는 JavaScript의 구문 확장
* React에서 엘리먼트를 작성하기 위해 Meta에서 개발
* html을 jsx로 변환하는 사이트 https://transform.tools/html-to-jsx
* compiler나 transpiler에 의해 일반 JavaScript 코드로 변환될 수 있다

## JSX 장점

* ✅HTML과 유사하여 읽기 쉬움
* ✅자동으로 이스케이프하여 더 안전한 코드로 컴파일된다
* ✅TypeScript, JSDoc, propTypes 등을 활용하여 더 안전하게 타이핑할 수 있다
* ✅컴포넌트 기반 아키텍처를 지향하여 코드를 모듈화하고 관리하기 쉽다
* ✅React에서 시작되었지만, 현재는 다른 라이브러리나 프레임워크에서도 널리 사용된다

## JSX 단점

- JSX라는 문법에 대한 학습 필요
- JSX 코드를 변환하기 위한 컴파일러 필요
- HTML과 유사한 코드를 JavaScript와 혼합하여 로직과 표현의 분리가 어려워 짐
- JSX 인라인에서 표현식은 가능하지만 블록은 지원하지 않음 따라서 if, for 과 같은 블록을 사용할 수 없음



## JSX에서 자바스크립트로

jsx 문법은 브라우저가 이해할 수 없기 때문에, 브라우저가 이해할 수 있는 순수 JavaScript로 변환하는 과정이 필요하다. 이때 Babel과 같은 도구를 사용할 수 있다

AST(Abstract Syntax Tree): 추상 구문 트리

1. **토큰화**
   JSX 코드(문자열)를 토큰으로 분해한다. 변수의 이름, 객체의 키 및 값 등을 저장. 핵심 단어를 특정 값에 매핑하기도 한다.
2. **구문  분석**
   토큰을 기반으로 AST를 생성한다. AST는 코드의 구조를 계층적으로 표현한다
3. **변환**
   생성된 AST를 다른 형태로 변환한다. React에서는 React 함수 호출 형태로 변환한다
4. **코드 생성**
   변환된 AST를 JavaScript 코드로 생성한다



## JSX 에서 표현식 넣기

* `{}` 중괄호 안에서는 JavaScript 표현식을 사용할 수 있다.

```jsx
const name = 'John';
const Element = () => <h1>My name is {name}</h1>;
```

```jsx
const a = 1;
const b = 2;
const Component = () => <div>SUM is {a + b}</div>
```



## JSX에서 속성 넣기

* `속성={값}` `속성="문자열"` 형태
* 자바스크립트 로직과 변수를 마크업에 사용할 수 있다.

```jsx
const color = "red"
const element = <h1 color="red">My name is {name}</h1>;
const element = <h1 color={color}>My name is {name}</h1>;
```



## 속성명은 CamelCase를 사용

속성 명은 `CamelCase`를 사용하여 작성(`onclick` -> `onClick`)

```jsx
// ❌
<button onclick={handleClick}></button>
```

```jsx
// ✅ CamelCase 사용
<button onClick={handleClick}></button>
```



## 모든 태그는 닫혀야 한다

```jsx
// ❌
<br>
<img>
<input>
<li>
```

```jsx
// ✅
<br/>
<img/>
<input/>
<input></input>
<li>
```



## Fragment(<)

### Fragment란?

`<`는 자바스크립트의 연산에서 사용되며 연산 외부에서 사용될 때는 문법 오류를 발생시킵니다

```
SyntaxError: Unexpected token '<'
```

프래그마는 컴파일러에게 추가 정보를 제공하는 지시어로 사용됩니다. 

다른 프래그마로는 `"use strict"`, `"use client"`, `"use server"`가 있습니다



### **최상위 요소는 하나여야 한다.** 

->`React.createElement`를 사용하여 객체를 만들기 위해서는 하나만 있어야 하기 때문

최상위 요소를 2개 사용해야 할 때는 의미 없는 div태그 보다는 `<></>` Fragment를 사용하여 감싼다. 

```jsx
// ❌ 최상위 요소가 2개이다.
<header>
    <nav></nav>
</header>
<section>
    <ul>
	    <li></li>
    	<li></li>
    </ul>
</section>
```

```jsx
// ❌ 최상위 요소가 2개이다.
<>
<header>
    <nav></nav>
</header>
<section>
    <ul>
	    <li></li>
    	<li></li>
    </ul>
</section>
</>
```

