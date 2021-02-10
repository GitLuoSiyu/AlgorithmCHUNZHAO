/**
 * @title 手写选择
 * @param {*} nums 
 */
const selectSort = (nums) => {
    var idx; // 最小值的索引
    for (var i = 0; i < nums.length - 1; i++) {
        idx = i;
        for (var j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[idx]) {
                idx = j;
            }
        }
        if (nums[i] > nums[idx]) {
            let tmp = nums[idx];
            nums[idx] = nums[i];
            nums[i] = tmp;
        }
    }
    return nums;
}