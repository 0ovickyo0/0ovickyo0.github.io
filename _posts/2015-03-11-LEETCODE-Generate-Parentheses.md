---
layout: post
title: LEETCODE 22 Generate Parentheses
description: "LEETCODE Generate Parentheses 解题报告"
modified: 2015-03-11
tags: [java, 算法, leetcode]
image:
  feature: abstract-6.jpg
  background: bg-6.png
---

# 描述：
Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

For example, given n = 3, a solution set is:

"((()))", "(()())", "(())()", "()(())", "()()()"

<!--more-->

---

给定n找出合法的括号搭配

# 分析：
此题主要考虑二叉树。

使用二叉树形象的表示这种关系。

当n=3时：
<figure>
	<a href="/images/post/2015-03-11-1.png"><img src="/images/post/2015-03-11-1.png" alt=""></a>
</figure>
最底层的5个结果为所求。左分支都是天价左括号，右分支都是添加右括号。

什么情况下添加左括号？最多能添加n个左括号

什么时候添加右括号？ 当左括号个数大于右括号的个数时添加右括号

# 代码：
要使用dfs做哦。。这货递归我老弄不清楚。。靠
{% highlight java %}
public class Solution {
    List<String> res = new ArrayList<String>();
    public List<String> generateParenthesis(int n) {
        dfs("",n,n);
        return res;
    }
    private void dfs(String s, int l, int r){
        if(l>r) return;
        if(l==0 && r==0) res.add(s);
        if(l>0) dfs(s+"(",l-1,r);
        if(r>0) dfs(s+")",l,r-1);
    }
}
{% endhighlight %}
