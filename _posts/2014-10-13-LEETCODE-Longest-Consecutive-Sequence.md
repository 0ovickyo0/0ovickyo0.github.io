---
layout: post
title: LEETCODE 128 Longest Consecutive Sequence
description: "LEETCODE Longest Consecutive Sequence解题报告"
modified: 2014-10-13
tags: [java, 算法, leetcode]
image:
  feature: abstract-3.jpg
  background: bg-3.png
---

# 描述：
Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

For example,

Given [100, 4, 200, 1, 3, 2],

The longest consecutive elements sequence is [1, 2, 3, 4]. Return its length: 4.

Your algorithm should run in O(n) complexity.

<!--more-->

# 代码：

改了好几遍才通过。。本质上还是使用了set的特性，不重复，自排序。遍历的时候不知道怎么去掉第一个元素。。囧。。 还是使用了i来判断是不是set中第一个元素。
{% highlight java %}
public class Solution {
    public int longestConsecutive(int[] num) {
        Set<Integer> tset = new TreeSet<Integer>();
        for(int i=0;i<num.length;i++)
            tset.add(num[i]); //自动升序排序

        int res=1,now=1,lastNum=0;
        int i=0;
        for(Integer set:tset){
            if(i==0){
                lastNum = set;
            }else{
                if(set-lastNum == 1){ //连续升序排序
                    now++;lastNum=set;
                    if(now>res) res = now;
                }else{ //不连续
                    if(now>res) res = now;
                    now = 1;
                    lastNum = set;
                }
            }
            i++;

        }
        return res;
    }
}
{% endhighlight %}
