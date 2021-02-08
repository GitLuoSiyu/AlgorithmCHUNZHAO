/**
 * @title 55_跳跃游戏
 * @url https://leetcode-cn.com/problems/jump-game/
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
    for (var i = 0, max = 0; i < nums.length; i++)
        if (i <= max) max = Math.max(max, i + nums[i])
    else return false
    return true
};