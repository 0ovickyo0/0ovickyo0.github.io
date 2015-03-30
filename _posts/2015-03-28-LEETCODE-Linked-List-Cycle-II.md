---
layout: post
title: LEETCODE 142 Linked List Cycle II
description: "LEETCODE Linked List Cycle II 解题报告"
modified: 2015-03-28
tags: [java, 算法, leetcode]
image:
  feature: abstract-1.jpg
  background: bg-1.png
---

# 描述：
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Follow up:
Can you solve it without using extra space?

<!--more-->

# 分析：

<figure>
    <a href="/images/post/2015-03-28-1.png"><img src="/images/post/2015-03-28-1.jpg" alt=""></a>
</figure>

n=1的情况

设：链表头是X，环的第一个节点是Y，slow和fast第一次的交点是Z。各段的长度分别是a,b,c，如图所示。环的长度是L。slow和fast的速度分别是qs,qf。

第一次相遇时slow走过的距离：a+b，fast走过的距离：a+b+c+b。

因为fast的速度是slow的两倍，所以fast走的距离是slow的两倍，有 2(a+b) = a+b+c+b，可以得到a=c（这个结论很重要！）。

如果圈很小，而a很长，那么b的长度就会是绕圈几周了，但是结果也是一样成立的。圈小证明：

1.  假设圈的周长L

2. 那么相遇的时候slow走：a + b,而fast走：a + b + n*L，（n代表fast走了多少圈）

3. fast走路的路程是slow的两倍，那么2(a+b) = a + b + n*L，得到a = n*L - b

4 从相遇点的时候开始，放一个指针从开始点走起，另一个指针继续走，而且这时走的速度都是一样的，那么当一个指针从开始点X走到循环圈点Y的时候，走了a路程，而另一个指针走的路程是n*L-b，那么两者的路程是一样的，相遇点必然是Y。


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
    public ListNode detectCycle(ListNode head) {
        ListNode slow = head;
        ListNode fast = head;

        while(slow!=null && fast!=null){
            slow = slow.next;
            fast = fast.next;
            if(fast!=null)
                fast=fast.next;

            if(slow == fast)
                break;
        }

        if(fast == null) return null;

        slow = head;
        while(slow != fast){
            slow = slow.next;
            fast = fast.next;
        }
        return fast;
    }
}
{% endhighlight %}