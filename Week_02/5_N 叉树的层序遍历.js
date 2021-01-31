/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @title 429. N 叉树的层序遍历
 * @url https://leetcode-cn.com/problems/n-ary-tree-level-order-traversal/
 * @param {Node} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    var nums = [];
    search(nums, root, 0);
    return nums;
};

function search(nums, node, k) {
    if (!node) return;
    if (!nums[k]) nums[k] = [];
    nums[k].push(node.val);
    for (var i = 0; i < node.children.length; i++) {
        search(nums, node.children[i], k + 1);
    }
}