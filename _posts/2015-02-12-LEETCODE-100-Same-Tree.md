---
layout: post
title: [LEETCODE] 100 Same Tree
description: "LEETCODE Same Tree 解题报告"
modified: 2015-02-12
tags: [java, 算法, leetcode]
image:
  feature: abstract-2.jpg
  background: bg-2.png
---

# 描述：
Given two binary trees, write a function to check if they are equal or not.

Two binary trees are considered equal if they are structurally identical and the nodes have the same value.

给定两个二叉树，写一个函数来判断它们是否相等。相等的条件是子节点具有相同的值。

# 分析：
递归调用自身。
{% highlight java %}
/**
 * Definition for binary tree
 * public class TreeNode {
 *     int val;
 *     TreeNode left;
 *     TreeNode right;
 *     TreeNode(int x) { val = x; }
 * }
 */
public class Solution {
    public boolean isSameTree(TreeNode p, TreeNode q) {
        if(p==null && q==null) return true;
        else if( p==null || q==null) return false;
        if( p.val != q.val) return false;
        else return isSameTree( p.left, q.left) && isSameTree(p.right, q.right);
    }

}
{% endhighlight %}
