class Queue {
  constructor() {
    this.storage = [];
    this.head = 0;
    this.tail = 0;
    this.maxSize = 10;
  }

  enqueue(element) {
    this.storage[this.tail++] = element;
    return true;
  }

  dequeue() {
    const item = this.storage[this.head];
    delete this.storage[this.head++];
    return item;
  }

  peek() {
    if (this.isEmpty()) {
      return false;
    }
    return this.storage[this.head];
  }

  isFull() {
    return this.getLength() === this.maxSize;
  }

  getLength() {
    return this.tail - this.head;
  }

  isEmpty() {
    return this.getLength() === 0;
  }
}

const queue = new Queue();
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);

console.log(queue);

console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue);
