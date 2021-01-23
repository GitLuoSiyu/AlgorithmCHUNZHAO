/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @title 前序遍历构造二叉搜索树
 * @desc 返回与给定前序遍历 preorder 相匹配的二叉搜索树（binary search tree）的根结点
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const bstFromPreorder = function (preorder) {
    let i = 0;
    return bstFromPreorder(preorder, Number.MAX_VALUE);

    function bstFromPreorder(A, bound) {
        if (i === A.length || A[i] > bound) return null;
        let root = new TreeNode(A[i++]);
        root.left = bstFromPreorder(A, root.val);
        root.right = bstFromPreorder(A, bound);
        return root;
    }
};