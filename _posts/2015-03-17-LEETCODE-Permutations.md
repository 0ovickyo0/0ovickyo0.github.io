---
layout: post
title: LEETCODE 46 Permutations
description: "LEETCODE Permutations 解题报告"
modified: 2015-03-17
tags: [java, 算法, leetcode]
image:
  feature: abstract-1.jpg
  background: bg-1.png
---

#描述：
Given a collection of numbers, return all possible permutations.

For example,
[1,2,3] have the following permutations:
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], and [3,2,1].

给定数组，返回所有可能的集合

# 分析：
我的思路是这样子滴。

专门有一个数组存储元素是否被访问。

然后呢，如果要列出所有的，我们找出规律，看的是树的构造，给节点添加的每一个孩子，都是没有被访问的元素（即visited = false），
第一组从根节点选到最底下的孩子就有两组数据[1,2,3]和[1,3,2]，当根分别为2,3时，就能得到其他4组数据。
{% highlight java %}
   1
   /\
  2  3
 /    \
3      2
{% endhighlight %}
# 代码：
{% highlight java %}
public class Solution {
    public List<List<Integer>> permute(int[] num) {

        List<List<Integer>> res = new ArrayList<List<Integer>>();
        List<Integer> integers = new ArrayList<Integer>();
        boolean[] visited = new boolean[num.length];
        helper(num, res, integers, visited);


        return res;
    }

    private void helper(int[] num, List<List<Integer>> res, List<Integer> integers, boolean[] visited){
        if(integers.size() == num.length){
            //在某一次构造中，所有元素都已加入，可以放于结果中了
            res.add(new ArrayList<Integer>(integers));
            return;
        }
        for(int i=0; i<num.length;i++){
            if(!visited[i]){
                visited[i] = true;
                integers.add(num[i]);
                helper(num,res,integers,visited);
                integers.remove(integers.size()-1); //遍历完一次后，即添加完[1,2,3]后，删除最后一个元素，因为要回到添加元素之前，即上一步
                visited[i] = false;
            }
        }

    }
}
{% endhighlight %}