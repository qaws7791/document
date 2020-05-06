# APOLLO-server

------

[TOC]

------

## start server

```js
/* src/index.js */
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const server = new ApolloServer({ typeDefs });

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
```



## schema

### typeDefs

```javascript
/* src/schema.js*/
const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
`;

module.exports = typeDefs;
```

단순 스키마

```js
/* src/schema.js*/
type User {
	id: ID!
     name: String
     type: String
}

type Users {
    user: [User]!
}
```

- 스칼라 유형은 ID, String, Boolean, Int , Float 등
- `!` 는 필드 값이 null일 수 없음을 의미
- []는 이미 선언된 유형의 배열

### Query

- 데이터 가져오기

```js
type Query {
    Users: [User]!
    user(id: ID!): User
}
```

### Mutation

- 데이터 수정

```js
type Mutation {
    
}
```

## Resolvers

- 명령에 맞는 함수를 실행하고 데이터를 반환

```js
resolvers = {
	Query: {
		user: () => "user",
        users: () => User.find()
    },
    Mutation: {
        createUser: (_,{name}) => {
            const user_1 = new User({name});
            user_1.save();
            return user_1;
        }
    }
}
```

# APOLLO-client(react)

## client setup

`npm install apollo-boost @apollo/react-hooks graphql`

- `apollo-boost`: all of Apollo client
  - `apollo-client`: Where all the magic happens
  - `apollo-cache-inmemory`: Our recommended cache
  - `apollo-link-http`: An Apollo Link for remote data fetching
  - `apollo-link-error`: An Apollo Link for error handling
- ` @apollo/react-hooks`: view layer기반 hooks

### create client end connect to server

```js
/* src/apllo.js */
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "endpoint",
});

export default client;
```

- endpoint가 graphql server 주소를 의미

### connect client to React

```js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { ApolloProvider } from '@apollo/react-hooks';
import client from "./apollo";

ReactDOM.render(
  <ApolloProvider client={client}>
    <App/>
  </ApolloProvider>,
  document.getElementById('root')
);
```

## Request data

gql 만들기

```js
import { gql } from 'apollo-boost';
const gql_name = gql`
  {
    user(id: 1) {
      name
	  age
    }
  }
`;

```

```js
const { loading, error, data } = useQuery(gql_name);
```



- loading: 로딩 상태를 추적 boolean값
- err: error 추적
- data: data 반환값을 저장

- 쿼리 결과를 로컬에 자동으로 캐시함으로써

## 쿼리 캐시

- apollo client는 동일 쿼리발생시 로딩 속도 상승

- 이로 인해 캐시된 쿼리 결과를 업데이트할 필요

### polling

- 지정된 간격으로 쿼리가 주기적으로 실행
- `pollInterval` 구성 옵션을 사용
- 단위는 ms. 500ms === 0.5s

```js
useQuery(GET_DOG_PHOTO, {
    pollInterval: 500,
  });
```

`pollInterval: 0` 은 **poll을 하지 않음**을 의미

### refetch

- 사용자의 입력으로 쿼리 새로고침을 수행

```js
<button onClick={() => refetch()}>Refetch!</button>
```



