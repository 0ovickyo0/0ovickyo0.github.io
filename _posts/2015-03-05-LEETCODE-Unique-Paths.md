---
layout: post
title: LEETCODE 62 Unique Paths
description: "LEETCODE Unique Paths 解题报告"
modified: 2015-03-05
tags: [java, 算法, leetcode]
image:
  feature: abstract-11.jpg
  background: bg-11.png
---


# 描述：
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

<!--more-->

---

求从起点到终点有多少种路径，只能往下或者往右走。
mn最大为100。

# 分析：
首先想到的是枚举法。超时了。
{% highlight java %}
public class Solution {
    int count=0;
    int ex=0;
    int ey=0;
    public int uniquePaths(int m, int n) {
        if(m<1 || n<1) return 0;
        ex = m;ey = n;
        move(0,0);
        return count;
    }
    private void move(int x,int y){
        if(x==ex && y == ey) count++; //到达终点

        //先尝试一直向右
        if(x<ex){
            x=x+1;
            move(x,y);
        }
        //再尝试向下
        if(y<ey){
            y=y+1;
            move(x,y);
        }
    }
}
{% endhighlight %}

好吧，再思考，这题目的考查点其实是一位DP。 永远存在：Step[i][j] = Step[i-1][j] + Step[i][j-1]
需要注意的是，判断m<2，n<2，还有n个初始值
{% highlight java %}
public class Solution {
    public int uniquePaths(int m, int n) {
        if(m<2 || n<2) return 1;
        int[][] step = new int[m][n];
        for(int i=1;i<m;i++) step[i][0] = 1;
        for(int i=1;i<n;i++) step[0][i] = 1;
        step[0][0] = 0;
        for(int i=1;i<m;i++){
            for(int j=1;j<n;j++){
                step[i][j] = step[i][j-1] + step[i-1][j];
            }
        }
        return step[m-1][n-1];
    }
}
{% endhighlight %}