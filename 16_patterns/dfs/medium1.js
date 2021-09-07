/**
 * Given a binary tree and a number ‘S’,
 * find all paths from root-to-leaf such that the sum of all the node values of each path equals ‘S’.
 */

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function arraySum(arr) {
    return arr.reduce((acc, ele)=>acc+ele, 0);
}
function findPaths(root, sum) {
    const allPaths = [];
    dfsHelper(root, sum, [], allPaths);
    return allPaths;
}

function dfsHelper(root, sum, currentPath, allPaths) {
    if (!root) {
        return;
    }
    currentPath.push(root.value);
    if (root.value === sum && root.left === null && root.right === null){
        allPaths.push(currentPath);
        console.log(allPaths);
    } else {
        dfsHelper(root.left, sum-root.value, [...currentPath], allPaths);
        dfsHelper(root.right, sum-root.value, [...currentPath], allPaths);
    }
    // currentPath.pop();
}






let root = new Node(12);
root.left = new Node(7);
root.right = new Node(1);
root.left.left = new Node(4);
root.right.left = new Node(10);
root.right.right = new Node(5);
console.log(`Tree has path: ${JSON.stringify(findPaths(root, 23))}`);