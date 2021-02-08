/**
 * @title 153_寻找旋转排序数组中的最小值
 * @url https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array/
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    var low = 0;
    var high = nums.length - 1;
    while (low < high) {
        var mid = (low + high) >> 1;
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else {
            high = mid
        }
    }
    return nums[low];
};