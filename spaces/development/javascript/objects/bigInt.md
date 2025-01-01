# BigInt

- Number 타입보다 더 큰 정수를 표현할 수 있다
- `ES2020`에서 정의
- 내장 `Math` 객체의 메서드를 사용할 수 없다
- `Number`타입과 `BigInt`를 함께 연산에 사용할 수 없다
- `BigInt`를 `Number`로 변경하면 정확도를 잃을 수 있다

```javascript
const bigint = 1n;
const bigint = BigInt(1);
```

```javascript
1n + 1 // TypeError: Cannot mix BigInt and other types, use explicit conversions
```

