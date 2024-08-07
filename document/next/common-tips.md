# `Nextjs` 일반적인 팁들

## 1. 페이지 구성 요소를 서버 구성 요소로 유지하세요

페이지는 서버에서 렌더링되어야 합니다. 페이지 구성 요소는 서버 구성 요소로 유지해야 합니다

## 2. 클라이언트 구성 요소를 가장 아래에 위치시키고 작게 유지하세요

"use client" 사용을 최소화하고, 가능한 서버 구성 요소를 사용하세요. 클라이언트 구성 요소는 서버 구성 요소보다 더 느립니다. 클라이언트 구성 요소를 사용해야 하는 경우에만 사용하세요.

## 3. 클라이언트 구성 요소는 비동기 구성 요소일 수 없습니다

오직 서버 컴포넌트만 비동기 컴포넌트가 될 수 있습니다. 클라이언트 컴포넌트에서는 hooks를 사용할 수 있습니다

## 4. 클라이언트 구성 요소는 서버 구성 요소를 감쌀 수 있고, 반대도 가능합니다.

이는 Provider 패턴에서 자주 사용됩니다.

```tsx
// app/provider.tsx
'use client'

export default function Provider({
  children,
}: {
  children: React.ReactNode
}) {
    return (<ThemeProvider>
             <QueryProvider>
                {children}
             </QueryProvider>
            </ThemeProvider>)
}
```



```tsx
// app/layout.tsx
import Provider from './provider'
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  )
}
```



https://nextjs.org/docs/app/building-your-application/rendering/composition-patterns#using-context-providers

## 5. "server only"를 사용하여 클라이언트 측에서의 서버 코드 사용을 방지하세요

서버 측 코드를 따로 관리하여 클라이언트 측 코드에 포함되지 않도록 주의하세요

```bash
npm install server-only
```

```typescript
// lib/server.ts
import 'server-only'
 
export async function getUser() {
  ...
}
```



## 6. 서버에서는 상태를 관리할 수 없습니다

서버는 요청과 응답에 대한 처리만을 하므로 클라이언트 측의 상태를 관리할 수 없습니다



## 7. 클라이언트 컴포넌트가 항상 클라이언트 측에서만 실행되는 것은 아닙니다.

Nextjs에서는 **전체 페이지 로드** 시에 사전 렌더링을 위해 서버 측에서 클라이언트 컴포넌트가 렌더링될 수 있습니다(서버에서 한 번 실행, 클라이언트 측에서 다시 한 번 더 실행)

이는 클라이언트 컴포넌트 내의 함수들이 서버 측에서 실행될 수 있음을 의미합니다.

https://nextjs.org/docs/app/building-your-application/rendering/client-components#how-are-client-components-rendered

> [!IMPORTANT]
>
> 클라이언트 컴포넌트가 서버 측에서 실행될 수 있기 때문에 브라우저에서만 사용 가능한 web api를 사용하거나 window 전역 객체에 접근 하는 경우 서버 측에서 에러가 발생하게 됩니다. 

### 1. 클라이언트 인지 서버인지 분기 처리하기

```typescript
if(typeof window !== 'undefined') {
	//브라우저에서 실행되는 경우
} else {
	//서버에서 실행되는 경우
}
```



### 2. useEffect 활용하기

```tsx
const [isClient, setIsClient] = useState(false)

useEffect(() => {
    setIsClient(true)
}, [])
```



### 3. import 시에 서버 사이드 렌더링 방지하기

```tsx
const DynamicClientComponent = dynamic(() => import("@/components/client-component"), {
	ssr: false
})
```



## 8. 수화 불일치 해결하기

의도대로 설계하고 동작하지만 수화 불일치가 불가피하게 발생하는 경우, `suppressHydrationWarning` 속성을 사용하여 경고를 임의로 끌 수 있습니다

```tsx
<time datetime="2016-10-25" suppressHydrationWarning />
```

https://nextjs.org/docs/messages/react-hydration-error#solution-3-using-suppresshydrationwarning



## 9. 서버 구성 요소에서 route handler를 사용하지 마세요.

서버 구성 요소는 이미 서버 측에서 실행되기 때문에 자기 자신의 route를 재요청할 필요가 없습니다. 

```tsx
// ❌ 자기 자신 경로를 재요청할 필요가 없습니다
export default function Page() {
    const data = fetch("/api/posts").then(res => res.json())
}
```



```tsx
// ✅ 서버 구성 요소에서 바로 데이터를 가져옵니다
export default function Page() {
    const data = getPostsFromDB();
}
```



## 10. 서버측 데이터 요청은 요청과 배포 전반에 걸쳐 유지됩니다.

따라서 같은 데이터 요청을 여러 서버 컴포넌트에서 각각 사용해도 되며, 이는 굳이 공통 조상에서 한 번의 요청을 받아 props를 내려는  props drilling이 없어도 되며, 마치 클라이언트 측 전역 상태처럼 요청 과정 전반에 걸쳐 공유 됩니다



## 11. 잘못된 페이지에 대한 404 구성요소를 만드세요

잘못된 페이지인 경우 `notFound()` 메서드를 호출하여 `not-found.js`를 렌더링하세요

```tsx
import { notFound } from 'next/navigation'
 
async function fetchUser(id) {
  const res = await fetch('https://...')
  if (!res.ok) return undefined
  return res.json()
}
 
export default async function Profile({ params }) {
  const user = await fetchUser(params.id)
 
  if (!user) {
    notFound()
  }
 
  // ...
}
```



```tsx
import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <p>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}
```

https://nextjs.org/docs/app/api-reference/file-conventions/not-found

https://nextjs.org/docs/app/api-reference/functions/not-found

## 12. 에러 발생 시 보여줄 구성요소를 만드세요

```tsx
'use client'
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <h2>Something went wrong!</h2>
      <button onClick={() => reset()}>Try again</button>
    </div>
  )
}
```

https://nextjs.org/docs/app/building-your-application/routing/error-handling



## 13. 로딩 시 보여줄 구성 요소를 만드세요

이 구성 요소는 Suspense를 사용하여 페이지 구성 요소를 자동으로 래핑합니다

```tsx
export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return <LoadingSkeleton />
}
```



## 14. key를 사용해 Suspense 리트리거

초기 렌더링 후에 리트리거가 필요한 경우 `<Suspense>`에 key 값을 사용하여 리트리거 시점을 알려 줄 수 있다

```tsx
// app/page.tsx
import Link from 'next/link';
import { Suspense } from 'react';
import Post from './post';

export default function Home({
  searchParams,
}: {
  searchParams: {
    id?: string;
  };
}) {
  const { id } = searchParams;
  return (
    <main className="">
      <h1>ID: {id}</h1>

      <div>
        {[1, 2, 3, 4].map((id) => (
          <Link href={'/?id=' + id}>{id}</Link>
        ))}
      </div>
      <Suspense key={id} fallback={<PostLoading />}>
        {id ? <Post id={id} /> : <p>No Post</p>}
      </Suspense>
    </main>
  );
}

function PostLoading() {
  return <div className="h-6 w-64 rounded bg-neutral-400"></div>;
}

```

```tsx
// app/post.tsx
export default async function Post({ id }: { id: string }) {
  const post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  ).then((res) => res.json());

  return (
    <article>
      <h2>Title: {post.title}</h2>
    </article>
  );
}

```



## 15. 브라우저에서 접근 가능한 환경 변수는 public으로 만드세요

`NEXT_PUBLIC_`으로 시작하는 환경 변수는 **브라우저**에서도 접근이 가능합니다. 서버에서만 사용하는 환경 변수는 보안을 위해 이 이름으로 시작해서는 안됩니다. 브라우저 측에서 서버 측 환경 변수에 접근하면 `undefined`를 반환

### 오직 서버 측에서만 사용하는 환경변수

```bash
sAPI_KEY=secret-key
```

### 브라우저 측에서도 사용 가능한 환경변수

```bash
NEXT_PUBLIC_API_KEY=public-key
```

