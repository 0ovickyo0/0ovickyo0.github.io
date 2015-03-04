---
layout: post
title: LEETCODE 136 Single Number
description: "LEETCODE Single Number 解题报告"
modified: 2015-02-27
tags: [java, 算法, leetcode]
image:
  feature: abstract-6.jpg
  background: bg-6.png
---

# 描述：
Given an array of integers, every element appears twice except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

<!--more-->

---

给定一个数组，里面的元素除了一个都会出现2次，找出那一个。

注意：算法应具有线性时间复杂度，同时控件复杂度为O（1）。

# 分析

## 1.暴力解法

最先想到的办法，先排序，然后判断第一个数和第二个数是否相等，小批量数据是没有问题的！但是数据量大的话，会超过时间限制！

### 代码：
{% highlight java %}
public class Solution {
    public int singleNumber(int[] A) {
        if(A.length<1 || A.length%2 == 0){
            return 0;
        }
        if(A.length == 1){
            return A[0];
        }
        Arrays.sort(A);
        int i=0;
        while(i<A.length-1){
            if(A[i] != A[i+1]){
                return A[i];
            }
            i=i+2;
        }
        return 0;
    }
}
{% endhighlight %}

## 2.利用异或运算
因为 A^A  = 0， A^0 = A 且或运算时可以交换的，于是，对于{1,3,5,6,5,3,1}会有这样的结果：

(1^3^5^6^5^3^1) => ((1^1)^(3^3)^(5^5)^(6)) => (0^0^0^6) => 6

这样就能够把只出现一次的元素给找出来了！

### 代码：

{% highlight java %}
	public class Solution {
	    public int singleNumber(int[] A) {
	        int ret = A[0];
	        for (int i = 1; i < A.length; i++) {
	            ret ^= A[i];
	        }
	        return ret;
	    }
	}
{% endhighlight %}

# 相关阅读：
[LEETCODE Roman to Integer]({{ site.url }}/LEETCODE-Single-NumberII/)
