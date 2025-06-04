# 타입스크립트 기반 프론트엔드 코딩 스타일 및 컨벤션 가이드

이 문서에서는 타입스크립트 기반 프론트엔드 코딩 스타일 및 컨벤션을 정의합니다. 팀원들과 함께 이 가이드를 준수하여 일관된 코드 스타일을 유지할 수 있습니다.


## 일반 원칙(General Principles)

일반 원칙은 프로젝트 전체에 적용되는 일반적인 원칙입니다.

- 일관성(Consistency): 코드 스타일은 프로젝트 전체에 걸쳐 일관되게 적용되어야 합니다.
- 가독성(Readability): 코드는 다른 사람이 쉽게 이해할 수 있도록 작성되어야 합니다.
- 단순성(Simplicity): 코드는 가능한 단순하게 작성되어야 합니다. 불필요한 복잡성은 피해야 합니다.
- 유지보수성(Maintainability): 코드는 가능한 유지보수하기 쉽게 작성되어야 합니다. 소프트웨어는 구현하는 것보다 유지보수하는 것이 더 비싸기 때문입니다.
- 중복 제거(DRY - Don't Repeat Yourself): 코드 중복은 피해야 합니다. 반복되는 코드는 함수나 컴포넌트로 추출하여 중복을 제거해야 합니다.
- 자기 기술적 코드(Self-Documenting Code): 코드는 가능한 스스로를 설명하는 코드로 작성되어야 합니다. 주석은 코드가 설명하기 어려운 복잡한 로직이나 비즈니스 로직을 설명하는 데 사용되어야 합니다. (단 JsDoc은 함수나 컴포넌트의 인터페이스를 설명하는 데 사용할 수 있습니다)
- 공동 배치(Co-location): 관련된 코드는 가능한 공동으로 배치되어야 합니다.


## 네이밍 컨벤션(Naming Conventions)


### 변수(Variables)

변수와 함수는 camelCase로 작성되어야 합니다.

```typescript
const userName = "John Doe";
```

Boolean 타입의 변수는 `is`, `has`, `can`, `should`로 시작할 수 있습니다.

```typescript
const isActive = true;
const hasPermission = false;
const canRead = true;
const shouldUpdate = false;
```

이벤트 핸들러 함수는 `on`이나 `handle` + `EventName`으로 시작할 수 있습니다.

```typescript
const handleClick = () => {
    console.log("Click");
};
```


### 상수(Constants)

상수는 대문자로 작성되어야 합니다.

```typescript
const MAX_USERS = 100;
```


### 클래스(Class)

클래스는 PascalCase로 작성되어야 합니다.

```typescript
class MyClass {
    constructor() {
        this.name = "My Class";
    }
}
```


## JavaScript

- 경로 별칭을 사용하여 절대 경로 가져오기를 사용합니다.
- `index.ts`(Barrel 파일)을 만들지 않습니다.


### React 컴포넌트(React Components)

React 컴포넌트는 PascalCase로 작성되어야 합니다.

```typescript
const MyComponent = () => {
    return <div>My Component</div>;
};
```


### React Hooks(React Hooks)

React Hooks는 use로 시작되어야 합니다.

```typescript
const useMyHook = () => {
    return <div>My Hook</div>;
};
```


### 타입스크립트 타입/인터페이스(Type/Interface)

타입스크립트 타입/인터페이스는 PascalCase로 작성되어야 합니다.

```typescript
interface MyInterface {
    name: string;
    age: number;
}
```


### 디렉토리 및 파일

파일과 디렉토리는 PascalCase로 작성되어야 합니다.

- `src/components/UserProfile/UserProfile.tsx`

hooks 파일은 use로 시작되어야 합니다.

- `src/hooks/useMyHook.ts`


## 코드 포매팅(Formatting)

코드 포매팅은 Prettier를 사용하여 자동으로 포맷팅됩니다.

- 들여쓰기(Indentation): 스페이스 2칸
- 줄 갈이(Line Break): 80 ~ 120자
- 세미콜론(Semicolon): 항상 사용
- 따옴표(Quotes):
  - jsx에서는 큰 따옴표(") 사용
  - js, ts에서는 작은 따옴표(') 사용
- 공백(Whitespace):
  - 연산자(Operator) 앞뒤에 공백 사용
  - 콤마(Comma) 뒤에 공백 사용
  - 괄호(Paranthesis) 앞뒤에 공백 사용


## 주석(Comments)

주석은 JSDoc을 사용하여 코드가 설명하기 어려운 복잡한 로직이나 비즈니스 로직을 설명하는 데 사용되어야 합니다.

```typescript
/**
 * 사용자 프로필 정보를 가져옵니다.
 * @param userId 사용자 ID
 * @returns 사용자 프로필 정보 또는 null
 */
const getUserProfile = (userId: string): Promise<UserProfile | null> => {
    return fetch(`/api/users/${userId}`)
        .then(response => response.json());
};
```


## 타입스크립트(TypeScript)

타입스크립트는 타입을 명시하여 코드의 의도를 명확하게 표현하는 데 사용되어야 합니다. 단 모든 타입을 명시할 필요는 없습니다.


### any 사용 최소화

가능하면 `any`를 사용하지 않습니다.

- 불가피한 경우 해당 부분에만 `eslint`를 끄고 이유를 함께 주석으로 남깁니다.
- `unknown`을 사용하고 타입 가드를 사용하여 타입을 확인하는 것이 좋습니다.


### 인터페이스 vs 타입 별칭

- 인터페이스: 객체의 모양을 정의할 때, 클래스가 구현해야 할 계약을 정의할 때 사용합니다. 확장이 용이합니다
- 타입 별칭: 유니언, 인터섹션, 프리미티브 타입의 별칭, 복잡한 타입(유틸리티 타입 결과 등)을 정의할 때 사용합니다.


### Enum vs const

Enum을 사용하지 않습니다. `as const`를 사용하여 readonly 객체를 정의합니다.

```typescript
// enum
enum UserRole {
    ADMIN = 'ADMIN',
    USER = 'USER',
    GUEST = 'GUEST'
}

// as const
const USER_ROLE = {
    ADMIN: 'ADMIN',
    USER: 'USER',
    GUEST: 'GUEST'
} as const;
type UserRole = typeof USER_ROLE[keyof typeof USER_ROLE];
```


### Non-null assertion

Non-null assertion operator(`!`)를 사용하지 않습니다. 사용해야 하는 경우 해당 부분에 이유를 함께 주석으로 남깁니다.


### 유틸리티 타입 활용

`Partial`, `Required`, `Readonly`, `Pick`, `Omit` 등의 유틸리티 타입을 활용하여 타입을 정의합니다.


## React

함수형 컴포넌트와 Hooks 사용을 기본으로 합니다.


### Props

- Props는 인터페이스로 정의합니다.
- Props는 readonly로 정의합니다.
- Props는 default value를 사용할 수 있습니다.
- Props는 객체 비구조화 할당(destructuring)을 사용합니다.

```tsx
interface GreetingProps {
 name: string;
 messageCount?: number;
}

function Greeting({ name, messageCount = 0 }: Readonly<GreetingProps>) {
  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You have {messageCount} new messages.</p>
    </div>
  );
}
```


### 상태(State)

- 상태는 `useState` Hook을 사용합니다.
- 상태는 최소한으로 유지합니다.
- 상태는 가능한 지역적으로 관리합니다.
- 파생 상태는 `useMemo` Hook을 사용합니다.

```tsx
function Counter() {
  const [count, setCount] = useState(0);
  const doubleCount = useMemo(() => count * 2, [count]);

  return (
    <div>
      <p>Count: {count}</p>
      <p>Double Count: {doubleCount}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
```


### useEffect

- 의존성 배열을 정확하게 명시합니다.
- 불필요한 재실행을 방지하고, 메모리 누수를 막기 위해 `cleanup` 함수를 사용합니다.


### Key

- 리스트 렌더링 시 `key`는 index 사용을 피하고 각 아이템의 고유한 식별자를 사용합니다.
- 특정 값이 변경되었을 때 컴포넌트를 초기화하기 위해 `key`를 변경할 수 있습니다.


## Fragment

- 불필요한 `<div>` 래퍼를 사용하지 않습니다.
- `<>` 또는 `<React.Fragment>`를 사용합니다.


## Context API

- props drilling을 피하기 위해 Context API를 사용합니다.
- custom hook을 사용하여 Context를 사용합니다.


## Memoization

React.memo, useMemo, useCallback은 성능 최적화가 필요한 명확한 지점에 사용합니다. 과도한 사용은 오히려 코드를 복잡하게 만들 수 있습니다.


## Tailwind CSS

Tailwind CSS는 컴포넌트의 스타일을 정의할 때 사용합니다.

- `prettier-plugin-tailwindcss`를 사용하여 Tailwind CSS를 포맷팅합니다.
- 반응형 디자인: sm:, md:, lg:, xl: 등의 반응형 접두사를 사용하여 반응형 디자인을 구현합니다.
- 상태 변형 (State Variants): hover:, focus:, active:, disabled:, dark: 등의 상태 변형을 적극 활용합니다.


## 에러 핸들링(Error Handling)

- 에러 핸들링은 try-catch 구문을 사용합니다.
- React Error Boundary를 사용하여 컴포넌트 트리의 에러를 처리합니다.
- 커스텀 에러 클래스를 사용하여 에러를 구분하고, 에러를 중앙에서 처리합니다.


## 테스트(Test)

- 단위 테스트(Unit Test): Vitest, React Testing Library 등을 사용하여 개별 함수와 컴포넌트를 테스트합니다.
- E2E 테스트(E2E Test): Playwright을 사용하여 사용자 시나리오 전체를 테스트합니다.
- 컴포넌트 테스트(Component Test): Storybook을 사용하여 컴포넌트의 UI를 테스트합니다.
