class Node {
  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class Deque {
  constructor() {
    this.head = null; // 왼쪽 끝 항목 포인터
    this.tail = null; // 오른쪽 끝 항목 포인터
    this.size = 0; // deque에 저장된 데이터 개수
  }

  // deque가 비었는지 확인하는 메서드
  isEmpty() {
    return this.size === 0;
  }

  // deque에 저장된 데이터 개수를 반환하는 메서드
  size() {
    return this.size;
  }

  // 왼쪽 끝에 항목 추가
  pushLeft(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head.prev = newNode;
      this.head = newNode;
    }

    this.size++;
  }

  // 오른쪽 끝에 항목 추가
  pushRight(data) {
    const newNode = new Node(data);

    if (this.isEmpty()) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.prev = this.tail;
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.size++;
  }

  // 왼쪽 끝 항목을 삭제하고 반환하는 메서드
  popLeft() {
    if (this.isEmpty()) {
      return "Deque is empty.";
    }

    const removedData = this.head.data;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
      this.head.prev = null;
    }

    this.size--;
    return removedData;
  }

  // 오른쪽 끝 항목을 삭제하고 반환하는 메서드
  popRight() {
    if (this.isEmpty()) {
      return "Deque is empty.";
    }

    const removedData = this.tail.data;

    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }

    this.size--;
    return removedData;
  }
}

// Deque 사용 예시
const deque = new Deque();

deque.pushLeft(10);
deque.pushRight(20);
deque.pushLeft(5);

console.log(deque.popRight()); // 출력: 20
console.log(deque.popLeft()); // 출력: 5
console.log(deque.isEmpty()); // 출력: false
console.log(deque.size()); // 출력: 1
