# MongoDB

------

[TOC]

## 소개

- 문서 지향적 NoSQL DataBase
- 유동적인 스키마
- ACID 특성
- **원자성**(Atomicity), **일관성**(Consistency), **고립성**(Isolation), **지속성**(Durability)

### 문서

- RDBMS의 레코드와 비슷하다
- 문서의 데이터는 한 개 이상의 키-값 쌍으로 구성
- BSON(바이너리 JSON) 형태로 저장한다
- _id 고윳값은 자동으로 생성된다
- 컬렉션은 여러 문서의 모임이다
- RDBMS와 달리 다른 스키마를 가진 문서들이 한 컬렉션에 모일 수 있다

### MongoDB 구조

- :arrow_double_down: 서버
- :arrow_double_down: 데이터베이스들
- :arrow_double_down: 컬렉션들
- :arrow_double_down: 문서들​

### 스키마 디자인

- 모든 것을 하나의 문서에 집어 넣을 수 있다

- ```json
  {	//게시글
      _id: ObjectId,
      title: String,
      body: String,
      username: String,
      createdDate: Date,
      comments: [ //게시글 댓글
          {
              _id: ObjectId,
              text: String,
              createdDate: Date,
          },
      ],
  };
  ```

- ==문서 하나에 최대 16MB 데이터==

## 설치

- macOS는 Homebrew 이용
- Windows는 공식 사이트 이용
- cmd에서 설치폴더의 bin폴더로 이동 후 mongod.exe

### mongoose설치

- npm i mongoose

### env 환경변수  설정

```
PORT=400
MONGO_URI=mongodb://localhost:27017/blog
```



### 적용

```js
require('dotenv').config();
(...)
const { PORT } = process.env;
(...)
const port = PORT || 4010;
app.listen(port, () => {
    console.log('Listening to port %d',port);
});
```

### 데이터베이스와 연결

```js
const { PORT,MONGO_URI } = process.env;
mongoose
.connect(MONGO_URI, {useNewUrlParser: true, useFindAndModify: false})
    .then( () => {
        console.log('Connected to MongoDB');
    })
    .catch( e => {
        console.log(e);
    });
```

## Schema

| 타입                            | 설명                               |
| ------------------------------- | ---------------------------------- |
| String                          | 문자열                             |
| Number                          | 숫자                               |
| Date                            | 날짜                               |
| Buffer                          | 파일담는 버퍼                      |
| Boolean                         | true or false                      |
| Mixed(Schema.Types.Mixed)       | 어떤 데이터든 넣을 수 있음         |
| ObjectId(Schema.Types.ObjectId) | 객체 아이디. 주로 다른 객체 참조시 |
| Array                           | 배열 형태 []로 감쌈                |

```js
import mongoose from 'mongoose';

const { Schema } = mongoose;
const NewSchema = new Schema({
    title: String,
    tags: [String],
});
const Post = mongoose.model('Post', PostSchema);
export default Post;
```

- 데이터베이스는 스키마 이름을 정해 주면 그 이름의 복수 형태로 데이터베이스에 컬렉션 이름을 만듭니다
- Post => posts , Book=> books

## 데이터 조작

### 생성

POST  http://localhost:4000/api/posts/

```js
export const write = async ctx => {
    const  { title, body, tags } = ctx.request.body;
    const post = new Post({ //인스턴스 생성
        title,
        body,
        tags,
    });
    try {
        await post.save(); //데이터 베이스에 저장
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};
```



### 조회

모두 조회 GET http://localhost:4000/api/posts/ 

`find()`

```js
export const list = async ctx => {
    try {
        const posts = await Post.find().exec(); 
        ctx.body = posts;
    } catch (e) {
        ctx.throw(500, e);
    }
};
```

특정 데이터 조회 GET http://localhost:4000/api/posts/:id

`findById(id)`

```js
export const read = async ctx => {
    const { id } = ctx.params;
    try {
        const post = await Post.findById(id).exec();
        if(!post) {
            ctx.status = 404;
            return;
        }
        ctx.body = post;
    } catch (e) {
        ctx.throw(500, e);
    }
};
```



### 삭제

특정 데이터 삭제 DELETE http://localhost:4000/api/posts/:id

`remove()`

`findByIdAndRemove(id)`

`findOneAndRemove()`

```js
export const remove = async ctx => {
    const { id } = ctx.params;
    try {
        await (await Post.findByIdAndRemove(id)).exec();
        ctx.status = 204;
    } catch (e) {
        ctx.throw(500, e);
    }
};
```



### 수정

특정 데이터 수정 PATCH  http://localhost:4000/api/posts/:id

`findByIdAndUpdate(id, Update data, Update option)`

```js
export const update = async ctx => {
     const { id } = ctx.params;
     try {
         const post = await Post.findByIdAndUpdate(id, ctx.request.body, {
             new: true, //true이면 업데이트된 데이터 반환
             //false이면 업데이트전 데이터 반환
         }).exec();
         if(!post){
             ctx.status = 404;
             return;
         }
         ctx.body = post;
     } catch (e) {
         ctx.throw(500, e);
     }
};
```

## 검증

