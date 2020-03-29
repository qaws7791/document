

------

- Express 개발 팀이 만든 웹 프레임워크
- 미들웨어 기능만 갖춤 -> 나머지는 라이브러리 적용, 가벼움
- async/await 문법 지원



## 기본 사용법

- 서버 띄우기

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

- next 함수를 호출하면 Promise 반환
- 이 Promise는 다음 미들웨어가 끝나야 완료됨
- 다음 미들웨어가 끝난 후 END 출력

```javascript
next().then(() => {
        console.log('END');
    });
```

- async/await 사용

```javascript
app.use(async (ctx,next) => {
    await next();
    console.log('END');
});
```

- nodemon: 서버코드 변경시 자동 서버 재시작
- npm run start:dev or yarn start:dev

```
[nodemon] 2.0.2
[nodemon] to restart at any time, enter `rs`
[nodemon] watching dir(s): src\**\*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node src/index.js`
Listening to port 4000
```

## koa-router

- 기본사용법

```javascript
const Koa = require('koa');
const Router = require('koa-router');

const app = new Koa();
const router = new Router();

router.get('/', ctx => {
    ctx.body = 'Home';
});

router.get('/about', ctx => {
    ctx.body = 'About';
});

app.use(router.routes()).use(router.allowedMethods());

app.listen(4000, () => {
    console.log('Listening to port 4000');
});
```

- router.get()의 첫번째 파라미터는 라우트의 경로를, 두번째 파라미터는 해당 라우트에 적용할 미들웨어 함수를 넣음
- get은 HTTP 메서드를 의미하며 다른 메서드로는 post,put, delete 등