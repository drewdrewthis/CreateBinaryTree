var min = 0;
var max = 100;
var treeSize = 4;

function getRandomIntInclusive(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomNumber() {
  return getRandomIntInclusive(min, max);
}

function BinaryTreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

BinaryTreeNode.prototype.insertLeft = function(value) {
  this.left = new BinaryTreeNode(value);
  return this.left;
};

BinaryTreeNode.prototype.insertRight = function(value) {
  this.right = new BinaryTreeNode(value);
  return this.right;
};

var newTree;

function makeLeftBranches(tree, h) {

  h--;
  console.log("L" + h);
  var value = getRandomNumber();

  if (h > 0) {
    tree.insertLeft(value);
    makeRightBranches(tree.left, h);
    makeLeftBranches(tree.left, h);
    return;
  } else return;
}

function makeRightBranches(tree, h) {

  h--;
  console.log("R" + h);
  var value = getRandomNumber();

  if (h > 0) {
    tree.insertRight(value);
    makeRightBranches(tree.right, h);
    makeLeftBranches(tree.right, h);
    return;
  } else return;
}


function buildTree(h) {

  var value = getRandomNumber();
  newTree = new BinaryTreeNode(value);

  makeLeftBranches(newTree, h);
  makeRightBranches(newTree, h);

  return newTree;
}

var tree = new buildTree(treeSize); // Will build a tree 4 levels deep
