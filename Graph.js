var Graph = /** @class */ (function () {
    function Graph() {
        this.vertex = [];
        this.edges = [];
    }
    Graph.prototype.addVertex = function (vertex) {
        this.vertex.push(vertex);
        this.edges.push([]);
        return this;
    };
    Graph.prototype.vertexIndex = function (vertex) {
        return this.vertex.indexOf(vertex);
    };
    ;
    Graph.prototype.addEdge = function (from, dest) {
        var fromIndex = this.vertexIndex(from);
        var destIndex = this.vertexIndex(dest);
        if (!~fromIndex || !destIndex)
            return;
        this.edges[fromIndex][destIndex] = 1;
        this.edges[destIndex][fromIndex] = 1;
        return this;
    };
    Graph.prototype.BFS = function (start) {
        var _this = this;
        var visited = [];
        var arr = [];
        arr.push(start);
        while (arr.length > 0) {
            var vertexIndex = this.vertexIndex(arr.shift());
            if (visited.indexOf(vertexIndex) === -1) {
                console.log(this.vertex[vertexIndex]);
                var edges = this.edges[vertexIndex];
                edges.forEach(function (item, idx) {
                    if (item === 1)
                        arr.push(_this.vertex[idx]);
                });
                visited.push(vertexIndex);
            }
        }
    };
    Graph.prototype.DFS = function (start) {
        var _this = this;
        var stack = [];
        var visted = [];
        stack.push(start);
        while (stack.length > 0) {
            var top = stack.shift();
            visted.push(top);
            console.log(top);
            var adjVertex = this.edges[this.vertexIndex(top)];
            adjVertex.forEach(function (item, index) {
                var vtx = _this.vertex[index];
                if (item && visted.indexOf(vtx) <= -1) {
                    stack.push(vtx);
                    visted.push(vtx);
                }
            });
        }
    };
    return Graph;
}());
var graph = new Graph();
graph.addVertex("V1");
graph.addVertex("V2");
graph.addVertex("V3");
graph.addVertex("V4");
graph.addVertex("V5");
graph.addEdge("V1", "V2");
graph.addEdge("V1", "V5");
graph.addEdge("V2", "V3");
graph.addEdge("V2", "V5");
graph.addEdge("V3", "V4");
graph.addEdge("V4", "V5");
graph.DFS("V1");
graph.BFS("V1");
