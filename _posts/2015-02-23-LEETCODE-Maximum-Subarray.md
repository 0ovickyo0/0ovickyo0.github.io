---
layout: post
title: LEETCODE 53 Maximum Subarray
description: "LEETCODE Maximum Subarray 解题报告"
modified: 2015-02-23
tags: [java, 算法, leetcode]
image:
  feature: abstract-2.jpg
  background: bg-2.png
---

# 描述：
Find the contiguous subarray within an array (containing at least one number) which has the largest sum.

For example, given the array [−2,1,−3,4,−1,2,1,−5,4],

the contiguous subarray [4,−1,2,1] has the largest sum = 6.

<!--more-->

---

找到给定数组中能有多少个数字连接构成最大和。

# 分析：

首先想到的是O(n2)复杂度的解决方法，尝试让每个数作为开始，求最大值。

# 代码一：
{% highlight java %}
public class Solution {
    public int maxSubArray(int[] A) {
        int max = 0;
        for(int i=0;i<A.length;i++){ //第i个数作为起点
            if(A[i] < 0) continue; //负数肯定不会作为起始点
            int temp = A[i];
            for (int j=i+1;j<A.length;j++){ //加到第j个数
                temp += A[j];
                if(temp > max) max = temp;
            }
        }
        return max;
    }
}
{% endhighlight %}
但是超时了！！

# DP解法
O（n）的解法

采用DP滑动窗口解决。sum如果小于0，置为当前A[i]值，否则再加上当前值。

然后再与max相比，取大的。

{% highlight java %}
public class Solution {
    public int maxSubArray(int[] A) {
        int max = Integer.MIN_VALUE;
        int sum = Integer.MIN_VALUE;
        for(int i=0;i<A.length;i++){
            if(sum<0) sum = A[i];
            else sum +=A[i];
            max = Math.max(max, sum);
        }
        return max;
    }
}
{% endhighlight %}

# 分治法

其复杂度为O（nlog(n)）

最大序列可能存在A数组的左边，右边，或者一点左边一点右边。

所以我们很容易可以联想到，这样我们可以把A数组划分成若干个小的子数组，对子数组求出左边的最大值和右边的最大值，再求出从中间位置到左边的某个位置的最大值、从中间位置到右边的某个位置的最大值，得到了这四个值之后剩下的我们就可以通过比较得到这个子数组的最大值了。（递归的过程）
{% highlight java %}
public class Solution {
    public int maxSubArray(int[] A) {
        int len = A.length;
        return maxSum(A,0,len-1);
    }
    public int maxSum(int[] A, int left, int right )
    {
        if( left == right ){
            return A[left];
        }
        int center = (left + right) / 2;
        int maxLeftSum  = maxSum( A, left, center);
        int maxRightSum = maxSum( A, center+1, right);

        int maxLeft = Integer.MIN_VALUE, tempLeft = 0;
        int maxRight = Integer.MIN_VALUE, tempRight = 0;
        for (int i=center; i>=left; --i){
            tempLeft += A[i];
            if (tempLeft > maxLeft){
                maxLeft = tempLeft;
            }
        }
        for (int i=center+1; i<=right; ++i){
            tempRight += A[i];
            if (tempRight > maxRight){
                maxRight = tempRight;
            }
        }

        int maxCenterSum = maxLeft + maxRight;

        return maxCenterSum > maxLeftSum ? (maxCenterSum > maxRightSum ? maxCenterSum : maxRightSum) : maxLeftSum > maxRightSum ? maxLeftSum : maxRightSum;
    }
}
{% endhighlight %}