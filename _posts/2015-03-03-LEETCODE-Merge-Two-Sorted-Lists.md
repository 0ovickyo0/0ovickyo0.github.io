---
layout: post
title: LEETCODE 21 Merge Two Sorted Lists
description: "LEETCODE Merge Two Sorted Lists 解题报告"
modified: 2015-03-03
tags: [java, 算法, leetcode]
image:
  feature: abstract-9.jpg
  background: bg-9.png
---

# 描述：
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.
<!--more-->

---
把两个排好序的列表组合成一个新的排序列表。

# 分析：
很简单的一道题，注意上下限及空指针问题即可。

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
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        if(l1==null) return l2;
        if(l2==null) return l1;
        ListNode l;
        if(l1.val>l2.val){
            l = new ListNode(l2.val);
            l2 = l2.next;
        }else{
            l = new ListNode(l1.val);
            l1 = l1.next;
        }
        ListNode n = l; //当前添加的节点
        while(l1!=null || l2!=null){
            if(l1!=null && l2!=null && (l1.val < l2.val)){//两个链表均不为空
                n.next = new ListNode(l1.val);
                n = n.next;
                l1 = l1.next;
            }else if(l1!=null && l2!=null && (l1.val >= l2.val)){//两个链表均不为空
                n.next = new ListNode(l2.val);
                n = n.next;
                l2 = l2.next;
            }else if(l1==null){ //l1为空
                n.next = l2;
                return l;
            }else if(l2==null){ //l2为空
                n.next = l1;
                return l;
            }
        }
        return l;
    }
}
{% endhighlight %}
还可以让代码更简单：

注意||到&&的变化，l节点是个没有用的，返回的是l.next
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
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        ListNode l=new ListNode(0);
        ListNode n = l; //当前添加的节点
        while(l1!=null && l2!=null){
            if(l1.val < l2.val){//两个链表均不为空
                n.next = new ListNode(l1.val);
                n = n.next;
                l1 = l1.next;
            }else if(l1.val >= l2.val){//两个链表均不为空
                n.next = new ListNode(l2.val);
                n = n.next;
                l2 = l2.next;
            }
        }
        if(l1==null){ //l1为空
            n.next = l2;
        }else if(l2==null){ //l2为空
            n.next = l1;
        }

        return l.next;
    }
}
{% endhighlight %}
