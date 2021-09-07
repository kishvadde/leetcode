/**
 * Given a binary tree and a number ‘S’,
 * find if the tree has a path from root-to-leaf such that
 * the sum of all the node values of that path equals ‘S’.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function hasPath(root, sum) {
    if (root === null)
        return false;
    if (root.value === sum && root.left===null && root.right === null)
        return true;
    return hasPath(root.left, sum-root.value) || hasPath(root.right, sum-root.value);
}

let root = new Node(12);
root.left = new Node(7);
root.right = new Node(1);
root.left.left = new Node(9);
root.right.left = new Node(10);
root.right.right = new Node(5);
console.log(`Tree has path: ${hasPath(root, 23)}`);
console.log(`Tree has path: ${hasPath(root, 16)}`);
