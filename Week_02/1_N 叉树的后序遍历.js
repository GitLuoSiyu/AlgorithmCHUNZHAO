/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @title 590. N叉树的后序遍历
 * @url https://leetcode-cn.com/problems/n-ary-tree-postorder-traversal/
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function (root) {
    if (!root) return [];
    let res = [root.val];
    let queue = root.children;
    while (queue.length > 0) {
        let node = queue.pop();
        if (node != null) {
            res.unshift(node.val);
            if (node.children) {
                queue.push(...node.children);
            }
        }
    }
    return res
};