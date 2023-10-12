# UseRef

## 사용하는 이유

### 리렌더링 없이 정보를 기억

- useRef는 정보를 저장하지만, useState와 달리 변경되어도 리렌더링이 트리거 되지 않는다.

## 사용법

```jsx
const ref = useRef(initialValue)
```

- `ref.current`를 통해 값을 읽고 변경할 수 있다
- **렌더링**에 해당 개체를 보유할 때 이 개체를 변경해서는 안된다.
- **렌더링** 중에 읽거나 쓰면 안된다 -> 컴포넌트의 동작을 예측하기 어려워진다.
  -> 대신 useState를 사용


