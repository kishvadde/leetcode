class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}
class Tree {
    constructor() {
        this.root = null;
    }

    _insertNode(current, newNode) {
        if (newNode.value < current.value) {
            if (!current.left)
                current.left = newNode;
            else
                this._insertNode(current.left, newNode);
        } else {
            if (!current.right)
                current.right = newNode;
            else
                this._insertNode(current.right, newNode);
        }
    }

    _findElement(element, current) {
        if (current.value === element) {
            return true;
        } else if (element < current.value && current.left) {
            return this._findElement(element, current.left);
        } else if (element > current.value && current.right) {
            return this._findElement(element, current.right);
        }else {
            return false;
        }
    }

    _inOrderTraversalHelper(current, result = []) {
        if (current.left) this._inOrderTraversalHelper(current.left, result);
        result.push(current.value);
        if (current.right) this._inOrderTraversalHelper(current.right, result);
    }

    _preOrderTraversalHelper(current, result = []) {
        result.push(current.value);
        if (current.left) this._preOrderTraversalHelper(current.left, result);
        if (current.right) this._preOrderTraversalHelper(current.right, result);
    }

    _postOrderTraversalHelper(current, result = []) {
        if (current.left) this._postOrderTraversalHelper(current.left, result);
        if (current.right) this._postOrderTraversalHelper(current.right, result);
        result.push(current.value);
    }

    _levelOrderTraversalHelper(current, result=[], level) {
        if (current) {
            if (!result[level])
                result[level] = [];
            result[level].push(current.value);
        }
        if (current.left)
            this._levelOrderTraversalHelper(current.left, result, level+1);
        if (current.right)
            this._levelOrderTraversalHelper(current.right, result, level+1);
    }

    _depthOfTree(current, depth) {
        if (!current)
            return depth;
        return depth + Math.max(this._depthOfTree(current.left, depth+1), this._depthOfTree(current.right, depth+1))
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
        } else {
            this._insertNode(this.root, newNode)
        }
    }

    find(element) {
        return this._findElement(element, this.root);
    }

    inOrderTraversal() {
        const result = [];
        this._inOrderTraversalHelper(this.root, result);
        return result;
    }

    preOrderTraversal() {
        const result = [];
        this._preOrderTraversalHelper(this.root, result);
        return result;
    }

    postOrderTraversal() {
        const result = [];
        this._postOrderTraversalHelper(this.root, result);
        return result;
    }

    levelOrderTraversal() {
        const result = [];
        this._levelOrderTraversalHelper(this.root, result, 0);
        return result;
    }

    sumAtEachLevel() {
        const result = this.levelOrderTraversal();
        const levelSums = [];
        result.forEach(level=>{
            const sum = level.reduce((acc=0, value)=>{return acc+value});
            levelSums.push(sum);
        })
        return levelSums;
    }

    depth() {
        if (!this.root)
            return 0;
        return 1 + Math.max(this._depthOfTree(this.root.left, 0), this._depthOfTree(this.root.right, 0));
    }

    inOrderSuccessor(nodeVal) {
       const inOrder = [];
       let nodeIndex = 0;
       let i = 0;
       (function helper(node) {
            if (node.left)
                helper(node.left)
            if (nodeVal === node.value)
                nodeIndex = i;
            inOrder.push(node.value)
            i += 1;
            if (node.right)
                helper(node.right)
       })(this.root);
       if (nodeIndex < inOrder.length)
            return inOrder[nodeIndex+1];
        return null;
    }
}

const tree = new Tree();
tree.insert(30);
tree.insert(20);
tree.insert(40);
tree.insert(15);
tree.insert(25);
tree.insert(35);
tree.insert(42);
// console.log(tree.find(12));
console.log(tree.inOrderTraversal());
// console.log(tree.preOrderTraversal());
// console.log(tree.postOrderTraversal());
// console.log(tree.levelOrderTraversal())
// console.log(tree.sumAtEachLevel());
console.log(tree.inOrderSuccessor(42));
console.log(tree.depth());

