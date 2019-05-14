class Graph {
	vertex: any[] = [];
	edges: any[][] = [];

	addVertex(vertex: any): Graph {
		this.vertex.push(vertex);
		this.edges.push([]);
		return this;
	}


	private vertexIndex(vertex: any): number {
		return this.vertex.indexOf(vertex);
	};

	addEdge(from: any, dest: any): Graph {
		const fromIndex: number = this.vertexIndex(from);
		const destIndex: number = this.vertexIndex(dest);

		if ( !~fromIndex || !destIndex )
			return;

		this.edges[fromIndex][destIndex] = 1;
		this.edges[destIndex][fromIndex] = 1;

		return this;
	}

	BFS( start: any ):void{
		const visited: any[] = [] ;
		const arr = [] ;
		arr.push( start ) ;
		while ( arr.length > 0 ){
			const vertexIndex = this.vertexIndex( arr.shift() ) ;
			if( visited.indexOf( vertexIndex ) === - 1){
				console.log( this.vertex[vertexIndex] ) ;
				const edges = this.edges[vertexIndex] ;
				edges.forEach( ( item , idx ) => {
					if( item === 1 )
						arr.push( this.vertex[ idx ]) ;
				}) ;
				visited.push( vertexIndex )
			}
		}
	}

	DFS( start: any ): void{
		const stack: string[] = [] ;
		const visted :string[] = [] ;
		stack.push( start ) ;
		while ( stack.length > 0 ) {
			var top = stack.shift() ;
			visted.push( top ) ;
			console.log( top ) ;
			var adjVertex = this.edges[this.vertexIndex( top )];
			adjVertex.forEach( (item , index ) => {
				var vtx = this.vertex[index] ;
				if( item && visted.indexOf( vtx ) <= -1 ) {
					stack.push( vtx ) ;
					visted.push( vtx ) ;
				}
			})
		}
	}
}

var graph = new Graph() ;
graph.addVertex("V1") ;
graph.addVertex("V2") ;
graph.addVertex("V3") ;
graph.addVertex("V4") ;
graph.addVertex("V5") ;

graph.addEdge("V1" , "V2") ;
graph.addEdge("V1" , "V5") ;
graph.addEdge("V2" , "V3") ;
graph.addEdge("V2" , "V5") ;
graph.addEdge("V3" , "V4") ;
graph.addEdge("V4" , "V5") ;

graph.DFS("V1") ;
graph.BFS("V1") ;