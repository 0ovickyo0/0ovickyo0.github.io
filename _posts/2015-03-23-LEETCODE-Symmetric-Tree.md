---
layout: post
title: LEETCODE 101 Symmetric Tree
description: "LEETCODE Symmetric Tree 解题报告"
modified: 2015-03-23
tags: [java, 算法, leetcode]
image:
  feature: abstract-7.jpg
  background: bg-7.png
---

# 描述：
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree is symmetric:
{% highlight java %}
    1
   / \
  2   2
 / \ / \
3  4 4  3
{% endhighlight %}
But the following is not:
{% highlight java %}
    1
   / \
  2   2
   \   \
   3    3
{% endhighlight %}
<!--more-->

Note:
Bonus points if you could solve it both recursively and iteratively.

# 分析：
以中轴线进行对称
注意一定要比较值得相等，而不是简单的对象相等。对象是不相等的。

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
    public boolean isSymmetric(TreeNode root) {
        return helper(root,root);
    }
    private boolean helper(TreeNode root, TreeNode root1){
        if(root==null && root1==null) return true;

        if(!((root.left==null && root1.right==null)||(root.left!=null&&root1.right!=null&&root.left.val==root1.right.val))) return false;
        if(!((root.right==null && root1.left==null)||(root.right!=null&&root1.left!=null&&root.right.val==root1.left.val))) return false;
        return helper(root.left,root1.right) && helper(root.right,root1.left);
    }
}
{% endhighlight %}
