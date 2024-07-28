# 클래스

## 클래스 생성

### 프로토타입을 통한 객체 생성

> User.prototype.printName()을 변경하면 참조중인 모든 User 객체의 메서드가 변경됨

```javascript
function User(name, age) {
    this.name = name;
    this.age = age;

    User.prototype.printName = function () {
        console.log(`name: ${name}, age: ${age}`);
    };
}
const foo = new User("foo", 20);
foo.printName();
console.log(foo);

```



### 클래스를 통한 객체 생성

> 이미 생성된 객체는 User를 변경해도 영향을 받지 않음

```javascript
class User {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
    printName() {
      console.log(`name: ${this.name}, age: ${this.age}`);
    }
}
const foo = new User("foo", 20);
foo.printName();
```

