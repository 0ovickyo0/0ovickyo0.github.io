---
layout: post
title: LEETCODE 12 Integer to Roman
description: "LEETCODE Integer to Roman 解题报告"
modified: 2015-02-26
tags: [java, 算法, leetcode]
image:
  feature: abstract-5.jpg
  background: bg-5.png
---

# 描述：
Given an integer, convert it to a roman numeral.

Input is guaranteed to be within the range from 1 to 3999.

<!--more-->

---

给定一个数字，把它转换成罗马数字

# 分析：

罗马数字共有7个，即I（1）、V（5）、X（10）、L（50）、C（100）、D（500）和M（1000）。

罗马数字太复杂。对于本题来说，采用贪心策略，每次选择能表示的最大值，把对应的字符串连接起来。


# 代码：
{% highlight java %}
public class Solution {
    public String intToRoman(int num) {
        int[] val={1000,900,500,400,100,90,50,40,10,9,5,4,1};
        String[] str={"M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"};

        StringBuilder sb = new StringBuilder();
        for(int i=0;num>0;i++){
            while(num>=val[i]){
                num-=val[i];
                sb.append(str[i]);
            }
        }

        return sb.toString();
    }
}
{% endhighlight %}

# 相关文章
[LEETCODE Roman to Integer]({{ site.url }}/LEETCODE-Roman-to-Integer/)
