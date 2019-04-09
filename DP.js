const arr = [1 , 3 , 8 , 6 , 7 , 8 , 12 , 11 , 15 , 9 , 10 , 6 , 14 , 18 , 22 , 8 , 10 , 13, 16 , 8,1 , 3 , 8 , 6 , 7 , 8 , 12 , 11 , 15 , 9 , 10 , 6 , 14 , 18 , 22 , 8 , 10 , 13, 16 , 8,] ;
const cache = {};

const opt = function(arr, i) {
	let val = null;
	if (i === 0) {
		val = arr[0];
	} else if (i === 1) {
		val = Math.max(arr[0], arr[1]);
	} else {
		const a = opt(arr, i - 2) + arr[i];
		const b = opt(arr, i - 1);
		val = Math.max(a, b);
	}
	return val ;
};

const optCache = function(arr, i) {
	let val = null;
	if (i === 0) {
		val = arr[0];
	} else if (i === 1) {
		val = Math.max(arr[0], arr[1]);
	} else {
		if( cache[i] )
			val = cache[i];
		else{
			const a = optCache(arr, i - 2) + arr[i];
			const b = optCache(arr, i - 1);
			val = Math.max(a, b);
		}
	};

	cache[i] = val ;
	return val ;
};

console.log("未做缓存") ;
console.log( Date.now() ) ;
console.log( opt(arr , arr.length - 1 ) ) ;
console.log( Date.now() ) ;

console.log('----------------------') ;
console.log("做了缓存") ;
console.log( Date.now() ) ;
console.log( optCache(arr , arr.length - 1 ) ) ;
console.log( Date.now() ) ;
