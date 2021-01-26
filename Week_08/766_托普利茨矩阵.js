/**
 * @title 766. 托普利茨矩阵
 * @description 如果矩阵上每一条由左上到右下的对角线上的元素都相同，那么这个矩阵是 托普利茨矩阵。给定一个 M x N 的矩阵，当且仅当它是托普利茨矩阵时返回 True。
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
    if (matrix.length === 1 || matrix[0].length === 1) return true;

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 1; j < matrix[0].length; j++) {
            // 只需判断每个元素是否和左上角的元素相等就ok了
            if (matrix[i][j] !== matrix[i-1][j-1]) {
                return false
            }
        }
    }
    return true
};