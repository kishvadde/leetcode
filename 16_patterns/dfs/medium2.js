/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).

 * A valid BST is defined as follows:
 *  The left subtree of a node contains only nodes with keys less than the node's key.
 *  The right subtree of a node contains only nodes with keys greater than the node's key.
 *  Both the left and right subtrees must also be binary search trees.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

var isValidBST = function(root) {
    if (!root)
       return true;
    return checkBST(root.left, -Infinity, root.val) && checkBST(root.right, root.val, Infinity);
};

function checkBST(node, min, max) {
    if (!node)
        return true;
    if (node.val > min && node.val < max)
        return checkBST(node.left, min, node.val) && checkBST(node.right, node.val, max);
    return false;
}

let root = new Node(12);
root.left = new Node(7);
root.right = new Node(1);
root.left.left = new Node(4);
root.right.left = new Node(10);
root.right.right = new Node(5);

console.log(`Is valid BST: ${isValidBST(root)}`);