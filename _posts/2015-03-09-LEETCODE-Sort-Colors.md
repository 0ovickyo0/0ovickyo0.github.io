---
layout: post
title: LEETCODE 75 Sort Colors
description: "LEETCODE Sort Colors 解题报告"
modified: 2015-03-09
tags: [java, 算法, leetcode]
image:
  feature: abstract-4.jpg
  background: bg-4.png
---

# 描述：
Given an array with n objects colored red, white or blue, sort them so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note:
You are not suppose to use the library's sort function for this problem.

click to show follow up.

<!--more-->

Follow up:
A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.

Could you come up with an one-pass algorithm using only constant space?

---
简单来说题目的要求就是排序一个由若干个012组成的数组，不能用系统的排序功能。

# 代码：
{% highlight java %}
public class Solution {
    public void sortColors(int[] A) {
        int a=0,b=0,c=0;
        for(int i=0;i<A.length;i++){
            if(A[i] == 0) a++;
            else if(A[i] == 1) b++;
            else if(A[i] == 2) c++;
        }
        for(int i=0;i<a;i++) A[i]=0;
        for(int i=0;i<b;i++) A[a+i]=1;
        for(int i=0;i<c;i++) A[a+b+i]=2;
    }
}
{% endhighlight %}
还可以这么写：
{% highlight java %}
public class Solution {
    public void sortColors(int[] A) {
        int l=0,r=A.length-1;
        int i=0;
        while(i<r+1){
            if(A[i] == 0){
                int temp = A[i];
                A[i] = A[l]; A[l]=temp;
                l++;
                i++;
                continue;
            }else if(A[i] == 2){
                int temp = A[i];
                A[i] = A[r]; A[r]=temp;
                r--;
                continue;
            }
            i++;
        }
    }
}
{% endhighlight %}
