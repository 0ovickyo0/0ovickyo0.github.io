---
layout: post
title: LEETCODE 171 Excel Sheet Column Number
description: "LEETCODE Excel Sheet Column Number  解题报告"
modified: 2015-02-14
tags: [java, 算法, leetcode]
image:
  feature: abstract-4.jpg
  background: bg-4.png
---

# 描述：
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

---

<!--more-->
For example:
    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28

根据字母排序找到对应的列数。

# 分析：
将字符串转成ASCI码来计算。

# 代码：
{% highlight java %}
public class Solution {
    public int titleToNumber(String s) {
        char[] schar = s.toCharArray();
        int count=0;
        for(int i=schar.length-1;i>=0;i--){
            count = count + ((int)schar[schar.length-i-1]-64)*(int)Math.pow(26,i);
        }
        return count;
    }
}
{% endhighlight %}

注意：下标的倒序，以及在java中求数的n次方的方法 Math.pow(a,b)
