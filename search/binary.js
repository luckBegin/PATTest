// O(logN)
// only for sorted

// recursive
const BinarySearchRecursive = function( arr , target , min , max ) {
	if( !arr.length ) return -1 ;

	const l = min ? min : 0 ;
	const r = max ? max : arr.length -1 ;

	if( l > r ) return -1 ;

	const mid = Math.ceil( ( l + r ) / 2 ) ;

	if( arr[mid] === target ) return mid ;

	if( arr[mid] > target ) return BinarySearchRecursive( arr , target , 0 , mid - 1) ;

	return BinarySearchRecursive( arr , target , mid + 1 , arr.length ) ;
}

// loop
const BinarySearchLoop = ( arr , target) => {
	if( !arr.length) return -1 ;

	let l = 0 ;
	let r = arr.length -1 ;

	while ( l < r ) {
		const mid = Math.ceil( ( l + r ) / 2 ) ;

		if( arr[mid] === target ) return mid ;

		if(arr[mid] > target)
			r = mid - 1 ;
		else
			l = mid + 1 ;
	}

	return -1 ;
};

console.log( BinarySearchRecursive([1,2,3,4,5,6,7,8,9] , 10 ) );
console.log( BinarySearchRecursive([1,2,3,4,5,6,7,8,9] , 5 ) );

console.log( BinarySearchLoop([1,2,3,4,5,6,7,8,9] , 10 ) );
console.log( BinarySearchLoop([1,2,3,4,5,6,7,8,9] , 5 ) );
