/**
 * @title 1711. 大餐计数
 * @url https://leetcode-cn.com/problems/count-good-meals/
 * @description 
 * @param {number[]} deliciousness
 * @return {number}
 */
var countPairs = function (deliciousness) {
    let sum = 0,
        len = deliciousness.length;
    let map = {};
    for (let i = 0; i < len; i++) {
        let d = deliciousness[i];
        // 是否和为2的幂
        for (let j = 0; j < 22; ++j) {
            let target = Math.pow(2, j);
            if (map[target - d]) {
                sum += map[target - d];
            }
        }
        // 加入map中，计数加一
        map[d] ? map[d]++ : map[d] = 1;
    }
    return sum % (Math.pow(10, 9) + 7);
};


/**
 * @key 两数之和题目很像，就是把两数之和 与目标target的判断 变种为 与2的0-21次幂的判断。if那段是指map中有target-d，就有map中就有多少个这个数能满足和为幂，然后map的用法可以画图模拟一下，是一种自后向前的不重复的循环遍历。
 */