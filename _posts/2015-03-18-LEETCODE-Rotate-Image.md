---
layout: post
title: LEETCODE 48 Rotate Image
description: "LEETCODE Rotate Image 解题报告"
modified: 2015-03-18
tags: [java, 算法, leetcode]
image:
  feature: abstract-2.jpg
  background: bg-2.png
---

# 描述：
You are given an n x n 2D matrix representing an image.

Rotate the image by 90 degrees (clockwise).

Follow up:
Could you do this in-place?

<!--more-->

---

90度旋转一个矩阵


# 代码：
{% highlight java %}
public class Solution {
    public void rotate(int[][] matrix) {
        for(int i=0,j=matrix.length-1;i<j;i++,j--){
            for(int m=i,n=j;m<j;m++,n--){
                int t = matrix[i][m];
                matrix[i][m] = matrix[n][i];
                matrix[n][i] = matrix[j][n];
                matrix[j][n] = matrix[m][j];
                matrix[m][j] = t;
            }
        }
    }
}
{% endhighlight %}
