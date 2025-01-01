class Stack {
  constructor(maxSize = 10) {
    this.storage = [];
    this.top = -1;
    this.maxSize = maxSize;
  }

  push(element) {
    if (this.isFull()) {
      return false;
    }
    this.storage[++this.top] = element;
    return true;
  }

  pop() {
    return this.isEmpty() ? false : this.storage[this.top--];
  }

  isFull() {
    return this.top === this.maxSize - 1;
  }

  isEmpty() {
    return this.top === -1;
  }

  peek() {
    return this.isEmpty() ? false : this.storage[this.top];
  }

  size() {
    return this.top + 1;
  }
}

function reverseString(str) {
  const st = new Stack();

  for (let i = 0; i < str.length; i++) {
    st.push(str[i]);
  }

  let reversed = "";
  while (!st.isEmpty()) {
    reversed += st.pop();
  }

  return reversed;
}

console.log(reverseString("hello world")); // "dlrow olleh"

function balancedBrackets(str) {
  const st = new Stack();

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(") {
      st.push("(");
    } else if (char === ")") {
      if (st.isEmpty()) {
        return false;
      }
      st.pop();
    }
  }

  return st.isEmpty();
}

function balancedBrackets(str) {
  const counter = [0, 0];

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (char === "(") {
      counter[0]++;
    } else if (char === ")") {
      counter[1]++;
    }
  }

  return counter[0] === counter[1];
}
