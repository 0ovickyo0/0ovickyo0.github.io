---
layout: post
title: LEETCODE 42 Trapping Rain Water
description: "LEETCODE Trapping Rain Water  解题报告"
modified: 2014-10-07
tags: [java, 算法, leetcode]
image:
  feature: abstract-8.jpg
  background: bg-8.png
---

# 描述：

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it is able to trap after raining.

For example,
Given [0,1,0,2,1,0,1,3,2,1,2,1], return 6.

<figure>
	<a href="/images/post/2014-10-07-1.png"><img src="/images/post/2014-10-07-1.png" alt=""></a>
</figure>

<!--more-->

The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped. Thanks Marcos for contributing this image!

# 分析：
错误想法：如果一个地方可以装水，那么它一定是V字形的，所以要找到所有的V字形，即找到所有的最低点。找到后，计算每个最低点可以容纳的水。找出V最低点向两边扩散的左边最高点和右边最高点，取小的，然后计算V区间内可以存放的水量。

以上想法只能处理V字形，不能处理W型。
<figure>
	<a href="/images/post/2014-10-07-2.png"><img src="/images/post/2014-10-07-2.png" alt=""></a>
</figure>

蓝色代表水，可以看到很多局部最高点都被水淹了。

这里计算面积不用一般几何书的方法，这里是两边往中间遍历，记录当前第二高点secHight，然后利用这个第二高点减去当前历经的柱子，剩下就装水容量了。

为什么是第二高点？因为两边比较，最高的点不用动，只移动第二高点。

就是从两边夹过来，每次算矮的那边的水有多少，多少等于水位-当前木块高度

水位的更新就是max(原水位，min(左高度，右高度) )

# 代码：
{% highlight java %}
public class Solution {
    public int trap(int[] A) {
        int secHight = 0,left = 0, right=A.length-1, area=0;
        while(left < right){
            if(A[left] < A[right]){
                secHight = A[left] > secHight? A[left]:secHight;
                area += secHight - A[left];//计算当前格能装水的容量
                left++;
            }else {
                secHight = A[right]>secHight? A[right]:secHight;
                area += secHight - A[right];
                right--;
            }
        }
        return area;
    }
}
{% endhighlight %}