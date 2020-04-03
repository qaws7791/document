# CSS

------

- Cascading Style Sheet

- [TOC]

  

- 선택자와 속성으로 구성

```css
selector {
    property: value;
}
```

- 세미클론빠트리면 찾기 힘들다. :sob:
- import하기

```html
<head>
    ...
    <link rel="stylesheet" href="./style.css" />
    ...
</head>
```

- head안에서 작성

```html
<head>
    <style>
        p { color: blue; }
    </style>
</head>
```

- html태그안에서 작성

```html
<p style="color:blue">
     Hello css
</p>
```

- 디자인시안

  https://www.figma.com/file/k6aekBk53MUKUwVqRHsSVx/Bugless-CSS?node-id=1%3A4

- 템플릿파일 

  https://github.com/rohjs/bugless-101/tree/master/css-basic

## box

### boxmodel

- 요소는 content + padding + border까지 이다

- **content**
  - 그냥 내용이다
- **padding**
  - 내용과 테두리사이의 공간이다
- **border**
  - 요소의 가장 바깥 테두리다
- **margin**
  - 테두리밖 공간이다
  - 요소와 요소사이의 간격
- 요소간의 위아래 간격 조정시 margin-top을 쓸지 margin-bottom을 쓸지 일관적으로 하는 것이 헷갈리지 않음
  
- 크기 설정 속기형
  - 순서 위부터 시계방향
  - 4개 top right bottom left 
  - 3개 top (right-botton) bottom
  - 2개 (top-bottom) (right-bottom)

### box-sizing

- default는 `box-sizing: content-box`이다
- 요소의 크기는 width(height) + padding + border 이다
- `box-sizing: border-box`
  - width와 height가  패딩과 border를 포함한 총 크기가 된다
  - width와 height는 (border까지의) 요소의 크기가 되며
  - padding과 border의 크기가 달라져도 요소의 크기는 고정이므로 content의 크기가 유동적으로 달라진다
  

### `display`

`Block`

- width를 지정하지 않으면 부모의 width을 상속
- width를 지정하면 남은 옆 공간은 margin으로 채움
- 그러나 개발도구에서는 그 margin이 숫자로 표기 안됨
- `margin: 0 auto` 는 속기형으로 auto로 만들어진 margin을 좌우가 나누어 갖는다 
- height를 지정하지 않으면 자식 요소들의 height의 합을 자신의 height로 가짐
- WHPBM 사용 가능

`Inline`

- 블록이 영역이라면 인라인은 흐름
- width,height, padding(top,bottom) ,border(top,bottom) ,margin(top,bottom) 사용시 **이상한 결과**를 초래

`Inline-Block`

- 흐름을 따라가면서 영역을 가짐

  

## Float

- 사전적 의미는 "뜨다" 이다.

- 원래는 이미지와 텍스트를 함께 배치하기 위해 만든 속성

- float를 하면 요소는 뜨게 되고 뜨지 않은  다른 요소가 그 자리를 차지할 수 있다

- 부모 요소는 Float된 자식요소를  height계산에  포함시키지 않는다

- Float적용시 display속성이 block로 적용된다.

- 하지만 마진auto가 생기지 않는다

- 가변적으로 컨텐츠 크기만큼만 크기를 가진다. 

- 모든 자식 요소를 float하면 부모 요소는 크기가 0이 되는 것이다

- inline 요소는 float 요소를 피해간다

- 부모가 자식을 못 찾을 때 overflow: hidden을 하면 부모가 자식을 찾는다.

- 또는 부모 요소의 after에 clear 속성 설정

  ```css
  Name::after {
        content: '';
        display: block;
        clear: both;
    }
  ```

  

- 아마도 overflow가 넘치는 부분에 대한 처리 속성이기 때문에 넘치는 부분을 찾기 위해 width, height를 찾는 것 같다.

- **블록 서식 상황**은 float 속성은 동일한 서식 상황에 속한 항목에만 적용되므로 자식을 찾기 위해서는 이 서식 상황을 합쳐야 한다.  이를 위해 overflow 보다는 명시적으로 `display: flow-root`을 사용하여 블록 서식 상황을 생성하여야 한다

- > <div>에 요소상에 display: flow-root을 적용하면, 컨테이너 내부의 모든 요소는 해당 컨테이너의 블록 서식 상황에 참여하게 된다

- https://developer.mozilla.org/ko/docs/Web/CSS/CSS_Flow_Layout/Intro_to_formatting_contexts

## Position

- top, right , left, bottom으로 위치 설정

### static

- 디폴트 값

### relative

- float처럼 뜬다

### absolute

- float처럼 뜬다
- 집나간 자식이 된다. 부모 요소가 찾지 못함
- display가 block으로 바뀐다. 길막은 하지 못한다(auto마진x)
- 조상 요소중 position:static이 아닌 요소를 기준 위치를 잡음 
- relative로 잡는 게 좋다
- 가운데 배치

```css
position: absolute;
top: 50%;
transform: translateY(-50%); // translate는 자신 기준
```



### fixed

- float처럼 뜬다
- viewport(화면) 를 기준으로 잡음 

### z-index

- z축의 순서 
- `z-index: number` 숫자가 높을수록 위에 나옴

`text-align`

- 블록 요소안의 인라인, 인라인-블록 요소를 정렬

## Flexbox

- 정렬하고자 하는 요소들의 부모 `display:flex` `display:inline-flex`

- `flex-direction: row` 가로방향 `flex-direction: column` 세로방향

- Main axis: flex-direction방향 , Cross axis: main axis의 수직방향

- `flex-wrap:nowrap` 자식의 사이즈를 줄여서라도 한 줄로 정렬

- `flex-wrap:wrap` 공간이 없으면 여러 줄로 정렬가능

- `justify-content:` main axis방향으로 요소 정렬 방법

- `align-items:` 각각의 cross axis 방향으로 요소 정렬 방법

- 여러 줄이면 cross axis가 여러 개가 되기 때문에 요소들간의 위아래 간격이 생김

- `align-content:` 하나의 큰  cross axis 방향으로 요소 정렬방법 justify와 비슷 

- `order: Number` 요소의 정렬 우선 순위를 결정. 숫자 오름차순으로 정렬됨

  |        | justify-content | align-items | align-content |
  | ------ | --------------- | ----------- | ------------- |
  | row    | 좌->우          | 위->아래    | 위->아래      |
  | column | 위->아래        | 좌->우      | 좌->우        |

  

## Media Query

- 반응형 웹만들기

- <meta name="viewport" content="width=device-width"/>

```css
@media screen and (min-width:768px) {
    
}
```

## Typography

- px 절대 단위 
- em rem 상대 단위 
- em은 폰트 사이즈의 비율 1em => font-size
- rem: root em     html에 적용된 폰트 사이즈 비율
- 1rem => html font-size

### line-height

- em 주로 사용 폰트사이즈에 상대적으로 하는 것이 편함 
- 단위 생략하면 em으로 받아들임
- 글자는 줄간격의 가운데 배치
- 마치 글자의 위아래에 마진이 생기는 느낌

### letter-spacing

- 글자사이의 간격
- px와 em을 사용하나 em이 더 많이 쓰임
- 

### font-family

- 서체설정

```css
.text {
    font-family: "font_1", "font_2", sans-serif ;
    //font_1을 사용하고 없으면 font_2를 사용, 없으면 sans-serif 아무거나 사용
}
```

### font-weight

- 폰트 굵기
- 100~900
- 400 regular 700 bold

### color

- 텍스트 색상 설정
-  hex, rgb ,rgba