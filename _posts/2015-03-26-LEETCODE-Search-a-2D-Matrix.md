---
layout: post
title: LEETCODE 74 Search a 2D Matrix
description: "LEETCODE Search a 2D Matrix 解题报告"
modified: 2015-03-26
tags: [java, 算法, leetcode]
image:
  feature: abstract-10.jpg
  background: bg-10.png
---

# 描述：

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.

The first integer of each row is greater than the last integer of the previous row.

For example,

Consider the following matrix:

	[
	  [1,   3,  5,  7],
	  [10, 11, 16, 20],
	  [23, 30, 34, 50]
	]
Given target = 3, return true.

<!--more-->

---
在矩阵mxn中找一个数。矩阵有如下特性：每一行从左到右递增，每一行第一个数字大于上一行最后一个数字。

# 分析：
变相二分查找，注意二分查找条件

# 代码：
{% highlight java %}
public class Solution {
    public boolean searchMatrix(int[][] matrix, int target) {
        int row = matrix.length;
        int col = matrix[0].length;
        int l = 0,r=row-1;
        while(l<=r){
            int mid = (l+r)/2;
            if(target == matrix[mid][0])
                return true;
            else if(target > matrix[mid][0])
                l = mid+1;
            else r = mid-1;
        }
        int targetRow = r>0?r:0;
        l = 0;
        r = col-1;
        while(l<=r){
            int mid = (l+r)/2;
            if(target == matrix[targetRow][mid])
                return true;
            else if(target > matrix[targetRow][mid])
                l = mid+1;
            else {
                r = mid-1;
            }

        }
        return false;
    }
}
{% endhighlight %}

