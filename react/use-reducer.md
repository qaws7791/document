# UseReducer

## reducer의 장점

### 로직 분리

상태 저장 시 필요한 로직을 `reducer`로 분리하여 사용



## useReducer 사용법

### 참조

```jsx
const [state, dispatch] = useReducer(reducer, initialArg, init?)
```

### 사용법

1. 리듀서 생성

```tsx
const todosReducer = (draft: Todo[], action: Action) => {
  switch (action.type) {
    case "add": {
      const { title } = action;
      draft.push({ id: crypto.randomUUID(), title });
      return;
    }
    default: {
        throw Error('Unknown action: ' + action.type);
      }
  }
};
```

2. 초기 상태 생성

```ts
const INITIAL_TODOS = [
  { id: crypto.randomUUID(), title: "첫 번째 할 일" },
];
```

3. 컴포넌트에서 useReducer를 사용

```tsx
const [todos, dispatchTodos] = useImmerReducer<Todo[]>(
    todosReducer,
    INITIAL_TODOS,
  );
```

4. dispatch를 통해 상태 변경

```tsx
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!title) return;
    dispatchTodos({ type: "add", title });
    clearTitle();
  };
```



## 리듀서 작성

- **리듀서를 순수하게 작성**: 부작용 없이 상태를 업데이트
- **각 작업을 하나의 사용자 상호 작용으로 설명**: 여러 작업을 각각 전달하지 말고 하나의 작업으로 전달하는 것이 합리적
