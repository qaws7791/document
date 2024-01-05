# Express

------

# Express 시작하기

## 라이브러리

- `nodemon`: 디렉토리 파일 변경 시 nodejs 서버 자동 재시작 해주는 라이브러리
- `jest`: 테스팅 라이브러리
- `portfinder`: 포트 검색용 라이브러리
- `puppeteer` 헤드리스 크롬 제어를 위한 nodejs 라이브러리
- `eslint` : 코드에서 패턴을 검사하고 잘못된 부분을 보고하는 라이브러리
- `express-validator`: 유효성 검사기

### 트래비스 CI

- 호스팅 지속적 통합 서비스
- github에서 무료로 사용 가능

## Eslint 

##  

```javascript
//.eslintrc.js
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true, // jest 사용 명시
    node: true, // node 사용 명시
  },
  globals: {
    __dirname: true, // nodejs의 전역 변수 사용 
  },
  extends: "eslint:recommended",
  parserOptions: {
    ecmaVersion: "latest",
  },
  rules: {},
};

```



# HTTP

```
http://localhost:3000/about?id=1#title
```

1. `http -> 전송 프로토콜(Protocol)을 나타내는 스키마(Scheme)
2. `localhost` -> 호스트 IP 또는 인터넷 도메인(Host domain)
3. `:3000` -> 포트(Port)
4. `/about` -> 자원 경로(Path to resource)
5. `?id=1` -> 쿼리 스트링(Query string)
6. `#title` -> 앵커(Anchor) 또는 해시(Hash): 서버로 전송X



# Internet Media Type

- HTTP 헤더에서 `Content-Type` 을 사용하여 지정
- 타입 / 서브 타입 / 옵션을 가짐

## Content-Type

1. `media-type`
2. `charset`
3. `boundary`

## 

# Request Body

- `GET`요청에는 없지만 일반적으로 `POST`요청 시 사용

## 자주 사용되는 형식

### application/x-www-form-urlencoded

- `Content-Type`을 설정하지 않은 경우 데이터 전송 시 기본 값
- &으로 구분되는 키-값 튜플 쌍
- 영문자 또는 숫자가 아닌 값은 URL로 인코딩 된다.

### multipart/form-data

- 폼 데이터(FormData)를 전송하는데 사용

### text/plain

- 단순 문자열

`application/json`

- json을 통한 통신



# Request Object

## req.params

- 지정된 경로에 매핑된 매개변수의 값을 가진 객체

```javascript
// get /about/4234
app.get("/about/:id", (req,res) => {
    console.log(req.params)
});
```

```
{ id: '4234' }
```



## req.query

```javascript
// get /about?page=1
app.get("/about", (req,res) => {
    console.log(req.query)
});
```

```
{ page : '1' }
```



## req.body

- 요청에 대한 본문으로 POST 요청 시에 사용

```javascript
app.use(express.json()); // parse json
app.use(express.urlencoded({ extended: false })); // parse application/x-www-form-urlencoded
```



## req.route

- 현재 일치하는 라우트에 관한 정보



## req.cookies/req.signedCookies

- 클라이언트에서 전송한 쿠키 값 저장한 객체



## req.headers

- 클라이언트에서 전송한 요청 헤더



## req.accepts

- 클라이언트가 주어진 타입을 받아들이는지 확인하는 편의 메서드

## 

## req.ip

- 클라이언트의 IP 주소

## 

## req.path

- 요청 url중 경로 (path) 값



## req.hostname

- 클라이언트에서 전송한 호스트 이름을 반환하는 편의 메서드
- 위조 가능성이 있어 보안 목적 사용 X



## req.xhr

- 요청이 ajax 요청인지 확인하고 boolean값을 반환하는 편의 프로퍼티



## req.protocol

- 요청에 사용된 프로토콜
- http 요청은 http 또는 https

## 

## req.secure

- 암호화된 연결이면 true를 반환하는 편의 프로퍼티 (req.protocol === 'https')



## req.url / req.originalUrl

- 경로와 쿼리 스트링을 반환



# Response Object

nodejs `http.ServerResponse`의 인스턴스



## res.status

- http 상태 코드 설정. 기본 값은 200(정상 응답)



## res.set(name, value)

- 응답 헤더를 설정



## res.cookie(name, value, [options])

- 클라이언트에 저장될 쿠키를 설정
- 미들 웨어 필요



## res.clearCookie(name, [options])

- 클라이언트에 저장될 쿠키를 삭제



## res.redirect([status], url)

- 브라우저를 리디렉트. 기본값은 302(발견됨)
- 페이지가 영구이동 되었을 때는 301(영구 이동됨)을 사용



## res.send(body)

- 클라이언트에 응답을 전송. 기본 콘텐츠 타입은 `text/html`
- json을 보낼 때는 res.json을 사용하는 것을 권장



## res.json(json)

- 클라이언트에 JSON을 전송



## res.jsonp(json)

- 클라이언트에 JSONP을 전송



## res.end()

- 응답을 끝내고 연결을 끊는다.



### res.type(type)

- `Content-Type` 헤더를 설정하는 편의 메서드
- `res.set('Content-Type', type)`과 동등
- `/`없는 type에 대해 자동으로 미디어 타입을 설정
- 잘 사용하지 않음



## res.format(object)

- Accept 요청 헤더에 따라 콘텐츠를 다르게 전송하는 콘텐츠 협상을 수행

### `Accept` HTTP Header

- `Accept` 헤더는 MIME 타입으로 표현되고, 클라이언트가 이해가능한(Acceptable) 콘텐츠 타입을 알려준다.
- `Accept` 헤더 필드가 없는 경우에는 클라이언트가 모든 미디어 타입을 수락한다고 가정한다.
- `Accept` 헤더 필드가 있지만 허용가능한 타입의 응답이 없는 경우 `406(Not Acceptable)` 에러를 응답해야 한다
- `;q=1.0` 매개변수를 사용하여 타입의 상대적 품질 계수를  0 ~ 1 사이 값으로 지정할 수 있다.
  1. `text/html`을 지원하면 전송
  2. 그렇지 않으면 `application/xml`을 지원하면 전송
  3. 그렇지 않으면 `*/*`를 지원하면 전송
- 값은 `q`값을 가지는 유형이 둘 이상일 경우 더 구체적인 타입을 선택한다.

```javascript
Accept : text/html, application/xml;q=0.9, */*;q=0.8
```

- 사용 가능한 값
  1. `<MIME_type>/<MIME_subtype>` : 서브 타입이 명시된 단일 MIME 타입
  2. `<MIME_type>/*` : 서브 타입을 갖지않고 모든 서브 타입과 일치가능한 MIME 타입
  3. `*/*`: 모든 MIME 타입

```javascript
res.format({
  'text/plain': function () {
    res.send('hey')
  },

  'text/html': function () {
    res.send('<p>hey</p>')
  },

  'application/json': function () {
    res.send({ message: 'hey' })
  },

  default: function () {
    // log the request and respond with 406
    res.status(406).send('Not Acceptable')
  }
})
```



## res.attachment([filename])

- `Content-Disposition` HTTP 응답 헤더를 `attachment`로 설정
- `file name`을 지정하면 파일 이름과 확장자를 통해 `Content-Disposition`과 `Content-Type`을 자동으로 지정
- 이렇게 헤더를 지정하면 브라우저는 콘텐츠를 렌더링하지 않고 파일 형태로 내려받는다.
- 헤더만 설정하고 파일 데이터는 따로 전송해야 한다.

```javascript
res.attachment()
// Content-Disposition: attachment

res.attachment('path/to/logo.png')
// Content-Disposition: attachment; filename="logo.png"
// Content-Type: image/png
```



## res.sendFile(path, [options], [callback])

- `path`로 지정한 파일을 읽고, 파일 이름과 확장자를 통해 `Content-Type`을 설정하고
  콘텐츠를 클라이언트에 전송

```javascript
app.get('/file/:name', function (req, res, next) {
  var options = {
    root: path.join(__dirname, 'public'),
    dotfiles: 'deny',
    headers: {
      'x-timestamp': Date.now(),
      'x-sent': true
    }
  }

  var fileName = req.params.name
  res.sendFile(fileName, options, function (err) {
    if (err) {
      next(err)
    } else {
      console.log('Sent:', fileName)
    }
  })
})
```



## res.render(view[, locals] [, callback])

- `view`를 렌더링하고 렌더링된 HTML 문자열을 클라이언트에 전송
- 기본 응답 코드는 200
- `locals`: view에 대한 지역 변수를 정의하여 넘긴다
- `callback`: 오류(err)와 렌더링된 문자열(html)을 반환하고 에러가 발생하면 호출된다.

```javascript
// send the rendered view to the client
res.render('index')

// if a callback is specified, the rendered HTML string has to be sent explicitly
res.render('index', function (err, html) {
  res.send(html)
})

// pass a local variable to the view
res.render('user', { name: 'Tobi' }, function (err, html) {
  // ...
})
```



------



## Start Code

```javascript
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

```



### 404 Page

```javascript
app.use((req, res) => {
  res.type('text/plain')
  res.status(404)
  res.send('404 - Not Found')
})
```





## HTTP Method

지정된 경로로 지정된 메서드 요청이 들어오면 콜백 함수를 실행하고 res를 반환

```javascript
app.METHOD(path, callback [, callback ...])
```

사용 가능한 메서드 목록

- `checkout`
- `copy`
- `delete`
- `get`
- `head`
- `lock`
- `merge`
- `mkactivity`
- `mkcol`
- `move`
- `m-search`
- `notify`
- `options`
- `patch`
- `post`
- `purge`
- `put`
- `report`
- `search`
- `subscribe`
- `trace`
- `unlock`
- `unsubscribe`

### GET

```javascript
app.get('/', (req, res) => {
  res.send('Hello World!')
})
```

### POST

```javascript
app.post('/', (req, res) => {
  res.send('Got a POST request')
})
```

### PUT

```javascript
app.put('/user', (req, res) => {
  res.send('Got a PUT request at /user')
})
```

### DELETE

```javascript
app.delete('/user', (req, res) => {
  res.send('Got a DELETE request at /user')
})
```



## res.send([body])

> nodejs의 res.end()

http 응답을 보내기

`Buffer` , `String` , `Object`, `Boolean` , `Array`

헤더를 지정하지 않으면 매개변수 값에 따라 자동으로 지정

- 매개변수가 `Buffer`일 때 -> `application/octet-stream`
- 매개변수가 `String`일 때 -> `text/html`
- 매개변수가 `Array` 또는 `Object`일 때 -> JSON



### res.set(field [, value])

> nodejs의 res.writeHead

http 응답에 대한 헤더 설정, 여러 값을 지정해야 할 경우 객체 사용

```javascript
res.set('Content-Type', 'text/plain')

res.set({
  'Content-Type': 'text/plain',
  'Content-Length': '123',
  ETag: '12345'
})
```



### res.status(code)

> nodejs의 response.statusCode

http 응답에 대한 상태 코드 설정

### 

### express.static(root, [options])

express에 내장된 미들웨어 기능으로 정적 파일을 제공

일반적으로 프로젝트 폴더 내의 `public`폴더를 생성하여 사용

```javascript
app.use(express.static('public'))
```

`/public/img/logo.jpg` -> `/img/logo.jpg`로 접근



# Multer

- 오직 텍스트 데이터만 가진 form

```javascript
const multer  = require('multer')
const upload = multer()

app.post('/profile', upload.none(), function (req, res, next) {
  // req.body contains the text fields
})
```



# Handlebars

## 기본 디렉토리 구조

```
.
├── app.js
└── views
    ├── home.handlebars
    └── layouts
        └── main.handlebars
```

```javascript
const engine = require('express-handlebars').engine;

app.engine('handlebars', engine()); 
// app.engine('handlebars', engine({ defaultLayout: 'main' }));와 동일한 기본값
app.set('view engine', 'handlebars');
// pp.set('views', './views'); 기본값
```



## Main 레이아웃

```handlebars
<!-- /views/layouts/main.handlebars -->
<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>
  {{#if pageTitle}}
  {{pageTitle}}
  {{else}}
  express page
  {{/if}}
  </title>
</head>
<body>
  <a href="/"><h2>Express Site</h2></a>
  {{{body}}}
</body>
</html>
```



## 렌더링하기



```javascript
app.get('/', (req, res) => res.render('home'))
app.get('/about', (req, res) => res.render('about', { name: 'alyssa howell' }))
```

```javascript
//레이아웃 없는 페이지 만들기 -> { layout: null }
exports.serverError = (err, req, res, next) =>
  res.render('500', { layout: null });
```



## 섹션

- 현재 레이아웃은 body태그에 들어 있다
- 하지만 head 태그 안에 무언가를 넣거나 스크립트를 동작시켜야할 때도 있다. 

```javascript
app.engine(
  'handlebars',
  engine({
    helpers: {
      section: function (name, options) {
        if (!this._sections) this._sections = {};
        this._sections[name] = options.fn(this);
        return null;
      },
    },
  })
);
```

```handlebars
{{#section 'head'}}
...
{{/section}}
{{#section 'scripts'}}
...
{{/section}}
```



## HTML 이스케이프

- 

```handlebars
{{{htmlCode}}}
```



## 주석

```
{{! 서버에서만 보이는 주석}}
<!-- 클라이언트에서도 보이는 주석 -->
```



## 반복문

- 반복문 안에서는 컨텍스트가 변경된다.
- `../`: 상위 컨텍스트로 변경

```
{
	page: 1,
	users: [
        {name: 'foo', age: 20},
        {name: 'bar', age: 32},
	],
	links: ['naver','daum','google']
}
```

```handlebars
<ul>
    {{#each users}}
    <li>
    	{{name}}({{age}}) - {{../page}}
    </li>
    {{/each}}
</ul>
```

- 문자열 배열에서 문자열 그대로 가져오기

```handlebars
{{#each links}}
<a href='#'>{{.}}</a>
{{/each}}
```



## 파셜

- 기본 경로 : `/views/partials/file.handlebars`
- 사용법

```handlebars
{{> weather}}
```

