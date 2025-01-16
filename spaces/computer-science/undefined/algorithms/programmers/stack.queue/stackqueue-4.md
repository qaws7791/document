# 주식가격

###### 문제 설명

초 단위로 기록된 주식가격이 담긴 배열 prices가 매개변수로 주어질 때, 가격이 떨어지지 않은 기간은 몇 초인지를 return 하도록 solution 함수를 완성하세요.

##### 제한사항

- prices의 각 가격은 1 이상 10,000 이하인 자연수입니다.
- prices의 길이는 2 이상 100,000 이하입니다.

##### 입출력 예

| prices          | return          |
| --------------- | --------------- |
| [1, 2, 3, 2, 3] | [4, 3, 1, 1, 0] |

##### 입출력 예 설명

- 1초 시점의 ₩1은 끝까지 가격이 떨어지지 않았습니다.
- 2초 시점의 ₩2은 끝까지 가격이 떨어지지 않았습니다.
- 3초 시점의 ₩3은 1초뒤에 가격이 떨어집니다. 따라서 1초간 가격이 떨어지지 않은 것으로 봅니다.
- 4초 시점의 ₩2은 1초간 가격이 떨어지지 않았습니다.
- 5초 시점의 ₩3은 0초간 가격이 떨어지지 않았습니다.

※ 공지 - 2019년 2월 28일 지문이 리뉴얼되었습니다.



```javascript
// 1초마다 앞에서 하나씩 큐에 넣음
// 1초마다 큐를 검사하여 들어온 값과 비교하여 떨어졌으면 카운ㅌ

// 떨어지지 않은 가격 / 떨어진 가격
// [1,0]
// [1,1] [2,0]
// [1,2] [2,1] [3,0]
// [1,3] [2,2] [2,0] / [3,1]
// [1,4] [2,3] [2,1] [3,0] / [3,1]


function solution(prices) {
    let deque = [];
    const time = new Array(prices.length).fill(0);
    const priceArr = prices.map((price,index) => ({index,price}))

    for(let i = 0; i < prices.length; i++) {
        const newPrice = priceArr[i];
        deque = deque.filter((e) => {
            time[e.index]++
            return e.price <= newPrice.price
        })
        deque.push(newPrice)
    }
    
    return time;
}

```

