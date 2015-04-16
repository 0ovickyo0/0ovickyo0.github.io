---
layout: post
title: LEETCODE 88 Merge Sorted Array
description: "LEETCODE Merge Sorted Array   解题报告"
modified: 2014-10-08
tags: [java, 算法, leetcode]
image:
  feature: abstract-9.jpg
  background: bg-9.png
---

# 描述
Given two sorted integer arrays A and B, merge B into A as one sorted array.

Note:
You may assume that A has enough space (size that is greater or equal to m + n) to hold additional elements from B. The number of elements initialized in A and B are m and n respectively.

<!--more-->
# 代码：
{% highlight java %}
public class Solution {
    public void merge(int A[], int m, int B[], int n) {
        if(m == 0){
            for(int i=0;i<n;i++){ //此处不能直接A=B
                A[i] = B[i];
            }
            return;
        }
        int b = n-1;
        int a = m-1;
        int c = m+n-1;
        while(b>=0){
            if(a>=0 && B[b] >= A[a]){
                A[c] = B[b];
                b--;
                c--;
            }else if(c>=0 && a>=0 && B[b] < A[a]){
                A[c] = A[a];
                a--;
                c--;
            }else{ //A里面原有的都已添加，将B添加到A的前面部分
                A[c] = B[b];
                b--;
                c--;
            }
        }
    }
}
{% endhighlight %}