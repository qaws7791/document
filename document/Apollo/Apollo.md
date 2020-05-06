# APOLLO

------

[TOC]

## schema

### typeDefs

```javascript
const { gql } = require('apollo-server');

const typeDefs = gql`
  # Your schema will go here
`;

module.exports = typeDefs;
```

```js
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

