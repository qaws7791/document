class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const node = new TreeNode(value);

    if (!this.root) {
      this.root = node;
      return;
    }

    let current = this.root;

    while (true) {
      if (value < current.value) {
        if (!current.left) {
          current.left = node;
          return;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          return;
        }
        current = current.right;
      }
    }
  }

  remove(value) {
    const removeNode = (node, value) => {
      if (!node) {
        return null;
      }

      if (value === node.value) {
        if (!node.left && !node.right) {
          return null;
        }

        if (!node.left) {
          return node.right;
        }

        if (!node.right) {
          return node.left;
        }

        let temp = node.right;

        while (temp.left) {
          temp = temp.left;
        }

        node.value = temp.value;
        node.right = removeNode(node.right, temp.value);
        return node;
      }

      if (value < node.value) {
        node.left = removeNode(node.left, value);
        return node;
      }

      node.right = removeNode(node.right, value);
      return node;
    };

    this.root = removeNode(this.root, value);
  }

  lookup(value) {
    let current = this.root;

    while (current) {
      if (value === current.value) {
        return current;
      }

      if (value < current.value) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return null;
  }

  printTree() {
    const printNode = (node) => {
      if (node) {
        printNode(node.left);
        console.log(node.value);
        printNode(node.right);
      }
    };

    printNode(this.root);
  }
}

function isValidBST(root) {
  const validate = (node, min, max) => {
    if (!node) {
      return true;
    }

    if (node.value <= min || node.value >= max) {
      return false;
    }

    return (
      validate(node.left, min, node.value) &&
      validate(node.right, node.value, max)
    );
  };

  return validate(root, -Infinity, Infinity);
}

const root = new TreeNode(8);
const node4 = new TreeNode(4);
const node10 = new TreeNode(10);
const node2 = new TreeNode(2);
const node12 = new TreeNode(12);

root.left = node4;
root.right = node10;
node4.left = node2;
node4.right = node12;

console.log(isValidBST(root));
// const tree = new BinarySearchTree();
// tree.insert(10);
// tree.insert(5);
// tree.insert(15);
// tree.insert(2);

// console.log(tree.lookup(15));
// tree.remove(5);
// tree.printTree();
