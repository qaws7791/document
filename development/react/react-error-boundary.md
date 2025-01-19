# Error Boundary - React 16에서의 오류 처리

런타임에서 컴포넌트 내의 자바스크립트 오류는 React 앱을 손상시키고 전체 앱이 중단되는 문제점이 존재

**React 16**에서는 이러한 자바스크립트 오류를 적절하게 처리하기 위해 **오류 경계**를 도입



## 오류 경계 소개

오류 경계는 하위의 구성 요소 트리 어디서든 자바스크립트 <u>**오류를 포착**</u>하고 해당 <u>**오류를 기록**</u>, 충돌이 발생한 구성요소 대신 **<u>대체 UI(fallback)를 표시</u>**

- 오류 경계에서 `componentDidCatch()` 메서드는 구성 요소에 대해 자바스크립트의 `catch {}` 문처럼 작동
- 오류 경계는 트리에서 하위 구성 요소의 오류만 포착

```jsx
class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    // Example "componentStack":
    //   in ComponentThatThrows (created by App)
    //   in ErrorBoundary (created by App)
    //   in div (created by App)
    //   in App
    logErrorToMyService(error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return this.props.fallback;
    }

    return this.props.children;
  }
}
```

```jsx
<ErrorBoundary fallback={<p>Something went wrong</p>}>
  <Profile />
</ErrorBoundary>
```



## 오류 경계의 장점

- 문제 발생 시 더 나은 사용자 경험 제공
- 최상위 경로 구성 요소에서 래핑하여 간편하게 에러 관리 또는
- 개별 위젯마다 래핑하여 하나의 위젯에서 에러가 발생해도 다른 위젯은 대화형으로 유지 가능



## 구현 라이브러리

현재는 클래스형 구성 요소를 통해서만 구현이 가능

https://github.com/bvaughn/react-error-boundary