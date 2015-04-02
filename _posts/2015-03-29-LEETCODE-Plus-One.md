---
layout: post
title: LEETCODE 66 Plus One
description: "LEETCODE Plus One 解题报告"
modified: 2015-03-29
tags: [java, 算法, leetcode]
image:
  feature: abstract-2.jpg
  background: bg-2.png
---

# 描述：
Given a non-negative number represented as an array of digits, plus one to the number.

The digits are stored such that the most significant digit is at the head of the list.

<!--more-->

# 分析：
一个整数按位存储于一个int数组中，排列顺序为：最高位在array[0] ，最低位在[n-1]，例如：98，存储为：array[0]=9; array[1]=8;然后给这个数加一，考虑进位

# 代码：
{% highlight java %}
public class Solution {
    public int[] plusOne(int[] digits) {
        int next=1; //是否有进位
        for(int i=digits.length-1;i>=0;i--){
            digits[i] = digits[i]+next;
            if(digits[i]==10){
                digits[i]=0; //出现了进位
                next = 1;
            }else{
                next = 0;
                break; //没有出现进位
            }
        }
        //处理最高位的情况
        if(next == 1) { //进位到了最高位
            int[] copy = new int[digits.length + 1];
            copy[0] = 1;
            for (int j = 0; j < digits.length; j++) {
                copy[j + 1] = digits[j];
            }
            return copy;
        }
        return digits; //没有进位到最高位
    }
}
{% endhighlight %}

