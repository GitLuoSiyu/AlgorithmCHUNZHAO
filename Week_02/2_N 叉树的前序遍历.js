/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @title 589. N叉树的前序遍历
 * @url https://leetcode-cn.com/problems/n-ary-tree-preorder-traversal/description/
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function (root) {
    // 递归解法
    let array = []
    var dfs = function (node) {
        if (node === null) {
            return
        }
        array.push(node.val)
        for (let i = 0; i < node.children.length; i++) {
            dfs(node.children[i])
        }
        return
    }
    dfs(root)
    return array
};