'use strict';

class BinaryTreeNode {
  constructor( val=null) {
    this.value = val;
    this.left = null;
    this.right = null;
  }

  preOrder(cb){
    cb(this.value);
    if(this.left) this.left.preOrder(cb);
    if(this.right) this.right.preOrder(cb);
  }


  postOrder(cb){
    if(this.left) this.left.postOrder(cb);
    if(this.right) this.right.postOrder(cb);
    cb(this.value);
  }
  inOrder(cb){
    if(this.left) this.left.inOrder(cb);
    cb(this.value);
    if(this.right) this.right.inOrder(cb);
  }

}

class BinaryTree{

  constructor(){
    this.root = new BinaryTreeNode();
  }

}

let b = new BinaryTree();


b.root.value = 14;

b.root.left = new BinaryTreeNode(99);
b.root.left.left = new BinaryTreeNode(81);
b.root.left.right = new BinaryTreeNode(1);

b.root.right = new BinaryTreeNode(7);
b.root.right.left = new BinaryTreeNode(11);
b.root.right.right = new BinaryTreeNode(1000000);


// console.log(b);

console.log('----------preOrder-----------');
b.root.preOrder(console.log);

console.log('----------postOrder-----------');
b.root.postOrder(console.log);

console.log('----------inOrder-----------');
b.root.inOrder(console.log);