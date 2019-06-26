const arr = [1,3,2] ;

const mergeSort = function( arr ) {
    if( arr.length === 1 )
        return arr ;

    const mid = Math.ceil(arr.length / 2) ;
    const left = arr.slice( 0 , mid ) ;
    const right = arr.slice( mid ) ;

    return merge(
        mergeSort( left ) ,
        mergeSort(right)
    );
};

const merge = function( left , right ){
    const result = [] ;

    while( left.length > 0 && right.length > 0 ) {
        if( left[0] < right[0]) {
            result.push( left.shift() ) ;
        } else {
            result.push( right.shift() ) ;
        }
    }

    return result.concat( left , right )
};
console.log( mergeSort( arr )) ;