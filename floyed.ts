
// 对于地图的模拟
// 图类
class Graph {
	private readonly vertex: any[] = [];
	private readonly edges: any = {};

	//添加点
	addVertex(vertex: any): Graph {
		this.vertex.push(vertex);
		this.edges[vertex] = {} ;
		return this;
	}

	//获取点的索引
	private vertexIndex(vertex: any): number {
		return this.vertex.indexOf(vertex);
	};

	// 添加边 参数分别为 起点 , 重点 , 和权值 结合上述可以理解为 距离
	addEdge( from: any, dest: any , weight: number ): Graph {
		this.edges[from][dest] = weight;
		return this;
	}

	//获取所有点
	getVertex(): any[] {
		return this.vertex ;
	}
	//根据点获取边 也就是获取相邻的地方
	getEdges( vertex: any ): any[] {
		return this.edges[vertex] ;
	}
}

const Floyed = function( graph: Graph , from: string , dest: string): any{

};

const graph = new Graph ;
graph.addVertex("张家村") ;
graph.addVertex("李家村") ;
graph.addVertex("刘家村") ;
graph.addVertex("王家村") ;
graph.addVertex("广场") ;
graph.addVertex("赵家村") ;

graph.addEdge("张家村" , "李家村" , 2) ;
graph.addEdge("张家村" , "刘家村" , 1) ;
graph.addEdge("张家村" , "王家村" , 5) ;
graph.addEdge("李家村" , "赵家村" , 1 ) ;
graph.addEdge("李家村" , "王家村" , 2 ) ;
graph.addEdge("刘家村" , "王家村" , 1 ) ;
graph.addEdge("王家村" , "广场" , 2 ) ;
graph.addEdge("王家村" , "赵家村" , 3 ) ;
graph.addEdge("广场" , "刘家村" , 4 ) ;

console.log(Floyed(graph , '张家村' , "广场")) ;
