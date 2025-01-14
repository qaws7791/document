# Block Elements

- 블록 레벨 요소는 자신의 이전 요소와 이후 요소 사이에 줄 바꿈
- 페이지의 구조적 요소 표현에 유용



---

### `<details>`: 상세 정보 위젯

열린 상태일 때 정보를 보여주는 위젯

- 레이블은 `<summary>`로 제공
- `<datails>`요소의 첫 번째 자식이 `<summary>`요소일 때, 이 첫번째 요소의 콘텐츠를 위젯의 레이블로 사용
- 위젯의 레이블은 생략이 가능
- 아래의 코드에서 "Details"가 `<datails>`의 위젯 레이블
- 속성: open
- CSS 적용하기
  - list-style 속성을 이용
  - 기본으로 나오는 삼각형 모양 제거하기: `list-style: none`

```html
<details>
  <summary>Details</summary>
  Something small enough to escape casual notice.
</details>
```

toggle 이벤트 리스너를 통해 open 속성의 상태 변화를 감지할 수 있다.

```js
details.addEventListener("toggle", (event) => {
  if (details.open) {
    /* the element was toggled open */
  } else {
    /* the element was toggled closed */
  }
});
```

<details>

<summary>Details</summary>

Something small enough to escape casual notice.

</details>

---

### `<dialog>`: 대화상자

닫을 수 있고, 상호작용이 가능한 컴포넌트

- 속성: open
  - 대화 상자가 활성 상태이며 상호작용이 가능.
  - open상태가 아닐 경우 사용자에게 보여서는 안된다.
- `<dialog>`열 때에는 `open`속성 직접 변경이 아닌 `.show(), .showModal()`메서드를 사용

```html
<dialog open>
  <p>여러분 안녕하세요!</p>
</dialog>
```

여러분 안녕하세요!

---



---



---

### `<fieldset>`: 필드 집합의 라벨

웹 양식(`<form>`)에서 여러 컨트롤과 레이블을 그룹화

그룹에 대한 설명: `<legend>`요소로 제공

속성

- form
  - 페이지 내에서 `<fieldset>`요소와 연결할 `<form>`요소의 id
- disabled
  - `<fieldset>`요소 내의 모든 콘텐츠를 한 번에 비활성화
- name
  - 그룹에 대한 이름

기본 css 속성

- display: block
- border: 2px groove
- min-inline-size: min-content
- 약간의 내부 여백

```html
<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>

    <input type="radio" id="kraken" name="monster" />
    <label for="kraken">Kraken</label><br />

    <input type="radio" id="sasquatch" name="monster" />
    <label for="sasquatch">Sasquatch</label><br />

    <input type="radio" id="mothman" name="monster" />
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

Choose your favorite monster Kraken\
&#x20;Sasquatch\
&#x20;Mothman

---



---

### `<form>`: 입력 폼

대화형 컨트롤을 제공

CSS 의사 클래스 `:valid`, `:invalid`를 통해 양식이 유효한 경우에 대한 CSS 속성 적용 가능

속성

- accept-charset
  - 서버가 허용하는 문자 인코딩 목록
  - 기본값은 페이지 인코딩
- action
  - 양식 데이터를 처리할 프로그램의 URI
  - `<button>`, `<input type="submit">`, `<input type="image">`요소의 formaction 속성으로 재정의 가능
- autocapitalize
  - 영문에 대한 대소문자 자동 변환 방식
  - ios safari에서만 사용하는 비표준 특성
- autocomplete
  - 입력 요소의 자동완성 기능을 사용할지
  - off: 자동완성 x
  - on: 자동완성 o
- entype
  - method 속성이 post 값일 때, 양식 제출시 MIME 유형 지정
  - 기본값: application/x-www-form-urlencoded
  - multipart/form-data: `<input type="file">`이 존재 하는 경우 사용
  - text/plain: html 5에서 디버깅용
- method
  - 양식 제출시 사용할 HTTP 메서드
  - post: 양식 데이터를 본문인 body에 넣어 전송
  - get: 양식 데이터를 url과 ? 구분자 뒤에 이어 붙여 전송
  - dialog: 양식이 `<dialog>` 안에 위치할 경우, 제출과 함께 대화 상자 종료
- name
  - form의 의 이름
- novalidate
  - 지정할 경우 양식의 유효성 검증 건너 뛰기
- target
  - 양식 제출에 대한 결과를 표시할 위치를 지정
  - 가능한 값: 브라우징 맥락의 이름 또는 키워드
  - \_self: 응답을 현재 브라우징 맥락에 표시. 기본값
  - \_blank: 응답을 새로운 브라우징 맥락에 표시. 보통 새 탭
  - \_parent: 응답을 현재 브라우징 맥락의 부모에 표시. 부모가 없으면 \_self와 동일하게 동작
  - \_top: 응답을 최상단 브라우징 맥락에 표시. 부모가 없으면 \_self와 동일하게 동작

```html
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required />
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required />
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!" />
  </div>
</form>
```





### `<table>`: 표

- `<tr>`: 행 구분
- `<th>`: 셀 제목
- `<td>`: 셀

접근성

- `<caption>`요소를 제공하여 사용자에게 설명 제공하여 불필요한 경우 스킵하도록 도움

```html
<table>
  <caption>
    Color names and values
  </caption>
  <tbody>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">HEX</th>
      <th scope="col">HSLa</th>
      <th scope="col">RGBa</th>
    </tr>
    <tr>
      <th scope="row">Teal</th>
      <td><code>#51F6F6</code></td>
      <td><code>hsla(180, 90%, 64%, 1)</code></td>
      <td><code>rgba(81, 246, 246, 1)</code></td>
    </tr>
    <tr>
      <th scope="row">Goldenrod</th>
      <td><code>#F6BC57</code></td>
      <td><code>hsla(38, 90%, 65%, 1)</code></td>
      <td><code>rgba(246, 188, 87, 1)</code></td>
    </tr>
  </tbody>
</table>
```



### 두 요소의 차이점

- 콘텐츠 모델: 블록 요소는 인라인 요소 혹은 다른 블록 요소를 포함할 수 있다
- 기본 서식: 기본적으로 블록 요소는 새로운 줄에서 시작, 인라인 요소는 줄의 어느 곳에서든 시작 할 수 있다.

> 블록과 인라인의 의미는 css의 box model과 유사하지만 다르다
