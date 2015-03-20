---
layout: post
title: LEETCODE 145 Binary Tree Postorder Traversal
description: "LEETCODE Binary Tree Postorder Traversal 解题报告"
modified: 2015-03-16
tags: [java, 算法, leetcode]
image:
  feature: abstract-11.jpg
  background: bg-11.png
---

# 描述：
Given a binary tree, return the postorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
{% highlight java %}
1
 \
  2
 /
3
{% endhighlight %}
return [3,2,1].

<!--more-->


# 分析：
这个叫做后序遍历，顺序是左右根。

# 代码：
（一次通过哟哟哟！）
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
    List<Integer> res = new ArrayList<Integer>();
    public List<Integer> postorderTraversal(TreeNode root) {
        itera(root);
        return res;
    }
    private void itera(TreeNode root){
        if(root == null) return;

        if(root.left!=null) itera(root.left);
        if(root.right!=null) itera(root.right);

        res.add(root.val);
    }
}
{% endhighlight %}

