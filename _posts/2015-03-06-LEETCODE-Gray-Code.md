---
layout: post
title: LEETCODE 89 Gray Code
description: "LEETCODE Gray Code 解题报告"
modified: 2015-03-06
tags: [java, 算法, leetcode]
image:
  feature: abstract-1.jpg
  background: bg-1.png
---

# 描述：
The gray code is a binary numeral system where two successive values differ in only one bit.

Given a non-negative integer n representing the total number of bits in the code, print the sequence of gray code. A gray code sequence must begin with 0.

For example, given n = 2, return [0,1,3,2]. Its gray code sequence is:
{% highlight java %}
00 - 0
01 - 1
11 - 3
10 - 2
{% endhighlight %}

<!--more-->

---
Note:
For a given n, a gray code sequence is not uniquely defined.

For example, [0,2,3,1] is also a valid gray code sequence according to the above definition.

For now, the judge is able to judge based on one instance of gray code sequence. Sorry about that.


# 分析：

最小的那个数是00000（n个0），最大的那个数是11111（n个1），并且是连续的。这种思路求出来的数组顺序是不对的。

找到维基百科介绍格雷码的：http://zh.wikipedia.org/wiki/%E6%A0%BC%E9%9B%B7%E7%A0%81，http://en.wikipedia.org/wiki/Gray_code。

题目中要求的排列应该是镜射排列：

n位元的格雷码可以从n-1位元的格雷码以上下镜射后加上新位元的方式快速得到，如下图：
<figure>
	<a href="/images/post/2015-03-06-1.png"><img src="/images/post/2015-03-06-1.png" alt="gray code"></a>
</figure>

按照这种镜射的方式，我们来看看代码

# 代码：
{% highlight java %}
public class Solution {
    public List<Integer> grayCode(int n) {
        List<Integer> res = new ArrayList<Integer>();
        res.add(0);
        if(n<1) return res;
        res.add(1); //镜射当n=1时，数组为{0,1}
        for(int i=1;i<n;i++){
            int newbit = 1<<i; //最新加上去的那个
            for(int j=res.size()-1;j>=0;j--){ //从后往前进行镜像
                res.add(res.get(j) + newbit);
            }
        }
        return res;
    }
}
{% endhighlight %}