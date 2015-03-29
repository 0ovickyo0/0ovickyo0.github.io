---
layout: post
title: LEETCODE 154 Find Minimum in Rotated Sorted Array II
description: "LEETCODE Find Minimum in Rotated Sorted Array II 解题报告"
modified: 2015-03-27
tags: [java, 算法, leetcode]
image:
  feature: abstract-11.jpg
  background: bg-11.png
---

#　描述：
Follow up for "Find Minimum in Rotated Sorted Array":
What if duplicates are allowed?

Would this affect the run-time complexity? How and why?
Suppose a sorted array is rotated at some pivot unknown to you beforehand.

(i.e., 0 1 2 4 5 6 7 might become 4 5 6 7 0 1 2).

Find the minimum element.

The array may contain duplicates.

<!--more-->

# 分析：

可能出现的情况：
    <figure>
    	<a href="/images/post/2015-03-27-1.png"><img src="/images/post/2015-03-27-1.jpg" alt=""></a>
    </figure>

原来我们是依靠中间和边缘元素的大小关系，来判断哪一半是不受rotate影响，仍然有序的。而现在因为重复的出现，如果我们遇到中间和边缘相等的情况，我们就无法判断哪边有序，因为哪边都有可能有序。假设原数组是{1,2,3,3,3,3,3}，那么旋转之后有可能是{3,3,3,3,3,1,2}，或者{3,1,2,3,3,3,3}，这样的我们判断左边缘和中心的时候都是3，我们并不知道应该截掉哪一半。解决的办法只能是对边缘移动一步，直到边缘和中间不在相等或者相遇，这就导致了会有不能切去一半的可能。所以最坏情况就会出现每次移动一步，总共移动n此，算法的时间复杂度变成O(n)。

# 代码：
{% highlight java %}
public class Solution {
    public int findMin(int[] num) {
        int l=0,r=num.length-1;

        while(l<r && num[l] >= num[r]){
            int m = (l+r)/2;
            if(num[m] > num[l]) { //l~m段反转
                l = m+1;
            }else if (num[m] < num[r]) { //m~l段反转
                r = m;
            }else {
                l++;
            }
        }
        return num[l];
    }
}
{% endhighlight %}

