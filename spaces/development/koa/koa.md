# Koa

------

- Express 개발 팀이 만든 웹 프레임워크
- 미들웨어 기능만 갖춤 -> 나머지는 라이브러리 적용, 가벼움
- async/await 문법 지원

[TOC]



## 기본 사용법

### 서버 띄우기

```javascript
const Koa = require('koa');


const app = new Koa();

app.use((ctx,next) => {
    ctx.body = 'hello world';
});

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
```

- 미들웨어의 배열로 구성
- app.use 는 미들웨어 함수를 애플리케이션에 등록
- ctx는 Context의 줄임말로 웹 요청과 응답에 관한 정보 가짐
- next는 현재 처리 중인 미들웨어의 다음 미들웨어를 호출하는 함수

- http://localhost:4000/?authorized=1일때만 next() 실행

```javascript
app.use((ctx,next) => {
    console.log(ctx.url);
    console.log(1);
    if(ctx.query.authorized !== '1') {//?authorized=1
        ctx.state = 401;
        return;
    }
    next();
});
```

### Promise

- next 함수를 호출하면 Promise 반환
- 이 Promise는 다음 미들웨어가 끝나야 완료됨
- '다음 미들웨어함수'가 완료된 후 END 출력하

```javascript
next().then(() => {
        console.log('END');
    });
```

### async/await 사용

- 위와 동일하게 async/await를 사용해 다음 미들웨가 끝난 후 END 출력

```javascript
app.use(async (ctx,next) => {
    await next();
    console.log('END');
});
```

### nodemon

- 서버코드 변경시 자동 서버 재시작

- `npm install --save-dev nodemon`

- `package.json`에서 script 설정

- ```json
  //package.json
  ...
  "scripts": {
    "start": "node src",
    "start:dev": "nodemon --watch src/ src/index.js"
   }
  ...
  ```

- npm run start:dev `

- ` yarn start:dev`

```
[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): src\**\*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
Listening to port 4000
```

## koa-router

### 기본사용법

```javascript
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

//라우터 설정
router.get('/', ctx => {
    ctx.body = 'Home';
});

router.get('/about', ctx => {
    ctx.body = 'About';
});

//라우터 적용
app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
```

- router.get()의 첫번째 파라미터는 라우트의 경로를, 두번째 파라미터는 해당 라우트에 적용할 미들웨어 함수를 넣음
- get은 HTTP 메서드를 의미하며 다른 메서드로는 post,put, delete 등

### 파라미터와 쿼리

- 파라미터 `/:name`  => `/10`
- 파라미터가 있을 수도 없을 수도 `/:name?`
- 쿼리 `/?id=10`
- 일반적으로 파라미터는 카테고리나 고유id 혹은 이름 등 특정 데이터 조회
- 쿼리는 옵션에 관한 정보 

### REST API

- DB와  클라이언트간 처리
- HTTP 메서드

| 메서드 | 설명                  |
| ------ | --------------------- |
| GET    | 데이터 조희           |
| POST   | 데이터 등록, 인증     |
| DELETE | 데이터 삭제           |
| PUT    | 데이터 교체           |
| PATCH  | 데이터 특정 필드 수정 |

### 라우트 모듈화

- 모듈에서

``` javascript
module.exports = api; //보통 코드 맨밑에 작성
```

- 불러올 모듈에서

```javascript
const api = require('./api');

router.use('/api', api.routes());
app.use(router.routes()).use(router.allowedMethods());
```

### postman

- api test platform
- https://www.postman.com/

### 컨트롤러 파일

- 컨트롤러란 라우트 처리 함수만 모아 놓은 파일
- 모듈작성

```javascript
// module/index.js
exports.methodName_1 = ctx => {
    ctx.body = "Hello One";
};
exports.methodName_2 = ctx => {
    ctx.body = "Hello Two";
};
...
```

- 모듈 사용

```javascript
// src/index.js
const Module = require('./module');
Module.methodName_1();
Module.methodName_2();
```

- patch는 기존 내용 유지 => 특정 필드만 교체 가능
- put은 내용 완전 교체 => 특정 필드만 넣을 시  다른 필드 사라짐
- put으로 데이터 교체시 모든 필드 검증 할 것