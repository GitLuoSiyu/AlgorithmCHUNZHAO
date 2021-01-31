/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @title 94. 二叉树的中序遍历
 * @url https://leetcode-cn.com/problems/binary-tree-inorder-traversal/
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
    // 1. 设置结果集
    const result = [];

    // 2. 递归
    const recursion = (root) => {
        // 2.1 如果见底，则返回
        if (!root) {
            return;
        }
        // 2.2 中序遍历：左 -> 中 -> 右
        recursion(root.left);
        result.push(root.val);
        recursion(root.right);
    };
    recursion(root);

    // 3. 返回结果集
    return result
};