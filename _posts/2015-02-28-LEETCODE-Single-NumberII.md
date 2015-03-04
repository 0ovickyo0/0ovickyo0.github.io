---
layout: post
title: LEETCODE 137 Single NumberII
description: "LEETCODE Single NumberII 解题报告"
modified: 2015-02-28
tags: [java, 算法, leetcode]
image:
  feature: abstract-7.jpg
  background: bg-7.png
---

# 描述：

Given an array of integers, every element appears three times except for one. Find that single one.

Note:

Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?


<!--more-->

---

找出只出现了一次的数，其他的都出现了三次。

# 分析：

将数转化为二进制的位，数出现了三次相当于其对应的二进制上每个位置出现了3次。

可以通过排序在O（nlogn）的时间内解决，也可以用hash，但是最坏的情况下复杂度可能会超过O（n），hash需要的空间复杂度也比较大。

参考了网上的解题方案：

使用ones代表第i个位只出现一次的掩码变量

使用twos代表第i个位只出现两次的掩码变量

使用threes代表第i个位只出现三次的掩码变量

假设在数组的开头连续出现3次7，则变化如下：
{% highlight java %}
ones = 111
twos = 0
threes = 0
---
ones = 0
twos = 111
threes = 0
---
ones = 0
twos = 0
threes = 111
{% endhighlight %}
当i位出现3次时，我们就把ones和twos的第i位设置为0.最终的答案就是ones


# 代码一：
{% highlight java %}
public class Solution {
    public int singleNumber(int[] A) {
        int one=0,two=0,three=0;
        for(int i=0;i<A.length;i++){
        //一定是出现3次2次1次这样的顺序，如果反过来，先更新了one，会影响到two和three
            three = two & A[i];  //已经出现了两次，还出现了一次
            two = two | one & A[i]; //出现了1次 又出现了1次，再加上已经出现了2次的，为新的出现了2次的
            one = one | A[i]; //出现了一次
            //将出现了3次的其出现1次2次全部抹去
            one = one & ~three;
            two = two & ~three;
        }
        return one;
    }
}
{% endhighlight %}
# 代码二：
{% highlight java %}
public class Solution {
    public int singleNumber(int[] A) {
       int one=0,two=0,three=0;
        for(int i=0;i<A.length;i++){
            two |= one & A[i];
            one ^= A[i]; //异或3次和异或1次的结果是一样的
            //对于ones和twos把出现了3次的位置设置为0（取反之后1的位置为0）
            three = one & two;
            one &= ~three;
            two &= ~three;
        }
        return one;
    }
}
{% endhighlight %}

# 相关阅读：
[LEETCODE Roman to Integer]({{ site.url }}/LEETCODE-Single-Number/)