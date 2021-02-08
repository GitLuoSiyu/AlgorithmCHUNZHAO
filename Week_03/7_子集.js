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
        res.push(list.slice()); 
        for (let i = index; i < nums.length; i++) { 
            list.push(nums[i]); 
            dfs(i + 1, list); 
            list.pop(); 
        }
    };

    dfs(0, []);
    return res;
};