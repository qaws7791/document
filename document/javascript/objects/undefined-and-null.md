# undefined and null

## undefined

정의되지 않은 상태

* 값을 아직 할당하지 않은 변수의 값
* 없는 객체의 프로퍼티를 읽으려고 했을 때의 값
* 없는 배열의 요소를 읽으려고 했을 때의 값
* 값을 반환하지 않는 함수가 반환하는 값
* 함수를 호출했을 때 전달받지 못한 인수의 값
* 숫자로서 `NaN`

### 

## null

아무것도 없음

* 보통 프로그램에서 무언가를 검색했지만 찾지 못했을 때 반환되는 값
* 숫자로서 `0`
* null 값 확인: `nullVar === null`을 통해 확인 (typeof 사용하면 'object'를 반환하므로 안됨)

```javascript
undefined === undefined // true
undefined === null // false
null === null // true
Number(undefined) // NaN
Number(null) // 0
String(undefined) // "undefined"
String(null) // null
Boolean(undefined) // false
Boolean(null) // false
```

```javascript
typeof null // 'object'
```

