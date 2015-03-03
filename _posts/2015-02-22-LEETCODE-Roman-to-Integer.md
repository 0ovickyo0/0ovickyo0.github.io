---
layout: post
title: LEETCODE 13 Roman to Integer
description: "LEETCODE Roman to Integer 解题报告"
modified: 2015-02-22
tags: [java, 算法, leetcode]
image:
  feature: abstract-1.jpg
  background: bg-1.png
---

# 描述：
Given a roman numeral, convert it to an integer.

Input is guaranteed to be within the range from 1 to 3999.

---

将给定的罗马数字转换成阿拉伯数字。

<!--more-->

# 分析：

罗马数字共有7个，即I（1）、V（5）、X（10）、L（50）、C（100）、D（500）和M（1000）。

按照下述的规则可以表示任意正整数。需要注意的是罗马数字中没有“0”，与进位制无关。一般认为罗马数字只用来记数，而不作演算。

## 重复数次：

一个罗马数字重复几次，就表示这个数的几倍。

## 右加左减：

在较大的罗马数字的右边记上较小的罗马数字，表示大数字加小数字。

在较大的罗马数字的左边记上较小的罗马数字，表示大数字减小数字。

左减的数字有限制，仅限于I、X、C。比如45不可以写成VL，只能是XLV

但是，左减时不可跨越一个位数。比如，99不可以用IC（100 - 1）表示，而是用XCIX（[100 - 10] + [10 - 1]）表示。（等同于阿拉伯数字每位数字分别表示。）

左减数字必须为一位，比如8写成VIII，而非IIX。

右加数字不可连续超过三位，比如14写成XIV，而非XIIII。（见下方“数码限制”一项。）

## 加线乘千：

在罗马数字的上方加上一条横线或者加上下标的Ⅿ，表示将这个数乘以1000，即是原数的1000倍。

同理，如果上方有两条横线，即是原数的1000000（1000^{2}）倍。

## 数码限制：

同一数码最多只能出现三次，如40不可表示为XXXX，而要表示为XL。

例外：由于IV是古罗马神话主神朱庇特（即IVPITER，古罗马字母里没有J和U）的首字，因此有时用IIII代替IV。

---

嗯哼，罗马数字好复杂，但是题目中只需要我们将给定的罗马数字进行转换，那么，这个数字就一定是符合规范的！那么我们只需要遵循下面的原则即可。

# 简化原则：

<p class="highlight-pink">1.LeftNum>=RightNum  LeftNum+RightNum </p>

<p class="highlight-pink">2.LeftNum<RightNum  RightNum - LeftNum </p>

从前向后遍历罗马数字，如果某个数比前一个数小，则加上该数。反之，减去前一个数的两倍然后加上该数

# 代码：
{% highlight java %}
public class Solution {
    public int romanToInt(String s) {
        char[] chars = s.toCharArray();
        //if(chars.length == 1) return val(chars[0]);
        int num=val(chars[0]);
        for(int i=1;i<chars.length;i++){  //如果字符串长度为1，那么直接val(s)返回
            if(val(chars[i-1]) < val(chars[i])){ //右边大于左边，值 = 右边-左边
                num += val(chars[i]) - 2*val(chars[i-1]);
            }else{ //左边大于等于右边，值=左边+右边
                num += val(chars[i]);
            }
        }
        return num;
    }
    private int val(char c){
        switch (c){
            case 'I':return 1;
            case 'V':return 5;
            case 'X':return 10;
            case 'L':return 50;
            case 'C':return 100;
            case 'D':return 500;
            case 'M':return 1000;
            default: return 0;
        }
    }
}
{% endhighlight %}
