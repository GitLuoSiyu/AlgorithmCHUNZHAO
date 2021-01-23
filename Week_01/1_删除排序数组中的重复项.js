/**
 * @title 删除数组中的重复项
 * @key 不适用 ES6 的SET，使用自身hash
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        while (i != nums[i] && nums[nums[i]] != nums[i]) {
            var temp = nums[nums[i]]
            nums[nums[i]] = nums[i]
            nums[i] = temp
        }
        if(i !== nums[i] && nums[nums[i]] == nums[i]) {
            return nums[i]
        }
    }
};