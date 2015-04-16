---
layout: post
title: LEETCODE 112 Path Sum
description: "LEETCODE Path Sum 解题报告"
modified: 2014-10-09
tags: [java, 算法, leetcode]
image:
  feature: abstract-10.jpg
  background: bg-10.png
---

# 描述：
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

For example:
Given the below binary tree and sum = 22,
{% highlight java %}
      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
{% endhighlight %}
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.

<!--more-->
---
找到一条根到节点的路径，所有节点的和等于给定值。

# 代码：
（一次通过哟）
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
    public boolean hasPathSum(TreeNode root, int sum) {
        return helper(root, 0, sum);
    }
    private boolean helper(TreeNode root, int nowsum, int sum){
        if(root==null) return false;
        if(root.left==null && root.right == null){ //到达根节点
            if(nowsum + root.val == sum) return true;
            else return false;
        }
        return helper(root.left, root.val+nowsum, sum) || helper(root.right, root.val+nowsum, sum);
    }
}
{% endhighlight %}