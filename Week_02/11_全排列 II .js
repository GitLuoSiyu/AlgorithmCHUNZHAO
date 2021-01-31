/**
 * @title 47. 全排列 II
 * @url https://leetcode-cn.com/problems/permutations-ii/
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    // 先排序
    nums = nums.sort((a, b) => {
        return a - b
    });

    let n = nums.length,
        res = [],
        tmpPath = [],
        hash = {};
    let backtrack = (item) => {
        if (tmpPath.length == n) {
            res.push(item);
            return;
        }
        for (let i = 0; i < n; i++) {
            if (hash[i] || (i > 0 && !hash[i - 1] && nums[i - 1] == nums[i])) continue;
            hash[i] = true;
            tmpPath.push(nums[i]);
            backtrack(tmpPath.slice());
            hash[i] = false;
            tmpPath.pop();
        }
    }
    backtrack(tmpPath);
    return res;
};