/**
 * @title 406. 根据身高重建队列
 * @url https://leetcode-cn.com/problems/queue-reconstruction-by-height/
 * @param {number[][]} people
 * @return {number[][]}
 */
var reconstructQueue = function(people) {
    if (!people || !people.length) return [];
    people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])

    const res = []
    people.forEach((item) => {
        res.splice(item[1], 0, item)
    })
    return res
};

/**
 * @description
身高按降序排列，同一高度按k升序排列
遍历people，把这个人插入到k索引的对应位置
 */