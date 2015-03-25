---
layout: post
title: LEETCODE 26 Remove Duplicates from Sorted Array
description: "LEETCODE Remove Duplicates from Sorted Array 解题报告"
modified: 2015-03-21
tags: [java, 算法, leetcode]
image:
  feature: abstract-5.jpg
  background: bg-5.png
---

# 描述：
Given a sorted array, remove the duplicates in place such that each element appear only once and return the new length.

Do not allocate extra space for another array, you must do this in place with constant memory.

For example,
Given input array A = [1,1,2],

Your function should return length = 2, and A is now [1,2].

<!--more-->

# 代码：
so easy
{% highlight java %}
public class Solution {
    public int removeDuplicates(int[] A) {
        if(A.length==0) return 0;
        int count=0;
        for(int i=1;i<A.length;i++){
            if(A[i] != A[count])
                A[++count] = A[i];
        }
        return count+1;
    }
}
{% endhighlight %}
