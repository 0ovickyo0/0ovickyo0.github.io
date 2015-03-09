---
layout: post
title: LEETCODE 24 Swap Nodes in Pairs
description: "LEETCODE Swap Nodes in Pairs 解题报告"
modified: 2015-03-07
tags: [java, 算法, leetcode]
image:
  feature: abstract-2.jpg
  background: bg-2.png
---

# 描述：
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.

<!--more-->

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
    public ListNode swapPairs(ListNode head) {
        if(head == null) return null;
        if(head.next ==null) return head;

        ListNode fir = head;
        ListNode sec = fir.next;
        ListNode thi = sec.next;
        head = sec;

        while(fir != null){
            if(thi!=null && thi.next!=null){
                fir.next = thi.next;
            }else {
                fir.next = thi;
            }
            sec.next = fir;

            if(thi!=null){
                fir = thi;
                sec = fir.next;
                if(sec == null) break; //最后一个无法配对
                thi = thi.next.next;
            }else{
                break;
            }
        }
        return head;
    }
}
{% endhighlight %}

还可以这么写：

更高级一点的递归：
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
    public ListNode swapPairs(ListNode head) {
        return rec(head);
    }

    public ListNode rec(ListNode head) {
        if(head == null || head.next == null) {
            return head;
        }
        ListNode p = head;
        ListNode q = p.next.next;
        p.next.next = p;
        ListNode newHead = p.next;
        p.next = rec(q);
        return newHead;
    }
}
{% endhighlight %}