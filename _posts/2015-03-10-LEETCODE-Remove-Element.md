---
layout: post
title: LEETCODE 27 Remove Element
description: "LEETCODE Remove Element 解题报告"
modified: 2015-03-10
tags: [java, 算法, leetcode]
image:
  feature: abstract-5.jpg
  background: bg-5.png
---

# 描述：
Given an array and a value, remove all instances of that value in place and return the new length.

The order of elements can be changed. It doesn't matter what you leave beyond the new length.

<!--more-->

# 代码：

注意：上下限问题，数组可以被改变，甚至和原来数组中值不一样。
{% highlight java %}
public class Solution {
    public int removeElement(int[] A, int elem) {
        int length=0;
        for(int i=0;i<A.length;i++){
            if(A[i]!=elem){
                A[length++] = A[i];
            }
        }
        return length;
    }
}
{% endhighlight %}