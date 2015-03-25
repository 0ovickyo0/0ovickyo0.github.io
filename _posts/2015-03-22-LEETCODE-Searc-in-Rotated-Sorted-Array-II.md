---
layout: post
title: LEETCODE 81 Search in Rotated Sorted Array II
description: "LEETCODE Search in Rotated Sorted Array II 解题报告"
modified: 2015-03-22
tags: [java, 算法, leetcode]
image:
  feature: abstract-6.jpg
  background: bg-6.png
---

# 描述：
Follow up for "Search in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?

Write a function to determine if a given target is in the array.

<!--more-->

# 代码：
{% highlight java %}
public class Solution {
    public boolean search(int[] A, int target) {
        if(A.length == 0)
            return false;
        for(int i = 0; i < A.length; ++i)
            if(A[i] == target)
                return true;
        return false;
    }
}
{% endhighlight %}

