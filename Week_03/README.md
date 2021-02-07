## 学习笔记

### 分治、回溯
###【1.分支、回溯的实现和特性】

分治回溯实际是 递归的一种方式

子问题，重复性和迭代

### 分治
分治代码模板 https://shimo.im/docs/zvlDqLLMFvcAF79A/read

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
### 回溯
括号生成问题 https://leetcode-cn.com/problems/generate-parentheses/