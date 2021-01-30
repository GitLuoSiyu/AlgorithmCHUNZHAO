/**
 * @title 33. 搜索旋转排序数组
 * @url https://leetcode-cn.com/problems/search-in-rotated-sorted-array/
 * @description 升序排列的整数数组 nums 在预先未知的某个点上进行了旋转（例如， [0,1,2,4,5,6,7] 经旋转后可能变为 [4,5,6,7,0,1,2] ）。请你在数组中搜索 target ，如果数组中存在这个目标值，则返回它的索引，否则返回 -1 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let len = nums.length;
    if (target < nums[0]) {
        for (let i = len; i--;) {
            if (nums[i] === target) return i
            else if (target > nums[i] || nums[i] > nums[len - 1]) break
        }
    } else {
        for (var j = 0; j < len; j++) {
            if (nums[j] === target) return j
            else if (target < nums[j] || nums[j] < nums[0]) break
        }
    }
    return -1
};


/**
target < 第一位数，从后往前遍历
target = 当前数，返回下标
target > 当前数，前面数一定比当前数更小，终止循环
当前数 > 最后一位数，到因旋转产生的临界点，前面数一定比当前数更大，终止循环
target >= 第一位数，从前往后遍历
target = 当前数，返回下标
target < 当前数，后面数一定比当前数更大，终止循环
当前数 < 第一位数，到因旋转产生的临界点，后面数一定比当前数更小，终止循环
 */