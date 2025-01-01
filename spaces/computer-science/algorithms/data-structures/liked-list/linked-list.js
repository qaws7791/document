import LinkedListNode from './LinkedListNode'
import Comparator from '../../utils/Comparator'

export default class LinkedList {
  head
  tail
  // 비교 함수를 인자로 받아서, 비교 함수를 통해 두 값을 비교할 수 있도록 합니다.
  constructor(compareFunction) {
    this.head = null
    this.tail = null

    this.compare = new Comparator(compareFunction)
  }

  // LinkedList 가장 앞에 있는 노드에 새로운 노드를 연결합니다.
  prepend(value) {
    const newNode = new LinkedListNode(value, this.head)
    this.head = newNode

    if (!this.tail) {
      this.tail = newNode
    }

    return this
  }

  // LinkedList 가장 끝에 있는 노드에 새로운 노드를 연결합니다.
  append(value) {
    const newNode = new LinkedListNode(value)

    if (!this.head) {
      this.head = newNode
      this.tail = newNode

      return this
    }

    this.tail.next = newNode
    this.tail = newNode

    return this
  }

  // LinkedList에서 특정 위치에 해당하는 노드를 찾습니다.
  getNode(index) {
    let node = this.head // 링크드리스트의 Head를 처음 노드로 지정합니다!
    for (let i = 0; i < index; i++) {
      node = node.next // 원하는 위치에 당도할 때 까지 다음 노드로 이동!
    }
    return node
  }

  // LinkedList의 특정 값에 해당하는 노드를 삭제합니다.
  delete(value) {
    if (!this.head) {
      return null
    }

    let deletedNode = null

    // head를 삭제해야 하는 경우
    while (this.head && this.compare.equal(this.head.value, value)) {
      deletedNode = this.head
      this.head = this.head.next
    }

    let currentNode = this.head

    // 중간에 있는 노드를 삭제하는 경우
    if (currentNode !== null) {
      while (currentNode.next) {
        if (this.compare.equal(currentNode.next.value, value)) {
          deletedNode = currentNode.next
          currentNode.next = currentNode.next.next
        } else {
          currentNode = currentNode.next
        }
      }
    }

    // tail을 삭제해야 하는 경우
    if (this.compare.equal(this.tail.value, value)) {
      this.tail = currentNode
    }

    return deletedNode
  }

  deleteHead() {
    if (!this.head) {
      return null
    }

    const deletedHead = this.head

    if (this.head.next) {
      this.head = this.head.next
    } else {
      this.head = null
      this.tail = null
    }

    return deletedHead
  }

  deleteTail() {
    const deletedTail = this.tail

    // 링크드리스트에 노드가 하나 이하인 경우
    if (this.head === this.tail) {
      this.head = null
      this.tail = null

      return deletedTail
    }

    // 링크드리스트에 노드가 두 개 이상인 경우
    // 링크드리스트의 끝에서 두 번째 노드를 찾아 next를 null로 만듭니다.
    let currentNode = this.head
    while (currentNode.next) {
      if (!currentNode.next.next) {
        currentNode.next = null
      } else {
        currentNode = currentNode.next
      }
    }

    this.tail = currentNode

    return deletedTail
  }
}
