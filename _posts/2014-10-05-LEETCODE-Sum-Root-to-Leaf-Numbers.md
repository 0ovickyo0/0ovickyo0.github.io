---
layout: post
title: LEETCODE 129 Sum Root to Leaf Numbers
description: "LEETCODE Sum Root to Leaf Numbers 解题报告"
modified: 2014-10-05
tags: [java, 算法, leetcode]
image:
  feature: abstract-6.jpg
  background: bg-6.png
---

# 描述：
Given a binary tree containing digits from 0-9 only, each root-to-leaf path could represent a number.

An example is the root-to-leaf path 1->2->3 which represents the number 123.

Find the total sum of all root-to-leaf numbers.

For example,
{% highlight java %}
    1
   / \
  2   3
{% endhighlight %}

The root-to-leaf path 1->2 represents the number 12.

The root-to-leaf path 1->3 represents the number 13.

Return the sum = 12 + 13 = 25.

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
    private int sum=0;
    public int sumNumbers(TreeNode root) {
        if(root == null) return 0;
        add(root, 0);
        return sum;
    }
    private void add(TreeNode root, int nownum){
        if(root != null){
            nownum = nownum*10 + root.val;
        }
        if(root.left!=null)
            add(root.left, nownum);
        if(root.right!=null)
            add(root.right, nownum);
        if(root.left == null && root.right == null){ //达到了叶子节点
            sum = sum + nownum;
        }
    }
}
{% endhighlight %}
	高级解法：
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
    private int sum=0;
    public int sumNumbers(TreeNode root) {
        return add(root, 0);
    }
    private int add(TreeNode root, int nownum){
        if(root == null) return 0;
        if(root.right == null && root.left == null)
            return 10*nownum + root.val;
        return add(root.left, 10*nownum+root.val) + add(root.right, 10*nownum+root.val);
    }
}
{% endhighlight %}