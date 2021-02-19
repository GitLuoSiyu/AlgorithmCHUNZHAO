/**
 * @title 452. 用最少数量的箭引爆气球
 * @url https://leetcode-cn.com/problems/minimum-number-of-arrows-to-burst-balloons/
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    let n = points.length
    if (!n) return 0;
    points.sort((a, b) => {
        return a[1] - b[1]
    })

    let count = 1
    let end = points[0][1]
    for (let point of points) {
        let start = point[0]
        if (start > end) {
            count++
            end = point[1]
        }
    }
    return count
};

/**
 * @description
points各个区间先根据区间的最后一个元素排序，排完序后points里第一个区间里的末尾元素是points所有区间中末尾元素最小的，记为end;
遍历points各个区间，取每个区间的第一个元素(记为start)和end相比较，如果start > end 时，说明此时这两个区间不会重叠，更新计数和更新end的值，如果start <= end，说明此时这两个区间重叠，则跳过不处理
最后所求的计数count即为结果
 */