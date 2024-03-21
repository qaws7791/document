# Block Elements

* 블록 레벨 요소는 자신의 이전 요소와 이후 요소 사이에 줄 바꿈
* 페이지의 구조적 요소 표현에 유용

## `<address>` : 전화번호, 이메일 등 연락처 정보를 포함하는 요소

* 주로 이탤릭체로 표현
* 실제 주소, 이메일 주소, URL, 전화번호, 소셜 미디어 아이디, 지리적 좌표 등 모든 유형의 연락처 정보를 포함
* 연락처 정보를 참조하는 사람 또는 조직의 이름이 포함
* 일반적으로 `<footer>`안에서 사용된다.

```html
<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br>
  <a href="tel:+13115552368">(311) 555-2368</a>
  You can contact author at
  <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br />  
</address>
```

[jim@rock.com](mailto:jim@rock.com)\
[(311) 555-2368](tel:+13115552368)\
You can contact author at [www.somedomain.com](http://www.somedomain.com/contact).\


***

## `<article>`: 단락 콘텐츠

독립적으로 구분할 수 있는 컨텐츠로 게시판의 글이나 뉴스 기사 등의 컨텐츠

Tip:

* `<article>` 항목을 식별하는데 `<h1>~<h6>`제목 요소를 사용
* `<article>`은 중첩이 가능하고 하위 항목은 상위 항목과 관련이 있어야 한다.
* 작성자 정보: `<address>`를 이용해 제공
* 작성일자와 시간: `<time>`요소의 `<time datetime="2018-07-07">`와 같은 속성 이용해 제공

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

***

## `<aside>`: 부가 콘텐츠

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

## `<blockquote>`: 블록 인용구

인용 텍스트로 이루어진 인용구 블록이다.

* 인용문의 출처는 `cite` 속성 이용히야 제공
* 일반적으로 들여쓰기가 되어 있고, `margin-left,right`를 통해 변경
* 인라인 인용구는 `<q>`

```html
<blockquote cite="https://www.huxley.net/bnw/four.html">
        <p>Words can be like X-rays, if you use them properly—they’ll go through anything. You read and you’re pierced.</p>
</blockquote>
```

***

## `<details>`: 상세 정보 위젯

열린 상태일 때 정보를 보여주는 위젯

* 레이블은 `<summary>`로 제공
* `<datails>`요소의 첫 번째 자식이 `<summary>`요소일 때, 이 첫번째 요소의 콘텐츠를 위젯의 레이블로 사용
* 위젯의 레이블은 생략이 가능
* 아래의 코드에서 "Details"가 `<datails>`의 위젯 레이블
* 속성: open
* CSS 적용하기
  * list-style 속성을 이용
  * 기본으로 나오는 삼각형 모양 제거하기: `list-style: none`

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

***

## `<dialog>`: 대화상자

닫을 수 있고, 상호작용이 가능한 컴포넌트

* 속성: open
  * 대화 상자가 활성 상태이며 상호작용이 가능.
  * open상태가 아닐 경우 사용자에게 보여서는 안된다.
* `<dialog>`열 때에는 `open`속성 직접 변경이 아닌 `.show(), .showModal()`메서드를 사용

```html
<dialog open>
  <p>여러분 안녕하세요!</p>
</dialog>
```

여러분 안녕하세요!

***

## `<dl>`: 설명 목록( Description List)

`<dd>` 요소와 `<dt>`요소를 포함하는 설명 목록을 제공

단어 사전이나 메타데이터 등의 키-값 목록을 생성하는데 유용

## `<dt>`: 설명 목록의 정의 (Description Term)

키-값 목록에서 키의 부분을 나타내거나, 단어 사전에서 단어를 나타내는 부분을 표현

## `<dd>`: 설명 목록의 정의 설명(Description Details)

용어 `<dt>`에 대한 설명이나 정의, 값 등을 제공

```html
<dl>
    <dt>Beast of Bodmin</dt>
    <dd>A large feline inhabiting Bodmin Moor.</dd>
</dl>
```

Beast of BodminA large feline inhabiting Bodmin Moor.

***

## `<div>`: 문서의 분할

순수하게 요소를 담는 컨테이너의 역할로 아무것도 표현하지 않는다.

이 요소는 다른 의미를 가진 요소들이 적절하지 않을 때만 사용

```html
<div>
  <p>
    Any kind of content here. Such as &lt;p&gt;, &lt;table&gt;. You name it!
  </p>
</div>
```

***

## `<fieldset>`: 필드 집합의 라벨

웹 양식(`<form>`)에서 여러 컨트롤과 레이블을 그룹화

그룹에 대한 설명: `<legend>`요소로 제공

속성

* form
  * 페이지 내에서 `<fieldset>`요소와 연결할 `<form>`요소의 id
* disabled
  * `<fieldset>`요소 내의 모든 콘텐츠를 한 번에 비활성화
* name
  * 그룹에 대한 이름

기본 css 속성

* display: block
* border: 2px groove
* min-inline-size: min-content
* 약간의 내부 여백

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

Choose your favorite monster Kraken\
&#x20;Sasquatch\
&#x20;Mothman

***

## `<figure>`: 미디어 콘텐츠 그룹과 설명

다른 부분으로 이동해도 문제가 없는 독립적인 컨텐츠를 제공

요소 내부에 `<figcaption>`를 포함하여 설명을 제공

## `<figcaption>`: 그림 설명

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

```
function NavigatorExample() {
  var txt;
  txt = "Browser CodeName: " + navigator.appCodeName;
  txt+= "Browser Name: " + navigator.appName;
  txt+= "Browser Version: " + navigator.appVersion ;
  txt+= "Cookies Enabled: " + navigator.cookieEnabled;
  txt+= "Platform: " + navigator.platform;
  txt+= "User-agent header: " + navigator.userAgent;
}
  
```

인용문 표현

```html
<figure>
  <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
  <blockquote>If debugging is the process of removing software bugs,
  then programming must be the process of putting them in.</blockquote>
</figure>
```

> If debugging is the process of removing software bugs, then programming must be the process of putting them in.

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

Bid me discourse, I will enchant thine ear, Or like a fairy trip upon the green, Or, like a nymph, with long dishevell'd hair, Dance on the sands, and yet no footing seen: Love is a spirit all compact of fire, Not gross to sink, but light, and will aspire.

***

## `<footer>`: 페이지나 구역의 바닥글

가장 가까운 구획 콘텐츠나 구획 루트에 대한 푸터를 제공

푸터는 일반적으로 작성자, 저작권 정보, 관련 문서 등에 대한 내용을 포함

Tip:

* 푸터에 `<address>`를 이용해 작성자 정보를 표현
* 가장 가까운 상위 요소를 본문으로 하여 전체 페이지에 적용
* `<footer`>는 컨텐츠를 섹션화하지 하지 않아 개요에 나타나지 않는다.

```html
<footer>
  Some copyright info or perhaps some author info for an &lt;article&gt;?
</footer>
```

## `<form>`: 입력 폼

대화형 컨트롤을 제공

CSS 의사 클래스 `:valid`, `:invalid`를 통해 양식이 유효한 경우에 대한 CSS 속성 적용 가능

속성

* accept-charset
  * 서버가 허용하는 문자 인코딩 목록
  * 기본값은 페이지 인코딩
* action
  * 양식 데이터를 처리할 프로그램의 URI
  * `<button>`, `<input type="submit">`, `<input type="image">`요소의 formaction 속성으로 재정의 가능
* autocapitalize
  * 영문에 대한 대소문자 자동 변환 방식
  * ios safari에서만 사용하는 비표준 특성
* autocomplete
  * 입력 요소의 자동완성 기능을 사용할지
  * off: 자동완성 x
  * on: 자동완성 o
* entype
  * method 속성이 post 값일 때, 양식 제출시 MIME 유형 지정
  * 기본값: application/x-www-form-urlencoded
  * multipart/form-data: `<input type="file">`이 존재 하는 경우 사용
  * text/plain: html 5에서 디버깅용
* method
  * 양식 제출시 사용할 HTTP 메서드
  * post: 양식 데이터를 본문인 body에 넣어 전송
  * get: 양식 데이터를 url과 ? 구분자 뒤에 이어 붙여 전송
  * dialog: 양식이 `<dialog>` 안에 위치할 경우, 제출과 함께 대화 상자 종료
* name
  * form의 의 이름
* novalidate
  * 지정할 경우 양식의 유효성 검증 건너 뛰기
* target
  * 양식 제출에 대한 결과를 표시할 위치를 지정
  * 가능한 값: 브라우징 맥락의 이름 또는 키워드
  * \_self: 응답을 현재 브라우징 맥락에 표시. 기본값
  * \_blank: 응답을 새로운 브라우징 맥락에 표시. 보통 새 탭
  * \_parent: 응답을 현재 브라우징 맥락의 부모에 표시. 부모가 없으면 \_self와 동일하게 동작
  * \_top: 응답을 최상단 브라우징 맥락에 표시. 부모가 없으면 \_self와 동일하게 동작

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

Enter your name: Enter your email:&#x20;

***

## `<h1>`\~`<h6>`: 제목

6단계로 이루어진 구획 제목을 제공

Tips:

* 글씨 크기 조정은 h태그가 아닌 css의 `font-size` 이용
* 제목 단계는 `h1`부터 `h2`, `h3` 순으로 건너뛰지 않고 순차적으로 사용
* 페이지당 하나의 h1 태그를 사용

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

***

## `<hgroup>`: 헤더 정보 그룹

제목, 부제목과 같이 문서 구획의 다단계 제목을 표현

h1\~h6 태그 여러 개를 묶을 때 사용

```html
<hgroup>
  <h1>주요 제목</h1>
  <h2>부제목</h2>
</hgroup>
```

## `<hr>`: 수평선

주제를 분리하기 위한 수평선

## `<li>`: 목록의 항목

목록에서 항목을 나타내므로 `<ol>`이나 `<ul>`,`<menu>`안에 위치

속성

* value
  * 요소 내부에서 항목의 현재 서수 값을 나타내는 정수
  * 비정렬 목록`<ul>`과 `<menu>`에서는 의미가 없다
* type
  * 넘버링 타입을 나타내는 문자
  * 현재는 css의 list-style-type 속성을 이용
  * a: 소문자 글자
  * A: 대문자 글자
  * i: 소문자 로마 숫자
  * I: 대문자 로마 숫자
  * 1: 숫자

```html
<ol type="I">
    <li value="3">third item</li>
    <li>fourth item</li>
    <li>fifth item</li>
</ol>
```

1. third item
2. fourth item
3. fifth item

## `<main>`: 문서에서 하나뿐인 중심 콘텐츠

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

## `<nav>`: 탐색링크를 포함하는 네비게이터

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

* 모든 링크가 `<nav>`요소 안에 있을 필요는 없다.
* 주요 탐색 링크를 위한 요소이다.
* 중요하지 않은 링크는 `<footer>`에 정의 할 수 있다.
* 하나의 페이지 내에서 여러 개의 `<nav>`를 사용 가능. 전체 탐색용 그리고 현재 페이지 탐색 등 이때 [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA\_Techniques/Using\_the\_aria-labelledby\_attribute)를 사용

## `<ol>`: 정렬된(순서있는) 목록

순서가 지정된 목록을 제공

```html
<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin’ Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

속성

* resversed
  * 목록의 항목이 역순임을 지정
* start
  * 목록 항목에서 시작할 수
* type
  * 번호 매기기 유형
  * a: 소문자 글자
  * A: 대문자 글자
  * i: 소문자 로마 숫자
  * I: 대문자 로마 숫자
  * 1: 숫자

## `<p>`: 문단

하나의 문단을 나타내며, 문단은 블록 레벨 요소

```html
<p>Geckos are a group of usually small, usually nocturnal lizards. They are found on every continent except Australia.</p>
```

## `<pre>`: 미리 서식 적용한 글

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

* 문자를 그림이나 도표처럼 사용하면 차례대로 읽는 스크린 리더기로는 이해하지 못한다.
* 이 때는 `<figure>`와 `<figcaption>`을 이용해 대체 설명을 작성

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

## `<section>`: 웹 페이지의 구역

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

## `<table>`: 표

* `<tr>`: 행 구분
* `<th>`: 셀 제목
* `<td>`: 셀

접근성

* `<caption>`요소를 제공하여 사용자에게 설명 제공하여 불필요한 경우 스킵하도록 도움

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

## `<ul>`: 정렬되지 않은 목록

보통 불릿으로 표현되는 정렬되지 않은 목록

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```

## 두 요소의 차이점

* 콘텐츠 모델: 블록 요소는 인라인 요소 혹은 다른 블록 요소를 포함할 수 있다
* 기본 서식: 기본적으로 블록 요소는 새로운 줄에서 시작, 인라인 요소는 줄의 어느 곳에서든 시작 할 수 있다.

> 블록과 인라인의 의미는 css의 box model과 유사하지만 다르다
