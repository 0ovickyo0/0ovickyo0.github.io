---
layout: post
title: LEETCODE 35 Search Insert Position
description: "LEETCODE Search Insert Position 解题报告"
modified: 2015-02-20
tags: [java, 算法, leetcode]
image:
  feature: abstract-10.jpg
  background: bg-10.png
---

# 描述：
Given a sorted array and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You may assume no duplicates in the array.

<!--more-->

Here are few examples.
[1,3,5,6], 5 → 2
[1,3,5,6], 2 → 1
[1,3,5,6], 7 → 4
[1,3,5,6], 0 → 0

---

给定一个数组和一个数，找到这个数应该被插入的地方，或者返回数在数组中的下标，假设数组中数字没有重复。

# 分析：
考察二分查找

# 代码：
{% highlight java %}
public class Solution {
    public int searchInsert(int[] A, int target) {
        int l=0,r=A.length;
        while(l<r){
            int i=(l+r)/2;
            if(target < A[i]){
                r = i;
            }else if(target > A[i]){
                l = i+1;
            }else {
                return i;
            }
        }
        return l;
    }
}
{% endhighlight %}