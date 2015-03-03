---
layout: post
title: LEETCODE 169 Majority Element
description: "LEETCODE Majority Element 解题报告"
modified: 2015-02-24
tags: [java, 算法, leetcode]
image:
  feature: abstract-3.jpg
  background: bg-3.png
---

# 描述：
Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

<!--more-->

---

给定一个数组，找到它的majority元素，majority元素的定义是出现次数超过⌊ n/2 ⌋。数组不为空且majority元素必定存在。

# 分析：
先排序，再计算出现次数

# 代码：
{% highlight java %}
public class Solution {
    public int majorityElement(int[] num) {
        Arrays.sort(num);
        int count = 0;
        for(int i=1;i<num.length;i++){
            if(num[i] == num[i-1]){
                count++;
                if(count >= num.length/2) return num[i];
            }else{
                count = 0;
            }
        }
        return num[0];
    }
}
{% endhighlight %}