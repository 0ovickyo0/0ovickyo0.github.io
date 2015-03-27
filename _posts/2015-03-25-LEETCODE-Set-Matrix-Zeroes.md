---
layout: post
title: LEETCODE 73 Set Matrix Zeroes
description: "LEETCODE Set Matrix Zeroes 解题报告"
modified: 2015-03-25
tags: [java, 算法, leetcode]
image:
  feature: abstract-9.jpg
  background: bg-9.png
---

# 描述：
Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in place.

在一个mxn的矩阵中，如果一个元素值为0，那么将其行列元素都设为0

<!--more-->

# 分析：

## 我的方法：

首先遍历找到元素，记录位置，记录行列值。然后再遍历矩阵设置值为0。

## 更佳的方法：

此题是希望复用已有资源。这里可以选择第一行和第一列来存储标志位。

1.先确定第一行和第一列是否需要清零

2.扫描剩下的矩阵元素，如果遇到了0，就将对应的第一行和第一列上的元素赋值为0

3.根据第一行和第一列的信息，已经可以讲剩下的矩阵元素赋值为结果所需的值了

4.根据1中确定的状态，处理第一行和第一列。

# 代码：
我的解法（一次通过，赞！）
{% highlight java %}
public class Solution {
    public void setZeroes(int[][] matrix) {
        int[] rows = new int[matrix.length];
        int[] cols = new int[matrix[0].length];

        for(int i=0;i<matrix.length;i++){
            for(int j=0;j<matrix[0].length; j++){
                if(matrix[i][j] == 0){
                    rows [i] = 1;
                    cols [j] = 1;
                }
            }
        }

        for(int i=0;i<matrix.length;i++){
            for(int j=0;j<matrix[0].length;j++){
                if(rows[i] == 1 || cols[j] == 1)
                    matrix[i][j] = 0;

            }
        }
    }
}
{% endhighlight %}

更高效的解法二：
{% highlight java %}
public class Solution {
    public void setZeroes(int[][] matrix) {
        //第一行第一列是否需要清零
        boolean rowflag = false;
        boolean colflag = false;
        for(int i=0; i<matrix.length; i++)
            if(matrix[i][0] == 0) colflag = true;

        for(int i=0; i< matrix[0].length; i++)
            if(matrix[0][i] == 0) rowflag = true;

        //如果i行j列元素为0，则将[i][0]和[0][j]至0
        for(int i=0; i<matrix.length;i++)
            for(int j=0;j<matrix[0].length;j++)
                if(matrix[i][j] == 0) {
                    matrix[i][0]=0;
                    matrix[0][j]=0;
                }

        //检测第一行第一列元素，将矩阵中对应行列置0
        for(int i=1;i<matrix.length;i++)
            for(int j=1;j<matrix[0].length;j++)
                if(matrix[i][0]==0 || matrix[0][j]==0)
                    matrix[i][j] = 0;


        //判断flag，看是否将第一行第一列全置0
        if(rowflag)
            for(int i=0;i<matrix[0].length;i++)
                matrix[0][i]=0;
        if(colflag)
            for(int i=0;i<matrix.length;i++)
                matrix[i][0]=0;
    }
}
{% endhighlight %}
