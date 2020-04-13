// O(n)
// for all
const LinearSearch = function( arr , target) {
	let index = -1 ;

	for(let i = 0 ; i < arr.length ; i ++ ) {
		if( arr[i] === target ) {
			index = i ;
			break ;
		}
	}

	return index ;
};
console.log( LinearSearch([1,6,9,2,11,21,7] , 2 ) );
console.log( LinearSearch([1,6,9,2,11,21,7] , 3 ) );
