---
layout: post
title: LEETCODE 80 Remove Duplicates from Sorted Array II
description: "LEETCODE Remove Duplicates from Sorted Array II 解题报告"
modified: 2015-03-31
tags: [java, 算法, leetcode]
image:
  feature: abstract-4.jpg
  background: bg-4.png
---

# 描述：
Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array A = [1,1,1,2,2,3],

Your function should return length = 5, and A is now [1,1,2,2,3].


<!--more-->

# 代码：
{% highlight java %}
public class Solution {
    public int removeDuplicates(int[] A) {
        if(A.length == 0) return 0;
        int length = 1; //数组长度
        int dup = 0; //重复次数
        for(int i=1;i<A.length;i++){
            if(A[i] == A[i-1]){ //当前元素和上一个元素相等
                dup++;
                if(dup > 1){ //出现次数超过2，说明有3个或更多一样元素
                }else{
                    A[length] = A[i];
                    length++;
                }
            }else{
                dup = 0;
                A[length] = A[i];
                length++;
            }
        }
        return length;
    }
}
{% endhighlight %}
