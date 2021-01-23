/**
 * @title 2D接雨水
 * @desc 给定 n 个非负整数表示每个宽度为 1 的柱子的高度图，计算按此排列的柱子，下雨之后能接多少雨水。
 * @key 每一列上的面积=Math.min(left_max[i],right_max[i])-height[i]
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    if(!height.length) return 0;

    const n = height.length
    let volumn = 0, // 容量
        left_max = [],
        right_max = [];
    
    // 计算左边数组的最大
    left_max[0] = height[0]
    for (let i = 1; i < n; i++) {
        left_max[i] = Math.max(left_max[i-1], height[i])
    }

    // 计算右边数组的最大
    right_max[n-1] = height[n-1]
    for (let i = n-2; i >= 0; i--) {
        right_max[i] = Math.max(right_max[i+1], height[i])
    }

    // 计算雨水容量和
    for (let i = 0; i < n; i++) {
        volumn += Math.min(left_max[i], right_max[i]) - height[i]
    }

    return volumn
};