[TOC]



# Block vs inline elements

# 블록 레벨 요소(Block-level elements)

- 블록 레벨 요소는 자신의 이전 요소와 이후 요소 사이에 줄 바꿈
- 페이지의 구조적 요소 표현에 유용



### `<address>` : 전화번호, 이메일 등 연락처 정보를 포함하는 요소

- 주로 이탤릭체로 표현
- 실제 주소, 이메일 주소, URL, 전화번호, 소셜 미디어 아이디, 지리적 좌표 등 모든 유형의 연락처 정보를 포함
- 연락처 정보를 참조하는 사람 또는 조직의 이름이 포함 
- 일반적으로 `<footer>`안에서 사용된다.

```html
<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a>
  You can contact author at
  <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br />  
</address>
```

<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a><br>
    You can contact author at
  <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br />
</address>

---



### `<article>`: 단락 콘텐츠

독립적으로 구분할 수 있는 컨텐츠로 게시판의 글이나 뉴스 기사 등의 컨텐츠

Tip:

- `<article>` 항목을 식별하는데 `<h1>~<h6>`제목 요소를 사용
- `<article>`은 중첩이 가능하고 하위 항목은 상위 항목과 관련이 있어야 한다.
- 작성자 정보: `<address>`를 이용해 제공
- 작성일자와 시간: `<time>`요소의 `<time datetime="2018-07-07">`와 같은 속성 이용해 제공

```html
<article class="film_review">
  <header>
    <h2>Jurassic Park</h2>
  </header>
  <section class="main_review">
    <p>Dinos were great!</p>
  </section>
  <section class="user_reviews">
    <article class="user_review">
      <p>Way too scary for me.</p>
      <footer>
        <p>
          Posted on <time datetime="2015-05-16 19:00">May 16</time> by Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <p>I agree, dinos are my favorite.</p>
      <footer>
        <p>
          Posted on <time datetime="2015-05-17 19:00">May 17</time> by Tom.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Posted on <time datetime="2015-05-15 19:00">May 15</time> by Staff.
    </p>
  </footer>
</article>
```


---



### `<aside>`: 부가 콘텐츠

문서의 주요 내용과 간접적인 연관 컨텐츠를 제공. 부연 설명

사이드바 또는 콜아웃 상자의 역할 

```html
<article>
  <p>
    디즈니 만화영화 <em>인어 공주</em>는
    1989년 처음 개봉했습니다.
  </p>
  <aside>
    인어 공주는 첫 개봉 당시 8700만불의 흥행을 기록했습니다.
  </aside>
  <p>
    영화에 대한 정보...
  </p>
</article>
```


### `<blockquote>`: 블록 인용구

인용 텍스트로 이루어진 인용구 블록이다.

- 인용문의 출처는 `cite` 속성 이용히야 제공
- 일반적으로 들여쓰기가 되어 있고, `margin-left,right`를 통해 변경
- 인라인 인용구는 `<q>`

```html
<blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
</blockquote>
```

---



### `<datails>`: 상세 정보 위젯

열린 상태일 때 정보를 보여주는 위젯

- 레이블은 `<summary>`로 제공
- `<datails>`요소의 첫 번째 자식이 `<summary>`요소일 때, 이 첫번째 요소의 콘텐츠를 위젯의 레이블로 사용
- 위젯의 레이블은 생략이 가능
- 아래의 코드에서  "Details"가 `<datails>`의 위젯 레이블
- 속성: open
- CSS 적용하기
  - list-style 속성을 이용
  - 기본으로 나오는 삼각형 모양 제거하기:  `list-style: none`

```html
<details>
    <summary>Details</summary> 
    Something small enough to escape casual notice.
</details>
```

toggle 이벤트 리스너를 통해 open 속성의 상태 변화를 감지할 수 있다.

```js
details.addEventListener("toggle", event => {
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



### `<dialog>`:  대화상자

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

<dialog open>
  <p>여러분 안녕하세요!</p>
</dialog>

---



### `<dl>`: 설명 목록( Description List)

`<dd>` 요소와 `<dt>`요소를 포함하는 설명 목록을 제공

단어 사전이나 메타데이터 등의 키-값 목록을 생성하는데 유용

### `<dt>`: 설명 목록의 정의 (Description Term)

키-값 목록에서 키의 부분을 나타내거나, 단어 사전에서 단어를 나타내는 부분을 표현

### `<dd>`: 설명 목록의 정의 설명(Description Details)

용어 `<dt>`에 대한 설명이나 정의, 값 등을 제공

```html
<dl>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
</dl>
```

<dl>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
</dl>

---



### `<div>`: 문서의 분할

순수하게 요소를 담는 컨테이너의 역할로 아무것도 표현하지 않는다.

이 요소는 다른 의미를 가진 요소들이 적절하지 않을 때만 사용

```html
<div>
  <p>
    Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!
  </p>
</div>
```



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

    <input type="radio" id="kraken" name="monster">
    <label for="kraken">Kraken</label><br/>

    <input type="radio" id="sasquatch" name="monster">
    <label for="sasquatch">Sasquatch</label><br/>

    <input type="radio" id="mothman" name="monster">
    <label for="mothman">Mothman</label>
  </fieldset>
</form>
```

<form>
  <fieldset>
    <legend>Choose your favorite monster</legend>
    <input type="radio" id="kraken" name="monster">
    <label for="kraken">Kraken</label><br/>
    <input type="radio" id="sasquatch" name="monster">
    <label for="sasquatch">Sasquatch</label><br/>
    <input type="radio" id="mothman" name="monster">
    <label for="mothman">Mothman</label>
  </fieldset>
</form>



---

### `<figure>`: 미디어 콘텐츠 그룹과 설명

다른 부분으로 이동해도 문제가 없는 독립적인 컨텐츠를 제공

요소 내부에 `<figcaption>`를 포함하여 설명을 제공



### `<figcaption>`: 그림 설명 

`<figure>`가 포함하는 컨텐츠에 대한 설명이나 범례 제공

```html
<figure>
    <img src="/media/cc0-images/elephant-660-480.jpg"
         alt="Elephant at sunset">
    <figcaption>An elephant at sunset</figcaption>
</figure>
```



코드 표현

```html
<figure>
  <figcaption><code>navigator</code>를 이용하여 브라우저 정보 얻기</figcaption>
  <pre>
function NavigatorExample() {
  var txt;
  txt = "Browser CodeName: " + navigator.appCodeName;
  txt+= "Browser Name: " + navigator.appName;
  txt+= "Browser Version: " + navigator.appVersion ;
  txt+= "Cookies Enabled: " + navigator.cookieEnabled;
  txt+= "Platform: " + navigator.platform;
  txt+= "User-agent header: " + navigator.userAgent;
}
  </pre>
</figure>
```

<figure>
  <figcaption><code>navigator</code>를 이용하여 브라우저 정보 얻기</figcaption>
  <pre>
function NavigatorExample() {
  var txt;
  txt = "Browser CodeName: " + navigator.appCodeName;
  txt+= "Browser Name: " + navigator.appName;
  txt+= "Browser Version: " + navigator.appVersion ;
  txt+= "Cookies Enabled: " + navigator.cookieEnabled;
  txt+= "Platform: " + navigator.platform;
  txt+= "User-agent header: " + navigator.userAgent;
}
  </pre>
</figure>

인용문 표현

```html
<figure>
  <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
  <blockquote>If debugging is the process of removing software bugs,
  then programming must be the process of putting them in.</blockquote>
</figure>
```

<figure>
  <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
  <blockquote>If debugging is the process of removing software bugs,
  then programming must be the process of putting them in.</blockquote>
</figure>

시 표현

```html
<figure>
  <p style="white-space:pre">
Bid me discourse, I will enchant thine ear,
  Or like a fairy trip upon the green,
Or, like a nymph, with long dishevell'd hair,
  Dance on the sands, and yet no footing seen:
Love is a spirit all compact of fire,
  Not gross to sink, but light, and will aspire.</p>
  <figcaption><cite>Venus and Adonis</cite>,
    by William Shakespeare</figcaption>
</figure>
```

<figure>
  <p style="white-space:pre">
Bid me discourse, I will enchant thine ear,
  Or like a fairy trip upon the green,
Or, like a nymph, with long dishevell'd hair,
  Dance on the sands, and yet no footing seen:
Love is a spirit all compact of fire,
  Not gross to sink, but light, and will aspire.</p>
  <figcaption><cite>Venus and Adonis</cite>,
    by William Shakespeare</figcaption>
</figure>



---



### `<footer>`: 페이지나 구역의 바닥글

가장 가까운 구획 콘텐츠나 구획 루트에 대한 푸터를 제공

푸터는 일반적으로 작성자, 저작권 정보, 관련 문서 등에 대한 내용을 포함

Tip:

- 푸터에 `<address>`를 이용해 작성자 정보를 표현
- 가장 가까운 상위 요소를 본문으로 하여 전체 페이지에 적용
- `<footer`>는 컨텐츠를 섹션화하지 하지 않아 개요에 나타나지 않는다.

```html
<footer>
  Some copyright info or perhaps some author info for an &lt;article&gt;?
</footer>
```



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
  - _self: 응답을 현재 브라우징 맥락에 표시. 기본값
  - _blank: 응답을 새로운 브라우징 맥락에 표시. 보통 새 탭
  - _parent: 응답을 현재 브라우징 맥락의 부모에 표시. 부모가 없으면 _self와 동일하게 동작
  - _top: 응답을 최상단 브라우징 맥락에 표시. 부모가 없으면 _self와 동일하게 동작

```html
<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>
```

<form action="" method="get" class="form-example">
  <div class="form-example">
    <label for="name">Enter your name: </label>
    <input type="text" name="name" id="name" required>
  </div>
  <div class="form-example">
    <label for="email">Enter your email: </label>
    <input type="email" name="email" id="email" required>
  </div>
  <div class="form-example">
    <input type="submit" value="Subscribe!">
  </div>
</form>

---



### `<h1>`~`<h6>`: 제목

6단계로 이루어진 구획 제목을 제공

Tips:

- 글씨 크기 조정은 h태그가 아닌 css의 `font-size` 이용
- 제목 단계는` h1`부터 `h2`, `h3` 순으로 건너뛰지 않고 순차적으로  사용
- 페이지당 하나의 h1 태그를 사용

`<header>`: 페이지나 구역의 헤더

소개 및 탐색에 관련된 콘텐츠 제공

제목이나 로고, 검색 창, 작성자 이름등의 요소를 포함

```html
<header class="page-header">
    <h1>Cute Puppies Express!</h1>
</header>

<main>
    <p>I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and their ears are so, so snuggly soft!</p>
</main>
```

<header class="page-header">
    <h1>Cute Puppies Express!</h1>
</header>
<main>
    <p>I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and their ears are so, so snuggly soft!</p>
</main>

---



### `<hgroup>`: 헤더 정보 그룹

제목, 부제목과 같이 문서 구획의 다단계 제목을 표현

h1~h6 태그 여러 개를 묶을 때 사용 

```html
<hgroup>
  <h1>주요 제목</h1>
  <h2>부제목</h2>
</hgroup>
```



### `<hr>`: 수평선

주제를 분리하기 위한 수평선



### `<li>`: 목록의 항목

목록에서 항목을 나타내므로 `<ol>`이나 `<ul>`,`<menu>`안에 위치

속성

- value
  - 요소 내부에서 항목의 현재 서수 값을 나타내는 정수
  - 비정렬 목록`<ul>`과 `<menu>`에서는 의미가 없다
- type
  - 넘버링 타입을 나타내는 문자
  - 현재는 css의 list-style-type 속성을 이용
  - a: 소문자 글자
  - A: 대문자 글자
  - i: 소문자 로마 숫자
  - I: 대문자 로마 숫자
  - 1: 숫자

```html
<ol type="I">
    <li value="3">third item</li>
    <li>fourth item</li>
    <li>fifth item</li>
</ol>
```

<ol type="i">
    <li value="3">third item</li>
    <li>fourth item</li>
    <li>fifth item</li>
</ol>



### `<main>`: 문서에서 하나뿐인 중심 콘텐츠

이 요소의 콘텐츠는 문서에서 유일한 내용이어야 한다.

문서에는 하나의 `<main>` 요소만 존재해야 한다

`<main>`요소에 id요소를 추가해 건너뛰기 링크의 대상으로 지정할 수 있다.

```html
<body>
  <a href="#main-content">Skip to main content</a>

  <!-- navigation and header content -->

  <main id="main-content">
    <!-- main page content -->
  </main>
</body>
```



### `<nav>`: 탐색링크를 포함하는 네비게이터

메뉴, 목차, 색인 등에 사용

```html
<nav class="crumbs">
    <ol>
        <li class="crumb"><a href="#">Bikes</a></li>
        <li class="crumb"><a href="#">BMX</a></li>
        <li class="crumb">Jump Bike 3000</li>
    </ol>
</nav>

<h1>Jump Bike 3000</h1>
<p>This BMX bike is a solid step into the pro world. It looks as legit as it rides and is built to polish your skills.</p>
```

Tips:

- 모든 링크가 `<nav>`요소 안에 있을 필요는 없다.
- 주요 탐색 링크를 위한 요소이다.
- 중요하지 않은 링크는 `<footer>`에 정의 할 수 있다.
- 하나의 페이지 내에서 여러 개의 `<nav>`를 사용 가능. 전체 탐색용 그리고 현재 페이지 탐색 등
  이때 [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)를 사용



### `<ol>`: 정렬된(순서있는) 목록

순서가 지정된 목록을 제공

```html
<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin’ Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

속성

- resversed
  - 목록의 항목이 역순임을 지정
- start
  - 목록 항목에서 시작할 수
- type
  - 번호 매기기 유형
  - a: 소문자 글자
  - A: 대문자 글자
  - i: 소문자 로마 숫자
  - I: 대문자 로마 숫자
  - 1: 숫자



### `<p>`: 문단

하나의 문단을 나타내며, 문단은 블록 레벨 요소

```html
<p>Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Australia.</p>
```



### `<pre>`: 미리 서식 적용한 글

미리 서식이 지정된 텍스트로, HTML에 내용을 그대로 표현

텍스트는 보통 고정폭 글꼴을 사용해 렌더링, 요소내 공백문자를 그대로 유지

```html
<pre>
  L          TE
    A       A
      C    V
       R A
       DOU
       LOU
      REUSE
      QUE TU
      PORTES
    ET QUI T'
    ORNE O CI
     VILISÉ
    OTE-  TU VEUX
     LA    BIEN
    SI      RESPI
            RER       - Apollinaire
</pre>

```

접근성

- 문자를 그림이나 도표처럼 사용하면 차례대로 읽는 스크린 리더기로는 이해하지 못한다.
- 이 때는 `<figure>`와 `<figcaption>`을 이용해 대체 설명을 작성

```html
<figure role="img" aria-labelledby="cow-caption">
  <pre>
  _______________________
< 나는 이 분야의 전문가다. >
  -----------------------
         \   ^__^
          \  (oo)\_______
             (__)\       )\/\
                 ||----w |
                 ||     ||
  </pre>
  <figcaption id="cow-caption">
    소 한 마리가 "나는 이 분야의 전문가다"라고 말하고 있습니다. 소는 미리 서식을 적용한 텍스트로 그려져있습니다.
  </figcaption>
</figure>
```



### `<section>`: 웹 페이지의 구역

문서에서 독립적인 구획이며 보통 제목을 포함

```html
<h1>Choosing an Apple</h1>
<section>
    <h2>Introduction</h2>
    <p>This document provides a guide to help with the important task of choosing the correct Apple.</p>
</section>
```

Tips:

각각의 `<section>`을 구분할 수단이 필요. 주로 제목 태그를 포함시키는 방법 이용

요소의 콘텐츠를 따로 구분이 필요할 경우에는 `<article>` 요소를 고려



### `<table>`: 표

- `<tr>`: 행 구분
- `<th>`: 셀 제목
- `<td>`: 셀

접근성

- `<caption>`요소를 제공하여 사용자에게 설명 제공하여 불필요한 경우 스킵하도록 도움

```html
<table>
  <caption>Color names and values</caption>
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



### `<ul>`: 정렬되지 않은 목록

보통 불릿으로 표현되는 정렬되지 않은 목록

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```









# 인라인 요소(Inline elements)

- 항상 블록 레벨 요소내에 포함
- 문장이나 단어같은 작은 부분을 표현하기 적합
- 블록 요소와 달리 줄바꿈을 하지 않는다.
- `<a>`, `<em>`, `<strong>` 등



### `<a>`: 앵커 요소

href 속성을 이용해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소나 다른 URL로 연결할 수 있는 하이퍼 링크를 생성. 태그안의 콘텐츠는 목적지 링크에 대한 설명을 표시

```html
<a href="https://www.mozilla.com">절대 URL연결</a> 
<a href="//example.com">상대URL연결</a>
<p><a href="#Section_further_down">아래 제목으로 건너뛰기</a></p>
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
<a href="tel:+49.157.0156">+49 157 0156</a>
 <a href="" download="my_painting.png">다운로드</a>
```

속성

- download

  - 링크로 이동하는 대신 URL을 저장
  - 값이 없으면 파일 이름과 확장자는 브라우저가 생성하여 제안
  - 값을 지정하면 저장할 때 파일 이름으로서 제안. /와\는 _로 변환되어 제안
  - 다운로드는 동일 출처 URL과 blob:, data: 스킴에서만 동작

- href

  - 하이퍼링크가 가지는 URL
  - 브라우저가 지원하는 모든 URL 스킴 사용 가능
  - 페이지 구획을 가리키는 프래그먼트 URL (#을 이용)
  - 미디어 파일 일부를 가리키는 미디어 프래그먼트
  - tel: URL을 사용하는 전화번호
  - mailto: URL을 사용하는 이메일 주소
  - 웹사이트는 [`Navigator.registerProtocolHandler()`](https://developer.mozilla.org/ko/docs/Web/API/Navigator/registerProtocolHandler)를 통해 지원 가능

-  hreflang

  - 링크 URL의 인간 언어에 대한 힌트

- ping

  - 하나의 스페이스로 구분하는 URL 목록
  - 브라우저가 URL 각각에 POST 요청을 전송

- referrerpolicy

  - URL을 가져올 때 사용할 리퍼러

- rel

  - URL을 가져올 때 사용할 리퍼러

- target

  - 링크한 URL을 표시할 위치
  - 가능한 값은 브라우징 맥락. 탭, 창 `<iframe>`의 이름이나 키워드

  - _self: 응답을 현재 브라우징 맥락에 표시. 기본값

  - _blank: 응답을 새로운 브라우징 맥락에 표시. 보통 새 탭

  - _parent: 응답을 현재 브라우징 맥락의 부모에 표시. 부모가 없으면 _self와 동일하게 동작

  - _top: 응답을 최상단 브라우징 맥락에 표시. 부모가 없으면 _self와 동일하게 동작

- type

  - 링크 URL의 MIME type에 대한 힌트

Tips:

- target 사용시 `rel="noreferrer"`을 추가해 `window.opener`API의 악의적인 사용을 방지

- 최근 브라우저는 `target="_blank"` 지정시 임의로 `rel="noopener"` 설정과 동일한 보호 수준 적용

- href 태그에서 페이지 새로고침을 막고 `click`이벤트 처리기를 이용해 가짜 버튼 만들지 말자
  대신 `<button>`을 사용

- 링크를 클릭했을 때 어떤 일이 발생하는지( 새 탭에서 열리거나 다른 파일이 열리는 등)를 명시적으로 표시

- ```html
  <a target="_blank" href="https://ko.wikipedia.org">
    위키백과 (새 탭에서 열림)
  </a>
  ```



### `<abbr>`: 준말 또는 머리글자

문장에서 중심이 되는 준말 또는 머리글자

이 요소에 마우스 hover시 title의 설명이 표시

```html
<p>Using <abbr title="Hypertext Markup Language">HTML</abbr> is fun and easy!</p>
```

속성

- title
  - 준말에 대한 전체 설명 혹은 사람이 읽을 수 있는 형태의 값

Tips:

- 모든 준말을 `<abbr>`로 표시할 필요는 없다.
-  머리글자를 문서플로우 밖에서 설명할 때 사용 할 수 있다.
- 독자에게 익숙하지 않을 수 있는 준말 사용시 사용할 수 있다.
- 준말임을 명시적으로 나타내야 할 때 사용할 수 있다.
- `<abbr>`를 `<dfn>`과 같이 사용하여 정의와 연결할 수 있다.

CSS:

- IE 등 일부 브라우저는  `<span>`과 같이 동작
- Opera, FireFox 등은 점선 밑줄이 표시
- 또는 영어 소문자를 작은 대문자로 표현
- css 제거 : `font-variant:none`

### `<audio>`: 소리 콘텐츠 포함

src 속성 또는 `<source>`요소를 사용해 한 개 이상의 오디오 소스 지정

다수의 소스 지정지 브라우저가 선택

`MediaStream`을 이용해 미디어 스트림 가능

```html
<figure>
    <figcaption>Listen to Audio</figcaption>
    <audio controls>
      <source src="myAudio.mp3" type="audio/mpeg">
      <source src="myAudio.ogg" type="audio/ogg">
      <p>Your browser doesn't support HTML5 audio. Here is
         a <a href="myAudio.mp4">link to the audio</a> instead.</p>
	</audio>	
</figure>
```

속성

- autopaly
  - 지정시  전체 오디오의 다운로드를 기다리지 않고, 가능한 빨리 재생
  - 자동 재생은 사용자 경험에 악영향을 주며 가급적 피한다
  - 반드시 자동 재생이 필요하다면 명시적인 동의를 구한다
- controls
  - 지정시 오디오 컨트롤을 브라우저에서 제공
- crossorigin
  - CORS를 사용하여 지정한 오디오 파일을 가져올지 나타내는 열거형 속성
  - anonymous: 자격 증명 없이 교차 출처 요청을 전송
  - use-credentials: 자격 증명과 함께 교차 출처 요청을 전송
-  currentTime
  - 오디오가 재생중인 현재 시간을 나타내는 부동 소수점 값을 반환
- disableRomotePlayback
  - 유선 또는 무선 기술을 이용해 연결된 장치의 원격 재생 기능 비활성화
  - Safari에서 기능 활성화 방법 : `x-webkit-airplay="deny"`
- duration
  - 미디오 타임라인에서 오디오의 지속 시간(총 길이)의 부동 소수점 값
- loop
  - 지정시 오디오가 끝에 도달할 경우 자동으로 시작지점으로 돌아간다
- muted
  - 오디오의 처음 상태를 무음으로 할지의 여부. 
  - 기본값: false
- preload
  - 오디오 정보를 미리 불러올지에 대한 열거 속성
  - none: 오디오를 미리 로드하지 않음
  - metadata: 오디오 메타데이터만 미리 로드
  - auto: 사용자가 사용하지 않아도 전체 오디오 파일을 다운로드 가능
  - 공백: auto와 똑같이 동작
  - 브라우저마다 기본값이 다르며, metadata로 설정하는것을 권장
- src
  - 오디오의 url
  - 대신 오디오 블록내에 `<source>` 요소를 사용 가능

### `<b>`: 굵은 글씨체

텍스트를 굵은 글씨체로 만든다.

Tips:

- 요약 키워드, 리뷰의 제품명 등, 특별히 중요성은 없지만 굵게 표시할 부분에  `<b>`사용
- `<strong>`요소는 중요한 글에 사용
  `<em>`요소는 약간의 강조가 필요한 글에 사용
  `<mark>`요소는 관련성이 있는 글에 사용
  `<b>`요소는 아무런 의미가 없으므로 다른 요소가 적합하지 않을 때 사용
- 제목은 `<h1>`태그로 표현
- `<b>`요소 대신 CSS의 `font-weight:"bold"` 사용

### `<bdi>`: 양방향 격리 요소

- 특정 텍스트를 주변 텍스트와 격리하여 텍스트 방향을 다르게 지정할 수 있는 요소
- 왼쪽에서 오른쪽으로 정렬 (LTR) 되는 문자
- 오른쪽에서 왼쪽으로 정렬(RTL) 되는 문자
- 유니코드 양방향 알고리즘을 사용하여 처리
- 브라우저는 텍스트의 언어에 맞는 방향성을 지정
- 아래의 예와 같이 이름을 나타내는 언어가 각기 달라 방향성이 다를 경우 `<bdi>`를 통해 처리

``` html
<ul>
 <li><bdi class="name">اَلأَعْشَى</bdi> - 1st place</li>
 <li><bdi class="name">Jerry Cruncher</bdi> - 2nd place</li>
</ul>
```



### `<bdo>`: 텍스트 방향 정의 요소

텍스트 방향을 지정하여 현재 텍스트의 쓰기 방향을 지정

원래의 언어의 쓰기 방향와 다른 방향으로 텍스트를 렌더링할 때 사용

속성:

- dir
  - 요소 콘텐츠의 텍스트 쓰기 방향
  - ltr: 텍스트를 왼쪽에서 오른쪽으로 써야 함을 나타냄
  - rtl: 텍스트를 오른쪽에서 왼쪽으로 써야 함을 나타냄

```html
<p>이 단락은 왼쪽부터 오른쪽 방향으로 써질 것입니다.</p>
<p><bdo dir="rtl">이 단락은 오른쪽부터 왼쪽 방향으로 써질 것입니다.</bdo></p>
```



### `<br>`: 줄바꿈 요소

텍스트 안에서 줄 바꿈(캐리지 리턴)을 생성.

Tips:

- 문단 사이의 여백은 `<br>`대신 css의 `margin`속성을 사용
- 줄 간격은 margin의 조정이 아닌 css의 `line-height`속성을 사용

```html
<p> O’er all the hilltops<br>
    Is quiet now,<br>
    In all the treetops<br>
    Hearest thou<br>
    Hardly a breath;<br>
    The birds are asleep in the trees:<br>
    Wait, soon like these<br>
    Thou too shalt rest.
</p>
```



### `<button>`: 버튼 요소

클릭 가능한 버튼을 제공

```html
<button class="favorite styled"type="button">
    Add to favorites
</button>
```

속성

- autofocus
  - 페이지 로드 후 이 버튼에 포커스가 위치해야 하는지 여부
  - 문서 내에서 하나의 요소에만 이 속성을 지정할 수 있다.
- disabled
  - 버튼과 사용자의 상호작용을 막는다. 사용불가능상태
- form
  - 버튼과 연결할 `<form>`요소를 지정
  - 값으로는 같은 문서에 존재하는 `<form>`요소의 id 값을 사용
  - `<form>`요소를 지정하지 않아도 조상중에 존재한다면 그 `<form>`요소와 연결
- formaction
  - `<button>`이 제출 버튼일 경우, 제출한 정보를 처리할 URL.
  - `action` 속성보다 우선시
- formenctype
  - `<button>`이 제출 버튼일 경우, 양식을 서버로 제출할 때 사용할 양식 데이터 인코딩 지정
  - 기본값: application/x-www-form-urlencoded
  - multipart/form-data: `<input type="file">`이 존재 하는 `<form>`에서 사용
  - text/plain: html 5에서 디버깅용
- formmethod
  - post: 양식 데이터를 본문인 body에 넣어 전송
  - get: 양식 데이터를 url과 ? 구분자 뒤에 이어 붙여 전송
  - 지정할 경우, 버튼의 양식 소유자가 가진 `method` 속성보다 우선시
- formnovalidate
  - `<button>`이 제출 버튼일 경우, 양식 제출시 유효성 검사를 하지 않겠다는 것을 지정
  - 버튼의 양식 소유자가 가진 `novalidate` 속성보다 우선시
- formtarget
  - `<button>`이 제출 버튼일 경우,  양식 제출의 결과를 표시할 위치를 지정
  - 가능한 값은 브라우징 맥락의 이름 또는 키워드
  - 지정할 경우, 버튼의 양식 소유자가 가진 target 속성보다 우선시
  - _self: 응답을 현재 브라우징 맥락에 표시. 기본값
  - _blank: 응답을 새로운 브라우징 맥락에 표시. 보통 새 탭
  - _parent: 응답을 현재 브라우징 맥락의 부모에 표시. 부모가 없으면 _self와 동일하게 동작
  - _top: 응답을 최상단 브라우징 맥락에 표시. 부모가 없으면 _self와 동일하게 동작
- name
  - 버튼의 행동 방식
  - submit: 버튼이 서버로 양식 데이터를 제출. 기본값
  - reset: `<input type="reset">`처럼 모든 컨트롤을 초기값으로 되돌린다.
  - button: 기본 행동이 없다. 클라이언트측 스크립트를 통해 연결 가능
- value
  - 버튼의 초기값.

Tips:

양식 제출용 버튼이 아니라면 항상 `type="button"`으로 지정하는 습관

클릭에 어려움있는 사람들을 위해 버튼의 활성화 영역 크기는 충분히 커야 한다.

최소 44x44의 CSS 픽셀 권장

<img src="Block vs inline elements.assets/touch-target-padding.svg" alt="주변에 보라색 사각형 영역이 있는 번역 버튼.  버튼에는 &quot;버튼, 32 CSS 픽셀&quot;이라는 레이블이 지정되어 있습니다. 보라색 영역에는 &quot;대화형 영역, 44 CSS 픽셀&quot;이라는 레이블이 지정되어 있습니다." style="zoom:50%;" />

### `<canvas>` : 그래픽 캔버스 요소

canvas scripting API , WebGL API를 사용하여 그래픽 애니메이션을 그린다.

```html
<canvas id="canvas" width="300" height="300">
  캔버스의 내용을 설명하는 대체 텍스트
</canvas>
```

속성

- height
  - 좌표 상의 높이로 CSS 픽셀 단위
  - 기본값은 150
- moz-opaque
  - 투명도가 중요한 요소인지 캔버스에 알림
  - 투명도가 없으면 페인팅 성능이 최적화됨
  - Mozilla 기반 브라우저에서만 지원
  - 대신 표준 `canvas.getContext('2d', { alpha: false })`를 사용

- width
  - 좌표 상의 너비로 CSS 픽셀 단위
  - 기본값은 300 

Tips:

- `<canvas>`를 지원하는 브라우저를 위해 블록안에 대체 콘텐츠를 넣을 수 있다.
- `<canvas>`는 닫는 태그 `</canvas>`가 필수
- 캔버스의 크기 조절은 `<canvas>`요소의 `width` 속성과 `height`속성 사용해 변경
- 캔버스는 접근성 도구에 노출되지 않으므로 접근성 사이트에서는 피해야 한다.

### `<cite>`: 출처 표기

저작물에 대한 출처를 표기하기 위해 사용.

제목을 반드시 포함

```html
<figure>
    <blockquote>
        <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
    </blockquote>
    <figcaption>First sentence in 
        <cite>
            <a href="http://www.george-orwell.org/1984/0.html">Nineteen Eighty-Four</a>			</cite> by George Orwell (Part 1, Chapter 1).</figcaption>
</figure>
```



### `<code>`: 인라인 코드 요소

짧은 코드 조각을 나타내는 스타일을 이용해 콘텐츠 표시

기본 스타일은 사용자 에이전트의 고정폭 글씨체

```html
<p>함수 <code>selectAll()</code>는 입력 필드의 모든 텍스트를 선택하므로,
사용자가 복사 혹은 삭제를 손쉽게 할 수 있습니다.</p>
```

Tips:

- 여러 줄의 코드를 표현하려면 `<code>`요소를 `<pre>`요소로 감싼다
- CSS의 `code`선택자를 이용해 브라우저의 기본 글씨체 변경 가능



### `<data>`: 콘텐츠를 데이터 연결

주어진 콘텐츠를 기계가 읽을 수 있는 해석본(데이터)과 연결

콘텐츠가 시간이나 날짜 관련 정보라면 대신 `<time>`요소를 사용

```html
<p>New Products:</p>
<ul>
    <li><data value="398">Mini Ketchup</data></li>
    <li><data value="399">Jumbo Ketchup</data></li>
    <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

속성

- value
  - 기계가 읽을 수 있는 형태의 콘텐츠 해석본

### `<datalist>`: 데이터리스트

다른 컨트롤에서 다룰 수 있는 선택지를 나타내는 요소인 `<option>`요소를 여러개 담을 수 있다.

```html
<label for="ice-cream-choice">Choose a flavor:</label>
<input list="ice-cream-flavors" id="ice-cream-choice" name="ice-cream-choice" />

<datalist id="ice-cream-flavors">
    <option value="Chocolate">
    <option value="Coconut">
    <option value="Mint">
    <option value="Strawberry">
    <option value="Vanilla">
</datalist>
```



### `<del>`: 제거된 텍스트 범위

문서에서 제거된 텍스트의 범위를 표현

문서나 코드의 변경점 추적 등에 사용될 수 있다.

`<del>`와 반대로 추가된 텍스트의 범위를 표현하는 `<ins>`가 있다.

```html
<blockquote>
    There is <del>nothing</del> <ins>no code</ins> either good or bad, but <del>thinking</del> <ins>running it</ins> makes it so.
</blockquote>
```

속성

- cite
  - 회의록이나 이슈 추적 시스템의 티켓 번호등
  - 변경점을 설명하는 리소스의 URI
- datatime
  - 변경이 발생한 일시.
  - 값은 유효한 날짜 혹은 시간 문자열
  -  [HTML에서 사용하는 날짜와 시간 형식 (en-US)](https://developer.mozilla.org/en-US/docs/Web/HTML/Date_and_time_formats)

접근성

- 대부분의 스크린 리더기는 `<del>`요소의 존재를 표현하지 않는다.

- CSS의 `content`속성과 `::before`과 `::after`요소를 사용해 읽을 수 있도록 할 수 있다.

- 이 방식은 콘텐츠를 이해하는데 삭제 여부가 중요할 경우에만 사용해야 한다.

- ```html
  del::before,
  del::after {
    clip-path: inset(100%);
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  
  del::before {
    content: " [제거 부분 시작] ";
  }
  
  del::after {
    content: " [제거 부분 끝] ";
  }
  ```

  

### `<dfn>`: 정의 요소

현재 맥락이나 문장에서 정의하고 있는 용어는 나타낸다

`<dfn>`에서 가장 가까운 `<p>`, `<dt>`,`<dd>`,`<section>` 조상 요소를 용어 정의로 간주한다.

```html
<p>A <dfn id="def-validator">validator</dfn> is a program that checks for syntax errors in code or documents.</p>
```

Tips:

- `<dfn>`요소가 title 속성을 가지고 있으면 그 값을 현재 정의중인 용어로 간주
- `<dfn>`은 텍스트 콘텐츠를 가지지만, 완전한 용어가 아닌 준말(`<abbr>`)이나 다른 대체 형태일 수 있다
- `<dfn>`의 유일한 자식이 `<abbr>`이고 이 요소가 title 특성을 가지면 이 값을 현재 용어로 간주
- 모두 아닌 경우 `<dfn>`의 텍스트 콘텐츠를 현재 용어로 간주



### `<em>`: 텍스트 강세 표현

텍스트의 강세를 표현하며, 중첩할수록 더 큰 강세를 표현할 수있다.

```html
<p>Get out of bed <em>now</em>!</p>
```

Tips:

- `<em>`은 주로 기울임꼴로 표현되며, 단순히 기울임꼴이 필요하다면 css의 `font-style`을 사용해야 한다.
- 저작물의 제목은 `<cite>`요소로, 학명이나 과학관련 이름 및 다른 언어의 단어등에는 `<i>` 요소를 사용
- 주변보다 훨씬 중요한 조 텍스트에는 `<strong>`요소를 사용해 강조

`<i>`와 `<em>`

- 두 요소는 시각적 표현은 동일
- `<em>`은 콘텐츠를 강조, `<i>`는 외국어, 등장인물 생각 등 일반적인 산문에서 벗어난 경우 사용

```html
명시적이나 암시적인 대조에서 사용한 경우
<p>
  과거에 <em>block-level</em>이라 불렸던
  콘텐츠는 HTML 5부터 <em>flow</em> 콘텐츠라고
  말합니다.
</p>
```



### `<embed>`: 외부 컨텐츠와의 통합

외부의 어플리케이션이나 대화형 컨텐츠와의 통합

```html
<embed type="video/webm"
       src="/media/cc0-videos/flower.mp4"
       width="250"
       height="200">
```

속성

- height
  - 리소스가 표현될 높이. CSS 픽셀 단위
- src
  - 리소의 URL
- type
  - 인스턴스화할 플러그인을 고르기 위해 사용되는 MIME 타입
- width
  - 리소스가 표현될 너비. CSS 픽셀 단위



### `<i>`: 텍스트 구분 요소

단락, 문장 등에서  주위 텍스트와 구분되어야 할 부분을 나타내며,

주로 기술 용어, 외국어 구절, 등장인물의 생각 등에서 사용될 수 있다.

기울임꼴로 표현된다.

```html
<p>라틴어 문구 <i>Veni, vidi, vici</i>는 음악과 예술, 문학에 자주 등장합니다.</p>
```

Tips:

- 산문에서 문체가 다른 텍스트에 `<i>`를 적용할 수 있다.
- 단순히 기울임꼴 스타일이 필요하다면 CSS의 `font-style`을 사용
- `<i>`요소에 적합한 텍스트인지 고려
  - `<em>`: 강세 표현
  - `<strong>`: 훨씬 강한 강조 표현
  - `<mark>`: 관련성
  - `<dfn>`: 정의 대상인 용어 표현



### `<iframe>`: 인라인 프레임 요소

중첩 브라우징 맥락을 제공하는 요소로

현재 문서 안에 다른 HTML 페이지를 삽입할 수 있다.

```html
<iframe id="inlineFrameExample"
    title="Inline Frame Example"
    width="300"
    height="200"
    src="https://www.openstreetmap.org/export/embed.html?bbox=-0.004017949104309083%2C51.47612752641776%2C0.00030577182769775396%2C51.478569861898606&layer=mapnik">
</iframe>
```

속성

- allow
  - `<iframe>`요소의 기능 정책(feature policy)을 지정할 수 있다.
- allowfullscreen
  - true값으로 지정할 경우, `<iframe>`요소는 `requestFullscreen()`메서드를 통해 전체화면을 활성화할 수 있다.
- allowpaymentrequest
  - ture값으로 지정할 경우 교차 출처의 `<iframe>`요소가 `Payment RequestAPI`를 요청할 수 있다.
- csp
  - Content Security Policy 연관된 속성으로 아직 실험 기능
- height
  - `<iframe>`요소를 표현할 높이로 CSS 픽셀 단위. 기본값은 150
- importance
  - `<iframe>`요소의 src속성에 대한 리소스의 다운로드 우선순위를 지정
  - 아직 실험 기능
  - auto: 브라우저의 판단대로 우선순위 지정
  - high: 낮은 우선순위의 리소스들보다 먼저 다운로드
  - low: 다른 높은 우선순위의 리소스들이 다운로드된 이후 다운로드
- loading
  - 언제 브라우저가 `<iframe>`요소를 로드해야 할지를 결정
  - eager: 뷰포트가 보이든지의 여부에 상관없이 즉시 `<iframe>`을 로드
  - lazy: 뷰포트가 계산된 거리에 도달했을 때, `<iframe>`을 로드
- name
  - 지정이 가능한 이름
  - `<a>`,`<form>`,`<base>`의 요소에서 target속성,
    `<input>`,`<button>`요소에서 formtarget속성,
    window.open()메서드에서 windowName 파라미터
    에서 사용될 수 있다.
- referrerpolicy
  - 프레임의 리소스를 페칭할 때 보낼 참조자
  - no-referrer: Referrer header를 보내지 않는다.
  - no-referrer-when-downgrade(기본값): Referrer header는 TLS(HTTPS)없이 origins으로 전송되지 않는다.
  - origin: 전송할 수 있는 참조자는 참조 페이지의 원본으로 제한된다.
  - origin-when-cross-origin: 다른 origins로 보낼 참조자는 the scheme, the host,the port 로 제한된다.
  - same-origin: 참조자는 same origin으로 보낼 수 있이며, cross-origin 요청은 참조 정보를 포함하지 않는다.
  - strict-origin: 보안레벨이 같을 경우에만 참조자를 보낼 수 있다.
  - strict-origin-when-cross-origin:보안레벨이 같을 경우 원본을 보내며, 보안레벨이 낮은 목적지(HTTPS->HTTP)로는 헤더를 보내지 않는다.
  - unsafe-url:  보안에 관계없이 모든 요청을 수행할 때 원본, 경로 및 쿼리 문자열을 전송
- sandbox
  - 프레임의 콘텐츠에 추가 제한을 건다.
  - allow-downloads-without-user-activation: 사용자의 제스처 없이도 다운로드가 발생 가능하도록 한다.
  - allow-forms: 리소스가 폼의 양식 제출이 가능하도록 허락한다. 이 키워드가 사용되지 않으면 폼을 통한 양식 제출이 막힌다.
  - allow-modals: 리소스가 모달 창을 여는 것을 허락한다.
  - allow-pointer-lock: 리소스가 Pointer Lock API를 사용하도록 허락한다.
  - allow-popups: 팝업을 여는 것을 허락한다. 팝업은( window.open() , tartget="_blank", showModalDialog()). 이 키워드가 사용되지 않으면 팝업은 열리지 않는다.
  - allow-popups-to-escape-sandbox: 샌드박싱된 문서가 샌드박싱을 상속하는 창 없이 새창을 열 수 있도록 허락한다.
  - allow-presentation: 리소스가 프레젠테이션을 시작하도록 한다.
  - allow-same-origin: 이 토큰을 사용하지 않으면 리소스는 동일 출처 정책을 항상 실패하는 특별한 원본으로부터 온것이라고 간주된다.
  - allow-scripts: 리소스가 스크립트를 실행할 수 있도록 허락한다.
  - allow-storage-access-by-user-activation: 리소스가 Storage Access API를 사용하여 상위의 스토리지의 기능에 접근을 요청할 수 있다.
  - allow-top-navigation: 리소스가 최상위의 브라우징 컨텍스트 (_top)를 탐색할 수 있도록 허락한다.
  - allow-top-navigation-by-user-activation: 리소스가 최상위의 브라우징 컨텍스트 (_top)를 탐색할 수 있도록 허락하지만, 사용자의 제스쳐에 의해 시작되었때만 가능하다.

- src
  - 포함할 페이지의 URL

- srcdoc
  - src를 overriding하여 포함할 인라인 HTML
  - 만약 브라우저가 srcdoc 속성을 지원하지 않으면 src속성으로 대체된다.

- width
  - 프레임의 너비. CSS 픽셀 단위. 기본값은 300




### `<img>`:이미지 요소

- 문서에 이미지를 삽입하는 요소
- src 속성은 필수적이며, 삽입할 이미지의 경로를 지정
- alt 속성은 이미지의 텍스트 설명
- 지원하는 이미지 형식은 브라우저마다 다를 수 있다.

이미지를 불러올 수 없는 여러 가지 원인들 중 몇 가지

- src 속성이 비었거나 null일 경우
- src의 URL이 현재 사용자가 보고 있는 페이지의 URL과 같을 경우
- 지정한 이미지가 손상돼 불러올 수 없을 경우
- 이미지의 메타데이터가 손상되어 원본 크기를 알 수 없고, `<img>`요소의 속성에도 크기를 지정하지 않은 경우
- 사용자 에이전트가 지원하지 않는 이미지 형식일 경우

```html
<img src="favicon72.png"
     alt="MDN logo"
     srcset="favicon144.png 2x">
```

속성

- alt
  - 이미지의 대체 텍스트 설명
  - 이미지를 텍스트로 복사-붙여넣기할 때 사용
  - 이미지 링크를 북마크할 때 사용
  - alt 속성을 아예 지정하지 않은 경우-> 이미지가 콘텐츠의 중요한 부분이지만 텍스트로 표현이 안될 때
  - alt 속성을 `alt=""`으로 지정한 경우-> 이미지가 콘텐츠의 중요한 부분이 아니라서 렌더링의 필요가 없는 경우. 이 경우 깨진 이미지 아이콘 또한 표시되지 않는다.
- crossorigin
  - CORS를 사용해 지정한 이미지 파일을 가져올 것인지 여부
  - anonymous: 자격 증명 없이 교차 출처 요청을 전송
  - use-credentials: 자격 증명과 함께 교차 출처 요청을 전송
- decoding
  - 이미지 디코딩을 위해 브라우저에 제공할 힌트
  - sync: 다른 컨텐츠와 함께 표시하기 위해 이미지를 동기적으로 디코딩
  - async: 다른 콘텐츠의 표시 지연을 피하기 위해 이미지를 비동기적으로 디코딩
  - auto: 선호하는 디코딩 모드가 없음. 기본값으로 브라우저가 알아서 결정
- height
  - 픽셀 단위의 이미지 고유 크기. 단위없는 정수값 형태
- importance
  - 리소스의 상대적인 다운로드 중요도
  - auto: 설정 안함. 브라우저의 자체적으로 결정
  - hight: 이미지가 높은 우선순위를 가짐
  - low: 이미지가 낮은 우선순위를 가짐
- ismap
  - 이미지가 서버 사이드 맵의 일부인지 여부
  - 서버 사이드 맵에 속하는 경우, 사용자가 이미지에서 클릭한 위치를 서버로 전송

- loading

  - 브라우저가 이미지를 불어올 때 사용할 방식
  - eager: 뷰포트가 보이든지의 여부에 상관없이 즉시 이미지를 로드. 기본값
  - lazy: 뷰포트가 계산된 거리 범위 안에 들어왔을 때 로드

- referrerpolicy

  - no-referrer: Referer 헤더를 전송하지않는다.
  - no-referrer-when-downgrade: TLS(HTTPS)지원을 하지 않는 출처에 대해서는 Referer헤더를 전송하지 않는다. 기본값
  - origin: Referer헤더가 요청 출처의 schema, host, port를 포함
  - origin-when-cross-origin: 다른 출처로 요청할 때는 referer 데이터를 schema, host, port로 제한하고,
    동일 출처로 요청할 때는 전체 경로와 쿼리 문자열을 포함한다.
  - unsafe-url: Referer 헤더가 항상 출처, 경로, 쿼리 문자열을 포함한다. 하지만 프래그먼트, 비밀번호, 사용자 이름은 포함하지 않는다.

- sizes

  - 소스 크기를 나타내는 ,(쉼표)로 구분한 하나 이상의 문자열.
  - 각각의 문자열은 다음 구성요소로 이루어진다.
  - 1. 미디어 조건. 마지막 항목에서는 생략
    2. 소스 크기 값.
  - 미디어 조건은 이미지의 속성이 아니라 뷰포트 속성
    - 예를 들어 `(max-height: 500px) 1000px`은 1000px 너비의 소스를 사용하려면 뷰포트가 500px이하여야 한다는 조건이다.
  - 소스 크기는 의도한 이미지의 표시 크기를 지정. 
    - 사용자 에이전트는 현재 소스 크기를 사용해 너비(w) 서술자를 사용한 srcset 특성의 소스 중 하나를 선택. 
    - 선택한 소스 크기는 이미지의 고유 크기에 영향을 준다

- src

  - 이미지의 URL로 필수적이다.
  - srcset를 지원하는 브라우저의 srcset에 픽셀 밀도 `1x`와 `w` 서술자가 없는 경우, `src`는 픽셀 밀도 `1x`의 이미지 후보로 취급.

- srcset

  - 사용자 에이전트가 사용할 수 있는 이미지 소스의 후보.

  - 쉼표로 구분하며 한 개 이상의 문자열 목록

  - 각각의 문자열은 다음 구성요소를 가짐

  - 1. 이미지의 URL

    2. 선택적으로 공백과 함께 그 뒤에

       1. 너비 서술자 ( 양의 정수 + w)
       2. 픽셀 밀도 서술자 ( 양의 실수 + x)

       기본값은 1x

  - 사용자의 개인 설정이나 대역폭 상황에 따라 선택할 수 있는 여지를 두어 유연하게 대처

- width

  - 이미지의 고유 너비. 픽셀 단위. 단위 없는 정수값

- usemap

  - 요소와 연결할 이미지 맵의 프래그 먼트

접근성

- alt 속성의 값은 이미지를 설명하는 수단으로
- 이미지의 존재 여부나 이미지 파일의 이름을 나타내서는 안된다.
- 파일 이름이 스크린 리더기에 읽힌다면 큰 혼란을 줄 수 있다.



### `<input>`: 입력 요소

웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤 생성

```html
<label for="name">Name (4 to 8 characters):</label>

<input type="text" id="name" name="name" required
       minlength="4" maxlength="8" size="10">
```

| 유형           | 설명                                                         | spec  |
| -------------- | ------------------------------------------------------------ | ----- |
| button         | 기본행동이 없고 value을 레이블로 사용하는 사용자 버튼        |       |
| checkbox       | 단일 값을 선택하거나 선택 해제할 수 있는 체크박스            |       |
| color          | 색을 지정할 수 있는 컨트롤                                   | HTML5 |
| date           | 날짜(시간제외)를 지정할 수 있는 컨트롤                       | HTML5 |
| datetime-local | 날짜와 시간을 지정할 수 있는 컨트롤. 시간대는 지정할 수 없다. | HTML5 |
| email          | 이메일 주소를 편집할 수 있는 필드. 유효성 검증 매개변수가 존재 | HTML5 |
| file           | 파일을 선택할 수 있는 컨트롤. accept 속성을 통해 허용하는 파일 유형 지정 가능 |       |
| hidden         | 보이지는 않지만 값을 서버로 전송하는 컨트롤                  |       |
| image          | src속성으로 지정한 이미지를 보여주는 시각적 제출 버튼        |       |
| month          | 연, 월을 지정할 수 있는 컨트롤.                              | HTML5 |
| number         | 숫자를 입력하기 위한 컨트롤. 스피너 표시.                    | HTML5 |
| password       | 값이 가려지는 한줄의 텍스트 필드                             |       |
| radio          | 같은 name값을 가진 여러개의 선택지 중에서 하나의 값만 선택가능한 라디오 버튼 |       |
| range          | 값이 가려진 숫자를 입력하는 컨트롤. 기본값이 중간값인 범위 위젯으포 표시. `min`과 `max`를 통해 수용가능한 범위를 지정 | HTML5 |
| reset          | 양식의 내용을 기본값으로 초기화하는 버튼. 권장하지 않음      |       |
| search         | 검색문자열을 입력하는 한줄 텍스트 필드. 줄바꿈 문자는 입력에서 자동으로  제거. | HTML5 |
| submit         | 양식을 전송하는 버튼                                         |       |
| tel            | 전화번호를 입력하는 버튼                                     | HTML5 |
| text           | `<input>`의 기본값. 한줄의 텍스트 필드                       |       |
| time           | 시간대가 없는 시간값을 입력하는 컨트롤                       | HTML5 |
| url            | url을 입력하는 필드.  검증 매개변수 존재                     | HTML5 |
| week           | 시간대가 없는 주-년 값과 주의 값을 구성하는 날짜를 입력      | HTML5 |

속성

| 특성                                                         | 유형                             | 설명                                                         |
| :----------------------------------------------------------- | :------------------------------- | :----------------------------------------------------------- |
| [accept](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefaccept) | file                             | 파일을 업로드 컨트롤에서 기대하는 파일 유형을 암시           |
| [alt](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefalt) | image                            | 이미지 유형에 대한 대체 속성. accessibiltiy 측면에서 필요.   |
| [autocomplete](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefautocomplete) | all                              | 양식 자동생성 기능 (form autofill) 암시                      |
| [autofocus](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefautofocus) | all                              | 페이지가 로딩될때 양식 제어에 오토포커스                     |
| [capture](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefcapture) | file                             | 파일 업로드 제어에서 input 방식에서 미디어 capture           |
| [checked](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefchecked) | radio, checkbox                  | 커맨드나 컨트롤이 체크 되었는지의 여부                       |
| [dirname](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefdirname) | text, search                     | 양식 전송시 요소의 방향성을 전송할 때 양식 필드의 Name       |
| [disabled](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefdisabled) | all                              | 양식 컨트롤이 비활성화되었는지의 여부                        |
| [form](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefform) | all                              | 컨트롤을 양식 요소와 연결                                    |
| [formaction](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefformaction) | image, submit                    | 양식 전송시 URL 사용하기                                     |
| [formenctype](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefformenctype) | image, submit                    | 양식의 데이터 인코딩 유형이 양식 전송시 사용될 것            |
| [formmethod](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefformmethod) | image, submit                    | 양식 전송시 HTTP 방식을 사용                                 |
| [formnovalidate](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefformnovalidate) | image, submit                    | 양식 전송시 양식 컨트롤 확인을 무시하기                      |
| [formtarget](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefformtarget) | image, submit                    | 양식 전송시 브라우징 맥락                                    |
| [height](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefheight) | image                            | 이미지 높이에서 `height` 속성과 같음                         |
| [list](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdeflist) | almost all                       | datalist 자동입력 옵션의 id 속성값                           |
| [max](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefmax) | numeric types                    | 최대값                                                       |
| [maxlength](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefmaxlength) | password, search, tel, text, url | `value`의 최대 길이 (문자수)                                 |
| [min](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefmin) | numeric types                    | 최소값                                                       |
| [minlength](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefminlength) | password, search, tel, text, url | `value`의 최소 길이 (문자수)                                 |
| [multiple](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefmultiple) | email, file                      | 불리언값. 여러 값을 허용할지의 여부                          |
| [name](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefname) | all                              | input 양식 컨트롤의 이름. 이름/값 짝(name/value pair)의 일부로서 양식과 함께 전송된다 |
| [pattern](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefpattern) | password, text, tel              | `value` 가 유효하기 위해 일치해야 하는 패턴                  |
| [placeholder](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefplaceholder) | password, search, tel, text, url | 양식 컨트롤이 비어있는 때 양식 컨트롤에 나타나는 내용        |
| [readonly](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly) | almost all                       | 불리언값. 이 값은 수정이 불가능함                            |
| [required](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/required) | almost all                       | 불리언값. 양식이 전송되기 위해서 반드시 입력하거나 확인이 필요한 값 |
| [size](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefsize) | email, password, tel, text       | 컨트롤의 크기                                                |
| [src](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefsrc) | image                            | 이미지 출처의 주소에서 `src` 와 같은 속성                    |
| [step](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefstep) | numeric types                    | 유효한 증분적인 (Incremental)값                              |
| [type](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdeftype) | all                              | input 양식 컨트롤의 유형                                     |
| [value](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefvalue) | all                              | 양식 컨트롤의 현재 값. 이름/값 짝(name/value pair)의 일부로서 양식과 함께 전송된다 |
| [width](https://developer.mozilla.org/ko/docs/Web/HTML/Element/Input#htmlattrdefwidth) | image                            | 이미지의 `width` 속성과 같다                                 |

### `<ins>`: 추가된 텍스트 요소

문서에 추가된 텍스트의 범위를 표시

```html
<p>“You're late!”</p>
<del>
    <p>“I apologize for the delay.”</p>
</del>
<ins cite="../howtobeawizard.html" datetime="2018-05">
    <p>“A wizard is never late …”</p>
</ins>
```

속성

- cite
  - 변경점을 설명하는 리소스의 URI
- datetime
  - 변경이 발생한 일시. 유효한 날짜 문자열값

접근성

대부분의 스크린 리더기는 `<ins>`요소의 존재를 표현하지 않는다. css의 속성을 이용해 시작 부분과 끝 부분을 알 릴 수 있다.

```css
ins::before,
ins::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

ins::before {
  content: " [추가 부분 시작] ";
}

ins::after {
  content: " [추가 부분 끝] ";
}
```

### `<kbd>`: 키보드 입력 요소

키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력 표시

관례에 따라 사용자 에이전트의 고정폭 글꼴로 표시

```html
<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
```

Tips:

- `<kbd>`요소를 다른 요소와 조합하여 더 자세한 상황을 표현 가능

- `<kbd>`를 다른 `<kbd>`안에 배치 -> 하나의 입력안의 작은 부분, 실제 타이핑 키를 하나씩 표현 

- ```html
  <p>새로운 문서는 키보드 단축키
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd>으로 만들 수 있습니다.</p>
  ```

- `<kbd>`를 `<samp>`안에 배치 -> 시스템이 에코로써 다시 출력한 사용자 입력을 표현

- ```html
  <p>구문 오류가 발생하면, 오류 원인을 찾을 수 있도록
  입력받은 명령을 다시 출력합니다.</p>
  <blockquote>
    <samp><kbd>custom-git ad my-new-file.cpp</kbd></samp>
  </blockquote>
  ```

- `<samp>`를 `<kbd>`안에 배치 -> 화면에 표시된 메뉴 이름, 메뉴 항목, 버튼 이름 등 시스템이 출력한 텍스트를 기반으로 한 입력 표현

- ```html
  <p>새로운 파일을 생성하려면, <kbd>
  <kbd><samp>파일</samp></kbd>⇒<kbd><samp>새 문서</samp></kbd>
  </kbd> 메뉴를 선택하세요.
  
  <p>파일의 이름을 입력한 후, <kbd><samp>확인</samp></kbd>을
  누르는 걸 잊지 마세요.</p>
  ```



### `<label>`: 사용자 인터페이스 항목 설명 요소

```html
<div class="preference">
    <label for="cheese">Do you like cheese?</label>
    <input type="checkbox" name="cheese" id="cheese">
</div>
```

접근성

화면 리더기는 label을 통해 사용자가 입력해야 하는 것이 무엇인지 쉽게 알릴 수 있다.



### `<map>`, `<area>`: 이미지 맵 정의 요소, 핫스팟 영역 정의 요소

`<map>`은 `<area>`요소와 함께 이미지 맵(클릭 가능한 링크 영역)을 정의

`<area>`은 이미지의 핫스팟 영역을 정의하고 하이퍼링크 추가 가능

```html
<map name="infographic">
    <area shape="poly" coords="130,147,200,107,254,219,130,228"
          href="https://developer.mozilla.org/docs/Web/HTML"
          target="_blank" alt="HTML" />
    <area shape="poly" coords="130,147,130,228,6,219,59,107"
          href="https://developer.mozilla.org/docs/Web/CSS"
          target="_blank" alt="CSS" />
    <area shape="poly" coords="130,147,200,107,130,4,59,107"
          href="https://developer.mozilla.org/docs/Web/JavaScript"
          target="_blank" alt="JavaScript" />
</map>
<img usemap="#infographic" src="/media/examples/mdn-info2.png" alt="MDN infographic" />

```

속성

- name
  - 맵을 참조할 때 사용할 이름. 필수적인 값
  - 값이 비거나 공백 문자가 포함되면 안된다.
  - 각각의 name은  문서 내의 모든 `<map>`에서 유일해야 한다.
  - `id`값이 존재하는 경우 `name`과 일치해야 한다.

### `<mark>`: 하이라이트 요소

현재 맥락과 연관된 중요한 부분을 표시

```html
<p>Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.</p>
```

Tips:

일반적인 `<mark>`의 사용 방법

- 인용문 등에서 중요한 부분을 형광펜 칠하듯이 강조 표시하는 데 사용
- 문서 컨텐츠에서 사용자의 현재 행동과 관련 있는 부분을 나타낼 때 사용
- `<mark>`연관성을 가진 부분에, `<strong>`은 중요도를 가진 부분에 사용

접근성

대부분의 리더기에서는 `<mark>`요소를 표현하지 않는다.

CSS 속성과 요소를 이용해 시작과 끝 부분을 알릴 수 있다.

```css
mark::before,
mark::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

mark::before {
  content: " [강조 시작] ";
}

mark::after {
  content: " [강조 끝] ";
}
```



### `<meter>`: 백분율 요소

특정 범위 내에서 스칼라 값이 어느 정도인지를 표시하는데 사용

```html
<label for="fuel">Fuel level:</label>

<meter id="fuel"
       min="0" max="100"
       low="33" high="66" optimum="80"
       value="50">
    at 50/100
</meter>
```

속성

- value
  - 현재의 값
  - 최소(min)와 최대(max)를 지정했을 경우, 두 값의 범위 내에 있는 값
  - 지정하지 않았을 경우 또는 잘못된 값인 경우 0으로 간주
  - 지정했지만 범위 바깥의 값인 경우, 범위에 맞춰 나머지 값을 버림
- min
  - 측정 범위의 가능한 최솟값
  - 지정할 경우 최대값 미만이어야 하며,
  - 지정하지 않은 경우 0
- max
  - 측정 범위의 가능한 최댓값
  - 지정할 경우 최솟값을 초과해야 하며,
  - 지정하지 않은 경우 1
- low
  - 측정 범위 중 낮은 범위의 최댓값.
  - 지정할 경우 전체 범위 최솟값(min)을 초과해야 하며,
  - 지정하지 않았거나 전체 범위 최솟값 미만인 경우, min과 같음
- high
  - 측정 범위 중 높은 범위의 최솟값.
  - 지정할 경우 전체 범위 최대값(max) 미만이어야 하며,
  - 낮은 범위의 최댓값(low)과 전체 범위 최솟값(min)을 초과해야 한다.
  - 지정하지 않았거나 전체 범위 최댓값을 초과한 경우, max와 같음
- optimum
  - min과 max 범위 내에 위치하는 이상적인 값. 
  - 예를 들어, 값이 min과 low사이에 위치한 경우, 측정 범위중 낮은 범위 (min~low)가 이상적인 범위
- form
  - `<meter>`와 연결할 `<form>` 요소의 id값.
  - 지정하지 않아도 조상중에 `<form>`이 있으면 해당 `<form>`과 연결



### `<noscript>`:노스크립트 요소

페이지의 스크립트 유형을 지원하지 않거나, 브라우저가 스크립트를 비활성화한 경우 보여줄 HTML 구획을 정의

```html
<noscript>
  <!-- anchor linking to external file -->
  <a href="http://www.mozilla.com/">External Link</a>
</noscript>
<p>Rocks!</p>
```

자바스크립트를 부득이하게 못 사용하는 사용자에게 html 요소를 이용해 대체 제공?



### `<object>`: 외부 리소스 요소

이미지, 중첩된 브라우저 컨텍스트, 플러그인에 의해 다뤄질 수 있는 리소스 등을 나타낸다.

```html
<object type="application/pdf"
    data="/media/examples/In-CC0.pdf"
    width="250"
    height="200">
</object>

```

속성

- form
  - object요소와 관련된 form 요소의 id 값.
- height
  - 표시될 리소스의 높이. CSS 픽셀 단위
- name
  - 유효한 브라우징 컨텍스트의 이름
- type
  - data에 의해 지정된 리소스의 컨텐츠 타입. 최소 한 개의 data와 type 정의 필요
- typemustmatch
  - type과 리소스의 실제 컨텐츠 타입이 일치해야하는지 여부. 
- usemap
  - `<map>`요소에 대한 해쉬-이름 참조
  - #과 그 뒤에 map 요소의 name값이 붙음
- width
  - 표시될 리소스의 너비. CSS 픽셀 단위



### `<output>`: 출력 요소

웹 사이트나 웹에서 계산 결과나 사용자 행동 결과를 넣을 수 있는 컨테이너 요소

```html
<form oninput="result.value=parseInt(a.value)+parseInt(b.value)">
  <input type="range" id="b" name="b" value="50" /> +
  <input type="number" id="a" name="a" value="10" /> =
  <output name="result" for="a b">60</output>
</form>
```

속성

- for
  - 스페이스로 구분한, 다른 여러 요소 id의 목록.
  - 목록에 포함된 요소가 출력 결과에 영향을 미쳤음을 나타낸다.
- form
  - `<output>`와 연결할 `<form>`요소의 id 값.
  - 지정하지 않아도 조상중에 `<form>`이 있다면 해당 `<form>`과 연결
- name
  - 요소의 이름
  - form.elements API에서 사용

접근성

- 많은 브라우저가 `<output>`을 마치 `aria-live` 속성이 존재하는 것처럼 구현
- 따라서 접근성 기술은 포커스가 바뀌지 않더라도 `<output>`내부의 UI 상호작용 결과를 표현

### `<picture>`: 사진 요소

0개 이상의 `<source>`요소를 포함하고 한 개의 `<img>`요소를 대안으로서 포함하는 사진 요소 

브라우저는 포함된 `<source>`들을 고려하여 적절한 것을 선택하지만, 적절한 것이 없을 경우 대안으로서 `<img>`요소를 출력한다.

```html
<picture>
  <source srcset="logo.webp" type="image/webp">
  <img src="logo.png" alt="logo">
</picture>
```

`<img>`의 목적

1. 이미지에 대한 사이즈나 기타 속성,표현을 나타내며
2. 사용가능한 `<source>`가 없을 경우 대안으로 제공

`<picture>`의 일반적인 사용

- art direction
  - 다양한 `media 조건`에서 이미지를 자르거나 변형
- 특정 형식 이미지 지원 불가시 대체 이미지 제공
- 다양한 뷰포트에 적절한 이미지를 불러 옴으로써 불러오는 시간과 대역폭을 절약



### `<progress>`: 진행 표시줄 요소

어느 작업이 진행된 정도를 시각적으로 표시

```html
<label for="file">File progress:</label>
<progress id="file" max="100" value="70"> 70% </progress>
```

속성

- max
  - `<progress>`가 나타내는 작업에 필요한 작업량.
  - 0보다 크고 유효한 부동소수점 숫자를 지정
  - 기본값은 1
- value
  - `<progress>`가 나타내는 작업을 완료한 양.
  - 유효한 부동소수점 숫자여야 함
  - max 지정시, 0~max의 값 범위내
  - max 지정안했을 경우, 0~1범위내



### `<q>`: 인라인 인용문 요소

둘러싼 텍스트가 짧은 인용문인것을 표현

대부분의 브라우저에서는 앞 뒤에 따옴표를 붙여 표현

짧은 인용문에 유용하며, 긴 인용문에서는 `<blockquote>`를 사용

```html
<p>Mozilla 재단의 웹사이트에 따르면,
  <q
  cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0
  은 2004년 처음 공개되어 큰 성공을 거두었습니다.</q></p>
```

속성

- cite
  - 인용문의 출처나 메시지를 가리키는 url



### `<ruby>`: 루비 주석

동아시아 문자의 발음 표기용 주석

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
<ruby>
明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>
</ruby>
```



### `<s>`: 취소선 요소

글자에 취소선(가로지르는 가로선)을 그린다.

더이상 관계없거나 정확하지 않은 부분을 표시할 때 사용

```html
<p><s>There will be a few tickets available at the box office tonight.</s></p>

<p>SOLD OUT!</p>
```

접근성

대부분의 스크린 리더기는 `<s>`의 존재를 표현하지 않는다.

css를 이용해 요소의 시작 부분과 끝 부분을 알릴 수 있다.

```css
s::before,
s::after {
  clip-path: inset(100%);
  clip: rect(1px, 1px, 1px, 1px);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}

s::before {
  content: " [취소선 시작] ";
}

s::after {
  content: " [취소선 끝] ";
}
```



### `<samp>`: 출력 예시 요소

컴퓨터 프로그램 출력의 예시를 나타낸다.

```html
<p>I was trying to boot my computer, but I got this hilarious message:</p>

<p><samp>Keyboard not found <br>Press F1 to continue</samp></p>
```



### `<script>`: 스크립트 요소

데이터와 실행 가능한 코드를 문서에 포함시킬 때 사용

보통 JavaScript 코드와 함께 사용

```html
<script src="javascript.js"></script>
```

속성

- async

  - 일반 스크립트에 이 속성이 존재하면 HTML 구문 분석 중에도 스크립트를 가져올 수 있으며, 사용가능해지는 즉시 평가를 수행
  - 모듈 스크립트에 이 속성이 존재하면 모듈 스크립트와 모든 의존 스크립트를 지연 큐에서 실행하기 때문에, 병렬로 불러오며 동시에 구분 분석을 수행하고 사용가능해지는 즉시 평가
  - 이 속성을 사용하면 분석기를 멈추는 JavaScript를 제거할 수 있다.
  - 불리언 속성으로 속성이 존재하면 참

- crossorigin

  - 정적 미디어에 대해 별도의 도메인을 사용하는 사이트의 오류 기록을 허용하기 위해 사용

- defer

  - 브라우저가 스크립트를 분석 후, 그리고 `DOMContentLoaded`발생 이전에 실행해야 함을 명시하는 불리언 속성
  - defer 속성을 가진 스크립트는 자신의 평가가 끝나기 전까지 `DOMContentLoaded` 이벤트의 발생을 막는다.
  - 이 속성을 사용하면 분석기를 멈추는 JavaScript를 제거할 수 있다.

- integrity

  - 사용자 에이전트가 가져온 리소스에 예기치 못한 변형이 있는지 검사할 때 사용할 인라인 메타 데이터

- nomodule

  - ES2015 모듈을 지원하는 브라우저에서는 실행하지 않을 스크립트임을 나타내는 불리언 속성
  - 즉 모듈화 JavaScript를 지원하지 않는 오래된 브라우저가 사용할 대체 스크립트로 사용

- nonce

  - `script-src`, `Content-Security-Policy`의 화이트리스트에 스크립트를 등록하기 위한 암호화된 일회용 숫자

- referrerpolicy

  - no-referrer: Referrer header를 보내지 않는다.

  - no-referrer-when-downgrade(기본값): TLS(HTTPS)지원하지 않는  출처로 Referrer header를  전송하지 않는다.

  - origin: Referer 헤더가 요청 출처(스키마, 호스트, 포트)를 포함

  - origin-when-cross-origin: 동일 출처에는 매개변수를 제외한 전체 URL 전송, 교차 출처 요청에서는 출처만 전송

  - same-origin: 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전생, cross-origin 요청은 referrer 정보를 보내지 않는다.

  - strict-origin: 목적지가 현재 문서와 동일하거나 더 높은 보안 수준일 때만 출처를 전송하고, 더 취약한 경우에는 전송하지 않는다.

  - strict-origin-when-cross-origin:보안레벨이 같을 경우 전체 URL을 전송, 목적지가 현재 문서와 동일하거나 더 높은 보안 수준을 가진 경우 자신의 출처를 전송. 그외의 경우 아무런 referrer 정보를 보내지 않는다.

  - unsafe-url:  보안에 관계없이 모든 요청을 수행할 때 원본, 경로 및 쿼리 문자열을 전송

- src

  - 외부 스크립트를 가리키는 URL

- type

  - 스크립트 유형. 아래의 다섯 범주 중 하나
  - 생략 또는 JavaScript MIMI 유형
    - 스크립트가 JavaScript 임을 나타낸다.
    - 굳이 불필요하게 type을 적을 필요가 없음
  - module
    - 스크립트를 JavaScript 모듈로 간주
    - 스크립트 콘텐츠 처리가 `charset`과 `defer` 속성을 영향을 받지 않음
    - 기존 스크립트와 다르게 교차 출처 가져오기 시 CORS 프로토콜 사용
  - 다른 모든 값
    - 내장 콘텐츠를 브라우저가 처리하지 않을 데이터 블록으로 간주



### `<select>`: 옵션 메뉴 컨트롤

```html
<label>Please choose one or more pets:
  <select name="pets" multiple size="4">
    <optgroup label="4-legged pets">
      <option value="dog">Dog</option>
      <option value="cat">Cat</option>
      <option value="hamster" disabled>Hamster</option>
    </optgroup>
    <optgroup label="Flying pets">
      <option value="parrot">Parrot</option>
      <option value="macaw">Macaw</option>
      <option value="albatross">Albatross</option>
    </optgroup>
  </select>
</label>
```

- id 값을 label과 연결하여 접근성을 향상
- 서버로 전송할 데이터 이름을 짓기 위해 name 속성 이용
- `selected`속성을 지정하여 해당 옵션을 선택한 상태로 문서를 불러오기 가능

속성

- autocomplete
  - 사용자 에이전트의 자동 완성 기능 지원 DOMString
- autofocus
  - 지정한 경우 페이지를 불러왔을 때 자동을 포커스 부여
  - 문서 내에 하나의 양식 요소에만 속성 사용 가능
- disabled
  - 지정한 경우 사용자와 `<select>`간 상호작용 막는다.
  - 또는 부모 요소의  `<disabled>`속성을 상속하여 같은 효과를 받을 수 있다.
- form
  -  `<select>`요소와 연결할 `<form>`의 id 값
  - 지정하지 않아도 조상중에 `<form>`이 존재하면 해당 요소와 연결
- multiple
  - 지정한 경우 메뉴에서 다중 선택 가능
  - 지정하지 않은 경우 하나만 선택 가능
- name
  - 컨트롤의 이름
- required
  - 옵션 중 비어있지 않은 문자열을 값으로 하는 문자열을 반드시 선택해야 함
- size
  -  `<select>`를 스크롤 가능한 목록 상자로 표현할 때 목록에서 한 번에 볼 수 있는 옵션 줄의 수
  - 기본값 0



### `<slot>`: 슬롯 요소

웹 컴포넌트 내부의 플레이스홀더



### `<small>`: 덧붙임 글 요소

덧붙이는 글, 저작권, 법률 표기등의 추가적은 작은 텍스트 표현

콘텐츠를 한 사이즈 작은 글꼴로 표시

```html
<p>MDN Web Docs is a learning platform for Web technologies and the software that powers the Web.</p>

<hr>

<p><small>The content is licensed under a Creative Commons Attribution-ShareAlike 2.5 Generic License.</small></p>
```



### `<span>`: 인라인 컨테이너 

구문 콘텐츠를 위한 인라인 컨테이너.

본질적으로 아무것도 나타내지 않는다.

적절한 의미를 가진 다른 요소가 없을 경우에만 사용해야 한다.

```HTML
<p><span>Some text</span></p>
```



### `<strong>`: 높은 중요도 요소

중대하거나 긴급한 컨텐츠 표현

보통 브라우저들은 굵은 글씨로 표현

```HTML
<p>... the most important rule, the rule you can never forget, no matter how much he cries, no matter how much he begs: <strong>never feed him after midnight</strong>.</p>
```



### `<sub>`: 아래 첨자 요소



활자 배치를 아래 첨자로 해야 하는 인라인 텍스트 지정

```HTML
<p>Almost every developer's favorite molecule is
C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."</p>
```

Tips:

- 이 요소는 타이포그래피적으로 이유가 있을 경우에만 사용. 각주, 변수, 화학식 등
- 단순히 작은 글씨를 아래에 쓰기 위해 사용해서는 안된다.
- 이를 경우 대안으로 CSS의 `vertical-align: sub`, `vertical-align: -25%` 등이 있다.



### `<sup>`: 위 첨자 요소

활자 배치를 위 첨자로 해야 하는 인라인 텍스트 지정

```html
<p>The <b>Pythagorean theorem</b> is often expressed as the following equation:</p>
<p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>
```

Tips:

- 이 요소는 타이포그래피적으로 이유가 있을 경우에만 사용. 거듭제곱, 서수 표현 등
- 단순히 작은 글씨를 아래에 쓰기 위해 사용해서는 안된다.
- 이를 경우 대안으로 CSS의 `vertical-align: super`, `vertical-align: 50%` 등이 있다.



### `<svg>`: 벡터 이미지 요소

### `<template>`: 콘텐츠 템플릿 요소

- 페이지를 불러온 순간 바로 그리지는 않지만, 이후 JavaScript를 통해 인스턴스를 생성할 수 있는 HTML 코드를 담을 방법을 제공.
- 템플릿은 콘텐츠 조각을 나중에 사용하기 위해 담아놓는 컨테이너

```html
<table id="producttable">
  <thead>
    <tr>
      <td>UPC_Code</td>
      <td>Product_Name</td>
    </tr>
  </thead>
  <tbody>
    <!-- 존재하는 데이터는 선택적으로 여기에 포함됩니다 -->
  </tbody>
</table>

<template id="productrow">
  <tr>
    <td class="record"></td>
    <td></td>
  </tr>
</template>
```

```js
// 템플릿 엘리먼트의 컨텐츠 존재 유무를 통해
// 브라우저가 HTML 템플릿 엘리먼트를 지원하는지 확인합니다
if ('content' in document.createElement('template')) {

    // 기존 HTML tbody 와 템플릿 열로 테이블을 인스턴스화합니다
    var t = document.querySelector('#productrow');

    // 새로운 열을 복제하고 테이블에 삽입합니다
    var tb = document.querySelector("tbody");
    var clone = document.importNode(t.content, true);
    td = clone.querySelectorAll("td");
    td[0].textContent = "1235646565";
    td[1].textContent = "Stuff";

    tb.appendChild(clone);

    // 새로운 열을 복제하고 테이블에 삽입합니다
    var clone2 = document.importNode(t.content, true);
    td = clone2.querySelectorAll("td");
    td[0].textContent = "0384928528";
    td[1].textContent = "Acme Kidney Beans 2";

    tb.appendChild(clone2);

} else {
  // HTML 템플릿 엘리먼트를 지원하지 않으므로
  // 테이블에 열을 추가하는 다른 방법을 찾습니다.
}
```



### `<textarea>`: 멀티라인 컨트롤

여러 줄의 텍스트를 입력할 수 있는 컨트롤

```html
<label for="story">Tell us your story:</label>

<textarea id="story" name="story"
          rows="5" cols="33">
It was a dark and stormy night...
</textarea>
```

속성

- autocapitalize
  - 사용자가 입력/편집시 텍스트 값을 자동으로 대문자로 변환할지에 대한 여부와 방법
  - iOS Safari Mobile 에서 사용하는 비표준 속성
  - none: 자동 재문자를 완전 비활성화
  - sentences: 문장의 첫 글자를 자동으로 대문자화
  - words: 단어의 첫 글자를 자동으로 대문자로 표시
  - characters: 모든 문자를 자동으로 대문자화
- autocomplete
  - 자동완성 기능 사용 여부
  - off 값 또는 no
- autofocus
  - 페이지 로드시 자동으로 포커스를 받는다.
  - 문서에서 오직 하나의 폼 관련 요소에만 사용 가능
- cols
  - 평균 문자 너비로 표시되는 텍스트 컨트롤의 표시 너비
  - 양의 정수 값
  - 기본값은 20
- disabled
  - 사용자와 해당 컨트롤간 상호작용 할 수 없음을 나타내는 불리언 속성

- form
  - 이 요소와 연결할 `<form>`의 id값
  -  지정되지 않은 경우 이 요소는 `<form>`요소의 하위 요소여야 한다.
- maxlength
  - 사용자가 입력할 수 있는 문자의 최대 개수
  - 명시하지 않을 경우 사용자는 무한 입력 가능
- minlength
  - 사용자가 입력해야 할 문자의 최소 개수
- name
  - 컨트롤의 이름
- placeholder
  - 컨트롤에 입력할 수 있는 항목에 대한 힌트
  - 캐리지 리턴이나 줄 바꿈이 포함되면 안된다.
- readonly
  - 사용자가 컨트롤값을 수정할 수 없음을 나타내는 불리언 속성
  - `disabled`와 다르게 컨트롤을 클릭하거나 선택이 가능
- required
  - 사용자가 폼을 제출 하기 전에 반드시 채워야 함을 나타낸다.
- rows
  - 컨트롤에 대해 표시되는 텍스트 줄 수
- selectionDirection
  - 선택이 발생한 방향
  - LTR : 왼쪽 -> 오른쪽
  - RTL : 오른쪽 -> 왼쪽
- selectionEnd
  - 현재 선택 항목의 마지막 문자에 대한 인덱스
- selectionStart
  - 현재 선택 항목의 첫 번째 문자에 대한 인덱스
- spellcheck
  - true : 값으로 지정시 요소의 맞춤법과 문법을 검사해야 함을 나타낸다.
  - false : 요소를 검사하지 않아야 함을 나타낸다.
  - default: 기본값에서는 부모 요소의 자체 `spellcheck`값을 기반으로 동작
- wrap
  - 컨트롤이 텍스트를 줄바꿈하는 방법을 나타낸다.
  - hard: 브라우저가 자동으로 줄 바꿈을 삽입하여 각 줄이 컨트롤의 너비보다 크지 않도록 동작
    사용하기 위해서는 `cols`속성을 지정해야 한다.
  - soft: 브라우저는 값의 모든 줄 바꿈이 CR+LF 쌍으로 구성되는지 확인하지만 추가 줄 바꿈은 삽입하지 않는다. 기본값

기본적으로 크기 조정이 자동이며 비활성화를 위해서는 CSS 지정

```css
textarea { resize: none;}
```



### `<time>`: 시간 요소

시간의 특정 지점이나 구간을 나타낸다.

`datetime` 속성을 지정해 보다 적절하게 검색 결과나 특정 기능을 구현 시 사용

```html
<p>The Cure will be celebrating their 40th anniversary on <time datetime="2018-07-07">July 7</time> in London's Hyde Park.</p>
```

Tips:

- 복잡한 계산 문제로 인해,그레고리력 도입 이전 시간을 나타낼 때 사용하면 안된다.
- `datetitme`속성에서 적절한 형식을 선택해서 지정해야 하며, 
- `datetime`이 없는 경우 어떠한 자식 요소도 있으면 안되며, 
- 요소의 텍스트 콘텐츠를 `datetime`속성 값으로 간주

```
유효한 연도 문자열
2011
유효한 연-월 문자열
2011-11
유효한 연-월-일 문자열
2011-11-18
유효한 월-일 문자열
11-18
유효한 주차 문자열
2011-W47
유효한 시간 문자열
14:54
14:54:39
14:54:39.929
유효한 현지 날짜 및 시간 문자열
2011-11-18T14:54:39.929
2011-11-18 14:54:39.929
유효한 국제 날짜 및 시간 문자열
2011-11-18T14:54:39.929Z
2011-11-18T14:54:39.929-0400
2011-11-18T14:54:39.929-04:00
2011-11-18 14:54:39.929Z
2011-11-18 14:54:39.929-0400
2011-11-18 14:54:39.929-04:00
유효한 기간 문자열
PT4H18M3S
```



### `<u>`: 밑줄 요소

보통 밑줄로 표시

```html
<p>You could use this element to highlight <u>speling</u> mistakes, so the writer can <u>corect</u> them.</p>
<p>맞춤법을 틀리면 <u class="spelling">않돼요</u>.</p>
```

사용처

- 철자 오류 강조
- 중국어의 고유명사 표시

밑줄만을 위해 사용하거나, 책 제목 등을 강조해서는 안된다.



### `<var>`: 변수 요소

수학 표현이나 프로그래밍에서의 변수 이름을 나타낸다.

보통 기울임꼴로 표시

```html
<p>The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where <var>l</var> represents the length, <var>w</var> the width and <var>h</var> the height of the box.</p>
```

Tips:

- 함께 자주 사용하는 요소
  - `<code>`, `<kbd>`, `<smap>`



### `<video>`: 비디오 요소

비디오 플레이백을 지원하는 미디어 플레이어를 문서에 삽입

```html
<video controls width="250">
    <source src="/media/cc0-videos/flower.webm" type="video/webm">
    <source src="/media/cc0-videos/flower.mp4" type="video/mp4">
    Sorry, your browser doesn't support embedded videos.
</video>

<!-- Video with subtitles -->
<video src="foo.ogg">
  <track kind="subtitles" src="foo.en.vtt" srclang="en" label="English">
  <track kind="subtitles" src="foo.sv.vtt" srclang="sv" label="Svenska">
</video>
```

속성

- autoplay
  - 부울 속성
  - 재생할 수 있는 가장 빠른 시점내에 재생 시작
- buffered
  - 미디어의 어느 시간대가 버퍼에 들어 있는지 확인할 수 있는 속성
- controls
  - 이 속성이 존재하면 컨트롤러 표시
- crossorigin
  - CORS 사용 여부
  - anonymous : 자격 증명 미포함 전송 
  - use-credentials: 자격 증명 포함 전송
- height
  - 비디오의 출력 높이. CSS 픽셀 단위
- loop
  - 이 속성이 존재하면 동영상이 끝난 후, 처음 시점으로 되돌아간다.
- muted
  - 비디오 로드시 소리의 초기 상태가 음소거. 기본값 false
- played
  - 재생된 동영상 영역을 나타내는 `TimeRanges` 객체
- preload
  - none: 미리 로드 되지 않음
  - metadata: 메타데이터만 미리 가져옴
  - auto: 이 비디오를 사용하지 않아도 전체 비디오가 다운로드 될 수 있음을 나타낸다.
  - 빈 문자열: auto와 동일
  - 스펙에서는 metadata를 권장
- poster
  - 사용자가 동영상을 재생,탐색하기 전까지 출력되는 포스터 프레임 주소
  - 지정하지 않으면 첫 프레임이 사용 가능하기 전까지 아무것도 표시되지 않는다.
- width
  - 비디오의 출력 너비. CSS 픽셀 단위



### `<wbr>`: 강제 줄바꿈 요소

현재 요소의 줄 바꿈 규칙을 무시하고 브라우저가 줄을 바꿀 수 있는 위치를 나타낸다.

```html
<div id="example-paragraphs">
    <p>Fernstraßenbauprivatfinanzierungsgesetz</p>
    <p>Fernstraßen<wbr>bau<wbr>privat<wbr>finanzierungs<wbr>gesetz</p>
    <p>Fernstraßen&shy;bau&shy;privat&shy;finanzierungs&shy;gesetz</p>
</div>
```

UTF-8인코딩을 사용한 페이지의 `<wbr>`은 bidi 정렬 영향을 받지 않는다.

```
<div dir=rtl>123,<wbr>456</div> => 123,456
```



# 두 요소의 차이점

- 콘텐츠 모델: 블록 요소는 인라인 요소 혹은 다른 블록 요소를 포함할 수 있다
- 기본 서식: 기본적으로 블록 요소는 새로운 줄에서 시작, 인라인 요소는 줄의 어느 곳에서든 시작 할 수 있다.



> 블록과 인라인의 의미는 css의 box model과 유사하지만 다르다

