# 구조적 분해

## 객체 구조 분해

* 구조 분해된 name과 age가 바뀌어도 원래 객체의 값에 영향을 주지 않는다.

* ```javascript
  const user = {
    name: "foo",
    age: 20,
  };
  let { name, age } = user;
  console.log(name, age); // foo 20
  name = "bar";
  age = 24;
  console.log(name, age); // bar 24
  ```

* 객체를 분해하여 인자로 넘기거나, 구조 분해하여 가져올 수 있다.

  ```javascript
  const printName = ({ name }) => {
      console.log(`Name is : ${name}`);
  };
  printName(user);
  ```

  ```javascript
  const user = {
          name: "foo",
          age: 20,
          favorite: {
            sport: "soccer",
            food: "cake",
          },
        };
  
  const printFavoriteSport = ({ favorite: { sport } }) => {
  	console.log(`Favorite sport is ${sport}`);
  };
  printFavoriteSport(user);
  ```



## 배열 구조 분해

```javascript
const arr = [1, 2, 3, 4, 5];
const [first, second] = arr;
const [, , third] = arr;
const [last] = [...arr].reverse();
console.log(first, second, third, last); // 1 2 3 5
```



## 객체 리터럴 개선

```javascript
const name = "foo";
const age = 20;
const favorite = {
    sport: "soccer",
    food: "cake",
};
const printFavoriteSport = ({ favorite: { sport } }) => {
    console.log(`Favorite sport is ${sport}`);
};

const user = { name, age, favorite, printFavoriteSport };
console.log(user);
```

## 