# HTML

## HTML

> 요소 선택은 상황에 따라 달라야 하며, 순수하게 꾸밈을 위한 요소는 없습니다. 스타일은 CSS에 맡기세요.

\[TOC]

##

### HTML이란

HTML (Hypertext Markup Language, 하이퍼텍스트 마크업 언어)

![HTML5 Structure Doc](HTML.assets/html5-structure.png)

### HTML 요소의 구조

1. 여는 태그(Opening tag)
2. 닫는 태그(Closing tag)
3. 내용(content): 요소에 대한 내용
4. 요소(Element): 위의 세 가지를 통틀어 요소라 한다.

#### 포함된 요소 (Nesting elements)

요소 안에 다른 요소가 포함될 수 있다

포함 시키고자 하는 요소의 여는 태그와 닫는 태그 전부를 요소 안에 넣어야 한다.

#### 빈 요소(Empty elements)

단일 태그를 사용하는 요소도 있다. ex) `<img>`

#### 속성(Attributes)

`<p class="editor-note">My cat is very grumpy</p>`

1. 요소 이름 바로 다음에 오는 속성은 요소 이름과 속성 사이에 공백이 필요
2. 하나 이상의 속성이 있는 경우 속성들 사이에 공백 필요
3. 속성 이름 다음에는 등호(=)가 붙는다.
4. 속성 값은 열고 닫는 따옴표로 감싸야 한다.

#### 참 거짓 속성(Boolean attributes)

불리언 속성은 그 속성의 이름과 같은 하나의 값만 가짐

`<input type="text" disabled="disabled">` = `<input type="text" disabled>`

#### 속성 값의 따옴표 생략

속성 값을 따옴표로 감싸지 않는 것은 마크업 형식을 망칠 수 있다.

#### 작은 따옴표, 큰 따옴표

속성 값을 감싸는 따옴표는 작은 따옴표 또는 큰 따옴표를 사용하며, 이것은 스타일의 문제

따옴표 안에 같은 따옴표를 쓰기를 원한다면 `HTML entities`를 사용할 수 있다.

| Literal character | Character reference equivalent |
| ----------------- | ------------------------------ |
| <                 | `<`                            |
| >                 | `>`                            |
| "                 | `"`                            |
| '                 | `'`                            |
| &                 | `&`                            |

### HTML 문서의 구조

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My test page</title>
  </head>
  <body>
    <p>This is my page</p>
  </body>
</html>
```

* `<!DOCTYPE html>`
  * 문서의 형식을 나타낸다.
  * HTML 초기에 자동 오류 검사나 다른 기능을 위해 사용
  * 유효한 문서 형식을 나타내는 역사적 유물
* `<html></html>`
  * 전체 페이지 콘텐츠를 포함하는 기본 요소
* `<head></head>`
  * 검색 결과에 노출 될 키워드
  * 홈페이지 설명
  * CSS 스타일
  * character setdeclaration 등
* `<meta charset="utf-8">`
  * HTML 문서의 문자 인코딩 설정을 UTF-8로 지정
  * 페이지에 표시되는 모든 텍스트 내용을 처리
* `<title></title>`
  * 페이지가 로드되는 브라우저 탭에 표시되는 페이지 제목 설정
  * 북마크할 때도 사용
* `<body></body>`
  * 페이지에 표시되는 모든 콘텐츠를 포함

#### HTML 공백

HTML 요소의 내용 내에서 공백을 얼마나 사용하든 HTML 파서는 코드 렌더링시 각 공백 시퀀스를 단일 공백으로 치환한다.

#### HTML 주석

`<!-- 주석 -->`
