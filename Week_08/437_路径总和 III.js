/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @title 437. 路径总和 III
 * @url https://leetcode-cn.com/problems/path-sum-iii/
 * @description 
 * @param {TreeNode} root 
 * @param {number} sum 
 * @return {number} 
 */
var pathSum = function (root, sum) {
    let map = {};
    let ans = 0;
    map[0] = 1; // 处理root为空时的前缀和

    dfs(root, 0, sum);
    return ans;

    function dfs(currRoot, currSum, target) {
        if (!currRoot) return;

        currSum += currRoot.val;


        if (map[currSum - target]) ans += map[currSum - target];
        if (map[currSum]) map[currSum]++;
        else map[currSum] = 1;

        dfs(currRoot.left, currSum, target);
        dfs(currRoot.right, currSum, target);

        map[currSum]--;
    }
};
