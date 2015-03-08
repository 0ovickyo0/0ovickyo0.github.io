---
layout: post
title: LEETCODE 153 Find Minimum in Rotated Sorted Array
description: "LEETCODE Find Minimum in Rotated Sorted Array 解题报告"
modified: 2015-03-04
tags: [java, 算法, leetcode]
image:
  feature: abstract-10.jpg
  background: bg-10.png
---

# 描述：
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

You may assume no duplicate exists in the array.

---

在一个已经排好序的数组中有一部分进行了反转，找出数组中的最小值。数组中的值无重复。

# 分析：
整个数组遍历一遍就可以了。

# 代码：
一次通过哟~
{% highlight java %}
public class Solution {
    public int findMin(int[] num) {
        if(num.length == 1) return num[0];
        for(int i=1;i<num.length;i++){
            if(num[i-1] > num[i]) return num[i];
        }
        return num[0];
    }
}
{% endhighlight %}
啊哈 ，其实还有更简单的二分查找：
{% highlight java %}
int L=0,R=num.length-1;
while(L<R){
    int M=(R+L)/2;
    if(num[M] > num[R]){ //在M~R段出现反转
        L = M+1;
    }else{ //在L~M段出现反转
        R = M;
    }
}
return num[L];
{% endhighlight %}