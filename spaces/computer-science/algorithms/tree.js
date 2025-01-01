class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

function depthFirstSearchStack(root) {
  if (!root) {
    return;
  }
  const result = [];
  const stack = [root];

  while (stack.length) {
    const node = stack.pop();
    result.push(node.value);

    if (node.right) {
      stack.push(node.right);
    }

    if (node.left) {
      stack.push(node.left);
    }
  }

  console.log(result);
}

function depthFirstSearchRecursive(root) {
  const result = [];

  function traverse(node) {
    if (node) {
      result.push(node.value);
      traverse(node.left);
      traverse(node.right);
    }
  }

  traverse(root);
  return result;
}

function breadthFirstSearch(root) {
  const result = [];
  const queue = [root];

  while (queue.length) {
    const node = queue.shift();
    result.push(node.value);

    if (node.left) {
      queue.push(node.left);
    }

    if (node.right) {
      queue.push(node.right);
    }
  }

  return result;
}

function getMaxDepth(root) {
  if (!root) return 0;

  const leftDepth = getMaxDepth(root.left);
  const rightDepth = getMaxDepth(root.right);

  return Math.max(leftDepth, rightDepth) + 1;
}

const a = new TreeNode("a");
const b = new TreeNode("b");
const c = new TreeNode("c");
const d = new TreeNode("d");
const e = new TreeNode("e");
const f = new TreeNode("f");

a.left = b;
a.right = c;

b.left = d;
b.right = e;

c.right = f;

// depthFirstSearchStack(a);
// depthFirstSearchRecursive(a);

console.log(breadthFirstSearch(a));
