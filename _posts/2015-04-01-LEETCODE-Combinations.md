---
layout: post
title: LEETCODE 77 Combinations
description: "LEETCODE Combinations 解题报告"
modified: 2015-04-1
tags: [java, 算法, leetcode]
image:
  feature: abstract-5.jpg
  background: bg-5.png
---


# 描述：
Given two integers n and k, return all possible combinations of k numbers out of 1 ... n.

For example,
If n = 4 and k = 2, a solution is:

[
  [2,4],
  [3,4],
  [2,3],
  [1,2],
  [1,3],
  [1,4],
]

<!--more-->

# 分析：
1.如果K比较大的话，我们可以适当优化，也就是说index的终止条件可以设置为n-k+1处，因为从那里开始
就不再能找到k个数字了嘛。然后每一次递归后k--，也就是指明我们还需要寻找的数字。

2. 跟排列题目的差别是：排列题目你可以在当前可能可以选的所有的数字中选，而combin只能往后选。
例子：

1, 2, 3, 4       k = 2

如果是排列的话： 我如果先选1, 2    1, 3    1, 4 然后 我们可以选2,1    2,3   2,4

但组合就不一样，1,2   1,3   1,4  然后到2只能选 2，3    2，4   因为2，1是重复的组合。

避免重复的办法就是，每一次只选当前数字之后的，不返回去选。这样保证了我们的组合是升序，也就是唯一序啦。


# 代码：
{% highlight java %}
public class Solution {
    public List<List<Integer>> combine(int n, int k) {
        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if(n==0 || k==0) return res;
        List<Integer> arr = new ArrayList<Integer>();
        combine(n,k,arr,res,1);
        return res;
    }
    //index表示可以选择index-n 的数字，当n=4,index=1表示可以从1~4中选数字
    public void combine(int n,int k, List<Integer> arr,List<List<Integer>> res, int index){
        if(k==0){
            res.add(new ArrayList<Integer>(arr)); //这个地方一定要新建一个
            return;
        }
        //注意这里的中止条件，当n=4,k=2时，每次可以取2个数字，
        // 那么1,2,3,4中index最多可以从3取值，也就是4-2+1.即n-k+1
        for(int i=index;i<=n-k+1;i++){
            arr.add(i);
            combine(n,k-1,arr,res,i+1); //所需要选择的数字-1，所选择的范围+1
            arr.remove(arr.size() -1);
        }
    }
}
{% endhighlight %}

