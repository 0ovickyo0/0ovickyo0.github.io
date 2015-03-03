---
layout: post
title: LEETCODE 83 Remove Duplicates from Sorted List
description: "LEETCODE Remove Duplicates from Sorted List 解题报告"
modified: 2015-02-25
tags: [java, 算法, leetcode]
image:
  feature: abstract-4.jpg
  background: bg-4.png
---

# 描述：
Given a sorted linked list, delete all duplicates such that each element appear only once.

For example,
Given 1->1->2, return 1->2.
Given 1->1->2->3->3, return 1->2->3.

<!--more-->

---

从给定有序链表中删除重复的元素。

# 代码：
{% highlight java %}
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        if(head == null) return head;
        ListNode node = head;
        int nowVal = node.val;
        while(node.next != null){
            if(node.next.val == nowVal){ //下一个值和当前值相等
                node.next = node.next.next; //当前节点的下一个节点设置为当前节点的下下个节点
            }else if(node.next!=null){
                node = node.next;
                nowVal = node.val;
            }
        }
        return head;
    }
}
{% endhighlight %}
