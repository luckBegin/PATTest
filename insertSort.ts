const InsertSort = function( arr : number[] ): number[] {
	const len = arr.length ;
	
	for( let i = 1 ; i < len ; i ++ ) {
		const ele = arr[i] ;
		let j = i - 1 ;
		
		while ( j >= 0 && ele < arr[j] ) {
			arr[j + 1 ] = arr[j];
			j -- ;
		}
		
		arr[j + 1 ] = ele ;
	}
	
	return arr ;
};

console.log( InsertSort([1,6,2,3,5]) );
