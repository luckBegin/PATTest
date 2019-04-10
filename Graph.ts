class Graph {
	vertex: any[] = [] ;
	edges: any[][] = [] ;

	addVertex( vertex: any ): Graph{
		this.vertex.push( vertex ) ;
		this.edges.push( [] ) ;
		return this ;
	}


	private vertexIndex( vertex: any ): number {
		return this.vertex.indexOf( vertex ) ;
	};

	addEdge( from: any , dest: any ): Graph{
		const fromIndex: number = this.vertexIndex( from ) ;
		const destIndex: number = this.vertexIndex( dest ) ;

		if( !~fromIndex || !destIndex )
			return ;

		this.edges[fromIndex][destIndex] = 1 ;
		this.edges[destIndex][fromIndex] = 1 ;

		return this ;
	}
}
