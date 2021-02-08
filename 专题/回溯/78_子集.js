/**
 * @title 78. 子集
 * @url https://leetcode-cn.com/problems/subsets/
 * @description 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    const res = [];

    const dfs = (index, list) => {
        res.push(list.slice()); // 调用子递归前，加入解集
        for (let i = index; i < nums.length; i++) { // 枚举出所有可选的数
            list.push(nums[i]); // 选这个数
            dfs(i + 1, list); // 基于选这个数，继续递归，传入的是i+1，不是index+1
            list.pop(); // 撤销选这个数
        }
    };

    dfs(0, []);
    return res;
};