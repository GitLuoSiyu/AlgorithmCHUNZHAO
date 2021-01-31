/**
 * @title 46. 全排列
 * @url https://leetcode-cn.com/problems/permutations/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let res = [];
    let dfs = function (val, path, arr) {
        if (path.length === nums.length) {
            res.push([...path]);
            return;
        }
        for (let i = 0; i < nums.length; i++) {
            if (path.indexOf(arr[i]) === -1) {
                path.push(arr[i]);
                dfs(val, path, nums);
                path.pop();
            }
        }
    }
    dfs(res, [], nums);
    return res;
};