---
layout: post
title: LEETCODE 121 Best Time to Buy and Sell Stock
description: "LEETCODE Best Time to Buy and Sell Stock 解题报告"
modified: 2015-03-13
tags: [java, 算法, leetcode]
image:
  feature: abstract-8.jpg
  background: bg-8.png
---

# 问题描述：
Say you have an array for which the ith element is the price of a given stock on day i.

If you were only permitted to complete at most one transaction (ie, buy one and sell one share of the stock), design an algorithm to find the maximum profit.

<!--more-->

# 分析：
只能操作一次，找出最大盈利

# 代码：
{% highlight java %}
public class Solution {
    public int maxProfit(int[] prices) {
        if(prices.length == 0) return 0;
        int low = prices[0];
        int max = 0;
        for(int i=0;i<prices.length;i++){
            if(prices[i] < low){
                low = prices[i];
            }else if(prices[i] - low > max){
                max = prices[i] - low;
            }
        }
        return max;
    }
}
{% endhighlight %}