# Queue

![image-20240501220458641](assets/image-20240501220458641.png)

큐의 요소가 추가되고 제거되는 순서는 **선입선출(First In First Out)** 방식에 따라 이루어진다. 따라서 요소는 큐의 마지막에만 추가되며, 큐의 첫 부분에서만 나갈 수 있다

- enqueue: 큐의 마지막에 요소를 추가한다
- dequeue: 가장 오래된 요소를 제거하고 반환한다

```javascript
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
```

