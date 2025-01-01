# React.memo

동일한 입력에 대해 동일한 출력을 반환하는 순수 함수의 경우 한번 계산된 출력을 동일한 입력에 대해 재사용하여 같은 계산을 하지 않을 수 있다. 계산 비용이 많이 들거나 결과가 자주 사용되는 경우 더 효율적이다

## 메모이제이션

**메모이제이션(Memoization):** 계산된 결과를 캐싱(저장)하여 성능을 최적화를 방법

**순수 함수(Pure function):** 동일한 인자에 대해서 동일한 반환 값을 가지는 함수. 따라서 반환 값은 인자 값에만 의존해야 한다.

```javascript
✅반환 값은 인자 x와 y에만 의존하기 때문에 순수 함수이다.
function add(x,y) {
	return x + y
}
// 
```

```javascript
❌외부 상태에 의존하므로 순수 함수가 아니다
let store = {
	counter: 0
}
function getCount() {
	return store.counter
}

function incremenet() {
    store.count += 1;
    return store.count
}
```

✅React.memo로 래핑된 구성 요소는 props가 변경되지 않는 한 재조정 과정에서 상위 구성 요소가 리렌더링 되더라도 리렌더링 되지 않습니다.

### 목록 크기가 매우 큰 경우

목록 크기가 매우 큰 경우 매 번 모두 다시 렌더링 하는 것은 큰 비용이 발생하고 성능 상 병목 현상을 일으킬 수 있다

```jsx
const MemoizedList = React.memo(function List({ items }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id}>{todo.content}</li>
      ))}
    </ul>
  );
});
```

### prop이 자주 변경되는 경우

props drilling 상황에서 해당 컴포넌트가 사용하는 props의 변경 시에만 리렌더링 되도록 만들 수 있다

memo를 사용하지 않았을 때는 `data.stats`이 변경되면 `<Dashboard>`의 모든 컴포넌트가 리렌더링 된다. 하지만 각각 memo를 사용하면 `<MemoizedStoreStats>` 구성 요소만 리렌더링되게 한다

```jsx
const MemoizedStoreStats = React.memo(function StoreStats({ stats }) {
  // ...
});

const MemoizedRecentOrders = React.memo(function RecentOrders({
  orders,
}) {
  // ...
});

const MemoizedCustomers = React.memo(function Customers({
  customers,
}) {
  // ...
});

function Dashboard({ data }) {
  return (
    <div>
      <h1>Store Dashboard</h1>
      <MemoizedStoreStats stats={data.stats} />
      <MemoizedRecentOrders orders={data.orders} />
      <MemoizedCustomers customers={data.customers} />
    </div>
  );
}
```



## 얕은 비교

React에서는 얕은 비교를 통해 이전 props와 새로운 props를 비교합니다. 따라서 참조가 같은지 여부가 중요합니다.

### 스칼라 유형(원시 유형)

나눌 수 없는 단일 값을 가진 유형으로 가장 기본적이고 기초적

- 숫자나 문자열 
- 논리(bool)형 
- Symbol
- null
- undefined

```javascript
1 === 1 // true
'hello' === 'hello' // true
```



### 비스칼라(참조 유형)

데이터 값 자체가 아닌  데이터의 위치를 가리키는 참조 유형

- 객체
- 배열

내용이 동일하더라도 새로운 배열이나 객체인 경우 얕은 비교에서 동등하지 않은 것으로 간주

```javascript
[]===[] // false
[1,2,3]===[1,2,3] // false
{ foo: "bar"} === { foo: "bar"} // false
```



### props 리렌더링 최적화

✅props가 객체나 배열인 경우 useMemo를 사용하여 값을 캐싱하여 props로 전달

✅props가 함수인 경우 useCallback을 사용하여 함수를 캐싱하여 props로 전달