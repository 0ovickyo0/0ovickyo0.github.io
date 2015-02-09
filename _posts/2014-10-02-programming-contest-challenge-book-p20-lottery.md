---
layout: post
title: 抽签问题—挑战程序设计P20
description: "挑战程序设计 读书笔记 之 抽签问题"
modified: 2014-10-02
tags: [java, 算法, 读书笔记]
image:
  feature: abstract-3.jpg
  background: bg-3.png
---

# 问题描述：
你的朋友提议玩一个游戏：将写有数字的n个纸片放入口袋中，你可以从口袋中抽取抽取4次纸片，每次记下纸片的数字并将其放回口袋中。如果这4个数字的总和为m，就是你赢。你挑战了好几回，结果一次也没有赢过，于是怒而撕破口袋，取出所有的纸片，检查自己是否真的有赢的可能性。请你编写一个程序，判断当纸片上的数字为k1,k2........kn时，是否存在4次和为m的方案。如果存在则输出Yes，否则输出No。

<!--more-->

# 限制条件：

1<= n <= 50

1<=m<=108

1<=ki<=108

# 测试样例：
1.输入：

n = 3

m = 9

k={1,3,5}

输出：No

2.输入：

n=3

m=10

k={1,3,5}

输出：Yes

# 解决方法一：

枚举所有的可能性，复杂度是O（n<sup>4</sup>）

# 代码一：
{% highlight java %}
	public class lottery {
	    public static void main(String[] args){
	        int n = 3;
	        int m = 9;
	        Integer[] k = {1,3,5};
	        if(find(n,m,k)){
	            System.out.println("Yes");
	        }else {
	            System.out.println("No");
	        }
	    }
	    //枚举遍历所有的可能性，找到一种可以的就会返回
	    public static Boolean find(int n, int m, Integer[] k){
	        for(int a=0;a<n; a++){
	            for(int b=0;b<n;b++){
	                for(int c=0;c<n;c++){
	                    for(int d=0;d<n;d++){
	                        if(k[a] + k[b] + k[c] + k[d] == m){
	                            return true;
	                        }
	                    }
	                }
	            }
	        }
	        return false;
	    }
	}
{% endhighlight %}

# 解决方法二：
当n=1000时，上述算法完全跪了。

上面循环部分，最内侧的关于d的循环所做的事就是：

检查是否有d使得 ka+kb+kc+kd = m

通过对式子移向，就能得到另一种表达式：


检查是否有d使得kd = m - ka - kb - kc

就是说，检查数组k中所有元素，判断是否有 m-ka-kb-kc

使用二分法搜索，可以将整体算法复杂度降为O（n<sup>3</sup>longn）

其中：

排序O（nlogn）

循环O（n<sup>3</sup>longn）

代码二：
{% highlight java %}
	import java.util.Arrays;
	public class lotterya {
	    private static int n = 3;
	    private static int m = 10;
	    private static Integer[] k = {1,3,5};
	    public static void main(String[] args){
	        //为了执行二分查找需要先排序
	        Arrays.sort(k);
	        boolean f = false;
	        for(int a=0;a<n;a++){
	            for(int b=0;b<n;b++){
	                for(int c=0; c<n; c++){
	                    if(binary_search(m-k[a]-k[b]-k[c])){
	                        f=true;
	                    }
	                }
	            }
	        }
	        if(f) System.out.println("Yes");
	        else System.out.println("No");
	    }
	    public static boolean binary_search(int x){
	        //x的存在范围是k[l],k[l+1],...,k[r-1]
	        int l = 0, r=n;
	        //反复操作直到存在范围为空
	        while(r-l >= 1){
	            int i = (l+r)/2;
	            if(k[i] == x) return true; //找到x
	            else if(k[i] < x) l = i+1;
	            else r = i;
	        }
	        //没找到x
	        return false;
	    }
	}
{% endhighlight %}

# 解决方法三：

将n=1000带入n3longn，会发现这依然是远远不够的，必须要对算法做进一步的优化。刚才我们只着眼于四重循环程序中最内层的循环。接下来，让我们着眼于内侧的两个循环。

和刚才同样的思路，内侧的两个循环是在：

检查是否有c和d使得kc+kd = m-ka-kb。

这种情况下并不能直接使用二分搜索。但是，如果预先枚举出kc+kd所得的n2个数字并排好序，便可以利用二分法搜索了。

这样一来，算法总体复杂度为O（n<sup>2</sup>longn）

其中：

排序O（n<sup>2</sup>logn）

循环O（n<sup>2</sup>longn）

# 代码三：

出现大bug：运行之后不结束也不输出。。 单步运行也是！ 但是结果值是没有问题的！

{% highlight java %}
public class lotteryb {
    private static int n = 3;
    private static int m = 10;
    private static Integer[] k = {1,3,5};
    private static Integer[] kk = new Integer[n*n];
    public static void main(String[] args){
        //枚举k[c] + k[d] 的和
        for(int c=0; c< n; c++){
            for(int d = 0; d<n; d++){
                kk[c*n + d] = k[c] + k[d];
            }
        }
        //排序以便进行二分搜索
        Arrays.sort(kk);
        boolean f = false;
        for(int a=0;a<n;a++){
            for(int b=0;b<n;b++){
                //将内侧的两个循环替换成二分搜索
                if(binary_search(m-k[a]-k[b])){
                    f = true;
                }
            }
        }
        if(f) System.out.println("Yes");
        else System.out.println("No");
    }
    public static boolean binary_search(int x){
        //x的存在范围是kk[l], kk[l+1]...kk[r-1].
        int l=0, r=n*n;
        //反复操作直到存在范围为空
        while(r-l>=l){
            int i = (l+r)/2;
            if(kk[i] == x) return true;
            else if (kk[i] < x) l = i +1;
            else r=i;
        }
        //没找到x
        return false;
    }
}
{% endhighlight %}
