---
layout: post
title: LEETCODE 11 Container With Most Water
description: "LEETCODE Container With Most Water 解题报告"
modified: 2015-03-15
tags: [java, 算法, leetcode]
image:
  feature: abstract-10.jpg
  background: bg-10.png
---

# 描述：
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.

<!--more-->

---

就是说，x轴上在1,2,...,n点上有许多垂直的线段，长度依次是a1, a2, ..., an。找出两条线段，使他们和x抽围成的面积最大。面积公式是 Min(ai, aj) X |j - i|

两条线段和X轴围成的面积，可能的情况是下面这种。

<figure>
	<a href="/images/post/2015-03-15-1.png"><img src="/images/post/2015-03-15-1.png" alt=""></a>
</figure>

# 分析：
O（n）复杂度，使用两个指针l,r，分别指向数组的首尾。如果al < ar，则向后移动l++，寻找比当前al大的左节点，否则向前移动r--，寻找第一个比当前ar大的右节点。如果当前的area大于所记录的area，替换之。

# 代码：
{% highlight java %}
public class Solution {
    public int maxArea(int[] height) {
        int l=0,r=height.length-1;
        int lh=height[l],rh = height[r];
        int area=0;
        while(l<r){
            int atemp = Math.min(lh,rh) * (r-l);
            if(atemp > area) area = atemp;

            if(lh < rh){
                while (l<r && height[l] <= lh) l++;
                if(l<r) lh = height[l];
            }else {
                while(l<r && height[r] <= rh) r--;
                if(l<r) rh = height[r];
            }
        }

        return area;
    }
}

{% endhighlight %}