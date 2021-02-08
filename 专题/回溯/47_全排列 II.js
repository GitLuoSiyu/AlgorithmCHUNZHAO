/**
 * @title 47. 全排列 II
 * @url https://leetcode-cn.com/problems/permutations-ii/
 * @description
 * @key 回溯
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


/**
该题是基础全排列的变种，主要在于去重。

针对同一层次的计算，对连续的相同的元素只选取一个进行后续的替换，即可等价于基础全排列。例如，当前层次是[1,2, 1, 2], 我们可以只选取第一次出现的元素作为替换： 对于第一个元素1， 第一次出现，则其结果为1与[2, 1, 2]的所有全排列的连接，标记1已使用；对于第二个元素2，2未使用，则其结果为2与[1, 1, 2]的全排列的连接，并标记2已使用; 对于第3个元素1，其已使用，跳过；对于最后一个元素2，由于2已使用，跳过。

 */