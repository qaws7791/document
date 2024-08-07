# 문자열(String)

* 16비트 유니코드 문자(UTF-16)
* 문자열에 '' 또는 ""를 감싸서 사용.
* 문자열 템플릿으로 백틱(\`)도 사용 가능
* HTML 요소에 자바스크립트를 넣을 때는 문자열처럼 감싸서 작성

```javascript
String('hello')
'hello'
"hello"
`hello`
```

```html
<input type="button" value="Click" onClick="alert('Thanks!')" />
```

* 문자열안에서 특수한 문자들은 이스케이프 시퀀스로 표현해야 한다.
* 이스케이프 시퀀스는 역슬래시() 뒤에 특정 문자를 넣어 표현

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
| \\\               | 역슬래시 문자                                    |      |
| \xXX              | 두 자릿수 16진수 XX로 지정된 유니코드 문자       |      |
| \uXXXX            | 네 자릿수 16진수 XXXX로 지정된 유니코드 문자     |      |
| \u{XXXXX}         | 16진수 코드 포인트 XXXXXX로 지정된 유니코드 문자 | ES6  |

