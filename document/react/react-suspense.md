

# Suspense

하위 항목의 데이터 로드가 완료될 때까지 대체 UI를 표시

```jsx
<Suspense fallback={<Loading />}>
  <SomeComponent />
</Suspense>
```

![image-20240128033324488](assets/image-20240128033324488.png)

 https://www.youtube.com/watch?v=nLF0n9SACd4

## 사용가능한 경우

- `Relay`, `Nextjs`와 같은 Suspense를 이용하는 프레임워크에서의 데이터 페칭
- `lazy`를 통한 레이지 로딩 
- `use`훅을 통한 프로미스 값 읽기