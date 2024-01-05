import LinkedListNode from "./LinkedListNode.js";

export default class LinkedListStack {
  head;

  constructor(value) {
    this.head = new LinkedListNode(value);
  }

  // 스택에 요소를 추가하는 메서드
  push(element) {
    const oldHead = this.head;
    this.head = new LinkedListNode(element);
    this.head.next = oldHead;
  }

  // 스택에서 가장 마지막에 추가된 요소를 제거하고 반환하는 메서드
  pop() {
    if (this.isEmpty()) return "no Data";
    const value = this.head.value;
    this.head = this.head.next;
    return value;
  }

  // 스택이 비어있는지 확인하는 메서드
  isEmpty() {
    return this.head === null;
  }
}

const stack = new LinkedListStack(1);

stack.push(2);
stack.push(3);
stack.push(4);
console.log("마지막 요소: ", stack.pop());
console.log("마지막 요소: ", stack.pop());
console.log("비었는지 확인: ", stack.isEmpty());
console.log("마지막 요소: ", stack.pop());
console.log("마지막 요소: ", stack.pop());
console.log("비었는지 확인: ", stack.isEmpty());
