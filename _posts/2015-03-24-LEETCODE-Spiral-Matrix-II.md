---
layout: post
title: LEETCODE 59 Spiral Matrix II
description: "LEETCODE Spiral Matrix II 解题报告"
modified: 2015-03-24
tags: [java, 算法, leetcode]
image:
  feature: abstract-8.jpg
  background: bg-8.png
---

# 描述：
Given an integer n, generate a square matrix filled with elements from 1 to n2 in spiral order.

For example,
Given n = 3,

You should return the following matrix:
[
 [ 1, 2, 3 ],
 [ 8, 9, 4 ],
 [ 7, 6, 5 ]
]

<!--more-->

---

螺旋顺序

# 分析：
对数组进行一层一层的填充即可

# 代码：
{% highlight java %}
public class Solution {
    public int[][] generateMatrix(int n) {
        int[][] A = new int[n][n];
        int sx = 0,sy=0;
        int ex = n-1,ey=n-1;
        int startValue = 1;

        while(sx <= ex){
            startValue = fill(A,sx,sy,ex,ey, startValue);
            sx++;sy++;ex--;ey--; //范围缩小
        }

        return A;
    }
    private int fill(int[][] A, int sx, int sy, int ex, int ey, int startValue){
        //填充顺序 sx,sy -> sx,ey -> ex,ey -> ex,sy -> sx,sy
        if(sx == ex) A[sx][sy] = startValue;
        for(int i=sy;i<ey;i++){ //上边
            A[sx][i] = startValue;
            startValue++;
        }
        for(int i=sx;i<ex;i++){ //右边
            A[i][ey] = startValue;
            startValue++;
        }
        for(int i=ey;i>sy;i--){ //下边
            A[ex][i] = startValue;
            startValue++;
        }
        for(int i=ex;i>sx;i--){ //左边
            A[i][sy] = startValue;
            startValue++;
        }

        return startValue;

    }
}
{% endhighlight %}