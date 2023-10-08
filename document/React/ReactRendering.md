# 렌더링



## 컴포넌트 렌더링

### 화면 업데이트 단계

- Trigger(트리거)
- Render(렌더)
- Commit(커밋)



### 렌더링 시점

렌더링은 2가지 이유로 트리거될 수 있다.

- 컴포넌트가 Mount될 때 (초기렌더링)
- 컴포넌트의 상태가 업데이트될 때(리렌더링)

### 

### DOM 변경사항 커밋

- 초기 렌더링 시 `appendChild` DOM API를 사용
- 리렌더링 시 최신 렌더링 결과과 DOM이 일치하도록 최소한의 변경 사항을 적용

> 렌더링 간에 차이가 있는 경우에만 DOM 노드를 변경
>

```jsx
// ❌ 매번 새로운 ChildCo// ❌ BAD!mponent 참조를 생성
function ParentComponent() {
  function ChildComponent() {
    return <div>Hi</div>;
  }

  return <ChildComponent />;
}
```

```
// ✅ 다른 컴포넌트로 분리하여 사용
function ParentComponent() {
  function ChildComponent() {
    return <div>Hi</div>;
  }

  return <ChildComponent />;
}
```

## 이벤트 처리

* 캐멀 케이스 사용
* 함수로 이벤트 핸들러 전달

```jsx
<button onClick={activateLasers}>
  Activate Lasers
</button>
```

* `false` 반환 만으로 기본 동작이 방지 되지 않는다. -> `preventDefault()` 호출 필요

## 조건부 렌더링

### if 문 조건에 따른 렌더링

```jsx
if(isLogged) {
	<h1>로그인 상태</h1>
} else {
	<h1>로그아웃 상태</h1>
}
```

### && 연산자 렌더링

* `&&`앞의 조건이 `true`일 때 뒤의 엘리먼트가 출력
* `true && expression` -> `expression`
* `false && expression` -> false

```jsx
{ isLogged && <h1> 로그인 상태입니다.</h1>}
```

### 삼항 연산자 렌더링

* `condition` ? `exprIfTrue` : `exprIfFalse`

* ```jsx
  {isLogged ? '로그인 상태' : '로그아웃 상태'}
  ```

### 렌더링 안하기

* 엘리먼트가 아닌 `null`을 반환하여 렌더링을 막을 수 있다.

```jsx
const LoginBanner = (props) => {
	if(!isLogged) {
		return null;
	}
	return (
        <div>
        로그인 상태입니다.
        </div>)
}
```

## 리스트와 key

### 배열로 컴포넌트 렌더링

* `map()`함수를 통해 리스트를 각각 엘리먼트로 만들어 반환
* `key` 필요 -> 명시하지 않으면 map 함수의 index를 사용

```jsx
item = [2,4,6,8]
return(
    <ul>
        {items.map((item,index) => <li key={index}>{item}</li>)}
    </ul>)
```

### Key

* React가 배열 요소의 식별을 위해 사용하는 값
* 형제 간에 고유하게 식별할 수 있는 문자열을 지정
* 변경될 수 있는 값을 지정해서는 안된다.
* 요소 삭제, 변경에 따른 순서 변경이 일어날 수 있는 경우 인덱스 값 사용은 피하는 것이 좋다

```jsx
// ❌ 2번 인덱스의 6이 사라졌지만 리액트는 8이 사라진 것으로 생각할 수 있다
item = [2,4,6,8]
item = item.splice(2,1) // [2,4,8]
return(
    <ul>
        {items.map((item,index) => <li key={index}>{item}</li>)}
    </ul>)

```

* `map()`가 반환하는 엘리먼트 혹은 컴포넌트에 key값을 지정
* `key`값은 같은 배열 안에서만 고유하면 되며, 다른 배열의 `key` 값과 같은 값이 있어도 사용할 수 있다.

```jsx
const Item = (props) => {
    return <li>{props.children}</li>
}
const item = [2,4,6,8]
return(
    <ul>
        {items.map((item,index) => 
        	<Item key={item.toString()}>{item}</Item>
        )}
    </ul>)
```

* `key` 값이 props를 넘기는 것 처럼 보이지만 `props`로 전달되지 않는다.
* 컴포넌트로 `key`값을 `props`로 넘기고 싶다면, `key`와 같은 다른 `prop`를 명시하여 전달

## React.memo

* 고차 컴포넌트 형태로 사용
* props가 동일하면 마지막으로 렌더링된 결과를 재사용하여 성능을 최적화
* props는 **얕은 비교**로 수행되고, 두 번째 인자로 비교 함수를 지정할 수 있다.
* 비교함수가 true를 반환하면 같은 상태로 간주하고, false를 반환하면 다시 렌더링된다.

> 함수를 props로 전달하면 함수가 매번 새로운 함수로 정의되어 다시 렌더링된다.
>
> 이럴 때는 비교함수를 통해 구체적인 규칙을 지정할 수 있다.

```jsx
function MyComponent(props) {
  /* props를 사용하여 렌더링 */
}
function areEqual(prevProps, nextProps) {
  /*
  nextProps가 prevProps와 동일한 값을 가지면 true를 반환하고, 그렇지 않다면 false를 반환
  */
}
export default React.memo(MyComponent); 
//export default React.memo(MyComponent, areEqual);
```

이런 의문이 들 수 있다.  왜모든 컴포넌트에 기본적으로 memo()를 사용하지 않을까?

* 메모제이션 기능은 추가적인 자원과 처리를 필요로 한다. 이전 props와 새로운 props를 저장하고 비교하여 props가 변경되었는지 알아내야 하기 때문이다.
* 일반적으로 대부분의 컴포넌트는 자주 업데이트 되지 않는다.

[https://react.dev/reference/react/memo#should-you-add-memo-everywhere](https://react.dev/reference/react/memo#should-you-add-memo-everywhere)