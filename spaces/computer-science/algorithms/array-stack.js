// 후입선출 스택 구현
class ArrayStack {
  constructor() {
    this.items = []; // 스택을 저장할 배열
  }

  // 스택에 요소를 추가하는 메서드
  push(element) {
    this.items.push(element);
  }

  // 스택에서 가장 마지막에 추가된 요소를 제거하고 반환하는 메서드
  pop() {
    if (this.isEmpty()) {
      return "No Item";
    }
    return this.items.pop();
  }

  // 스택이 비어있는지 확인하는 메서드
  isEmpty() {
    return this.items.length === 0;
  }

  // 스택의 가장 마지막에 추가된 요소를 확인하는 메서드
  peek() {
    if (this.isEmpty()) {
      return "No Item";
    }
    return this.items[this.items.length - 1];
  }

  // 스택의 크기를 반환하는 메서드
  size() {
    return this.items.length;
  }

  // 스택의 내용물을 문자열로 반환하는 메서드
  toString() {
    return this.items.toString();
  }
}

// 스택 사용 예시
const stack = new ArrayStack();

stack.push(10);
stack.push(20);
stack.push(30);

console.log("스택의 내용:", stack.toString()); // 출력: 스택의 내용: 10,20,30
console.log("스택 크기:", stack.size()); // 출력: 스택 크기: 3
console.log("가장 위의 요소:", stack.peek()); // 출력: 가장 위의 요소: 30

const poppedElement = stack.pop();
console.log("빠져나온 요소:", poppedElement); // 출력: 빠져나온 요소: 30
console.log("스택의 내용:", stack.toString()); // 출력: 스택의 내용: 10,20
