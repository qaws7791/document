> [!CAUTION]
>
> queryCache를 로컬 상태 관리자로 사용하지 마세요

> [!TIP]
>
> 데이터가 없는 것보다 오래된 데이터가 있는 것이 낫다

# Tanstack-query 

Tanstack-query as ASync State Manager



## server state, client state

- 서버에 원본이 위치한 상태, 일반적으로 비동기적으로 가져올 수 있으며, 가져올 시점의 스냅샷만 볼 수 있다
- 클라이언트 상태: 프론트엔드에서 완전히 제어할 수 있는 상태. 일반적으로 동기적이고, 정확한 값을 알 수 있다



## staleTime vs gcTime

- `staleTime`: 신선한(fresh) 쿼리가 오래된(stale) 쿼리로 전환되기 까지의 시간

  - transtack-query는 최신 상태를 유지하는 것에 중점을 두고 있기 때문에 **staleTime의 기본값은 0**입니다

  - > 해당 시간 내에 요청을 중복 제거하기 위해 최소 20초로 설정하는 것을 선호 - tkdodo.eu

  - 신선한 쿼리는 캐시에서 데이터를 가져오므로 네트워크 요청이 발생하지 않는다

  - 쿼리가 오래된(stale) 경우 네트워크 요청을 통해 다시 가져올 수 있다

  - ```jsx
    // form에서 기본값으로 사용하는 상태(클라이언트 상태)를 유지하기 위해 staleTime를 무한으로 설정
    const { data } = useQuery({
    	...
        staleTime: Infinity,
      })
    
      return data ? <MyForm initialData={data} /> : null
    ```

    

- `gcTime(cacheTime)`: 비활성화된(화면에 표시되지 않는) 쿼리가 캐시에서 제거될 때까지의 시간.



## isFetching vs isLoading

- isFetching: queryFn이 아직 resolved 되지 않았을 때 true
- isLoading: 캐시된 데이터가 없고, queryFn이 아직 resolved 되지 않았을 때 true
- isLoading은 isFetching의 하위 집합으로 볼 수 있다



## pre-populating data

|                 | 메서드의 부모 | 호출하는 곳 | 캐싱 |
| --------------- | ------------- | ----------- | ---- |
| prefetchQuery   | queryClient   | server      | O    |
| setQueryData    | queryClient   | client      | O    |
| placeholderData | useQuery      | client      | X    |
| initialData     | useQuery      | client      | O    |

다음 탐색을 위한 데이터를 미리 가져와서 데이터를 페칭하는 시간 시간 감소

`placeholderData` 또는 `initialData`가 제공되면 이미 데이터가 존재하므로 `loading`상태에서 `success`상태로 이동한다

`initialData`는 캐시에 유지되지만 `placeholderData`는 캐시에서 유지되지 않고 관찰자 수준에서 작동한다

`initialData`를 통해 다른 쿼리로 부터 쿼리를 미리 채우면 지연 시간을 줄일 수 있다

## refetching

queryClient를 사용해 전역적으로 사용하거나, 특정 useQuery 훅에 대해 사용하는 방법

- refetchOnMount
- refetchOnWindowFocus
- refetchOnReconnect
- refetchInterval

useQuery

- refetch



## polling

`refetchInterval`을 사용하여 데이터를 주기적으로 가져오는 폴링을 쉽게 사용할 수 있다



## data filtering

`select` 옵션을 사용하여 데이터를 필터링



## data transform

1. 데이터 가져오기(fetchFn)에서 수행하기

   ```javascript
   const fetchTodos = async () => {
       const data = fetch...
   	return data.map(transformTodo)
   }
   ```

2. 커스텀 훅에서 수행하기

   ```java
   const useTodosQuery = () => {
   	const query = useQuery...
   	return {
   		data: query.data.map(transformTodo)
   	}
   }
   ```

3. `select` 옵션 사용하기

   ```javascript
   const useTodosQuery = () => {
   	return useQuery({
   		...,
   		select: transformTodo
   	})
   }
   ```

   

## enabled

- 종속 쿼리
- 쿼리 켜고 끄기
- 사용자 입력 기다리기
- 쿼리 비활성화



## 기본 사용법

v4 이전 `idle`-> v4 `loading` ->  v5 `pending`

```jsx
const todos = useTodos()

if (todos.isPending) {
  return 'Loading...'
}
if (todos.error) {
  return 'An error has occurred: ' + todos.error.message
}

return <div>{todos.data.map(renderTodo)}</div>
```

query를 다시 사용할 때 최신 데이터를 가져오는 동안 이전의 데이터가 있는 경우  기존의 데이터를 표시할 수 있음

data 가용성을 먼저 확인하도록 로직 순서를 변경

```jsx
const todos = useTodos()

if (todos.data) {
  return <div>{todos.data.map(renderTodo)}</div>
}
if (todos.error) {
  return 'An error has occurred: ' + todos.error.message
}

return 'Loading...'
```



## mutation

- tanstack-query는 최신 상태를 유지하고 싶어한다. mutation은 서버에 변화를 일으키므로 이 동작 후에는 서버의 상태가 변경되어 캐시된 데이터가 유효하지 않다는 것을 의도적으로 알려 최신 상태를 유지하도록 한다
- mutation은 하나의 인수만을 사용합니다. 여러 인수가 필요한 경우 객체 형태로 전달합니다
- `invalidateQueries`를 사용하여 데이터 무효화

```jsx
const useAddComment = (id) => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (newComment) =>
      axios.post(`/posts/${id}/comments`, newComment),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['posts', id, 'comments']
      })
    },
  })
}
```

- `setQueryData`를 사용하여 무효화 대신 캐시 업데이트

```jsx
onSuccess: (newPost) => {
    // ✅ update detail view directly
    queryClient.setQueryData(['posts', id], newPost)
}
```



## 필터 사용법

```jsx
function Component() {
  const [filters, setFilters] = React.useState()
  const { data } = useQuery({
    queryKey: ['todos', filters],
    queryFn: () => fetchTodos(filters),
  })

  return (
      <div>
          <Filters onApply={setFilters} />
          <Todos data={data}/>
      </div>)
}
```



## 이전 데이터 유지하기

```jsx
import { keepPreviousData } from '@tanstack/react-query'

const { data, isPlaceholderData } = useQuery({
  queryKey: ['item', id],
  queryFn: () => fetchItem({ id }),
  placeholderData: keepPreviousData
})
```



## Mutation과  QueryData 업데이트

```javascript
function useUpdateTitle() {
  return useMutation({
    mutationFn: updateTitle,
    onSuccess: (newTodo) => {
      // ✅ update the todo detail
      queryClient.setQueryData(
        ['todos', 'detail', newTodo.id],
        newTodo
      )

      // ✅ update all the lists that contain this todo
      queryClient.setQueriesData(['todos', 'list'], (previous) =>
        previous.map((todo) =>
          todo.id === newTodo.id ? newtodo : todo
        )
      )
    },
  })
}
```



## Query key factory 사용법

```typescript
const todoKeys = {
  all: ['todos'] as const,
  lists: () => [...todoKeys.all, 'list'] as const,
  list: (filters: string) => [...todoKeys.lists(), { filters }] as const,
  details: () => [...todoKeys.all, 'detail'] as const,
  detail: (id: number) => [...todoKeys.details(), id] as const,
}
```



## ErrorHandling

- 비동기 에어를 던지도록 `throwOnError` 플래그 지정
- 오류 경계를 사용하여 에러를 처리

```javascript
const todos = useQuery({
    queryKey: ['todos'],
    queryFn: fetchTodos,
    throwOnError: true,
  })
```

- 글로벌 콜백을 통해 query 오류 발생 시 에러 처리

```javascript
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onError: (error) =>
      toast.error(`Something went wrong: ${error.message}`),
  }),
})
```



```javascript
export const usePost = (id: number) => {
  return useQuery({
    queryKey: ['posts', 'basic', id],
    queryFn: () => getPost(id),
    meta: {
      type: 'POST_DETAIL',
    },
  });
};
```



## onSuccess 콜백 중지

> [!CAUTION]
>
> onSuccess를 사용하여 상태를 다른 곳에 저장하지 마세요. -v5에서는 이러한 콜백들이 삭제되었습니다

```javascript
const queryClient = new QueryClient({
  queryCache: new QueryCache({
    onSuccess: (data, query) => {
      toast.success(`${query.meta?.type || 'QUERY'} complete`);
    },
    onError: (error, query) => {
      toast.error(
        `[${query.meta?.type || 'QUERY'}] Something went wrong: ${
          error.message
        }`
      );
    },
  }),
});
```



## Form

### Form의 기본값으로 query 데이터 사용

- PersonDetail 컴포넌트에서 데이터를 가져오고 PersonForm으로 값을 내려보는 프레젠테이셔널/컨테이너 방식



```jsx
function PersonDetail({ id }) {
  const { data } = useQuery({
    queryKey: ['person', id],
    queryFn: () => fetchPerson(id),
  })
  const { mutate } = useMutation({
    mutationFn: (values) => updatePerson(values),
  })

  if (data) {
    return <PersonForm person={data} onSubmit={mutate} />
  }

  return 'loading...'
}

function PersonForm({ person, onSubmit }) {
  const { register, handleSubmit } = useForm({ defaultValues: person })
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <input {...register('firstName')} />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <input {...register('lastName')} />
      </div>
      <input type="submit" />
    </form>
  )
}
```



### 이중 제출 방지

```jsx
복사비활성화된 제출: 코드를 클립보드에 복사
const { mutate, isLoading } = useMutation({
  mutationFn: (values) => updatePerson(values)
})
<input type="submit" disabled={isLoading} />
```



### 돌연변이 후 무효화 및 재설정

```jsx
function PersonDetail({ id }) {
  const queryClient = useQueryClient()
  const { data } = useQuery({
    queryKey: ['person', id],
    queryFn: () => fetchPerson(id),
  })
  const { control, handleSubmit, reset } = useForm()
  const { mutate } = useMutation({
    mutationFn: updatePerson,
    // ✅ return Promise from invalidation
    // so that it will be awaited
    onSuccess: () =>
      queryClient.invalidateQueries({ queryKey: ['person', id] }),
  })

  if (data) {
    return (
      <form
        onSubmit={handleSubmit((values) =>
          // ✅ reset client state back to undefined
          mutate(values, { onSuccess: () => reset() })
        )}
      >
        <div>
          <label htmlFor="firstName">First Name</label>
          <Controller
            name="firstName"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                value={field.value ?? data.firstName}
              />
            )}
          />
        </div>
        <input type="submit" />
      </form>
    )
  }

  return 'loading...'
}
```



## queryOptions

query와 관련된 매개변수들을 변수로 분리하여 여러 곳에서 재사용할 수 있다

```typescript
const todosQuery = queryOptions({
  queryKey: ['todos'],
  queryFn: fetchTodos,
  staleTime: 5000,
})
```

```typescript
const useTodos = () => {
	const query = useQuery(todosQuery)
    return { data:query.data }
}
```

```typescript
queryClient.prefetchQuery(todosQuery)
```

