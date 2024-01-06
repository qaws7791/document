# Context-API

## context api의 필요성

### prop drilling

- 공통 조상을 찾기 위해 계속 상태를 끌어 올리게 되면

- props를 여러 컴포넌트에 거쳐 계속 아래로 내려주어야 하는 상황이 발생

  

## context api 사용하기

- `createContext`: context를 생성

```tsx
// LevelContext.ts
import { createContext } from 'react';

const initialContext = 0;

const LevelContext = createContext(initialContext);
export default LevelContext;

```

- `Context.Provider`: 컨텍스트를 내려주는 공급자
- `useContext`: 컨텍스트를 가져오기

```tsx
//Section.tsx
import { useContext } from "react";
import LevelContext from "../context/LevelContext";

type Props = {
  children: React.ReactNode;
};

const Section = ({ children }: Props) => {
  const level = useContext(LevelContext);
  return (
    <section className="section">
      <LevelContext.Provider value={level + 1}>
        {children}
      </LevelContext.Provider>
    </section>
  );
};
export default Section;
```

