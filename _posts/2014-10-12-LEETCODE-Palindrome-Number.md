---
layout: post
title: LEETCODE 9 Palindrome Number
description: "LEETCODE Palindrome Number解题报告"
modified: 2014-10-12
tags: [java, 算法, leetcode]
image:
  feature: abstract-2.jpg
  background: bg-2.png
---

# 描述：

Determine whether an integer is a palindrome. Do this without extra space.

---

判断一个数字从正反两个方向看是否一样

<!--more-->

# 代码：
{% highlight java %}
public class Solution {
    public boolean isPalindrome(int x) {
        if(x<0) return false;
        if(x==0)
            return true;

        int base = 1;
        while(x/base >= 10)
            base *= 10;

        while(x>0){
            int l = x/base;
            int r = x%10;

            if(l != r) return false;

            x = x-base*l;
            base/=100;
            x/=10;

        }
        return true;
    }
}
{% endhighlight %}