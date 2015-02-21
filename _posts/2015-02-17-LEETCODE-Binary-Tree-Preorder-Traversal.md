---
layout: post
title: LEETCODE 144 Binary Tree Preorder Traversal
description: "LEETCODE Binary Tree Preorder Traversal 解题报告"
modified: 2015-02-17
tags: [java, 算法, leetcode]
image:
  feature: abstract-7.jpg
  background: bg-7.png
---

# 描述：

Given a binary tree, return the preorder traversal of its nodes' values.

For example:

Given binary tree {1,#,2,3},
{% highlight java %}
1
\
 2
/
3
{% endhighlight %}
return [1,2,3].
<!--more-->
---
前序遍历一个二叉树

# 分析

前序遍历（DLR）是二叉树遍历的一种，也叫做先根遍历、先序遍历、前序周游，可记做根左右。

若二叉树为空则结束返回，否则：
1）访问根节点
2）前序遍历左子树
3）前序遍历右子树

# 代码：
一次通过，赞！
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
    List<Integer> integers = new ArrayList<Integer>();
    public List<Integer> preorderTraversal(TreeNode root) {
        ser(root);
        return integers;
    }
    public void ser(TreeNode treeNode){
        if(treeNode==null) return;
        integers.add(treeNode.val);
        if(treeNode.left != null){
            ser(treeNode.left);
        }
        if(treeNode.right !=null){
            ser(treeNode.right);
        }
    }
}
{% endhighlight %}