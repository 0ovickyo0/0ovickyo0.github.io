---
layout: post
title: LEETCODE 94 Binary Tree Inorder Traversal
description: "LEETCODE Binary Tree Inorder Traversal 解题报告"
modified: 2015-02-18
tags: [java, 算法, leetcode]
image:
  feature: abstract-8.jpg
  background: bg-8.png
---

# 描述：
Given a binary tree, return the inorder traversal of its nodes' values.

For example:
Given binary tree {1,#,2,3},
{% highlight java %}
1
\
 2
/
3
{% endhighlight %}
return [1,3,2].

Note: Recursive solution is trivial, could you do it iteratively?

<!--more-->

# 分析：
中序遍历（LDR）是二叉树遍历的一种，也叫做中根遍历，中序周游，可记做左根右。

中序遍历首先遍历左子树，然后访问根节点，最后遍历右子树。在遍历左、右子树时，仍然先遍历左子树，再访问根节点，最后遍历右子树。即：

若二叉树为空则结束返回

否则：

1.中序遍历左子树

2.访问根节点

3.中序遍历右子树

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
    public List<Integer> inorderTraversal(TreeNode root) {
        ser(root);
        return integers;
    }
    public void ser(TreeNode treeNode){
        if(treeNode==null) return;

        if(treeNode.left != null)
            ser(treeNode.left);
        integers.add(treeNode.val);
        if(treeNode.right !=null){
            ser(treeNode.right);
        }
    }
}
{% endhighlight %}
