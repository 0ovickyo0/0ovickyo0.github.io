---
layout: post
title:三角形—挑战程序设计P16
description: "挑战程序设计 读书笔记 之 三角形"
modified: 2014-10-01
tags: [java, 算法, 读书笔记]
image:
  feature: abstract-2.jpg
  background: bg-2.png
---

这篇文章是看过《挑战程序设计竞赛》后的读书笔记。

# 问题描述：

有n根棍子，棍子i的长度为ai。想要从中选出3根棍子组成周长尽可能长的三角形。请输出最大的周长，若无法组成三角形则输出0。

<!--more-->

# 限制条件：
3 ≤ n ≤ 100

1 ≤ ai ≤ 106

# 测试样例：
1.输入：

n=5

a={2,3,4,5,10}

输出：

12

2.输入：

n=4

a={4,5,10,20}

输出：

0

# 分析：
1.形成三角形的充要条件：最长的线段小于其他两线段之和。

2.棍子不是有序的

# 解决方法一：

最最最容易想到的，使用三重循环，枚举所有可能方案，判断他们能否组成三角形，如果可以，则计算周长进备选答案。此方法复杂度O（n<sup>3</sup>）

# 解决方法二：

排序所有的棍子，由小到大正序排列，此步骤复杂度O（nlog(n)）。

遍历比较，每次比较最长的三根棍子是否能组成三角形。如果可以，则是答案。此步骤复杂度O（n-2）。

总复杂度： O（nlog(n)）

# 代码一：

{% highlight java %}
public class triangle {
    public static void main(String[] args){
        long pre=System.currentTimeMillis();
        int n = 4;
        Integer[] a = {2,3,4,5,10,20};
        int max=0;
        //循环枚举所有可能值
        for(int i=n-1;i>=0;i--) {
            for (int j = i - 1; j >= 0; j--) {
                for (int k = j - 1; k >= 0; k--) {
                    if((a[i] + a[j] > a[k]) && //构成三角形的条件
                       (a[j] + a[k] > a[i]) &&
                       (a[k] + a[i] > a[j]) &&
                            (a[i] + a[j] + a[k] > max)){
                        max = a[i] + a[j] + a[k];
                    }
                }
            }
        }
        System.out.println("res：" + max);
        long post=System.currentTimeMillis();
        System.out.println("time：" + (post-pre) + "ms");
    }
}
{% endhighlight %}

# 代码二：

{% highlight java %}
public class trianglea {
    public static void main(String[] args){
        long pre=System.currentTimeMillis();
        //初始值
        int n = 7;
        Integer[] a = {2,3,4,5,10,30,20};
        Arrays.sort(a); //复杂度为O(nlogn)的排序
        int max = 0;
        for(int i=n-1; i>=2; i--){ //遍历求最大周长
            if(a[i] < a[i-1] + a[i-2]){ //三角形满足条件
                max = a[i] + a[i-1] + a[i-2];
                break;
            }
        }
        System.out.println("res: " + max);
        long post=System.currentTimeMillis();
        System.out.println("time：" + (post-pre) + "ms");
    }
}
{% endhighlight %}


