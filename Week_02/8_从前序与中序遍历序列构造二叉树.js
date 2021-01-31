/**
 * @title 105. 从前序与中序遍历序列构造二叉树
 * @url https://leetcode-cn.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let build = (inorder) => {
        if(!inorder || !inorder.length) return null
        let tmp = preorder.shift(),mid = inorder.indexOf(tmp)
        let root = new TreeNode(tmp)
        root.left = build(inorder.slice(0,mid))
        root.right = build(inorder.slice(mid + 1))
        return root
    }
    return build(inorder)
};