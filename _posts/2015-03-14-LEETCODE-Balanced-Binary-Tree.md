---
layout: post
title: LEETCODE 110 Balanced Binary Tree
description: "LEETCODE Balanced Binary Tree 解题报告"
modified: 2015-03-14
tags: [java, 算法, leetcode]
image:
  feature: abstract-9.jpg
  background: bg-9.png
---

# 描述：
Given a binary tree, determine if it is height-balanced.

For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees of every node never differ by more than 1.


<!--more-->

---

对于一个给定的二叉树，判断其是否是平衡二叉树


# 代码：
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
    public boolean isBalanced(TreeNode root) {
        return treeHight(root) != -1;
    }
    int treeHight(TreeNode root) {
        // base
        if(root == null) {
            return 0;
        }
        int left = treeHight(root.left);
        int right = treeHight(root.right);
        if(left == -1 || right == -1 || Math.abs(left - right)>1 ) {
            return -1;  // fast return for unbalanced tree
        }
        return Math.max(left, right)+1;
    }
}
{% endhighlight %}
