---
layout: post
title: 部分和问题—挑战程序设计P30
description: "挑战程序设计 读书笔记 之 部分和问题"
modified: 2014-10-03
tags: [java, 算法, 读书笔记]
image:
  feature: abstract-4.jpg
  background: bg-4.png
---

# 问题描述：

给定整数a1 a2 ... an，判断是否可以从中选出若干数，使它们的和恰好为k。

# 限制条件：

1<=n<=20

-108 <=ai <=108

-108 <=k<=108

# 测试样例：
1.输入：

n=4

a={1,2,4,7}

k=13

输出：

Yes

2.输入：

n=4

a={1,2,4,7}

k = 15

输出：

No

# 分析：

此题考察的是深度优先搜索：DFS（Depth-First Search）。

它是从某个状态开始，不断地转移状态直到无法转移，然后退回到前一步的状态，继续转移到其他状态，如此不断重复，直到找到最终的解。

# 解决方法：

从a1开始顺序决定每个数加或不加，在全部n个数都决定后在判断它们的和是不是k即可。因为状态数是2n+1，所以复杂度是O(2n)。

状态转移的样子：
<figure>
	<a href="/images/post/2014-10-03-1.png"><img src="/images/post/2014-10-03-1.png" alt=""></a>
</figure>

代码：
{% highlight java %}
public class PartSum {
    private static int n=4;
    private static Integer[] a={1,2,4,7};
    private static int k = 13;
    public static void main(String[] args){
        if(dfs(0,0)) System.out.println("yes");
        else System.out.println("no");
    }
    //已经从前i项得到了和sum，然后对于i项之后的进行分支
    public static boolean dfs(int i, int sum){
        //如果前n项都计算过了，则返回sum是否与k相等
        if(i==n) return sum==k;
        //不加上a[i]的情况
        if(dfs(i+1 , sum)) return true;
        //加上a[i]的情况
        if(dfs(i+1, sum+a[i])) return true;
        //无论是否加上a[i]都不能凑成k就返回false
        return false;
    }
}
{% endhighlight %}