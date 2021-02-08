/**
 * @title 74_搜索二维矩阵
 * @url https://leetcode-cn.com/problems/search-a-2d-matrix/
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    if (!matrix || !matrix.length) return false;

    const rows = matrix.length;
    const cols = matrix[0].length;
    let l = 0,
        r = rows * cols - 1,
        mid = 0;

    while (l <= r) {
        mid = ((l + r) / 2) << 0;
        const [x, y] = getCoordFromPos(mid);
        const num = matrix[x][y];
        if (num < target) l = mid + 1;
        else if (num > target) r = mid - 1;
        else return true;
    }

    return false;

    function getCoordFromPos(pos) {
        const x = (pos / cols) << 0;
        const y = pos % cols;
        return [x, y];
    }
};