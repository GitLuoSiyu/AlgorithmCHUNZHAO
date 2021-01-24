/**
 * title: 4. 寻找两个正序数组的中位数
 * 给定两个大小为 m 和 n 的正序（从小到大）数组 nums1 和 nums2。请你找出并返回这两个正序数组的中位数。
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 * @desc: 
 * 双指针排序法，时间复杂度为O(m + n)
 * (sort使用的是插入排序和快速排序结合的排序算法。数组长度不超过10时，使用插入排序。
 * 长度超过10使用快速排序。在数组较短时插入排序更有效率。)
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let reIndex = nums2.length - 1;
    for (let i = nums1.length - 1; i >= 0; i--) {
        while (nums1[i] <= nums2[reIndex] && reIndex > -1) {
            nums1.splice(i + 1, 0, ...(nums2.splice(reIndex, 1)));
            reIndex--
        }
    }
    // 合并
    const arr = nums2.concat(nums1)
    const {length} = arr
    return length%2 ? arr[Math.floor(length/2)] : (arr[length/2] + arr[length/2 -1])/2

};