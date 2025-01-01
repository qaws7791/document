# UseRef

## 사용하는 이유

### 리렌더링 없이 정보를 기억

- useRef는 정보를 저장하지만, useState와 달리 변경되어도 리렌더링이 트리거 되지 않는다.

## 사용법

```jsx
const ref = useRef(initialValue)
```

- `ref.current`를 통해 값을 읽고 변경할 수 있다.
- `ref.current`는 일반 자바스크립트 객체이다.
- **렌더링**에 해당 개체를 보유할 때 이 개체를 변경해서는 안된다.
- **렌더링** 중에 읽거나 쓰면 안된다 -> 컴포넌트의 동작을 예측하기 어려워진다.
  -> 대신 useState를 사용

### Timer 함수 id 저장

1. `setInterval`, `setTimeout`함수는 타이머 id 값을 반환한다
2. `useRef`로 id값을 저장한다
3. `clearInterval(ref.current)`,`clearTimeout(ref.current)`를 호출하여 타이머를 중지

```jsx
const intervalRef = useRef(null);
function handleStart() {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
        setNow(Date.now());
    }, 10);
}

function handleStop() {
    clearInterval(intervalRef.current);
}
```



### DOM 엘리먼트 참조

1. html 요소에 ref 속성을 통해 참조를 넘겨준다
2. `Mount`된 이후에 `ref.current`로 DOM 요소에 접근할 수 있다.
3. `Unmount`되면 `ref.current`는 `null` 값으로 변경된다.

```jsx
const headerRef = useRef(null)
return (<header ref={headerRef}></header>)
```



## Ref 콜백 함수

- 해당 DOM 노드가 화면에 표시되면(DOM 트리에 있을 때) node는 해당 `DOM 노드 참조` 값을 가짐
- DOM 트리에서 제거되면 node는 `null` 값을 가짐

### ref 콜백이 변경될 때마다 실행

- ref 콜백은 변경될 때마다 실행된다.
- 따라서 아래와 같이 인라인 함수는 리렌더링 때마다 실행된다.
- 처음에는 마운트 된 이후에 실행되므로 DOM 노드가 찍히고
- 다음 리렌더링 부터는  null이 찍힌 후에 DOM 노드가 찍힌다.

```jsx
<div ref={(node) => console.log(node)} />
//<div></div>
//null
//<div></div>
//null
//<div></div>
//null
```

- 예를 들어 useCallback을 통해 리렌더링 시에도 변경되지 않는 함수가 있다면 
- 리렌더링 시에도 콜백이 실행되지 않는다.

```jsx
const consoleLog = useCallback((node) => {
	console.log(node);
}, []);
return(<div className="App" ref={consoleLog}>)
//<div></div> 최초 렌더링 시에만 실행됨
```

### Map 객체를 통한 ref 관리

- 많은 DOM 노드 참조를 기억하기 위해서 배열이나 Map 객체를 사용할 수 있다.
- 하나의 useRef에 Map 객체를 저장하고 해당 Map 객체 안에 id값을 key로 ref를 각각 저장

```jsx
<ul>
    {catList.map(cat => (
        <li
            key={cat.id}
            ref={(node) => {
                const map = getMap();
                if (node) {
                  map.set(cat.id, node);
                } else {
                  map.delete(cat.id);
                }
            }}
        >
        {cat.name}
        </li>
    ))}
</ul>
```



## forwardRef로 ref 노출

### 참조

- 컴포넌트는 기본적으로 DOM 노드(ref)를 노출하지 않는다.
- forwardRef를 사용하면 기존 엘리먼트처럼 컴포넌트에서 ref속성을 받을 수 있다.

```jsx
const SomeComponent = forwardRef(render)
```

```jsx
const Input = forwardRef((props, ref) => {
  return <input {...props} ref={ref} />;
});
```



## Ref와 State의 차이점

- 일반 변수는 리렌더링 시마다 새롭게 초기화된다.
- useRef는 리렌더링 시에도 생존한다
- useState는 리렌더링 시에 불변값이고, (같은 값이 아닌) 다른 값으로 변경되면 리렌더링을 트리거 한다.

|          | useRef(initialValue)                                         | useState(initialValue)                                       |
| -------- | ------------------------------------------------------------ | ------------------------------------------------------------ |
| 반환값   | `{ current: initialValue }`                                  | `[value, setValue]`                                          |
| 리렌더링 | 변경할 때 다시 렌더링을 트리거하지 않습니다.                 | 변경할 때 다시 렌더링을 트리거합니다.                        |
| 값 변경  | `current`값을 변경 가능 -> 렌더링 프로세스 외부에서 값을 수정하고 업데이트할 수 있습니다 . | "불변" -  상태 설정 기능을 사용하여 상태 변수를 수정 -> 리렌더링이 대기열에 추가 |
| 읽기     | <u>렌더링하는 동안 `current` 값을 읽거나 쓰면 안 됩니다</u>  | 언제든지 상태를 읽을 수 있습니다. 그러나 각 렌더링에는 변경되지 않는 자체 상태 [스냅샷이 있습니다.](https://react.dev/learn/state-as-a-snapshot) |



## ref의 일반적 사용

- timer 함수의 id 값 저장
- DOM element 조작을 위한 값(참조)을 저장
- JSX 계산에 필요없는 값 저장
