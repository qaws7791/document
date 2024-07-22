# 검색 기능 만들기

검색 기능은 클라이언트 측과 서버 측 모두에서 구현할 수 있다

- url은 클라이언트와 서버 모두 에서 접근이 가능하다
- 클라이언트 측에서 검색 기능을 만들 경우 새로 고침 시 검색 정보를 유지하기 어렵다(클라이언트 측 저장소를 사용하면 가능은 하다)

- url이 검색어를 포함하므로 검색 결과 페이지를 북마크하거나 공유할 수 있다
- 새로고침 시에 동일한 화면을 볼 수 있다.
- 직관적이다. url만 보고 해당 페이지가 어떤 역할인지 알기 쉽다.
- url은 서버 측에서 접근할 수 있으므로 서버 측 렌더링이 가능하고, 클라이언트의 처리 없이 구현이 가능하다



- `useRouter`: 클라이언트 측에서 페이지 이동을 위한 **hook**
- `useSearchParams`: 클라이언트 측에서 searchParams 접근하기 위한 **hook**
- `URLSearchParams`: 쿼리 문자열을 조작하기 위한 메서드들을 가진 **web api**



## 1. input과 querystring를 동기화하는 검색

```tsx
'use client';
 
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
 
export default function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
 
  function handleSearch(term: string) {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set('query', term);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }
}
```



- 페이지 로드 시 현재 searchParams 값을 읽어 `defaultValue`에 주입
- `input`값 변경 시 `onChange` 이벤트를 통해  페이지의 `searchParams`를 즉각 변경

```tsx
<input
  placeholder={placeholder}
  onChange={(e) => {
    handleSearch(e.target.value);
  }}
  defaultValue={searchParams.get('query')?.toString()}
  placeholder="Search..."
  aria-label="Search"
/>
```



## 2. 검색 버튼 클릭 또는 엔터 입력 시 검색

```tsx
"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { FormEvent } from "react";

export default function SearchForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const search = formData.get("search") as string;
    const params = new URLSearchParams(searchParams);
    if (search) {
      params.set("query", search);
    } else {
      params.delete("query");
    }
    router.push(`/search?${params.toString()}`);
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        aria-label="Search"
        defaultValue={searchParams.get("query") || ""}
      />
      <button type="submit">Search</button>
    </form>
  );
}
```



## 3. useState를 사용하는 검색

```tsx
"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

interface SearchFormProps {
  query?: string;
}

export default function SearchForm({ query }: SearchFormProps) {
  const [search, setSearch] = useState(query || "");
  const router = useRouter();

  const handleSearch = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("query", search);
    router.push(newUrl.toString());
  };

  return (
    <form onSubmit={handleSearch}>
      <input
        type="text"
        name="search"
        placeholder="Search"
        aria-label="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
}
```

