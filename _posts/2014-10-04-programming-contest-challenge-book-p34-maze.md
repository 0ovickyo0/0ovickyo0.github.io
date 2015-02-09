---
layout: post
title: 迷宫的最短路径—挑战程序设计P34
description: "挑战程序设计 读书笔记 之 迷宫的最短路径问题"
modified: 2014-10-04
tags: [java, 算法, 读书笔记]
image:
  feature: abstract-5.jpg
  background: bg-5.png
---

# 问题描述：

给定一个大小为NXM的迷宫。迷宫由通道和墙壁组成，每一步可以向邻接的上下左右四格的通道移动。请求出从起点到终点所需的最小步数。请注意，本题假定从起点一定可以移动到终点。

<!--more-->

# 限制条件：
N,M<=100


# 测试样例：
N=10， M=10

{% highlight java %}
#S######.#
......#..#
.#.##.##.#
.#........
##.##.####
....#....#
.#######.#
....#.....
.####.###.
....#...G#
{% endhighlight %}

# 解决方法：

这里会使用到宽度优先搜索BFS Breadth-First Search。

搜索时首先将初始状态添加到队列里，此后从队列的最前端不断取出状态，把从该状态可以转移到的状态中尚未访问过的部分加入队列，如此往复，直至队列被取空或找到了问题的解。

# 代码：
{% highlight java %}
public class Pair {
    private int first;
    private int second;
    public Pair(int first, int second) {
        this.first = first;
        this.second = second;
    }
    public int getFirst() {
        return first;
    }
    public void setFirst(int first) {
        this.first = first;
    }
    public int getSecond() {
        return second;
    }
    public void setSecond(int second) {
        this.second = second;
    }
}
{% endhighlight %}

{% highlight java %}
public class Maze {
    private static int N= 10, M=10;
    //4个方向移动向量
    private static int[] dx = {1,0,-1,0},dy={0,1,0,-1};
    private static int[][] d = new int[N][M];
    private static char[][] maze = {
    {'#','S','#','#','#','#','#','#','.','#'},
    {'.','.','.','.','.','.','#','.','.','#'},
    {'.','#','.','#','#','.','#','#','.','#'},
    {'.','#','.','.','.','.','.','.','.','.'},
    {'#','#','.','#','#','.','#','#','#','#'},
    {'.','.','.','.','#','.','.','.','.','#'},
    {'.','#','#','#','#','#','#','#','.','#'},
    {'.','.','.','.','#','.','.','.','.','.'},
    {'.','#','#','#','#','.','#','#','#','.'},
    {'.','.','.','.','#','.','.','.','G','#'}
    };
    public static void main(String[] args){
        int res = bfs();
        System.out.println(res);
    }
    //求从(sx,xy)到(gx,gy)的最短距离
    //如果无法到达，则是INF
    public static int bfs(){
        Queue<Pair> queue = new LinkedList<Pair>();
        //把所有位置都初始化为INF
        int INF = 1000000000;
        for(int i=0;i<N;i++){
            for(int j=0;j<M;j++) d[i][j] = INF;
        }
        //将起点加入队列，并把这一点的距离设置为0
        int sx = 1;
        int sy = 0;
        queue.offer(new Pair(sx, sy));
        d[sx][sy] = 0;
        //不断循环直到队列的长度为0
        int gx = 9;
        int gy = 8;
        while(queue.size() > 0){
            //从队列的最前端取出元素
            Pair p = queue.poll();
            //如果取出的状态已经是终点，则结束搜索
            if(p.getFirst() == gx && p.getSecond() == gy) break;
            //四个方向的循环
            for(int i=0; i < 4; i++) {
                //移动之后的位置记为(nx,ny)
                int nx = p.getFirst() + dx[i];
                int ny = p.getSecond() + dy[i];
                //判断是否可以移动以及是否已经访问过(d[nx][ny] != INF 即为已经访问过)
                if(0<=nx && nx < N && 0<= ny && ny<M && maze[nx][ny] != '#' && d[nx][ny] == INF){
                    //可以移动的话，则加入到队列，并且到该位置的距离确定为到p的距离+1
                    queue.offer(new Pair(nx,ny));
                    d[nx][ny] = d[p.getFirst()][p.getSecond()] + 1;
                }
            }
        }
        return d[gx][gy];
    }
}
{% endhighlight %}
