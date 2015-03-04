---
layout: post
title: LEETCODE 70 Climbing Stairs
description: "LEETCODE Climbing Stairs 解题报告"
modified: 2015-03-01
tags: [java, 算法, leetcode]
image:
  feature: abstract-8.jpg
  background: bg-8.png
---

# 问题描述：

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

<!--more-->
# 分析：

枚举的方法。但是 超！时！了！
好吧，我们再来找找规律，

    当n=1时，count=1

    当n=2时，有[2] [11]两种情况，count=2

    当n=3时，有[111][12][21]三种情况，count=3

    当n=4时，有[1111][22][112][121][211]五种情况，count=5

    当n=5时，有[11111][221][212][122][112][1112][1121][1211][2111]八种情况，count=8

这样就有规律了，当n>3时，n对应的情况数字为n-1和n-2之和。此时，规律正好和斐波那契数列出现的规律对应。

<p class="highlight-pink">F0=0，F1=1，Fn=F(n-1) + F(n-2) (n>=2)</p>


# 代码一（暴力枚举）：
{% highlight java %}
public class Solution {
    private int count = 0; //记录总次数
    private int nn = 0;

    public int climbStairs(int n) {
        nn = n;
        total(0);
        return count;
    }
    private void total(int now){
        now = now + 1; //只走一步
        if(now < nn){
            total(now);
        }else if(now == nn){
            count ++;
            return;
        }else {
            return;
        }
        now = now + 1; //再走一步，相当于由最开始的now走了两步
        if(now<nn){
            total(now);
        }else if(now == nn){
            count++; return;
        }else {
            return;
        }
    }
}
{% endhighlight %}
# 代码二：
{% highlight java %}
public class Solution {

    public int climbStairs(int n) {
        if(n==1) return 1;
        if(n==2) return 2;
        int F0 = 1, F1= 2;
        int Fn=0;
        for(int i=2;i<n;i++){
            Fn = F0 + F1;
            F0 = F1;
            F1 = Fn;
        }
        return Fn;
    }
}
{% endhighlight %}