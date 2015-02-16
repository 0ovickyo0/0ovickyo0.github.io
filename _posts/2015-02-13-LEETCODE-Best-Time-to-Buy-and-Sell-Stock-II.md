---
layout: post
title: LEETCODE 122 Best Time to Buy and Sell Stock II
description: "LEETCODE Best Time to Buy and Sell Stock II  解题报告"
modified: 2015-02-13
tags: [java, 算法, leetcode]
image:
  feature: abstract-3.jpg
  background: bg-3.png
---

# 问题描述

Say you have an array for which the ith element is the price of a given stock on day i.

Design an algorithm to find the maximum profit. You may complete as many transactions as you like (ie, buy one and sell one share of the stock multiple times). However, you may not engage in multiple transactions at the same time (ie, you must sell the stock before you buy again).

---

假设你有一只股票i天的价格走势，找出最佳盈利操作方法，你可以操作任意多次，但是你在买入之前必须先卖出。

<!--more-->

# 解决方案

我的实现（想法是确保每次在最低点买入，在最高点卖出。这样虽然能使得操作股票的次数最少，但是却不是最简单的代码）：
{% highlight java %}
public class Solution {
    public int maxProfit(int[] pricess) {
        int profile = 0;
        int low=0;
        int high=0;
        boolean has = false; //当前是否持有股票，true持有，
        boolean radio= true; //true 上升，false下降
        if(pricess.length < 2){
            return 0 ;
        }else if(pricess[0] <= pricess[1]){
            low = pricess[0];has=true;
        }else if(pricess[0] > pricess[1]) {
            radio = false;
        }
        for(int i=0;i<pricess.length-1;i++){
            if(pricess[i]<pricess[i+1] && radio){ //上升趋势，持续涨
            }else if(pricess[i]<pricess[i+1] && !radio){ //由下降趋势转为上升趋势，且i处为最小值
                radio = true;
                if(!has){
                    low = pricess[i];
                    has = true;
                }
            }else if(pricess[i]>pricess[i+1] && radio){ //由上升趋势转为下降趋势，且i处为最大值
                radio = false;
                if(has){ //当前持有股票
                    high = pricess[i];
                    has = false; //卖出
                    profile = profile + high - low; //计算盈利
                }
            }else if(pricess[i]>pricess[i+1] && !radio) {

            }
        }
        if(has){
            high = pricess[pricess.length-1];
            profile = profile + high - low; //计算盈利
        }
        return profile;
    }
}
{% endhighlight %}

再换一种思考方式，题目并没有规定操作次数，那么，比较2天的股票的值，是不是只要是涨了，那么我前一天就应该买入呢？
{% highlight java %}
public class Solution {
    public int maxProfit(int[] prices) {
        int profile = 0;
        if(prices.length < 2){
            return 0;
        }
        for(int i=1;i<prices.length;i++){
            if(prices[i] - prices[i-1]>=0){
                profile = profile + prices[i] - prices[i-1];
            }
        }
        return profile;
    }
}
{% endhighlight %}