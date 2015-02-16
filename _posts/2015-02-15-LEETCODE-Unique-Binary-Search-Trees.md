---
layout: post
title: LEETCODE 96 Unique Binary Search Trees
description: "LEETCODE Unique Binary Search Trees 解题报告"
modified: 2015-02-15
tags: [java, 算法, leetcode]
image:
  feature: abstract-5.jpg
  background: bg-5.png
---

# 描述：

Given n, how many structurally unique BST's (binary search trees) that store values 1...n?

For example,

Given n = 3, there are a total of 5 unique BST's.

{% highlight bash %}
   1         3     3      2      1
    \       /     /      / \      \
     3     2     1      1   3      2
    /     /       \                 \
   2     1         2                 3
{% endhighlight %}

<!--more-->

---

给定整数n判断其能够构成多少个二分查找树。

# 分析：
二分查找树的定义是，左子树节点均小于root，右子树节点均大于root！不能想当然的将某个点作为root时，认为其他所有节点都能全部放在left/right中，除非这个点时min或者max的。

本题其实关键是递推过程的分析，n个节点中每个点都可以作为root，当i作为root时，小于i的节点都只能放在其左子树中，大于i的点只能放在右子树中，此时只需求出左右子树各有多少种，二者相乘即为以i作为root时BST的总数。

如果集合为空，只有一种BST，即空树，BST[0]=1

如果集合仅有一个元素，只有一种BST，即为单个节点的BST[1]=1

当集合有两个元素时，BST[2]=BST[0]*BST[1]（根为1的情况） + BST[1]*BST[0]（根为2的情况） = 2

（可以这么理解，集合中有2个元素的时候，那么这两个元素都可以作为根节点；当1作为根节点的时候，没有比1更小的元素了，因此左边是BST[0]，因为有2个元素，1作为根节点，那么还有一个元素2比1大，放到右子树，因此右边是BST[1]；BST[0]和BST[1]分别理解成0个元素和1个元素的分别的情况，相乘即为根为1的情况）

再来看集合中有3个元素的情况，可以发现BST的取值方式如下：

BST[3] = BST[0]*BST[2]（根为1的情况） + BST[1]*BST[1]（根为2的情况）+BST[2]*BST[0]（根为3的情况）= 1*2 + 1*1+2*1 = 5

一共有n（n>=1）个节点，当第i个节点（0<i<=n）作为根时的情况是 ：比i小的数有i-1个，比i大的数有n-i个，则有 BST[i-1]*BST[n-i]

所以，由此观察，可以得出BST的递推公式为BST[n] =  ∑BST[0..i-1] * [n-i...0]，i取值范围0<i<=n

# 代码：
{% highlight java %}
public class Solution {
    public int numTrees(int n) {
        if(n==0 || n==1) return 1;
        int[] bst= new int[n+1]; //要使得下标为n时bst[n]中存放的就是元素个数为n时的结果
        bst[0] = bst[1] = 1; //元素个数为0和1的时候，都只有1中结果
        for(int i=2;i<n+1;i++){ //能进入for循环，则n必大于1 n>1, n+1>2, n+1>=3
            bst[i] = 0;
            for(int j=0;j<i;j++) {
                bst[i] += bst[j] * bst[i-1-j];
            }
        }
        return bst[n];
    }
}
{% endhighlight %}