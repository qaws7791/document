# 페이지 생성하기

app 폴더로 부터 경로를 생성

## 페이지 컴포넌트

`page.tsx` 파일의 기본 내보내기로 페이지 컴포넌트를 내보냄

페이지 컴포넌트 이름은 `Page`보다는 `DashBoardPage`와 같이 명시적으로 이름을 지정

```tsx
// app/dashboard/page.tsx
export default function DashBoardPage() {
  return <p>Dashboard Page</p>;
}
```



## 레이아웃 컴포넌트

```tsx
// app/dashboard/layout.tsx
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <SideNav/>
      <div>{children}</div>
    </div>
  );
}
```

