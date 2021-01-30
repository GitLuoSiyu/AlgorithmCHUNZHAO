/**
 * @title 1582. 二进制矩阵中的特殊位置
 * @url https://leetcode-cn.com/problems/special-positions-in-a-binary-matrix/
 * @description 给你一个大小为 rows x cols 的矩阵 mat，其中 mat[i][j] 是 0 或 1，请返回 矩阵 mat 中特殊位置的数目
 * @param {number[][]} mat
 * @return {number}
 */
var numSpecial = function (mat) {
    let count = 0
    // 横列和
    let rows = mat.map(row => {
        return row.reduce((t, c) => {
            return t + c
        })
    })
    // 纵列和
    let columns = new Array(mat[0].length).fill(0);
    mat.forEach((row, index) => {
        row.forEach((c, cIndex) => {
            columns[cIndex] = columns[cIndex] + c
        })
    })
    // 横纵都为1则表示符合
    rows.forEach((r, index) => {
        if (r == 1 && columns[mat[index].findIndex(c => c == 1)] == 1) count++
    })
    return count
};