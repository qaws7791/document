# JavaScript 원시 타입(Primitive Types)


## BigInt

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


## 논리값(Boolean)

- 논리 데이터 유형으로 true 또는 false 두 가지 종류를 가짐
- 자바스크립트의 모든 값은 boolean 값으로 변환될 수 있음
- falsy(false인 경우)
  - 0 , -0
  - null
  - false
  - NaN
  - undefined
  - ""


## 숫자(Number)

- 자바스크립트에서는 숫자를 모두 64비트 부동소수점으로 표현
- 배열 인덱스와 비트 연산은 32비트 정수 처리
- **리터럴(literal)** : 프로그램에 직접 작성할 수 있는 상수 값

```javascript
Number(1234)
```


#### 숫자 리터럴

|         분류          |    표기법     |    예시     |           설명            | 비고 |
| :-------------------: | :-----------: | :---------: | :-----------------------: | :--: |
|    **정수 리터럴**    |    10진수     |     123     |     정수 그대로 표현      |      |
|                       |    16진수     |    0x2a     |     숫자 앞에 0x(0X)      |      |
|                       |     8진수     |    0o73     |       숫자 앞에 0o        | ES6  |
|                       |     2진수     |    0b101    |     숫자 앞에 0b(0B)      | ES6  |
| **부동소수점 리터럴** |   정수.소수   |    3.14     |     소수 그대로 표현      |      |
|                       |     소수      |    0.123    | 정수부 0일때 0은 생략가능 |      |
|                       | 가수부e지수부 |   6.02e23   |        6.02\*10^23        |      |
|                       | 가수부E지수부 | 1.16199E-35 |     1.1616199\*10^-35     |      |

```javascript
0xff // 255 = 16*15 + 15*1 (16진수)
0o11 // 9 = 8*1 + 1 (8진수)
0b101 // 5 = 4 + 1 (2진수)
```

- 부동소수점 표현의 한계
- 해결 방안:
  - 계산 시에 소수점이 생기지 않도록 정수로 단위를 올려 계산
  - 적절히 소수점을 반올림
  - 정밀도를 조절하는 라이브러리 활용

```javascript
1 - 0.9 // 0.09999999999999998 (0.1을 제대로 표현하지 못한다)
0.3 - 0.2 == 0.1 // false
```


#### 특수한 값

| 분류              | 표기법                    | 설명                                            | 비고 |
| ----------------- | ------------------------- | ----------------------------------------------- | ---- |
| 전역 변수         | Infinity                  | 플러스 무한대                                   |      |
| 전역 변수         | NaN                       | 부정 값(수치 계산 오류)                         |      |
| Number의 프로퍼티 | Number.PISITIVE\_INFINITY | 플러스 무한대                                   |      |
| Number의 프로퍼티 | Number.NEGATIVE\_INFINITY | 마이너스 무한대                                 |      |
| Number의 프로퍼티 | Number.MIN\_VALUE         | 표현 가능한 최소값<br />5e-324                  |      |
| Number의 프로퍼티 | Number.MAX\_VALUE         | 표현 가능한 최댓값<br />1.7976931348623157e+308 |      |
| Number의 프로퍼티 | Number.NaN                | 부정 값                                         |      |
| Number의 프로퍼티 | Number.EPSILON            | 2.22044604925031e-16                            | ES6  |
| Number의 프로퍼티 | Number.MIN\_SAFE\_INTEGER | -9,007,199,254,740,991                          | ES6  |
| Number의 프로퍼티 | Number.MAX\_SAFE\_INTEGER | 9,007,199,254,740,991                           | ES6  |


## 문자열(String)

- 16비트 유니코드 문자(UTF-16)
- 문자열에 '' 또는 ""를 감싸서 사용.
- 문자열 템플릿으로 백틱(\`)도 사용 가능
- HTML 요소에 자바스크립트를 넣을 때는 문자열처럼 감싸서 작성

```javascript
String('hello')
'hello'
"hello"
`hello`
```

```html
<input type="button" value="Click" onClick="alert('Thanks!')" />
```

- 문자열안에서 특수한 문자들은 이스케이프 시퀀스로 표현해야 한다.
- 이스케이프 시퀀스는 역슬래시(\\) 뒤에 특정 문자를 넣어 표현

| 이스케이프 스퀀스 | 의미                                             | 비고 |
| ----------------- | ------------------------------------------------ | ---- |
| \0                | 널(null)문자                                     |      |
| \b                | 백스페이스 문자                                  |      |
| \t                | 수평 탭 문자                                     |      |
| \n                | 개행 문자                                        |      |
| \v                | 수직 탭 문자                                     |      |
| \f                | 다음 페이지 문자                                 |      |
| \r                | 캐리지 리턴 문자(CR)                             |      |
| \\'               | 작은따옴표 문자                                  |      |
| \\"               | 큰따옴표 문자                                    |      |
| \\\\               | 역슬래시 문자                                    |      |
| \xXX              | 두 자릿수 16진수 XX로 지정된 유니코드 문자       |      |
| \uXXXX            | 네 자릿수 16진수 XXXX로 지정된 유니코드 문자     |      |
| \u{XXXXX}         | 16진수 코드 포인트 XXXXXX로 지정된 유니코드 문자 | ES6  |


## undefined와 null


### undefined

정의되지 않은 상태

- 값을 아직 할당하지 않은 변수의 값
- 없는 객체의 프로퍼티를 읽으려고 했을 때의 값
- 없는 배열의 요소를 읽으려고 했을 때의 값
- 값을 반환하지 않는 함수가 반환하는 값
- 함수를 호출했을 때 전달받지 못한 인수의 값
- 숫자로서 `NaN`


### null

아무것도 없음

- 보통 프로그램에서 무언가를 검색했지만 찾지 못했을 때 반환되는 값
- 숫자로서 `0`
- null 값 확인: `nullVar === null`을 통해 확인 (typeof 사용하면 'object'를 반환하므로 안됨)

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
