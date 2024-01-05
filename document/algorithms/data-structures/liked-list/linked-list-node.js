export default class LinkedListNode {
  value;
  next;
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    if (callback && typeof callback === "function") return callback(this.value);
    else return `${this.value}`;
  }
}
