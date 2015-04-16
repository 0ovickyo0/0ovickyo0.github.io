---
layout: post
title: LEETCODE 118 Pascal's Triangle
description: "LEETCODE Pascal's Triangle 解题报告"
modified: 2014-10-06
tags: [java, 算法, leetcode]
image:
  feature: abstract-7.jpg
  background: bg-7.png
---

# 描述：
Given numRows, generate the first numRows of Pascal's triangle.

For example, given numRows = 5,

Return

{% highlight java %}
[
     [1],
    [1,1],
   [1,2,1],
  [1,3,3,1],
 [1,4,6,4,1]
]
{% endhighlight %}

<!--more-->

# 代码：
{% highlight java %}
public class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        for(int i=0;i<numRows;i++){
            List<Integer> row = new ArrayList<Integer>();
            row.add(1); //所有的row[0] = 1
            if(i==0){
                res.add(row);
            }else {
                for(int j=1; j<i;j++){
                    //第j位的和总是前一行的第j和第j-1位的和，首位除外
                    row.add(res.get(i-1).get(j-1) + res.get(i-1).get(j));
                }
                row.add(1); //所有的row[i] = 1
                res.add(row);
            }
        }
        return res;
    }
}
{% endhighlight %}