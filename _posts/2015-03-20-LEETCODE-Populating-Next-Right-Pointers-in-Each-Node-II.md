---
layout: post
title: LEETCODE 117 Populating Next Right Pointers in Each Node II
description: "LEETCODE Populating Next Right Pointers in Each Node II 解题报告"
modified: 2015-03-20
tags: [java, 算法, leetcode]
image:
  feature: abstract-4.jpg
  background: bg-4.png
---

# 描述：
Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.

<!--more-->

For example,

Given the following binary tree,
{% highlight java %}
         1
       /  \
      2    3
     / \    \
    4   5    7
{% endhighlight %}

After calling your function, the tree should look like:

{% highlight java %}
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
{% endhighlight %}

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
        if(root == null) return;

        TreeLinkNode rootNext = root.next; //找到与root同一行的next node
        TreeLinkNode next = null; //下一个被连接的对象
        //在当前循环中，永远处理的是其孩子节点的链接情况

        //rootNext如果是null，说明已经处理完这一层的所有node
        //next不等于null说明找到了当前节点的左孩子的连接对象
        while(rootNext != null && next == null){
            if(rootNext.left !=null){ //优先找左边
                next = rootNext.left;
            }else{
                next = rootNext.right;
            }
            rootNext = rootNext.next;
        }
        if(root.left !=null){
            if(root.right != null){ //内部相连
                root.left.next = root.right;
            }else { //跨树相连
                root.left.next = next;
            }
        }
        if(root.right !=null){ //跨树相连
            root.right.next = next;
        }
        connect(root.right); //要先让右边都先连起来
        connect(root.left);
    }
}
{% endhighlight %}