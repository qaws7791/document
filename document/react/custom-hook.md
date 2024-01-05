# CustomHook

- useState, useContext, useEffect 등의 Hook도 유용하지만, 기존의 hook과 함께 구체적인 로직을 특정 상황에서 사용하기 위한 구체적인 Hook의 필요성
- 애플리케이션의 요구사항에 맞는 자신만의 Hook
- Hook의 이름은 `use + 대문자`로 시작한다(컴포넌트가 대문자로 시작하는 것 처럼)

### 상태와 상태 저장 로직을 공유

- CustomHook은 상태와상태를 저장하는 로직을 함께 저장하고 제공
- 여러 곳에서 독립적으로 사용가능

```tsx
import { Dispatch, SetStateAction, useCallback, useState } from 'react'

const useToggle = (defaultValue?: boolean = false): [boolean, () => void,Dispatch<SetStateAction<boolean>>] => {
  const [value, setValue] = useState(defaultValue)

  const toggle = useCallback(() => setValue(x => !x), [])

  return [value, toggle, setValue]
}
```

### Hook을 사용하면 Hook

- 모든 사용자 정의 함수가 CustomHook은 아니다
- 함수 내부에 하나 이상의 Hook을 사용하는 경우 Custom Hook으로 볼 수 있다

```tsx
import { useState, ChangeEvent, HTMLProps } from 'react';

export function useFormInput(initialValue: string): {
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
} {
  const [value, setValue] = useState(initialValue);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
  }

  const inputProps: HTMLProps<HTMLInputElement> = {
    value: value,
    onChange: handleChange,
  };

  return inputProps;
}

```

### Hook으로 분리하기

- useEffect 부분은 roomId, serverUrl 의 react 값을 통해 새로운 연결을 만든다.
- 이렇게 hook을 사용하는 로직을 커스텀 훅으로 분리할 수 있다.

```tsx
ㅈimport { useState, useEffect } from 'react';
import { createConnection } from './chat.js';
import { showNotification } from './notifications.js';

export default function ChatRoom({ roomId }) {
  const [serverUrl, setServerUrl] = useState('https://localhost:1234');

  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.on('message', (msg) => {
      showNotification('New message: ' + msg);
    });
    connection.connect();
    return () => connection.disconnect();
  }, [roomId, serverUrl]);

  return (
    <>
      <label>
        Server URL:
        <input value={serverUrl} onChange={e => setServerUrl(e.target.value)} />
      </label>
      <h1>Welcome to the {roomId} room!</h1>
    </>
  );
}

```



- roomId, serverUrl을 초기 값으로 받는 커스텀 훅으로 분리할 수 있다.

```jsx
export function useChatRoom({ serverUrl, roomId }) {
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId
    };
    const connection = createConnection(options);
    connection.connect();
    connection.on('message', (msg) => {
      showNotification('New message: ' + msg);
    });
    return () => connection.disconnect();
  }, [roomId, serverUrl]);
}
```



- useChatRoom은 chatRoom을 연결하는 <u>세부 로직을 숨기고</u> 입력으로  roomId와 serverUrl만 받는다.
- 이제 chatRoom을 연결하기 위해서 useChatRoom()에 roomId와 serverUrl만 입력으로 넣으면 된다.

```jsx
  useChatRoom({
    roomId: roomId,
    serverUrl: serverUrl
  });
```



### 커스텀 훅에서 이벤트 리스너 분리

```jsx
import { useSyncExternalStore } from 'react';

function subscribe(callback) {
  window.addEventListener('online', callback);
  window.addEventListener('offline', callback);
  return () => {
    window.removeEventListener('online', callback);
    window.removeEventListener('offline', callback);
  };
}

export function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine, // How to get the value on the client
    () => true // How to get the value on the server
  );
}

```



## 주의 사항

### 기본 Hook 자체에 대한 래퍼 hook 지양

- useEffect에서 한 번만 실행하는 커스텀 훅을 만들기 위해 아래의 useMount를 만들었다
- 해당 훅으로 들어오는 fn 함수 내부에는 어떠한 react 값들이 있을지 모른다.
- 하지만 useEffect는 의존성 배열이 빈 배열이기 때문에 react 값들에 반응하지 않는다.

```jsx
// ❌ fn 함수에 내부에서 사용하는 react 값에 대한 업데이트가 이루어지지 않음
const useMount = (fn) => {
  useEffect(() => {
    fn();
  }, []); 
}
```

