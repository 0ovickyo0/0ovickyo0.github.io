---
layout: post
title: LEETCODE 119 Pascal's Triangle II
description: "LEETCODE Pascal's Triangle II 解题报告"
modified: 2014-10-10
tags: [java, 算法, leetcode]
image:
  feature: abstract-11.jpg
  background: bg-11.png
---
# 描述：
Given an index k, return the kth row of the Pascal's triangle.

For example, given k = 3,
Return [1,3,3,1].

Note:
Could you optimize your algorithm to use only O(k) extra space?
<!--more-->

---

仅返回Pascal's triangle的第k+1行

# 代码：
（一次通过哟！）
{% highlight java %}
public class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> row1 = new ArrayList<Integer>(); //0,2,4,6
        List<Integer> row2 = new ArrayList<Integer>(); //1,3,5,7
        row1.add(1);
        if(rowIndex == 0) return row1;
        for(int i=1;i<=rowIndex; i++){
            if(i%2==0){
                row1.removeAll(row1);
                row1.add(1);
                for(int j=1;j<i;j++){
                    row1.add(row2.get(j) + row2.get(j-1));
                }
                row1.add(1);
            }else{
                row2.removeAll(row2);
                row2.add(1);
                for(int j=1;j<i;j++){
                    row2.add(row1.get(j) + row1.get(j-1));
                }
                row2.add(1);
            }
        }
        if(rowIndex%2==0) return row1;
        else return row2;
    }
}
{% endhighlight %}

更简单的方法：

{% highlight java %}
public class Solution {
    public List<Integer> getRow(int rowIndex) {
         List<Integer> row = new ArrayList<Integer>();


        for(int i=0;i<=rowIndex; i++){
            int k=row.size();
            for(int j=k-1; j>=1; j--)
                row.set(j,row.get(j)+row.get(j-1));
            row.add(1);

        }

        return row;
    }
}
{% endhighlight %}