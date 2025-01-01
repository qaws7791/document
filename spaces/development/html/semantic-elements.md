# html 요소들의 의미론

## 1. 섹션

이 요소들은 해당 콘텐츠가 특정 구역 역할을 가지고 있다는 것을 암시합니다. 예를 들어 header 요소에는 제목과 같은 정보가 있고, nav 요소에는 탐색을 위한 링크가 있을 것으로 예상될 수 있습니다

### `<article>`: 단락 콘텐츠

완결 또는 자립적인 구성을 가진 컨텐츠로 독립적으로 배포되거나 재사용될 수 있어야 한다. 게시판의 글이나 뉴스 기사 등의 컨텐츠

- `<article>` 항목을 식별하는데 `<h1>~<h6>`제목 요소를 사용
- `<article>`은 중첩이 가능하고 하위 항목은 상위 항목과 관련이 있어야 한다.
- `<article>` 내에서 제목 구역을 구분하기 위해 `header`, 작성 정보를 구분하기 위해 `footer`, 내부 컨텐츠를 나누기 위해 `section` 등을 사용할 수 있다.
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
        <p>Posted on <time datetime="2015-05-17 19:00">May 17</time> by Tom.</p>
      </footer>
    </article>
  </section>
  <footer>
    <p>Posted on <time datetime="2015-05-15 19:00">May 15</time> by Staff.</p>
  </footer>
</article>
```



### `<section>`: 웹 페이지의 구역

문서에서 독립적인 구획이며 일반적으로 제목을 포함합니다

- 각각의 `<section>`을 구분할 수단이 필요. 주로 제목 태그를 포함시키는 방법 이용

- 요소의 콘텐츠를 따로 구분이 필요할 경우에는 `<article>` 요소를 고려

```html
<h1>Choosing an Apple</h1>
<section>
  <h2>Introduction</h2>
  <p>
    This document provides a guide to help with the important task of choosing
    the correct Apple.
  </p>
</section>
```





### `<nav>`: 탐색링크를 포함하는 네비게이션 

페이지 내에서 다른 부분으로 이동하거나 다른 페이지로 이동하는 링크를 포함하는 섹션이다. 메뉴, 목차, 색인 등에 사용할 수 있다

- 모든 링크가 `<nav>`요소 안에 있을 필요는 없다.
- 반드시 목록 형태로 제공해야 하는 것은 아니다.
- 주요 탐색 링크를 위한 요소이다.
- 중요하지 않은 링크는 `<footer>`에 정의 할 수 있다.
- 하나의 페이지 내에서 여러 개의 `<nav>`를 사용 가능. 전체 탐색용 그리고 현재 페이지 탐색 등 이때 [aria-labelledby](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-labelledby_attribute)를 사용한다

```html
<nav class="menu">
  <ul>
    <li><a href="/">Home</a></li>
    <li><a href="/about">About</a></li>
    <li><a hres="/blog">Blog</a></li>
  </ul>
</nav>
```



### `<aside>`: 부가 콘텐츠

문서의 주요 내용과 간접적인 연관이 있는 컨텐츠를 제공(부연 설명)

사이드바 또는 콜아웃 상자의 역할

```html
<article>
  <p>디즈니 만화영화 <em>인어 공주</em>는 1989년 처음 개봉했습니다.</p>
  <aside>인어 공주는 첫 개봉 당시 8700만불의 흥행을 기록했습니다.</aside>
  <p>영화에 대한 정보...</p>
</article>
```



### `<h1>`\~`<h6>`: 제목

6단계로 이루어진 구획 제목을 제공

- 글씨 크기 조정은 h태그가 아닌 css의 `font-size` 이용
- 제목 단계는 `h1`부터 `h2`, `h3` 순으로 건너뛰지 않고 순차적으로 사용
- 페이지당 하나의 h1 태그를 사용
- h 태그는 section 안의 상단에서 사용하거나 section 밖에서 바로 위에 사용해도 된다



### `<header>`: 페이지나 구역의 헤더

소개 및 탐색에 관련된 콘텐츠 제공

제목이나 로고, 검색 창, 작성자 이름등의 요소를 포함

```html
<header class="page-header">
  <h1>Cute Puppies Express!</h1>
</header>

<main>
  <p>
    I love beagles <em>so</em> much! Like, really, a lot. They’re adorable and
    their ears are so, so snuggly soft!
  </p>
</main>
```



### `<hgroup>`: 헤더 정보 그룹

제목, 부제목과 같이 문서 구획의 다단계 제목을 표현

h1\~h6 요소를 p 요소와 그룹화할 때 사용

```html
<hgroup>
  <h1>주요 제목</h1>
  <p>제목에 대한 부연설명입니다</h2>
</hgroup>
```



### `<header>`: 머리글

소개와 탐색에 도움을 주는 요소. 제목이나 로고(썸네일), 작성자 정보 등을 포함할 수 있다

- 헤더 요소는 새로운 섹션을 만들지 않습니다

```html
<header>
    <hgroup>
  		<h1>주요 제목</h1>
  		<p>제목에 대한 부연설명입니다</h2>
	</hgroup>
 	<time datetime="2024-12-01">Dec 1</time>
</header>
```



### `<footer>`: 페이지나 구역의 바닥글

가장 가까운 구획 콘텐츠나 구획 루트에 대한 푸터를 제공

푸터는 일반적으로 작성자, 저작권 정보, 관련 문서 등에 대한 내용을 포함한다

푸터가 전체 섹션(루트)을 포함하는 경우 인덱스, 라이선스(저작권) 등을 나타낼 수 있다

- 푸터에 `<address>`를 이용해 작성자 정보를 표현
- 가장 가까운 상위 요소를 본문으로 하여 전체 페이지에 적용
- `<footer`>는 새로운 섹션을 만들지 않습니다
- `fat footer`: 사이트의 로고부터 사이트 맵, 피드백 링크 등 사실상 "첫 페이지"에 해당하는 많은 컨텐츠가 푸터에 포함되는 푸터 디자인

```html
<article>
    <h1>...</h1>
    <p>...</p>
    <footer>
    	<address>
  			<a href="mailto:jim@rock.com">jim@rock.com</a>
		</address>
    </footer>
</article>
```



### `<address>` : 전화번호, 이메일 등 연락처 정보를 포함하는 요소

가장 가까운 상위 `arcicle` 또는 `body` 요소의 연락처 정보를 나타낸다

- 주로 이탤릭체로 표현
- 실제 주소, 이메일 주소, URL, 전화번호, 소셜 미디어 아이디, 지리적 좌표 등 모든 유형의 연락처 정보를 포함
- 연락처 정보를 참조하는 사람 또는 조직의 이름이 포함
- 일반적으로 `<footer>`안에서 사용되지만, `<header`>에서 사용되어도 되고, 정해진 것은 아니다

```html
<address>
  <a href="mailto:jim@rock.com">jim@rock.com</a><br />
  <a href="tel:+13115552368">(311) 555-2368</a>
  You can contact author at
  <a href="http://www.somedomain.com/contact"> www.somedomain.com</a>.<br />
</address>
```



## 2. 콘텐츠 그룹화

이 요소들은 콘텐츠를 그룹화하는 데 사용합니다. 예를 들어 p 요소 안의 요소는 한 단락으로 연관성 있는 글 내용이 들어가며, ol 요소 안에는 특정한 순서대로 나열되는 항목들이 있을 것으로 예상될 수 있습니다

### `<p>`: 단락

단락을 표현하는 요소로, 빈줄이나 첫 줄 들여쓰기 등을 통해 시각적으로 구분될 수 있다

```html
<p>
  Geckos are a group of usually small, usually nocturnal lizards. They are found
  on every continent except Australia.
</p>
```



### `<hr>`: 수평선

단락 수준의 주제적 구분을 위해 시각적으로 수평선을 표현합니다

- 단락 뿐만 아니라 select, dropdown 등에서 옵션(아이템) 집합 간의 구분을 위해서도 사용될 수 있습니다

```html
<section>
     <h1>Communication</h1>
     <p>There are various methods of communication. This section
     covers a few of the important ones used by the project.</p>
     <hr>
     <p>Communication stones seem to come in pairs and have mysterious
     properties:</p>
</section>
```



### `<pre>`: 미리 서식 이 적용된 글

미리 서식이 지정된 텍스트로, HTML에 내용을 그대로 표현

텍스트는 보통 고정폭 글꼴을 사용해 렌더링하며, 요소 내의 공백문자를 그대로 유지한다

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
    소 한 마리가 "나는 이 분야의 전문가다"라고 말하고 있습니다. 소는 미리 서식을
    적용한 텍스트로 그려져있습니다.
  </figcaption>
</figure>
```



### `<blockquote>`: 블록 인용구

다른 출처에서 인용된 콘텐츠를 표시하기 위한 인용구 블록이다.

- 인용문의 출처는 `cite` 속성 이용하여 제공한다
- 일반적으로 들여쓰기가 되어 있다
- 인라인 인용구는 `<q>`

```html
<blockquote cite="https://www.huxley.net/bnw/four.html">
  <p>
    Words can be like X-rays, if you use them properly—they’ll go through
    anything. You read and you’re pierced.
  </p>
</blockquote>
```



### `<ol>`: 정렬된(순서있는) 목록

항목의 순서가 의도적으로 정해진 목록을 나타낸다

- 항목의 순서가 변경될 경우 문서의 의미가 달라질 수 있다
- 정렬된 아이템을 표시하는 경우는  `<ol>`을 사용하여 순서를 암시할 수 있다

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



### `<ul>`: 정렬되지 않은 목록

보통 불릿으로 표현되는 항목의 순서가 중요하지 않은 목록

- 순서를 변경해도 문서의 의미에 영향을 주지 않는 경우에만 사용해야 한다

```html
<ul>
  <li>first item</li>
  <li>second item</li>
  <li>third item</li>
</ul>
```



### `<menu>`: 툴바

사용 할 수 있는 기능들을 나열하는 툴바를 나타냅니다. 명령 목록을 표현하기 위한 `<ul>` 요소의 의미론적 대안

```html
<menu>
     <li><button onclick="copy()"><img src="copy.svg" alt="Copy"></button></li>
     <li><button onclick="cut()"><img src="cut.svg" alt="Cut"></button></li>
     <li><button onclick="paste()"><img src="paste.svg" alt="Paste"></button></li>
</menu>
```



### `<li>`: 목록의 항목

목록에서 항목을 나타내므로 `<ol>`이나 `<ul>`,`<menu>`를 부모로 가져야 합니다

속성

- value
  - 요소 내부에서 항목의 현재 서수 값을 나타내는 정수
  - 비정렬 목록`<ul>`과 `<menu>`에서는 의미가 없다

```html
<ol type="I">
  <li value="3">third item</li>
  <li>fourth item</li>
  <li>fifth item</li>
</ol>
```



### `<dl>`: 설명 목록( Description List)

`<dd>` 요소와 `<dt>`요소를 포함하는 설명 목록을 제공

용어와 정의, 단어 사전, 메타데이터 주제와 값, 질문과 답변 등의 키-값 목록을 생성하는데 유용합니다

```html
<dl>
 <dt> 저자 <dt/>
 <dd> John <dd/>
 <dd> Luke <dd/>
 <dt> 편집자 <dt/>
 <dd> Frank </dd>
</dl>
```



### `<dt>`: 설명 목록의 정의 (Description Term)

키-값 목록에서 키의 부분을 나타내거나, 단어 사전에서 단어를 나타냅니다



### `<dd>`: 설명 목록의 정의 설명(Description Details)

키-값 목록에서 값의 부분을 나타내거나, 단어 사전에서 정의를 나타냅니다

```html
<dl>
  <dt>Beast of Bodmin</dt>
  <dd>A large feline inhabiting Bodmin Moor.</dd>
</dl>
```



### `<figure>`: 미디어 콘텐츠 그룹과 설명

다른 부분으로 이동해도 문제가 없는 독립적인 컨텐츠를 제공

요소 내부에 `<figcaption>`를 포함하여 설명을 제공

```html
<figure>
  <img src="/media/cc0-images/elephant-660-480.jpg" alt="Elephant at sunset" />
  <figcaption>An elephant at sunset</figcaption>
</figure>
```



### `<figcaption>`: 그림 설명

`<figure>`가 포함하는 컨텐츠에 대한 설명이나 범례 제공한다. 이미지를 설명하기 위한 캡션으로 많이 사용되지만, 코드 표현이나 시 표현 등 다양하게 사용할 수 있다

- 코드 표현

  - ```html
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

- 인용문 표현

  - ```html
    <figure>
      <figcaption><cite>Edsger Dijkstra:</cite></figcaption>
      <blockquote>
        If debugging is the process of removing software bugs, then programming must
        be the process of putting them in.
      </blockquote>
    </figure>
    ```

- 시 표현

  - ```html
    <figure>
      <p style="white-space:pre">
        Bid me discourse, I will enchant thine ear, Or like a fairy trip upon the
        green, Or, like a nymph, with long dishevell'd hair, Dance on the sands, and
        yet no footing seen: Love is a spirit all compact of fire, Not gross to
        sink, but light, and will aspire.
      </p>
      <figcaption><cite>Venus and Adonis</cite>, by William Shakespeare</figcaption>
    </figure>
    ```



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





### `<search>: 검색 요소`

검색이나 필터링과 관련된 양식이나 콘텐츠를 포함하는 요소이다. 검색은 웹 페이지 전역 검색, 페이지 내 필터링 등 여러 개일 수 있다

```html
<search>
	<form action="/search">
		<label for="query">게시글 검색</label>
		<input id="query" name="q" type="search">
		<button type="submit">검색</button>
	</form>
</search>
```



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



## 3. 텍스트 수준의 의미론

이 요소들은 텍스트 수준에서 의미를 가지기 위한 요소들 입니다. 예를 들어 em 요소의 내용은 강조가 필요한 것으로 볼 수 있고, time 요소 안에는 날짜나 시간과 관련된 텍스트가 있을 것으로 예상될 수 있습니다

### `<a>`:  하이퍼링크

href 속성을 이용해 다른 페이지나 같은 페이지의 어느 위치, 파일, 이메일 주소나 다른 URL로 연결할 수 있는 하이퍼 링크를 생성. 태그안의 콘텐츠는 목적지 링크에 대한 설명을 나타낸다. 

href 속성이 없을 경우에는 링크가 있을 경우를 위한 자리 표시자 역할을 한다

```html
<a href="https://www.mozilla.com">절대 URL연결</a> 
<a href="//example.com">상대URL연결</a>
<p><a href="#Section_further_down">아래 제목으로 건너뛰기</a></p>
<a href="mailto:nowhere@mozilla.org">Send email to nowhere</a>
<a href="tel:+49.157.0156">+49 157 0156</a>
 <a href="" download="my_painting.png">다운로드</a>
```

속성

* download
  * 링크로 이동하는 대신 URL을 저장
  * 값이 없으면 파일 이름과 확장자는 브라우저가 생성하여 제안
  * 값을 지정하면 저장할 때 파일 이름으로서 제안. /와\는 \_로 변환되어 제안
  * 다운로드는 동일 출처 URL과 blob:, data: 스킴에서만 동작
* href
  * 하이퍼링크가 가지는 URL
  * 브라우저가 지원하는 모든 URL 스킴 사용 가능
  * 페이지 구획을 가리키는 프래그먼트 URL (#을 이용)
  * 미디어 파일 일부를 가리키는 미디어 프래그먼트
  * tel: URL을 사용하는 전화번호
  * mailto: URL을 사용하는 이메일 주소
  * 웹사이트는 [`Navigator.registerProtocolHandler()`](https://developer.mozilla.org/ko/docs/Web/API/Navigator/registerProtocolHandler)를 통해 지원 가능
* hreflang
* 링크 URL의 인간 언어에 대한 힌트
* ping
  * 하나의 스페이스로 구분하는 URL 목록
  * 브라우저가 URL 각각에 POST 요청을 전송
* referrerpolicy
  * URL을 가져올 때 사용할 리퍼러
* rel
  * URL을 가져올 때 사용할 리퍼러
* target
  * 링크한 URL을 표시할 위치
  * 가능한 값은 브라우징 맥락. 탭, 창 `<iframe>`의 이름이나 키워드
  * \_self: 응답을 현재 브라우징 맥락에 표시. 기본값
  * \_blank: 응답을 새로운 브라우징 맥락에 표시. 보통 새 탭
  * \_parent: 응답을 현재 브라우징 맥락의 부모에 표시. 부모가 없으면 \_self와 동일하게 동작
  * \_top: 응답을 최상단 브라우징 맥락에 표시. 부모가 없으면 \_self와 동일하게 동작
* type
  * 링크 URL의 MIME type에 대한 힌트



* target 사용시 `rel="noreferrer"`을 추가해 `window.opener`API의 악의적인 사용을 방지

* 최근 브라우저는 `target="_blank"` 지정시 임의로 `rel="noopener"` 설정과 동일한 보호 수준 적용

* href 태그에서 페이지 새로고침을 막고 `click`이벤트 처리기를 이용해 가짜 버튼 만들지 말자 대신 `<button>`을 사용

* 링크를 클릭했을 때 어떤 일이 발생하는지( 새 탭에서 열리거나 다른 파일이 열리는 등)를 명시적으로 표시

* ```html
  <a target="_blank" href="https://ko.wikipedia.org">
    위키백과 (새 탭에서 열림)
  </a>
  ```



### `<em>`: 글 강조

텍스트의 강세를 표현하며, 중첩할수록 더 큰 강세를 표현할 수있다.

```html
<p>Get out of bed <em>now</em>!</p>
```



* `<em>`은 주로 기울임 꼴로 표현되지만, 단순히 기울임 꼴 꾸밈이 필요하다면 css의 `font-style`이나 `<i>` 요소를 사용해야 한다.
* 저작물의 제목은 `<cite>`요소로, 학명이나 과학 관련 이름 및 다른 언어의 단어등에는 `<i>` 요소를 사용
* 주변보다 훨씬 중요한 조 텍스트에는 `<strong>`요소를 사용해 강조

`<i>`와 `<em>`

* 두 요소는 시각적 표현은 동일
* `<em>`은 콘텐츠를 강조, `<i>`는 외국어, 등장인물 생각 등 일반적인 산문에서 벗어난 경우 사용

```html
명시적이나 암시적인 대조에서 사용한 경우
<p>
  과거에 <em>block-level</em>이라 불렸던
  콘텐츠는 HTML 5부터 <em>flow</em> 콘텐츠라고
  말합니다.
</p>
```



### `<strong>`: 중요한 글

중대하거나 긴급한 컨텐츠 표현

보통 브라우저들은 굵은 글씨로 표현

```
<p>... the most important rule, the rule you can never forget, no matter how much he cries, no matter how much he begs: <strong>never feed him after midnight</strong>.</p>
```



### `<small>`: 덧붙임 글

덧붙이는 글, 저작권, 법률 표기, 주의 사항 등의 추가적인 작은 텍스트 표현

내부에 여러 단락이나 목록을 포함할 수 없고, 짧은 텍스트에만 사용해야 한다

콘텐츠를 한 사이즈 작은 글꼴로 표시

```html
<p>MDN Web Docs is a learning platform for Web technologies and the software that powers the Web.</p>

<hr>

<p><small>The content is licensed under a Creative Commons Attribution-ShareAlike 2.5 Generic License.</small></p>
```



### `<s>`: 부정확한 글

더 이상 정확하지 않거나 사용되지 않는(유효하지 않는) 콘텐츠를 표현

글자에 취소선(가로지르는 가로선)을 그린다.

더이상 관계없거나 정확하지 않은 부분을 표시할 때 사용

- 문서의 편집에서 삽입이나 삭제를 나타내기 위해서는 `<del>`, `<ins>`를 사용해야 한다

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



### `<cite>`: 작품의 출처

저작물에 대한 출처를 표기하기 위해 사용하며, 제목을 반드시 포함한다

```html
<figure>
    <blockquote>
        <p>It was a bright cold day in April, and the clocks were striking thirteen.</p>
    </blockquote>
    <figcaption>First sentence in 
        <cite>
            <a href="http://www.george-orwell.org/1984/0.html">
                Nineteen Eighty-Four
            </a>
        </cite> by George Orwell (Part 1, Chapter 1).
    </figcaption>
</figure>
```



### `<q>`: 인라인 인용구

둘러싼 텍스트가 짧은 인용구인 것을 표현

대부분의 브라우저에서는 앞 뒤에 인용 구두점(따옴표)를 붙여 표현

짧은 인용문에 유용하며, 긴 인용문에서는 `<blockquote>`를 사용

cite는 사용할 경우 유효한 url 문자열이어야 한다

```html
<p>Mozilla 재단의 웹사이트에 따르면,
  <q
  cite="https://www.mozilla.org/en-US/about/history/details/">Firefox 1.0
  은 2004년 처음 공개되어 큰 성공을 거두었습니다.</q>
</p>
```



### `<dfn>`: 정의 인스턴스

현재 맥락이나 문장에서 정의하고 있는 용어의 정의 인스턴스를 나타낸다

용어 정의를 처음 한 번만 하고 이후에 사용되는 용어는 참조를 걸어 같은 용어임을 알릴 수 있다

`<dfn>`에서 가장 가까운 `<p>`, `<dt>`,`<dd>`,`<section>` 조상 요소를 용어 정의로 간주한다.

```html
<p>A <dfn id="def-validator">validator</dfn> is a program that checks for syntax errors in code or documents.</p>
```



* `<dfn>`요소가 title 속성을 가지고 있으면 그 값을 현재 정의중인 용어로 간주
* `<dfn>`은 텍스트 콘텐츠를 가지지만, 완전한 용어가 아닌 준말(`<abbr>`)이나 다른 대체 형태일 수 있다
* `<dfn>`의 유일한 자식이 `<abbr>`이고 이 요소가 title 특성을 가지면 이 값을 현재 용어로 간주
* 모두 아닌 경우 `<dfn>`의 텍스트 콘텐츠를 현재 용어로 간주



### `<abbr>`: 준말 또는 머리글자

문장에서 중심이 되는 준말 또는 머리글자

이 요소에 마우스 hover시 title의 설명이 표시

```html
<p>Using <abbr title="Hypertext Markup Language">HTML</abbr> is fun and easy!</p>
```

속성

* title
  * 준말에 대한 전체 설명 혹은 사람이 읽을 수 있는 형태의 값



* 모든 준말을 `<abbr>`로 표시할 필요는 없다.
* 머리글자를 문서플로우 밖에서 설명할 때 사용 할 수 있다.
* 독자에게 익숙하지 않을 수 있는 준말 사용시 사용할 수 있다.
* 준말임을 명시적으로 나타내야 할 때 사용할 수 있다.
* `<abbr>`를 `<dfn>`과 같이 사용하여 정의와 연결할 수 있다.

CSS:

* IE 등 일부 브라우저는 `<span>`과 같이 동작
* Opera, FireFox 등은 점선 밑줄이 표시
* 또는 영어 소문자를 작은 대문자로 표현
* css 제거 : `font-variant:none`



### `<ruby>, <rp>, <rt>`: 루비 주석

동아시아 문자의 발음을 표기하기 위해 기본 텍스트 옆에(혹은 위에) 작게 표시되는 짧은 텍스트

예를 들면 일본어의 후리가나가 있다

```html
<ruby>
  漢 <rp>(</rp><rt>Kan</rt><rp>)</rp>
  字 <rp>(</rp><rt>ji</rt><rp>)</rp>
</ruby>
<ruby>
明日 <rp>(</rp><rt>Ashita</rt><rp>)</rp>
</ruby>
```



### `<data>`: 기계가 읽을 수 있는 해석본

주어진 콘텐츠를 기계가 읽을 수 있는 해석본(데이터)과 연결

콘텐츠가 시간이나 날짜 관련 정보라면 대신 `<time>`요소를 사용할 수 있다

```html
<p>New Products:</p>
<ul>
    <li><data value="398">Mini Ketchup</data></li>
    <li><data value="399">Jumbo Ketchup</data></li>
    <li><data value="400">Mega Jumbo Ketchup</data></li>
</ul>
```

속성

* value
  * 기계가 읽을 수 있는 형태의 콘텐츠 해석본



### `<time>`: 날짜 또는 시간

시간의 특정 지점이나 구간을 나타낸다.

`datetime` 속성을 지정해 보다 적절하게 검색 결과나 특정 기능을 구현 시 사용한다

`datetime` 속성이 없을 경우 자식 요소에 적절한 날짜 문자열만을 포함해야 하며 다른 자손 요소를 넣을 수 없다

```html
<p>The Cure will be celebrating their 40th anniversary on <time datetime="2018-07-07">July 7</time> in London's Hyde Park.</p>
```



* 복잡한 계산 문제로 인해,그레고리력 도입 이전 시간을 나타낼 때 사용하면 안된다.
* `datetitme`속성에서 적절한 형식을 선택해서 지정해야 하며,
* `datetime`이 없는 경우 어떠한 자식 요소도 있으면 안되며,
* 요소의 텍스트 콘텐츠를 `datetime`속성 값으로 간주

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



### `<code>`: 인라인 코드

짧은 코드 조각을 나타내는 스타일을 이용해 콘텐츠 표시

기본 스타일은 사용자 에이전트의 고정폭 글씨체

* 여러 줄의 코드를 표현하려면 `<code>`요소를 `<pre>`요소로 감싼다
* CSS의 `code`선택자를 이용해 브라우저의 기본 글씨체 변경 가능

```html
<pre><code class="language-javascript">selectAll()</code></pre>
<p>함수 <code class="language-javascript">selectAll()</code>는 입력 필드의 모든 텍스트를 선택하므로,
사용자가 복사 혹은 삭제를 손쉽게 할 수 있습니다.</p>
```



### `<var>`: 변수

수학 표현이나 프로그래밍에서의 변수 이름을 나타낸다.

보통 기울임꼴로 표시

함께 자주 사용하는 요소

* `<code>`, `<kbd>`, `<smap>`

```html
<p>The volume of a box is <var>l</var> × <var>w</var> × <var>h</var>, where <var>l</var> represents the length, <var>w</var> the width and <var>h</var> the height of the box.</p>
```



### `<samp>`: 컴퓨터 출력 예시

다른 프로그램이나 컴퓨터 시스템에서의 출력의 예시를 나타낸다.

```html
<p>I was trying to boot my computer, but I got this hilarious message:</p>

<p><samp>Keyboard not found <br>Press F1 to continue</samp></p>
```



### `<kbd>`: 사용자 입력

키보드 입력, 음성 입력 등 임의의 장치를 사용한 사용자의 입력 표시

관례에 따라 사용자 에이전트의 고정폭 글꼴로 표시

```html
<p>Please press <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>R</kbd> to re-render an MDN page.</p>
```



* `<kbd>`요소를 다른 요소와 조합하여 더 자세한 상황을 표현 가능

* `<kbd>`를 다른 `<kbd>`안에 배치 -> 하나의 입력안의 작은 부분, 실제 타이핑 키를 하나씩 표현

* ```html
  <p>새로운 문서는 키보드 단축키
  <kbd><kbd>Ctrl</kbd>+<kbd>N</kbd></kbd>으로 만들 수 있습니다.</p>
  ```

* `<kbd>`를 `<samp>`안에 배치 -> 시스템이 에코로써 다시 출력한 사용자 입력을 표현

* ```html
  <p>구문 오류가 발생하면, 오류 원인을 찾을 수 있도록
  입력받은 명령을 다시 출력합니다.</p>
  <blockquote>
    <samp><kbd>custom-git ad my-new-file.cpp</kbd></samp>
  </blockquote>
  ```

* `<samp>`를 `<kbd>`안에 배치 -> 화면에 표시된 메뉴 이름, 메뉴 항목, 버튼 이름 등 시스템이 출력한 텍스트를 기반으로 한 입력 표현

* ```html
  <p>새로운 파일을 생성하려면, <kbd>
  <kbd><samp>파일</samp></kbd>⇒<kbd><samp>새 문서</samp></kbd>
  </kbd> 메뉴를 선택하세요.
  
  <p>파일의 이름을 입력한 후, <kbd><samp>확인</samp></kbd>을
  누르는 걸 잊지 마세요.</p>
  ```



### `<sub>`: 아래 첨자

활자 배치를 아래 첨자로 해야 하는 인라인 텍스트 지정

- 첨자는 문자의 관례적 마크업을 위해서만 사용해야 하며, 단순한 꾸밈 용도로 사용해서는 안된다
- 이 요소는 타이포그래피적으로 이유가 있을 경우에만 사용. 각주, 변수, 화학식 등
- 꾸밈을 위안 대안으로 CSS의 `vertical-align: sub`, `vertical-align: -25%` 등이 있다.

```
<p>Almost every developer's favorite molecule is
C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>, also known as "caffeine."</p>
```



### `<sup>`: 위 첨자

활자 배치를 위 첨자로 해야 하는 인라인 텍스트 지정

- 첨자는 문자의 관례적 마크업을 위해서만 사용해야 하며, 단순한 꾸밈 용도로 사용해서는 안된다

```html
<p>The <b>Pythagorean theorem</b> is often expressed as the following equation:</p>
<p><var>a<sup>2</sup></var> + <var>b<sup>2</sup></var> = <var>c<sup>2</sup></var></p>
```



* 이 요소는 타이포그래피적으로 이유가 있을 경우에만 사용. 거듭제곱, 서수 표현 등
* 단순히 작은 글씨를 아래에 쓰기 위해 사용해서는 안된다.
* 이를 경우 대안으로 CSS의 `vertical-align: super`, `vertical-align: 50%` 등이 있다.



### `<i>`: 구분되어야 하는 글

단락, 문장 등에서 주위 텍스트와 구분되어야 할 부분을 나타내며,

주로 기술 용어, 외국어 구절, 등장인물의 생각 등에서 사용될 수 있다.

기울임꼴로 표현된다.

주 언어와 다른 언어로 사용될  경우 `lang` 속성을 사용할 수 있다

```html
<p>라틴어 문구 <i lang="la">Veni, vidi, vici</i>는 음악과 예술, 문학에 자주 등장합니다.</p>
```

* 산문에서 문체가 다른 텍스트에 `<i>`를 적용할 수 있다.
* 단순히 기울임꼴 스타일이 필요하다면 CSS의 `font-style`을 사용
* `<i>`요소에 적합한 텍스트인지 고려
  * `<em>`: 강세 표현
  * `<strong>`: 훨씬 강한 강조 표현
  * `<mark>`: 관련성
  * `<dfn>`: 정의 대상인 용어 표현



### `<b>`: 키워드

텍스트를 굵은 글씨체로 만든다.

* 요약 키워드, 리뷰의 제품명 등, 특별히 중요성은 없지만 굵게 표시할 부분에 `<b>`사용
* `<strong>`요소는 중요한 글에 사용 
* `<em>`요소는 약간의 강조가 필요한 글에 사용 
* `<mark>`요소는 관련성이 있는 글에 사용 
* `<b>`요소는 아무런 의미가 없으므로 다른 요소가 적합하지 않을 때 사용
* 제목은 `<h1>`태그로 표현
* `<b>`요소 대신 CSS의 `font-weight:"bold"` 사용

```html
<p><b>CSS<b/>는 html을 스타일링하는데 사용할 수 있다</p>
```



### `<u>`: 주석

보통 밑줄로 표시

* 철자 오류 강조
* 중국어의 고유명사 표시
* 밑줄만을 위해 사용하거나(대신 css 사용), 책 제목 등을 강조해서는 안된다(대신 cite 사용)

```html
<p>You could use this element to highlight <u>speling</u> mistakes, so the writer can <u>corect</u> them.</p>
<p>맞춤법을 틀리면 <u class="spelling">않돼요</u>.</p>
```



### `<mark>`: 하이라이트

현재 맥락과 연관되어 중요한 부분이나  참조 목적으로 표시되는 텍스트를 나타낸다

```html
<p>Several species of <mark>salamander</mark> inhabit the temperate rainforest of the Pacific Northwest.</p>
```

일반적인 `<mark>`의 사용 방법

* 인용문 등에서 중요한 부분을 형광펜 칠하듯이 강조 표시하는 데 사용
* 문서 컨텐츠에서 사용자의 현재 행동과 관련 있는 부분을 나타낼 때 사용
* `<mark>`연관성을 가진 부분에, `<strong>`은 중요도를 가진 부분에 사용

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



### `<bdi>`: 글 양방향 격리

* 특정 텍스트를 주변 텍스트와 격리하여 텍스트 방향을 다르게 지정할 수 있는 요소
* 왼쪽에서 오른쪽으로 정렬 (LTR) 되는 문자
* 오른쪽에서 왼쪽으로 정렬(RTL) 되는 문자
* 유니코드 양방향 알고리즘을 사용하여 처리
* 브라우저는 텍스트의 언어에 맞는 방향성을 지정
* 아래의 예와 같이 이름을 나타내는 언어가 각기 달라 방향성이 다를 경우 `<bdi>`를 통해 처리

```html
<ul>
 <li><bdi class="name">اَلأَعْشَى</bdi> - 1st place</li>
 <li><bdi class="name">Jerry Cruncher</bdi> - 2nd place</li>
</ul>
```



### `<bdo>`: 글 방향 정의

텍스트 방향을 지정하여 현재 텍스트의 쓰기 방향을 지정

원래 언어의 쓰기 방향와 다른 방향으로 텍스트를 렌더링할 때 사용

속성:

* dir
  * 요소 콘텐츠의 텍스트 쓰기 방향
  * ltr: 텍스트를 왼쪽에서 오른쪽으로 써야 함을 나타냄
  * rtl: 텍스트를 오른쪽에서 왼쪽으로 써야 함을 나타냄

```html
<p>이 단락은 왼쪽부터 오른쪽 방향으로 써질 것입니다.</p>
<p><bdo dir="rtl">이 단락은 오른쪽부터 왼쪽 방향으로 써질 것입니다.</bdo></p>
```





### `<span>`: 인라인 컨테이너

구문 콘텐츠를 위한 인라인 컨테이너.

본질적으로 아무것도 나타내지 않는다.

적절한 의미를 가진 다른 요소가 없을 경우에만 사용해야 한다.

```html
<p><span>Some text</span></p>
```



### `<br>`: 줄 바꿈

텍스트 안에서 줄 바꿈(캐리지 리턴)을 생성.

* 문단 사이의 여백은 `<br>`대신 css의 `margin`속성을 사용한다
* 줄 간격은 margin의 조정이 아닌 css의 `line-height`속성을 사용한다

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



### `<wbr>`: 줄 바꿈 기회

현재 요소의 줄 바꿈 규칙을 무시하고 브라우저가 줄을 바꿀 수 있는 기회를 나타낸다.

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

