class Node {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}
  
class BinaryTree {
  constructor() {
    this.root = null;
  }
  
  preOrder(root) {
    let tempArr = []; 
  
    tempArr.push(root.val); 
  
    if (root.left) {
      tempArr = [...tempArr, ...this.preOrder(root.left)];
    }
  
    if (root.right){
      tempArr = [...tempArr, ...this.preOrder(root.right)];
    }
    return tempArr;
  }

  findMaximumValue(root) {
    let values = this.preOrder(root);
    let maxVal = 0;
  
    for (let i = 0; i < values.length; i ++) {
      if (maxVal < values[i]) maxVal = values[i];
    }
  
    // console.log({maxVal});
  
    return maxVal;
  }

}

// let tree = new BinaryTree();

// tree.root = new Node(1);
// tree.root.left = new Node(2);
// tree.root.right = new Node(3);
// tree.root.left.left = new Node(10);
// tree.root.left.right = new Node(6);

// console.log({tree});

// console.log('tree.findMaximumValue(tree.root): ', tree.findMaximumValue(tree.root));

module.exports = {BinaryTree, Node};