/**
 * @title 154. 寻找旋转排序数组中的最小值 II
 * @url https://leetcode-cn.com/problems/find-minimum-in-rotated-sorted-array-ii/
 * @description 假设按照升序排序的数组在预先未知的某个点上进行了旋转, 请找出其中最小的元
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
    var low = 0,
        high = nums.length - 1;
    while (low < high) {
        var mid = (low + high) >> 1;
        if (nums[mid] > nums[high]) {
            low = mid + 1;
        } else if (nums[mid] == nums[high]) {
            high--;
        } else {
            high = mid
        }
    }
    return nums[low]
};