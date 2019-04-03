class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(data) {
    let newNode = new Node(data);
    if(this.root === null) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }
}

let BST = new BinarySearchTree();
console.log(BST.insert(15));
BST.insert(15);
BST.insert(25);
BST.insert(10);
BST.insert(7);
BST.insert(22);
BST.insert(17);
BST.insert(13);
BST.insert(5);
BST.insert(9);
BST.insert(27);