// 为体现 所在地列表中 优先级的概念 此处使用 Priority-Queue 也就是优先队列
// 优先队列的项
var PQItem = /** @class */ (function () {
    function PQItem(priority, val) {
        this.priority = priority;
        this.value = val;
    }
    return PQItem;
}());
// 优先队列类
//因重点不在 Priority-Queue , 此处为简单模拟优先队列的功能
//真正的 Priority-Queue 应为 Heap Data Structure
var PQ = /** @class */ (function () {
    function PQ() {
        this.queue = [];
    }
    //入队
    PQ.prototype.push = function (priority, val) {
        var pqItem = new PQItem(priority, val);
        this.queue.push(pqItem);
        return this;
    };
    //出队
    PQ.prototype.pop = function () {
        this.queue.sort(function (a, b) {
            return a.priority > b.priority ? 1 : -1;
        });
        return this.queue.shift();
    };
    //获取队列长度
    PQ.prototype.getLen = function () {
        return this.queue.length;
    };
    return PQ;
}());
// 对于地图的模拟
// 图类
var Graph = /** @class */ (function () {
    function Graph() {
        this.vertex = [];
        this.edges = {};
    }
    //添加点
    Graph.prototype.addVertex = function (vertex) {
        this.vertex.push(vertex);
        this.edges[vertex] = {};
        return this;
    };
    //获取点的索引
    Graph.prototype.vertexIndex = function (vertex) {
        return this.vertex.indexOf(vertex);
    };
    ;
    // 添加边 参数分别为 起点 , 重点 , 和权值 结合上述可以理解为 距离
    Graph.prototype.addEdge = function (from, dest, weight) {
        this.edges[from][dest] = weight;
        return this;
    };
    //获取所有点
    Graph.prototype.getVertex = function () {
        return this.vertex;
    };
    //根据点获取边 也就是获取相邻的地方
    Graph.prototype.getEdges = function (vertex) {
        return this.edges[vertex];
    };
    return Graph;
}());
//算法入口
var DIJAlg = function (graph, from) {
    // 新建一个 有限队列 也就是 所在地的表
    var q = new PQ;
    //新建距离表
    var d = {};
    // 用来存放路径
    var pre = {};
    //初始化开始
    graph.getVertex().forEach(function (item) {
        d[item] = item === from ? 0 : Number.MAX_VALUE;
        pre[item] = null;
    });
    q.push(0, from);
    pre[from] = from;
    var _loop_1 = function () {
        // 弹出当前所在地
        var currentVertex = q.pop();
        //获取与当前所在地所有邻接的点
        var edges = graph.getEdges(currentVertex.value);
        //遍历这些点
        Object.keys(edges).forEach(function (item) {
            // 如果 当前所在地 在 距离表的 值 + 当前所在地 到 目标地的距离 < 目标地 在 距离表中的值 则执行 第二 第三步
            if (d[currentVertex.value] + edges[item] < d[item]) {
                // 更新距离表
                d[item] = d[currentVertex.value] + edges[item];
                // 更新队列
                q.push(edges[item], item);
                //将路径存入 pre 中
                pre[item] = currentVertex.value;
            }
        });
    };
    // 初始化结束
    //开始循环 , 监测 队列中 是否还存有元素
    while (q.getLen() > 0) {
        _loop_1();
    }
    //返回路径
    return pre;
};
var priPath = function (from, dest, map) {
    var path = [];
    var end = false;
    var startPlace = from;
    var endPlace = dest;
    while (!end) {
        var val = map[endPlace];
        path.push(val);
        endPlace = val;
        if (startPlace === val)
            end = true;
    }
    path.unshift(dest);
    console.log(path.reverse().join("--->"));
};
var graph = new Graph;
graph.addVertex("张家村");
graph.addVertex("李家村");
graph.addVertex("刘家村");
graph.addVertex("王家村");
graph.addVertex("广场");
graph.addVertex("赵家村");
graph.addEdge("张家村", "李家村", 2);
graph.addEdge("张家村", "刘家村", 1);
graph.addEdge("张家村", "王家村", 5);
graph.addEdge("李家村", "赵家村", 1);
graph.addEdge("李家村", "王家村", 2);
graph.addEdge("刘家村", "王家村", 1);
graph.addEdge("王家村", "广场", 2);
graph.addEdge("王家村", "赵家村", 3);
graph.addEdge("广场", "刘家村", 4);
priPath("张家村", "王家村", DIJAlg(graph, "张家村"));
