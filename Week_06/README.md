## 学习笔记
## 63. 不同路径 II的状态方程

### 思路
①.走到点(i, j)，要么是从上边的点走过来的，要么是从左边的点走过来的
②.到达(i,j)有几种方式 = 到达(i-1,j)有几种方式 + 到达(i,j-1)有几种方式：ways(i, j) = ways(i - 1, j) + ways(i, j - 1)ways(i,j)=ways(i−1,j)+ways(i,j−1)
③.可以用递归，也可以用自下而上的DP：用数组去记录子问题的解（对应递归就是子调用）
dp[i][j]：到达(i,j)的路径数（方式数）。dp[i][j] = dp[i - 1][j] + dp[i][j - 1]dp[i][j]=dp[i−1][j]+dp[i][j−1]

### “障碍”怎么处理
也许你会想，遇到障碍我要绕着走，但这种“动态”的想法不符合 DP “状态”的思路
我们思考单个点的“状态”：
障碍点，是无法抵达的点，是到达方式数为 0 的点
是无法从它这里走到别的点的点，即无法提供给别的点方式数的点

### base case
dp[0][0]=1dp[0][0]=1 ，出发点就是终点，什么都不用做，方式数 1
第一行其余的：当前点走不了，要么是它本身是“障碍”，要么是它左边的点走不了，否则，路径数是 1，走一条直线过来
第一列其余的：当前点走不了，要么是它本身是“障碍”，要么是它上边的点走不了，否则，路径数是 1，走一条竖线过来

```javascript
var uniquePathsWithObstacles = function (obstacleGrid) {
    if (obstacleGrid[0][0] == 1) return 0;
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp = new Array(m);
    for (let i = 0; i < m; i++) dp[i] = new Array(n);

    dp[0][0] = 1;
    for (let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] == 1 || dp[i - 1][0] == 0 ? 0 : 1;
    }
    for (let i = 1; i < n; i++) {
        dp[0][i] = obstacleGrid[0][i] == 1 || dp[0][i - 1] == 0 ? 0 : 1;
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = obstacleGrid[i][j] == 1 ?
                0 :
                dp[i - 1][j] + dp[i][j - 1];
        }
    }
    return dp[m - 1][n - 1];
};
```







