export default class LinkedList {
  head;
  constructor(value) {
    this.head = new Node(value); // head 에 시작하는 Node 를 연결합니다.
  }

  // LinkedList 가장 끝에 있는 노드에 새로운 노드를 연결합니다.
  append(value) {
    let curr = this.head;
    while (curr.next !== null) {
      curr = curr.next;
    }
    curr.next = new Node(value);
  }

  get_node(index) {
    let node = this.head; // 링크드리스트의 Head를 처음 노드로 지정합니다!
    for (let i = 0; i < index; i++) {
      node = node.next; // 원하는 위치에 당도할 때 까지 다음 노드로 이동!
    }
    return node;
  }

  add_node(index, value) {
    const newNode = new Node(value); // 일단 새로운 값을 기준으로 새 노드를 만들어요!
    // 0번째에 추가를 하고 싶다면!
    if (index === 0) {
      newNode.next = this.head; // 원래 Head였던 노드를 새 노드의 next로 지정해요!
      this.head = newNode; // 그리고, Head를 새 노드로 바꾸어줍니다!
      return;
    }

    const node = this.get_node(index - 1);
    const nextNode = node.next;
    node.next = newNode;
    newNode.next = nextNode;
  }
}
