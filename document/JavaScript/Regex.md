# Regular Expression

- 특정한 **규칙**을 가진 문자열의 집합을 **표현**



## 정규 표현식 만들기

1. 리터럴을 사용하여 패턴을 슬래시(/)로 감싸기
2. RegExp 생성자를 호출하여 생성하기

```javascript
const re = /ab/i
const re = new RegExp("ab")
```



## 정규 표현식 플래그

### i (ignore case)

- 정규 표현식은 기본적으로 대소문자를 구분한다.
- 이 플래그를 사용하면 대소문자를 구분하지 않는다.
- ex. `/abc/i`는  `ABC`에도 매칭이 된다.

```javascript
console.log("ABC".match(/abc/)) // null
console.log("ABC".match(/abc/i)) // ["ABC"]
```



### g (global search)

- 정규 표현식은 기본적으로 하나의 검색 결과만 반환한다.
- 이 플래그는 정규 표현식이 모든 검색 결과를 반환하도록 한다.

```javascript
const str = "abcABC"
console.log(str.match(/a/i)) // ["a"]
console.log(str.match(/a/gi)) // ["a","A"]
```



### m (multi line)

- 시작과 끝을 나타내는 앵커(^, &)가 전체 문자열의 시작과 끝이 아닌 줄의 시작과 끝에 일치됩니다.

```javascript
const str = "hello world\nhello regex";
console.log(str.match(/^hello/)); // ["hello"]
console.log(str.match(/^hello/gm)); // ["hello", "hello"]

```



### u (unicode)

- 확장된 유니코드 이스케이프를 지원. 
- 인식할 수 없는 이스케이프에 대해서 에러를 발생시킴



### y (sticky)

- 마지막 인덱스 위치에서만 일치하고 전역 플래그(g)를 무시



### s (dotall)

- 점(.)이 새 줄을 포함하여 모든 문자와 일치하게 됨



## 문자 클래스

| 패턴   | 의미                                          | 설명                                      | 동일                                                         |
| ------ | --------------------------------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| [abc]  | abc중 어느 하나                               |                                           |                                                              |
| [^abc] | abc가 아닌 것                                 |                                           |                                                              |
| [a-g]  | a와 g 사이의 문자                             |                                           |                                                              |
| .      | 새 줄(\n \r \u2028 \u2029)을 제외한 모든 문자 | 'abcabcda'에서 /.a/ -> 'ab**ca**bc**da**' |                                                              |
| \w     | 영숫자 및 언더스코어.                         | 'ab_cd.com'에서 \w -> '**ab_cd**$**com**' | `[A-Za-z0-9_]`                                               |
| \W     | /w가 아닌 것.                                 | 'ab_cd.com'에서 \w -> 'ab_cd**$**com'     | ` [^A-Za-z0-9_]`                                             |
| \d     | 숫자.                                         | 'apple1234'에서 \d -> 'apple**1234**'     | `[0-9]`                                                      |
| \D     | 숫자가 아닌 것.                               | 'apple1234'에서 \d -> '**apple**1234'     | `[^0-9]`                                                     |
| \s     | whitespace                                    | 'one man'에서 \s -> 'one■man'             | `[\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]` |
| \S     | whitespace가 아닌 것                          | 'one man'에서 \S -> '**one**□**man**'     | `[^\f\n\r\t\v\u0020\u00a0\u1680\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]` |
| \t     | 수평 탭(horizontal tab)                       | Tab 키                                    |                                                              |
| \v     | 수직 탭(vertical tab)                         |                                           |                                                              |
| \r     | 캐리지 리턴(carriage return)                  | 새 줄을 시작하는 데 사용되는 제어 문자    |                                                              |
| \n     | 라인 피드(linefeed)                           | 커서를 다음 줄로 옮기는 것                |                                                              |
| \f     | 폼 피드(form-feed)                            | 새 문서 페이지임을 표시하는 것            |                                                              |
| \0     | NUL 문자                                      | 뒤에 숫자가 이어지면 안                   |                                                              |
| x\|y   | 논리 합                                       | "x" 또는 "y"                              |                                                              |



## 어서션

- 단어 또는 라인의 시작과 끝을 나타내는 경계를 포함
- 매치가 가능함을 나타내는 몇 가지 패턴을 포함

### Boundary-type assertions

| 문자 | 의미                                                         |
| ---- | ------------------------------------------------------------ |
| ^    | 입력의 시작과 일치. 멀티 라인이 설정된 경우, 줄 바꿈 바로 뒤에도 일치 |
| $    | 입력의 마지막과 일치. 멀티 라인이 설정된 경우, 줄 바꿈 바로 이전에도 일치 |
| \b   | 단어 경계와 일치. 뒤에 다른 단어가 오지 않거나, 앞에 다른 단어가 오지 않는 위치 |
| \B   | 단어가 아닌 경계와 일치.  이전 문자와 다음 문자가 같은 유형인 위치 |

### other assertions

| 문자    | 의미                                                         |
| ------- | ------------------------------------------------------------ |
| x(?=y)  | **Lookahead**: "x" 뒤에 "y"가 오는 경우에만 "x"에 일치       |
| x(?!y)  | **Negative lookahead**: "x" 뒤에 'y'가 오지 않는 경우에만 "x"에 일치 |
| (?<=y)x | **Lookbehind**: "x" 앞에 "y"가 오는 경우에만 "x"에 일치      |
| (?<!y)x | **Negative lookbehind**: "x" 앞에 "y"가 오지 않는 경우에만 "x"에 일치 |



## 그룹

- 여러 패턴을 묶어 그룹화
- 역참조: 동일한 정규식에서 이전에 캡쳐된 그룹을 참조하는 것

| 문자         | 의미                                               |
| ------------ | -------------------------------------------------- |
| `(x)`        | **Capturing group**: x에 일치하고 일치한 것을 기억 |
| `(?<Name>x)` | **Named capturing group**                          |
| `(?:*x*)`    | **Non-capturing group**                            |
| `\n`         | 역참조                                             |
| `\k<Name>`   | **Named capture group**에 대한 역참조              |
|              |                                                    |

