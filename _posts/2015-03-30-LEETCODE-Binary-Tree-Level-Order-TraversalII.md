---
layout: post
title: LEETCODE 107 Binary Tree Level Order Traversal II
description: "LEETCODE Binary Tree Level Order Traversal II 解题报告"
modified: 2015-03-30
tags: [java, 算法, leetcode]
image:
  feature: abstract-3.jpg
  background: bg-3.png
---

# 描述：
Given a binary tree, return the bottom-up level order traversal of its nodes' values. (ie, from left to right, level by level from leaf to root).

For example:
Given binary tree {3,9,20,#,#,15,7},
{% highlight java %}
    3
   / \
  9   20
 /     \
15      7
{% endhighlight %}
<!--more-->

return its bottom-up level order traversal as:
[
  [15,7],
  [9,20],
  [3]
]

---
给定一个二叉树，从底层到顶层，一层层返回它的节点数组。

# 分析：
自顶向下进行遍历后再进行reverse。其实本质就是把树看成一个有向图，然后进行一次广度优先搜索，这个图遍历算法是非常常见的，这里同样是维护一个队列，只是对于每个结点我们知道它的邻接点只有可能是左孩子和右孩子。

lastNum 是上一层还有多少个节点,如果等于0 就说明这一层的节点都已经放入了，并且使用curNum来更新下一层要放入多少个节点。  curNum是记录下一层有一共多少节点。

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
    public List<List<Integer>> levelOrderBottom(TreeNode root) {


        List<List<Integer>> res = new ArrayList<List<Integer>>();
        if(root == null) return res;
        LinkedList<TreeNode> queue = new LinkedList<TreeNode>();
        queue.add(root);
        int curNum = 0;
        int lastNum = 1;
        ArrayList<Integer> list = new ArrayList<Integer>();


        while(!queue.isEmpty()){
            TreeNode cur = queue.poll();
            lastNum--;
            list.add(cur.val);
            if(cur.left!=null){
                queue.add(cur.left);
                curNum++;
            }
            if(cur.right != null){
                queue.add(cur.right);
                curNum++;
            }
            if(lastNum == 0) {
                lastNum = curNum;
                curNum = 0;
                res.add(list);
                list = new ArrayList<Integer>();
            }

        }

        Collections.reverse(res);
        return res;
    }
}
{% endhighlight %}
