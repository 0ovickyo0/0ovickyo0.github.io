---
layout: post
title: LEETCODE 141 Linked List Cycle
description: "LEETCODE Linked List Cycle 解题报告"
modified: 2015-02-16
tags: [java, 算法, leetcode]
image:
  feature: abstract-6.jpg
  background: bg-6.png
---

# 描述：
Given a linked list, determine if it has a cycle in it.

Follow up:

Can you solve it without using extra space?

---

判断一个链表中是否有环

<!--more-->

# 分析：

使用两个指针slow, fast。两个指针都从表头开始走，slow每走一步，fast走两步，如果fast遇到null，则说明没有环，返回false；如果slow==fast，则说明有环，并且此时fast超了slow一圈，返回true。

为什么有环的情况下二者一定会相遇呢？因为fast先进入环，在slow进入之后，如果把slow看作在前面，fast在后面每次循环都向slow靠近1，所以一定会相遇，而不会出现fast直接跳过slow的情况。

# 代码：
{% highlight java %}
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
    public boolean hasCycle(ListNode head) {
        if(head==null) return false;
        ListNode slow=head;
        ListNode fast=head;
        while(fast.next!=null && fast.next.next!=null){
            fast = fast.next.next;
            slow = slow.next;
            if(fast == slow)
                return true;
        }

        return false;
    }
}
{% endhighlight %}