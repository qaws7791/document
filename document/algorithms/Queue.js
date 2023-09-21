import LinkedListNode from "./LinkedListNode.js";

//선입선출 큐
export default class Queue {
  head;
  tail;
  size;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  enqueue(value) {
    const newNode = new LinkedListNode(value);
    if (this.head === null) {
      // 헤드가 없으면 새로운 헤드로 지정
      this.head = newNode;
    } else {
      // 마지막 요소의 다음을 새로운 요소로 지정
      this.tail.next = newNode;
    }
    //항상 새로 들어온 원소가 마지막
    this.tail = newNode;
    this.size++;
  }

  dequeue() {
    if (this.head === null) {
      return null;
    }
    //현재 헤드 값을 가져오기
    const value = this.head.value;
    //헤드를 다음으로 이동
    this.head = this.head.next;
    this.size--;
    return value;
  }

  getSize() {
    return this.size;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
console.log(queue.dequeue()); // 1
console.log(queue.dequeue()); // 2
console.log(queue.dequeue()); // 3
console.log(queue.dequeue()); // null
