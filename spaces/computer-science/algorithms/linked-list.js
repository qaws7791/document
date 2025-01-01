class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  add(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
    } else {
      this.tail.next = node;
    }

    this.tail = node;
  }

  printAll() {
    let current = this.head;

    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }

  get(index) {
    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      if (!current) {
        return null;
      }

      current = current.next;
      currentIndex++;
    }

    return current;
  }

  insertAt(index, value) {
    const node = new Node(value);

    if (index === 0) {
      node.next = this.head;
      this.head = node;
      return;
    }

    const current = this.getNodeAtIndex(index - 1);

    if (!current) {
      return;
    }

    node.next = current.next;
    current.next = node;
  }

  removeAt(index) {
    if (index === 0) {
      this.head = this.head.next;
      return;
    }

    const current = this.getNodeAtIndex(index - 1);

    if (!current) {
      return;
    }

    current.next = current.next.next;
  }

  getNodeAtIndex(index) {
    let current = this.head;
    let currentIndex = 0;

    while (currentIndex < index) {
      if (!current) {
        return null;
      }

      current = current.next;
      currentIndex++;
    }

    return current;
  }
}

const list = new LinkedList();

list.add(10);
list.add(20);
list.add(30);
list.add(40);
list.add(50);

console.log(findMiddle(list).value);

// list.insertAt(1, 15);
// console.log(list);
// list.printAll(); // 10, 15, 20, 30
// list.removeAt(2);

// list.printAll(); // 10, 15, 30

function findMiddle(list) {
  let slow = list.head;
  let fast = list.head;
  let prev = null;
  while (fast && fast.next) {
    fast = fast.next.next;
    prev = slow;
    slow = slow.next;
  }

  return fast === null ? prev.next : slow;
}
