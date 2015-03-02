---
layout: post
title: LEETCODE 116 Populating Next Right Pointers in Each Node
description: "LEETCODE Populating Next Right Pointers in Each Node 解题报告"
modified: 2015-02-19
tags: [java, 算法, leetcode]
image:
  feature: abstract-9.jpg
  background: bg-9.png
---

# 描述：
Given a binary tree
{% highlight java %}
struct TreeLinkNode {
   TreeLinkNode *left;
   TreeLinkNode *right;
   TreeLinkNode *next;
}
{% endhighlight %}

Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

<!--more-->

Initially, all next pointers are set to NULL.

Note:

You may only use constant extra space.

You may assume that it is a perfect binary tree (ie, all leaves are at the same level, and every parent has two children).

For example,

Given the following perfect binary tree,

{% highlight java %}
     1
   /  \
  2    3
 / \  / \
4  5  6  7
{% endhighlight %}

After calling your function, the tree should look like:

{% highlight java %}
     1 -> NULL
   /  \
  2 -> 3 -> NULL
 / \  / \
4->5->6->7 -> NULL
{% endhighlight %}

---

给树的每一个节点填充一个指向它下一个右节点的指针。如果右边没有节点了，那么next指向null。

# 分析：

对于某个节点的左孩子一定是指向右孩子的。

处理5连6的情况是通过5236来连接的。

# 代码：

{% highlight java %}
/**
 * Definition for binary tree with next pointer.
 * public class TreeLinkNode {
 *     int val;
 *     TreeLinkNode left, right, next;
 *     TreeLinkNode(int x) { val = x; }
 * }
 */
public class Solution {
    public void connect(TreeLinkNode root) {
        if(root==null || root.left==null) return;
        root.left.next = root.right;
        if(root.next != null) root.right.next = root.next.left;
        connect(root.left);
        connect(root.right);
    }
}
{% endhighlight %}

注意考虑特殊情况就行。{0} 和{1,2,3}这两个输入时我出错了的。 0 的话要检测 root.left!=null， {1,2,3}要检测root.next!=null；
