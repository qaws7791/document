# UseEffect

- 부수적 효과를 사용해야 하는데 `렌더링 코드`, `이벤트 핸들러`만으로 충분하지 않을 때
- 화면이 업데이트되고 커밋이 끝나면 효과가 실행

## UseEffect 사용법

### 참조

setup: 효과를 수행하기 위한 함수

dependencies: setup 내부에서 참조하고 있는 react의 값들 배열.  리렌더링 시마다 `Object.is`메서드를 사용하여 이전 종속성과 현재 종속성을 비교하여 같으면 효과를 건너뛴다.

```jsx
useEffect(setup, dependencies?)
```

### 사용법

1. `useEffect` 선언하기
   - useEffect는 기본적으로 렌더링 후에 실행된다.
2. `dependencies array` 지정하기
   - 필요한 때에만 실행되도록 종속성을 지정한다.
3. `cleanup  function` 추가하기
   - 컴포넌트가 DOM에서 제거될 때 처리할 함수를 지정한다.

### 외부와 연결 및 연결해제

- socket 연결과 같은 외부 연결 후 연결 해제

```jsx
useEffect(() => {
    const connection = createConnection();
    connection.connect();
    return () => connection.disconnect();
} , [])
```



### 이벤트 등록 및 제거

- eventListener를 등록하고 해제
- 안쓰는 이벤트는 항상 그때 그때 해제해야 한다.

```
useEffect(() => {
  function handleScroll(e) {
    console.log(window.scrollX, window.scrollY);
  }
  window.addEventListener('scroll', handleScroll);
  return () => window.removeEventListener('scroll', handleScroll);
}, []);
```



### 2씩 증가하는 카운터

- React에서 Strict모드가 활성화되면 두 번씩 렌더링된다.
- 적절한 정리 함수를 만들어 놓지 않으면 setInterval이 두 번 실행되어 2씩 증가하게 된다.
- **Strict 모드의 문제가 아니다**. 컴포넌트는 여러 번 렌더링되더라도 복원력을 가지고 있어야 한다.

```jsx
export default function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }
    setInterval(onTick, 1000);
  }, []);

  return <h1>{count}</h1>;
}
```

```jsx
...  
useEffect(() => {
    function onTick() {
      setCount(c => c + 1);
    }
    const id = setInterval(onTick, 1000);
    return () => {
        clearInterval(id)
    }
  }, []);
...
```



### 데이터 fetch하기

```jsx
useEffect(() => {
  let isFetched = false;

  async function startFetching() {
    const json = await fetchTodos(userId);
    if(isFetched) return
      
    //json을 다루는 로직
      setTodos(json)
  }

  startFetching();
    
  return () => {
    isFetched = true;
  };
}, [userId]);
```



### 앱 로드당 한 번 실행하기

- 일반적으로 코드의 최상위(컴포넌트 밖)에는 변수(let,var)를 선언하지 않는다.
- 하지만 앱을 최초 로드할 때 한 번만 실행해야 하는 경우
- 최상위 변수를 선언하여 useEffect가 실행되었는지 확인할 수 있다

```jsx
let didInit = false;

function App() {
  useEffect(() => {
    if (!didInit) {
      didInit = true;
      // ✅ Only runs once per app load
      loadDataFromLocalStorage();
      checkAuthToken();
    }
  }, []);
  // ...
}
```

- 독립적으로 수행할 수 있는 함수라면 컴포넌트 밖에서 호출할 수도 있다.
- 하지만 해당 함수가 오래 걸린다면 App 컴포넌트를 로드하는 데 지연이 발생하게 되므로 남용해서는 안된다

```jsx
if (typeof window !== 'undefined') { // Check if we're running in the browser.
   // ✅ Only runs once per app load
  checkAuthToken();
  loadDataFromLocalStorage();
}

function App() {
  // ...
}
```



## 무한루프

- 렌더링 후 useEffect 안에서 state 변경 -> 리렌더링 ->렌더링 후 useEffect 안에서 state 변경 ->... 무한 반복

```
const [count, setCount] = useState(0);
useEffect(() => {
  setCount(count + 1);
});
```



## 불필요한 효과 제거

- 외부 시스템과의 동기화가 필요하지 않으면 효과가 필요한 것이 아닐 수 있다.



### 렌더링에 필요한 데이터 만들기

- 렌더링을 위해 데이터를 변환하는 데 효과를 사용할 필요가 없다.  
  ex. 컴포넌트의 최상위 수준에서 변환하고 useMemo를 사용하여 데이터를 메모제이션하면 된다

```jsx
const [todos, setTodos] = useState([]);
const doneTodos = useMemo(()=> todos.filter(todo => todo.isDone), [todos])
```



### prop 변경 시 상태를 재설정하기

- prop 값인 userId이 변경될 때 마다 comment를 초기화를 해야 한다
- useEffect를 사용하면, 일단은 오래된 값으로 렌더링 된 후에 
- useEffect를 통해 다시 새로운 값으로 변경되고 리렌더링된다

```jsx
//❌ userId 변경 시 comment를 초기화
export default function ProfilePage({ userId }) {
  const [comment, setComment] = useState('');

  useEffect(() => {
    setComment('');
  }, [userId]);
  // ...
}
```



### 이벤트 핸들러에 넣기

```jsx
function Toggle({ onChange }) {
  const [isOn, setIsOn] = useState(false);

  // 🔴 useEffect를 사용할 필요가 없다
  useEffect(() => {
    onChange(isOn);
  }, [isOn, onChange])

  function handleClick() {
    setIsOn(!isOn);
  }

  // ...
}
```



## 종속성 배열

- 종속성 배열은 useEffect의 Effect 내에서 사용하는(의존하는) react 값(props와 state 그리고 이들로 계산된 값들)의 목록이다
- 시간에 따라 변할 수 있는 값들이기 때문에 배열로 변화를 감지한다
- 따라서 전역 변수, 상수와 같은 react 값이 아닌 데이터들은 종속성 배열에 넣지 않아도 된다.
- 빈 종속성 배열은 컴포넌트가 마운트 될 때 Effect가 실행되고, 마운트 해제될 때 정리 함수를 실행한다

### 멈추는 카운터

- 해당 카운터 `setInterval()`을 사용하여 1초마다 `increment` 값을 `count`에 더하는 타이머 컴포넌트이다
- 일반적인 경우에는 잘 동작하는 것처럼 보이지만, 증가 또는 감소 버튼을 1초에 여러 번 클릭하면 타이머가 멈춘것처럼 보인다.
- 그 이유는 useEffect에서 `increment` 값이 변경될 때마다 `setInterval`이 다시 시작되기 때문이다.

```jsx
//❌ 1초에 여러 번 증가 버튼을 누르면 타이머가 멈춘 것 처럼 보입니다
import { useState, useEffect } from 'react';
import { experimental_useEffectEvent as useEffectEvent } from 'react';

export default function Timer() {
  const [count, setCount] = useState(0);
  const [increment, setIncrement] = useState(1);

  useEffect(() => {
    const id = setInterval(() => {
      setCount(c => c + increment);
    }, 1000);
    return () => {
      clearInterval(id);
    };
  }, [increment]);

  return (
    <>
      <h1>
        Counter: {count}
        <button onClick={() => setCount(0)}>Reset</button>
      </h1>
      <hr />
      <p>
        Every second, increment by:
        <button disabled={increment === 0} onClick={() => {
          setIncrement(i => i - 1);
        }}>–</button>
        <b>{increment}</b>
        <button onClick={() => {
          setIncrement(i => i + 1);
        }}>+</button>
      </p>
    </>
  );
}

```

- increment값을 useRef를 사용하여 setCount에 넘겨주면 useEffect의 의존성 배열에 increment를 넣지 않아도 된다.
- 따라서 increment 값이 변경되더라도 setInterval 함수가 재시작되지 않는다.

```jsx
...
const [count, setCount] = useState(0);
const incrementRef = useRef(increment);

  useEffect(() => {
    incrementRef.current = increment;
  }, [increment]);

  useEffect(() => {
  
    const id = setInterval(() => {
      setCount(c => c + incrementRef.current);
    }, 1000);

    return () => {
      clearInterval(id);
    };
    
  }, []);
...
```

