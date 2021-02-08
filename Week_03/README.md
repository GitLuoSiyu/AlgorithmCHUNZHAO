## 学习笔记

## 分治、回溯
解决一个回溯问题，实际上就是一个决策树的遍历过程。
- 1、路径：也就是已经做出的选择
- 2、选择列表：也就是你当前可以做的选择
- 3、结束条件：也就是到达决策树底层，无法再做选择的条件

## 回溯算法的框架
```python
result = []
def backtrack(路径, 选择列表):
    if 满足结束条件:
        result.add(路径)
        return

    for 选择 in 选择列表:
        做选择
        backtrack(路径, 选择列表)
        撤销选择
```
其核心就是for 循环里面的递归，在递归调用之前"做选择",在递归调用之后"撤销选择".

## 分治
分治代码模板
```java
private static int divide_conquer(Problem problem, ) {    
    // recursion terminator
    if (problem == NULL) {    
        int res = process_last_result();    
        return res;       
    }  

     // process current problem
     subProblems = split_problem(problem)   

     // 下探
     res0 = divide_conquer(subProblems[0])  
     res1 = divide_conquer(subProblems[1])    
     ...

    // merge
    result = process_result(res0, res1);    

    return result;
}
```
## N皇后问题
函数签名如下：
```c++
vector<vector<string>> solveNQueens(int n)
```
直接套用框架
```c++
vector<vector<string>> res;

// 输入棋盘边长n，返回所有合法的放置方法
vector<vector<string>> solveNQueens(int n) {
    // '.'表示空, 'Q'表示皇后 , 初始化空棋盘
    vector<string> board(n, string(n, '''''.'''''))
    backtrack(board, 0)
    return res
}

// 路径: board中小于row的那些行都已经成功放置了皇后
// 选择列表: 第row行的所有列都是放置皇后的选择
// 结束条件: row超过board的最后一行，说明棋盘满了

void backtrack(vector<string>& board, int row) {
    // 触发结束条件
    if (row == board.size()) {
        res.push_back(board);
        return;
    }
    int n = board[row].size()
    for (int col = 0; col < n; col++) {
        // 排除不合法选择
        if (!isValid(board, row, col)) 
            continue;
        // 做选择
        board[row][col] = 'Q';
        // 进入下一行决策
        backtrack(board, row + 1);
        // 撤销选择
        board[row][col] = '.'
    }
}
```
这部分主要代码其实和全排列问题差不多