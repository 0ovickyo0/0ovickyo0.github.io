---
layout: post
title: LEETCODE 104 Maximum Depth of Binary Tree
description: "LEETCODE Maximum Depth of Binary Tree 解题报告"
modified: 2015-02-11
tags: [java, 算法, leetcode]
image:
  feature: abstract-1.jpg
  background: bg-1.png
---

# 描述：
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

给定一个二叉树，找到最深深度。

<!--more-->

# 分析

使用了递归的思想

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
    private int maxlength=1;
    public int maxDepth(TreeNode root) {
        if(root == null){
            return 0;
        }
        getMaxLength(root, 1);
        return maxlength;
    }
    public void getMaxLength(TreeNode tree, int depth){
        if(null != tree.left){
            getMaxLength(tree.left,depth+1);
        }
        if(null != tree.right){
            getMaxLength(tree.right,depth+1);
        }
        if(null == tree.right && null == tree.left && depth>maxlength){
            maxlength = depth;
        }
    }
}
{% endhighlight %}
注意：在本地运行时(java8 idea14 win8)，tree.left 这种写法会报空指针错误，需要给TreeNode类添加get/set方法。

优化：去掉私有变量。
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
    public int maxDepth(TreeNode root) {
        if(root == null){
            return 0;
        }
        return getMaxLength(root, 1);
    }
    public int getMaxLength(TreeNode node, int depth){
        int left = depth, right = depth;
        if(node.left != null) left = getMaxLength(node.left, depth + 1);
        if(node.right != null) right = getMaxLength(node.right, depth + 1);
        return left > right ? left : right;
    }
}
{% endhighlight %}