# React Hooks

## Hooks

함수 컴포넌트에서 React state와 생명주기 기능(lifecycle features)을

“연동(hook into)“할 수 있게 해주는 함수

Class없이 React를 사용 -> 함수형 컴포넌트

> Hook은 계층의 변화 없이 상태 관련 로직을 재사용할 수 있도록 도와줍니다.

<figure><img src="../../.gitbook/assets/hook-flow.png" alt=""><figcaption></figcaption></figure>

### Hook 2가지 규칙

* 최상위 레벨에서만 Hook 호출 (반복문, 조건문, 중첩된 함수 내 호출 X)
* React 함수 컴포넌트 또는 `Custom Hook` 내에서만 호출
* Hook 은 기능 단위로 여러 개 나누는 것이 좋다.

> 규칙을 지키기 위한 플러그인 https://www.npmjs.com/package/eslint-plugin-react-hooks

### Hook 발생 순서

1. React 렌더링
2. `useLayoutEffect` 호출
3. 브라우저 DOM에 실제 화면 그리기
4. `useEffect` 호출

* 

### useEffect

* 함수형 컴포넌트 안에서 데이터 조작, DOM 조작과 같은 `side effects`를 실행
* React class의 `componentDidMount` 나 `componentDidUpdate`, `componentWillUnmount` 를 수행
* `clean-up`이 필요한 side effect와 필요없는 side effect로 나뉜다.

> Hook는 `생명주기 메서드`와 달리 코드가 무엇을 하는지에 따라 나눌 수 있어 읽기 쉽다.

#### 기본 사용법

* 첫 번째 렌더링(`componentDidMount()`)과 이후 모든 업데이트(`componentDidUpdate()`)시 실행

```jsx
//첫 번째 렌더링과 이후 모든 업데이트 시 실행 
useEffect(() => {
    console.log("Updated")
  });
```

#### clean-up이 필요한 effect

* **이벤트 리스너, 데이터 구독**과 같은 초기 설정, 마지막 설정이 필요한 경우를

  clean-up이 필요한 effect로 볼 수 있다.

* 엘리먼트를 마운트할 떄와 언마운트 할 때 두 가지 시점으로 볼 수 있다.

```jsx
//Class형
componentDidMount() {ChatAPI.subscribeToFriendStatus(...)}
componentWillUnmount() { ChatAPI.unsubscribeFromFriendStatus(...)}
```

* 함수형에서는 `return` 반환 값을 통해 정리를 위한 함수를 전달하여 언마운트 시 실행한다.

```jsx
//Function형
useEffect(() => {
    ChatAPI.subscribeToFriendStatus(...);
    return function cleanup() {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange);
    };
  });
```

#### 데이터 변경을 감지하여 Effect 실행

* 기존의 클래스형에서는 이전의 상태(`prevProps, prevState`)와 현재 상태 비교를 통해 변화를 감지하여 실행할 수 있다.

```jsx
//Class형
componentDidUpdate(prevProps, prevState) {
  if (prevState.count !== this.state.count) {
    document.title = `You clicked ${this.state.count} times`;
  }
}
```

* `useEffect`에서는 \*\*`의존 관계 배열`\*\*을 통한 배열의 요소가 변경되었을 때만 실행하도록 할 수 있다.

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // count가 바뀔 때만 effect를 재실행합니다.
```

### useMemo

함수에 의해 반환된 값을 메모이제이션하여 반환

💥불필요한 함수 재호출 방지💥

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

* `useMemo()`는 콜백함수에 의해 계산된 값을 기억하고 있다가 `의존 관계 배열`이 변경될 때만 실행되어 계산된 값을 반환한다.
* 함수형 컴포넌트를 쓰는 react에서는
* useMemo를 컴포넌트에 사용하여 컴포넌트의 불필요한 리렌더링을 방지한다.

```jsx
const WordCount = ({ children= ""}) => {
    //const words = children; // 렌더링마다 선언되어 useEffect가 실행됨
	const words = useMemo(() => children.split(" "), [children]);
    
    useEffect(() => {
	console.log("fresh render");
	},[words]);
    return (...);
}
```

### useCallback

함수 자체를 메모이제이션하여 반환

💥불필요한 함수 재정의 방지💥

```javascript
const cachedFn = useCallback(fn, dependencies)
```

* 아래 함수는 isOpen 불리언값을 전달받아 false일 경우 onClose()를 호출한다
* 함수내에서 호출되는 onClose()함수가 같다면
* 매번 리렌더링 시 불필요한 함수 재정의를 하지 않도록 하면 성능을 최적화할 수 있다
* `useCallback`은 의존 배열 전달 받아 `의존 관계 배열`에 속하는 값이 변경되었을 때만 함수를 재정의한다.

```typescript
 const handleOpenChange = React.useCallback(
    (isOpen: boolean) => {
      if (!isOpen) {
        onClose?.();
      }
    },
    [onClose],
  );
```

### useMemo vs useCallBack

두 가지 모두 메모이제이션을 한다는 관점에서 리렌더링을 방지하여

성능 최적화를 하는 hooks이다

* `useMemo`는 함수 결과를 메모이제이션한다.
* `useCallback`은 함수 자체를 메모이제이션한다.

### useLayoutEffect

* useEffect와 동일하지만 모든 DOM이 변경된 후, 브라우저가 화면을 그리기 이전에 동기적으로 실행
* 일반적으로 화면 레이아웃과 관련된 작업을 수행하는데 사용

```jsx
const useWindowSize = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    
    const resize = () => {
		setWidth(window.innerWidth);
    	setHeight(window.innerHeight);
    }
    
    useLayoutEffect(() => {
		window.adddEventListener("resize", resize);
    	resize();
    	return () => window.removeEventListener("resize", resize);
    }, []);
    
    return [width,height];
}
```

### useReducer

* `Array.reduce`처럼 현재 상태를 사용해 새로운 상태를 업데이트하는 함수
* `dispatch(action)`를 호출 -> `reducer(state,action)` 수행-> New State 업데이트
* `reducer`는 현재 상태(state)와 액션 객체(action)를 통해 다음 상태를 업데이트
* `action`의 `type`값은 대문자와 언더스코어(\_)로 작성

```jsx
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

#### useReducer를 통한 State 병합

* 위에서 State를 병합하는 방법으로 setState(...state,newState)를 사용하였다.
* 하지만 코드를 실수로 setState(newState)와 같이 작성하면 state가 전부 대체될 위험이 있다.
* `useReducer()`를 통해 이를 방지하고, State 병합을 쉽게 할 수 있다.

```jsx
const foo = { name: "foo", age: 20 };
const [user, setUser] = useState(foo); 
//age 변경
setUser({ age: 22}); // user -> { age: 22 }
setUser({ ...user, age: 22 }); // user -> { name: "foo", age: 22 }
```

```jsx
// useReducer를 통한 age 변경
const [user, setUser] = useReducer(
	(user,Changes) => ({...user, ...Changes}),
	foo
);
setUser({ age: 22 }); // user -> { name: "foo", age: 22 }
```

## 