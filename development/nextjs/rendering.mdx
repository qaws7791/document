## 정적 렌더링

데이터 페칭 및 렌더링 발생 시점: 

- 빌드 시점 - 서버 
- 데이터 재검증 시점 - 서버

### 특징

- 캐싱 가능: CDN을 통해 전 세계에 배포하여 사용자가 빠르게 접근 가능
- 서버 부하 감소: 캐싱된 콘텐츠를 제공하기만 하므로 반복해서 렌더링(생성)할 필요가 없어짐(단 데이터 재검증 시점에는 필요)
- SEO: 서버에서 렌더링되기 때문에 크롤러가 접근하고 색인하기 쉬움. 이는 검색 엔진 순위를 높이는데 도움을 줄 수있음

### 유용한 경우

- 필요한 데이터가 없는 경우
  - 랜딩 페이지나 FAQ 페이지 등 정적인 경우
- 모든 사용자 간에 공유되는 데이터인 경우
  - 정적 블로그 게시글, 상품 상세 페이지

```tsx
// app/posts/[id]/page.tsx

// ssg -> params 값 배열을 가져와서 빌드 시점에 미리 렌더링
// posts/1, posts/2, post/3 페이지 미리 렌더링
export async function generateStaticParams() {
  return [{ id: '1' }, { id: '2' }, { id: '3' }];
}

// isr -> 10초마다 데이터 재검증
export const revalidate = 10;

export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`
  );
  const data = (await res.json()) as { title: string; body: string };

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-4">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {data.title}
        </h1>
        <p className="font-medium text-gray-500">{data.body}</p>
        <time>Updated At: {new Date().toLocaleString()}</time>
      </div>
      <div className="-order-1 col-span-full lg:order-none lg:col-span-2"></div>
    </div>
  );
}
```



------



## 동적 렌더링

데이터 페칭 및 렌더링 발생 시점:

- 사용자가 페이지 방문(요청) 시

### 특징

- 실시간 데이터 대응: 자주 변경되거나 실시간 데이터가 렌더링에 필요한 경우
- 사용자별 콘텐츠: 사용자별 개인화된 콘텐츠가 필요한 경우
- 요청 시간 정보: 요청 시점의 쿠키나 URL 매개변수과 같이 특정 정보가 렌더링에 필요한 경우
- 로딩 중: 데이터 페칭으로 인해 응답이 길어지기 때문에 로딩 ui를 `loading.tsx`에 추가하여 사용자 경험을 개선할 수 있다.

```tsx
// app/posts/[id]/page.tsx
export default async function Page({ params }: { params: { id: string } }) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    { cache: 'no-store' }
  );
  const data = (await res.json()) as { title: string; body: string };

  return (
    <div className="grid grid-cols-6 gap-x-6 gap-y-3">
      <div className="col-span-full space-y-3 lg:col-span-4">
        <h1 className="truncate text-2xl font-medium capitalize text-gray-200">
          {data.title}
        </h1>
        <p className="font-medium text-gray-500">{data.body}</p>
        <time>Updated At: {new Date().toLocaleString()}</time>
      </div>
      <div className="-order-1 col-span-full lg:order-none lg:col-span-2"></div>
    </div>
  );
}
```

```tsx
// app/posts/loading.tsx
export default function Loading() {
  return <p>page loading...</p>;
}
```



## 주문형 isr(on-demand isr)

외부에서 경로를 무효화시키기 위해 api를 제공하고, 이를 호출하면 nextjs 서버에서 `revalidatePath()`를 호출하여 경로를 무효화한다

```typescript
// app/api/revalidate/route.ts
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
    // 권한 확인
    const headersList = headers()
    
    // revalidate할 경로 가져오기
    const body = await request.json()
    const { path } = body;
    revalidatePath(path)
    
}
```

https://github.com/vercel/on-demand-isr/tree/main
