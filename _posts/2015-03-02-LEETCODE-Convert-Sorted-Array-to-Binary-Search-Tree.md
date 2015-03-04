---
layout: post
title: LEETCODE 108 Convert Sorted Array to Binary Search Tree
description: "LEETCODE Convert Sorted Array to Binary Search Tree 解题报告"
modified: 2015-03-02
tags: [java, 算法, leetcode]
image:
  feature: abstract-9.jpg
  background: bg-9.png
---

# 描述：
Given an array where elements are sorted in ascending order, convert it to a height balanced BST.

给定一个正序排列的数组，将它变成一个平衡二叉树。


# 分析：

什么是平衡二叉树呢？

请看维基：http://zh.wikipedia.org/wiki/AVL%E6%A0%91

在AVL树中，任何节点的两个子树的高度差绝对值为0或1，也被称为高度平衡树。

构造这棵树的思路：把中间元素转化为根，然后递归的构造左右子树。

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
    public TreeNode sortedArrayToBST(int[] num) {
        return convertTree(num, 0, num.length-1);
    }
    private TreeNode convertTree(int[] num,int start, int end){
        if(start>end || end<0) return null;
        int mid = (start+end)/2;
        TreeNode root = new TreeNode(num[mid]);
        root.left = convertTree(num, start, mid-1);
        root.right = convertTree(num, mid+1, end);
        return root;
    }
}
{% endhighlight %}
注意if判断，有可能出现l>r的情况，特别是当输入为{0}的时候。
