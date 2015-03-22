---
layout: post
title: LEETCODE 64 Minimum Path Sum
description: "LEETCODE Minimum Path Sum 解题报告"
modified: 2015-03-19
tags: [java, 算法, leetcode]
image:
  feature: abstract-3.jpg
  background: bg-3.png
---

# 描述：

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.


Note: You can only move either down or right at any point in time.
<!--more-->

# 分析：

本题我们首先可以找出递推关系，比如设存放起点到每个格子 i，j 的最小路径和的二维数组为 MPS[i][j]，那么递推公式为：

MPS[i][j] = Min（MPS[i-1][j]，MPS[i][j-1]）+ val[i][j]；

即格子 i，j 的MPS值可能有两个来源：其左侧格子 i，j-1 或者其上侧格子 i-1，j ；取这两个来源的较小MPS值，再加上当前格子的值 val[i][j] 即为结果。

由于是从左上方向右下方走，故我们可以利用一个双重循环来进行迭代计算，外层循环以行为单位，内层循环以列为单位，这样可以利用已经计算好的阶段 、状态来计算当前格子的结果，因为每次计算某个格子时，其左侧格子和上侧格子结果已经算好，这也是动态规划比递归要快的原因。

# 代码：
{% highlight java %}
public class Solution {
    public int minPathSum(int[][] grid) {
        if(grid.length == 0) return 0;
        int m=grid.length,n=grid[0].length;
        int[][] step = new int[m][n];
        step[0][0] = grid[0][0];
        for(int i=1;i<m;i++) step[i][0] = step[i-1][0] + grid[i][0];
        for(int i=1;i<n;i++) step[0][i] = step[0][i-1] + grid[0][i];

        for(int i=1;i<m;i++){
            for(int j=1;j<n;j++){
                step[i][j] = (step[i-1][j]<step[i][j-1]?step[i-1][j] : step[i][j-1]) + grid[i][j];
            }
        }
        return step[m-1][n-1];
    }
}
{% endhighlight %}