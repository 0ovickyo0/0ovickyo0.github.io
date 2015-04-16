---
layout: post
title: LEETCODE 102 Binary Tree Level Order Traversal
description: "LEETCODE Binary Tree Level Order Traversal 解题报告"
modified: 2014-10-11
tags: [java, 算法, leetcode]
image:
  feature: abstract-1.jpg
  background: bg-1.png
---

# 描述：
Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree {3,9,20,#,#,15,7},
    3
   / \
  9  20
    /  \
   15   7
return its level order traversal as:
[
  [3],
  [9,20],
  [15,7]
]

<!--more-->

---
给定一个树，返回它的一层一层节点的数组
lastNum 是上一层还有多少个节点,如果等于0 就说明这一层的节点都已经放入了，并且使用curNum来更新下一层要放入多少个节点。  curNum是记录下一层有一共多少节点。
代码：
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
    public List<List<Integer>> levelOrder(TreeNode root) {
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
            if(cur.left != null){
                queue.add(cur.left);
                curNum++;
            }
            if(cur.right!= null){
                queue.add(cur.right);
                curNum++;
            }
            if(lastNum ==0){
                lastNum = curNum;
                curNum = 0;
                res.add(list);
                list = new ArrayList<Integer>();
            }
        }
        return res;
    }
}
{% endhighlight %}
