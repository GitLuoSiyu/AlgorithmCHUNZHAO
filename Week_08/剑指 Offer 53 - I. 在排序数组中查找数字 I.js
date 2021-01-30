/**
 * @剑指 Offer 53 - I. 在排序数组中查找数字 I
 * 利用二分法
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    const length = nums.length;
    let start = -1,
        end = -1;

    let left = 0,
        right = length - 1;
    // 找到左边界：找到第一次出现
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            start = mid;
            right = mid - 1; // important
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    left = 0;
    right = length - 1;
    // 找到右边界：找到第2次出现
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        if (nums[mid] === target) {
            end = mid;
            left = mid + 1; // important
        } else if (nums[mid] > target) {
            right = mid - 1;
        } else {
            left = mid + 1;
        }
    }

    return start <= end && start !== -1 ? end - start + 1 : 0
};