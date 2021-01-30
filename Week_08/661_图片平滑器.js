/**
 * @title 661. 图片平滑器
 * @desc 包含整数的二维矩阵 M 表示一个图片的灰度。你需要设计一个平滑器来让每一个单元的灰度成为平均灰度 (向下舍入) ，平均灰度的计算是周围的8个单元和它本身的值求平均，如果周围的单元格不足八个，则尽可能多的利用它们。
 * @param {number[][]} M
 * @return {number[][]}
 */
var imageSmoother = function (M) {
    let R = M.length,
        C = M[0].length
    let res = Array.from({
        length: R
    }, () => ([]))
    for (let r = 0; r < R; r++) {
        for (let c = 0; c < C; c++) {
            let count = 0
            res[r][c] = 0
            // 遍历当前地元素周边3x3矩阵
            for (let nr = r - 1; nr <= r + 1; nr++) {
                for (let nc = c - 1; nc <= c + 1; nc++) {
                    if (nr >= 0 && nr < R && nc >= 0 && nc < C) {
                        res[r][c] += M[nr][nc]
                        count++
                    }
                }
            }
            res[r][c] = Math.floor(res[r][c] / count)
        }
    }
    return res
};