# 🎨 CSS

## 개요

***

* Cascading Style Sheet
* \[TOC]
* 선택자와 속성으로 구성

```css
selector {
    property: value;
}
```

* 세미클론빠트리면 찾기 힘들다. :sob:
* import하기

```html
<head>
    ...
    <link rel="stylesheet" href="./style.css" />
    ...
</head>
```

* head안에서 작성

```html
<head>
    <style>
        p { color: blue; }
    </style>
</head>
```

* html태그안에서 작성

```html
<p style="color:blue">
     Hello css
</p>
```

*   디자인시안

    https://www.figma.com/file/k6aekBk53MUKUwVqRHsSVx/Bugless-CSS?node-id=1%3A4
*   템플릿파일

    https://github.com/rohjs/bugless-101/tree/master/css-basic

## box

### boxmodel

* 요소는 content + padding + border까지 이다
* **content**
  * 그냥 내용이다
* **padding**
  * 내용과 테두리사이의 공간이다
* **border**
  * 요소의 가장 바깥 테두리다
* **margin**
  * 테두리밖 공간이다
  * 요소와 요소사이의 간격
  * 요소 중앙 정렬 `margin: auto;`
* 요소간의 위아래 간격 조정시 margin-top을 쓸지 margin-bottom을 쓸지 일관적으로 하는 것이 헷갈리지 않음
* 크기 설정 속기형
  * 순서 위부터 시계방향
  * 4개 top right bottom left
  * 3개 top (right-botton) bottom
  * 2개 (top-bottom) (right-bottom)

### box-sizing

* default는 `box-sizing: content-box`이다
* 요소의 크기는 width(height) + padding + border 이다
* `box-sizing: border-box`
  * width와 height가 패딩과 border를 포함한 총 크기가 된다
  * width와 height는 (border까지의) 요소의 크기가 되며
  * padding과 border의 크기가 달라져도 요소의 크기는 고정이므로 content의 크기가 유동적으로 달라진다



## display

`Block`

* width를 지정하지 않으면 부모의 width을 상속
* width를 지정하면 남은 옆 공간은 margin으로 채움
* 그러나 개발도구에서는 그 margin이 숫자로 표기 안됨
* `margin: 0 auto` 는 속기형으로 auto로 만들어진 margin을 좌우가 나누어 갖는다
* height를 지정하지 않으면 자식 요소들의 height의 합을 자신의 height로 가짐
* WHPBM 사용 가능

`Inline`

* 블록이 영역이라면 인라인은 흐름
* width,height, padding(top,bottom) ,border(top,bottom) ,margin(top,bottom) 사용시 **이상한 결과**를 초래

`Inline-Block`

* 흐름을 따라가면서 영역을 가짐

`none`: 요소를 없애는거나 마찬가지. 요소가 차지하던 위치가 사라짐.



## Float

* 사전적 의미는 "뜨다" 이다.
* 원래는 이미지와 텍스트를 함께 배치하기 위해 만든 속성
* float를 하면 요소는 뜨게 되고 뜨지 않은 다른 요소가 그 자리를 차지할 수 있다
* 부모 요소는 Float된 자식요소를 height계산에 포함시키지 않는다
* Float적용시 display속성이 block로 적용된다.
* 하지만 마진auto가 생기지 않는다
* 가변적으로 컨텐츠 크기만큼만 크기를 가진다.
* 모든 자식 요소를 float하면 부모 요소는 크기가 0이 되는 것이다
* inline 요소는 float 요소를 피해간다
* 부모가 자식을 못 찾을 때 overflow: hidden을 하면 부모가 자식을 찾는다.
*   또는 부모 요소의 after에 clear 속성 설정

    ```css
    Name::after {
          content: '';
          display: block;
          clear: both;
      }
    ```
* 아마도 overflow가 넘치는 부분에 대한 처리 속성이기 때문에 넘치는 부분을 찾기 위해 width, height를 찾는 것 같다.
* **블록 서식 상황**은 float 속성은 동일한 서식 상황에 속한 항목에만 적용되므로 자식을 찾기 위해서는 이 서식 상황을 합쳐야 한다. 이를 위해 overflow 보다는 명시적으로 `display: flow-root`을 사용하여 블록 서식 상황을 생성하여야 한다
* > 에 요소상에 display: flow-root을 적용하면, 컨테이너 내부의 모든 요소는 해당 컨테이너의 블록 서식 상황에 참여하게 된다
* https://developer.mozilla.org/ko/docs/Web/CSS/CSS\_Flow\_Layout/Intro\_to\_formatting\_contexts



## Position

* top, right , left, bottom으로 위치 설정

#### `static`

* 디폴트 값

#### `relative`

* float처럼 뜬다

#### `absolute`

* float처럼 뜬다
* 집나간 자식이 된다. 부모 요소가 찾지 못함
* display가 block으로 바뀐다. 길막은 하지 못한다(auto마진x)
* 조상 요소중 position:static이 아닌 요소를 기준 위치를 잡음
* relative로 잡는 게 좋다
* 가운데 배치

```css
position: absolute;
top: 50%;
transform: translateY(-50%); // translate는 자신 기준
```

#### `fixed`

* float처럼 뜬다
* viewport(화면) 를 기준으로 잡음



## z-index

* z축의 순서
* `z-index: number` 숫자가 높을수록 위에 나옴
* 기본값은 auto, 0처럼 취급



## text-align

* 블록 요소안의 인라인, 인라인-블록 요소를 정렬



## Flexbox

* 정렬하고자 하는 요소들의 부모 `display:flex` `display:inline-flex`
* `flex-direction: row` 가로방향 `flex-direction: column` 세로방향
* Main axis: flex-direction방향 , Cross axis: main axis의 수직방향
* `flex-wrap:nowrap` 자식의 사이즈를 줄여서라도 한 줄로 정렬
* `flex-wrap:wrap` 공간이 없으면 여러 줄로 정렬가능
* `justify-content:` main axis방향으로 요소 정렬 방법
* `align-items:` 각각의 cross axis 방향으로 요소 정렬 방법
* 여러 줄이면 cross axis가 여러 개가 되기 때문에 요소들간의 위아래 간격이 생김
* `align-content:` 하나의 큰 cross axis 방향으로 요소 정렬방법 justify와 비슷
*   `order: Number` 요소의 정렬 우선 순위를 결정. 숫자 오름차순으로 정렬됨

    |        | justify-content | align-items | align-content |
    | ------ | --------------- | ----------- | ------------- |
    | row    | 좌->우            | 위->아래       | 위->아래         |
    | column | 위->아래           | 좌->우        | 좌->우          |

## Media Query

* 반응형 웹만들기
*

```css
@media screen and (min-width:768px) {
    
}
```



## Typography

* px 절대 단위
* em rem 상대 단위
* em은 폰트 사이즈의 비율 1em => font-size
* rem: root em html에 적용된 폰트 사이즈 비율
* 1rem => html font-size

#### `line-height`

* em 주로 사용 폰트사이즈에 상대적으로 하는 것이 편함
* 단위 생략하면 em으로 받아들임
* 글자는 줄간격의 가운데 배치
* 마치 글자의 위아래에 마진이 생기는 느낌

#### `letter-spacing`

* 글자사이의 간격
* px와 em을 사용하나 em이 더 많이 쓰임
*

#### `font-family`

* 서체설정

```css
.text {
    font-family: "font_1", "font_2", sans-serif ;
    //font_1을 사용하고 없으면 font_2를 사용, 없으면 sans-serif 아무거나 사용
}
```

#### `font-weight`

* 폰트 굵기
* 100\~900
* 400 regular 700 bold

#### `color`

* 텍스트 색상 설정
* hex, rgb ,rgba

#### `text-align`

* 글자 정렬

#### `text-indent`

* 들여쓰기 . 마이너스 값도 가능

#### `text-transform`

* 알파벳 소문자 대문자 관련 속성
* capitalize 앞자리 대문자
* uppercase 모두 대문자
* lowercase 모두 소문자

#### `text-decoration`

* underline 밑줄
* line-through 가운데 줄
* overline 위 줄
* a 태그 underline을 없애기 위해 `text-decoration:none`

#### font-style

* normal : 기본값
* italic: 기울임
* oblique: 기울임?
* em 태그의 기본값이 italic임



## Webfont

* google이 최고임
* https://fonts.google.com/
* 직접 사용하기

```css
@font-face {
  font-family: 'MyWebFont';
  src: url('webfont.eot'); /* IE9 Compat Modes */
  src: url('webfont.eot?#iefix') format('embedded-opentype'), /* IE6-IE8 */
       url('webfont.woff2') format('woff2'), /* Super Modern Browsers */
       url('webfont.woff') format('woff'), /* Pretty Modern Browsers */
       url('webfont.ttf')  format('truetype'), /* Safari, Android, iOS */
       url('webfont.svg#svgFontName') format('svg'); /* Legacy iOS */
}
```

```css
body {
  font-family: 'MyWebFont', Fallback, sans-serif;
}
```

* head 태그 내부에 임포트

```html
<link rel="stylesheet" href="./fonts.css">
```

* 또는 css 내부에 임포트
* ```css
  @import url("./fonts.css");
  ```



## Background

#### background-color

#### background-image

* 경로는 url() 사용

#### background-repeat

* repeat이 기본값, 반복하기 싫으면 no-repeat사용

#### background-size

* contain: 이미지가 잘리지 않게 모두 넣음 => 빈공간 생김
* cover: 이미지가 잘리더라도 공간을 꽉 채움 => 빈공간 안생김
* width height; 비율 무시가능, auto가능
* custom

background-position

* x축 y축 ;
* 가운데 배치 `background-position: center center;`



## Transition

css속성이 바뀔 때 전환효과를 줌

`transition: property timing timing-function delay;`

여러 속성을 한 번에 지정할 때는 , 로 구분

#### property

* 트랜지션을 적용할 속성

#### timing

* 바뀌는 지속 시간

#### timing-function

* 지속 시간 곡선. 좀 더 동적인 느낌을 줌

#### delay

* 트랜지션 지연



## Animation

animation: animation-name duration

```css
@keyframes name {
 from {
 	/* Rules */
 }
 
 to {
 	/* Rules */
 }
}
```

```css
@keyframes name {
 0% {
 	/* Rules */
 }
 
 100% {
 	/* Rules */
 }
}
```

#### animation-name:

* keyframes에서 선언한 애니메이션 이름
* #### animation-duration:
* 애니메이션이 진행되는 시간

#### animation-timing-function:

* 시간곡선 함수
* #### animation-iteration-count:
* 애니메이션 반복 횟수. infinite 있음

#### animation-direction:

* 방향. reverse=> keyframs가 to -> from으로 반대로 진행
* alternate => 기본값과 reverse가 번갈아 가며 진행



## Transform

공간을 변형시키지만, 일반적인 문서 흐름을 방해하지 않음. 문서의 구조적 위치는 그대로.

`none`이 아닌 값을 지정하면 새로운 [쌓임 맥락](https://developer.mozilla.org/ko/docs/Web/CSS/Understanding\_z-index/The\_stacking\_context)을 생성합니다. 이 경우, [`position`](https://developer.mozilla.org/ko/docs/Web/CSS/position)이 `fixed`거나 `absolute`인 요소의 [컨테이닝 블록](https://developer.mozilla.org/ko/docs/Web/CSS/All\_About\_The\_Containing\_Block)으로서 작용합니다.

`translate` : 위치 이동.

* px, rem % 등 단위 사용. 여기서 %는 자기 요소의 크기를 의미.

```css
translate: none;
/* x,y 동일 */
translate: 100px;
/* x,y 따로 */
translate: 50% 100px;
/* x,y,z 따로 */
translate: 50% 105px 5rem;

```

`rotate` : 회전. 양수 -> 시계방향 . 음수 -> 반시계방향

#### martrix( scaleX, skewX, skewY, scaleY, translateX, translateY)

* scale: 크기 비율
* skew: 기울임
* rotate: 회전
* translate: 위치 이동



## Grid

부모요소 `display: grid`

```css
grid-template-rows: repeat(2,100px); //가로 행
grid-template-columns: repeat(3, 1fr); //세로 열  fr은 비율단위
grid-auto-rows: minmax(100px, auto); // 저절로 생기는 가로행은 최소는 100px,  최대는 컨텐츠사이즈
grid-gap: 10px 20px; // item간의 간격. 속기형 row-gap column-gap.
```

자식요소

```css
.item {
	grid-column: 1/4;
    grid-column: span 2;
}
```

#### bootstrap grid

* container: grid가 적용되는 전체 영역
* columns: 세로 열
* gutter: 열 사이의 빈 공간

```html
<div class="container">
  <div class="row">
    <div class="col-12">
      One of three columns
    </div>
  </div>
</div>
```

`col-` : 576px 미만

`.col-sm-` : 576px 이상

`.col-md-`: 768px 이상

`.col-lg-`: 992px 이상

`.col-xl-`: 1200px 이상

기본 열은 12

gutter는 30px (좌우 15px)



## Overflow

`overflow: (overflow-x) (overflow-y) ;`

`visible` : 상자밖으로 내용이 나갈 수 있음.

`hidden`: 상자 밖의 내용을 숨김, 코드를 사용해 스크롤 가능

`clip` : 상자 밖의 내용을 숨김, 코드를 사용한 스크롤도 불가능

`scroll` : 상자 밖의 내용을 숨김, 콘텐츠가 넘쳐서 잘렸는이 여부를 따지지 않고 항상 스크롤바 노출

`auto` : 사용자 에이전트가 결정. 콘텐츠가 넘치지 않는다면 `visible`와 동일하게 보이나 새로운 블록 서식 문맥은 생성됨. 데스크탑은 콘텐츠가 넘치면 스크롤바를 생성



## 쌓임 맥락(stacking context)

* z축이 가상으로 있다고 생각하고. html요소를 3차원으로 개념화한다.
* `z-index`가 높을수록 z축에서 위에(다른 요소보다 앞에) 위치한다.
* 쌓임맥락이 없는 요소는 부모 요소의 쌓임 맥락을 따라간다.
* 형제요소들끼리 쌓임맥락을 고려
* z-index를 버전 번호라고 생각하면 쉬워진다.
* z-index가 5면 버전이 5, z-index가 4인 요소안의 z-index가 1인 요소는 4.1 인 식으로.
* 그 후에 그냥 버전이 높은 게 위에 가장 앞인 셈이다.



## ETC

css에서 data값 사용

```css
article[data-a=''] {
    
}
```

현재 스크롤값 출력

```javascript
var scrollPosition = window.scrollY || document.documentElement.scrollTop;
console.log(scrollPosition);
```

벡터 이미지에 속성 적용하기

clippath와 path 모두 transform 적용가능

```html
<svg width="350px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350 350" version="1.1" height="350px">
    <clipPath id="text-1" 
    data-0="transform: scale(1);"
    data-1000="transform: scale(2);"
    >
        <path 
        d="m150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.197-2.12-9.973-3.17-14.34-3.17-4.58 0-9.492 1.05-14.746 3.17-5.262 2.13-9.501 3.24-12.742 3.35-4.929 0.21-9.842-1.96-14.746-6.52-3.13-2.73-7.045-7.41-11.735-14.04-5.032-7.08-9.169-15.29-12.41-24.65-3.471-10.11-5.211-19.9-5.211-29.378 0-10.857 2.346-20.221 7.045-28.068 3.693-6.303 8.606-11.275 14.755-14.925s12.793-5.51 19.948-5.629c3.915 0 9.049 1.211 15.429 3.591 6.362 2.388 10.447 3.599 12.238 3.599 1.339 0 5.877-1.416 13.57-4.239 7.275-2.618 13.415-3.702 18.445-3.275 13.63 1.1 23.87 6.473 30.68 16.153-12.19 7.386-18.22 17.731-18.1 31.002 0.11 10.337 3.86 18.939 11.23 25.769 3.34 3.17 7.07 5.62 11.22 7.36-0.9 2.61-1.85 5.11-2.86 7.51zm-31.26-123.01c0 8.1021-2.96 15.667-8.86 22.669-7.12 8.324-15.732 13.134-25.071 12.375-0.119-0.972-0.188-1.995-0.188-3.07 0-7.778 3.386-16.102 9.399-22.908 3.002-3.446 6.82-6.3113 11.45-8.597 4.62-2.2516 8.99-3.4968 13.1-3.71 0.12 1.0831 0.17 2.1663 0.17 3.2409z" fill="#000"/>
    </clipPath>    
</svg>
```

### definition list

* `dl`태그 : dt와 dd를 감싼다
* `dt`: definition title
*   `dd`: definition data

    ```html
    <dl>
        <dt>title</dt>
        <dd>data</dd>
    </dl>
    ```
