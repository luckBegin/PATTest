const insertSort = ( arr ) => {
    for ( let i = 1 ; i < arr.length ; i ++ ) {
        const key = arr[ i ] ;
        let j = i - 1 ;

        while ( j >= 0  && key < arr[j] ) {
            arr [ j + 1 ] = arr[ j ] ;
            j-- ;
        }

        arr[ j + 1 ] = key ;
    }

    return arr ;
};

const arr = insertSort( [4  , 3 , 7 , 1]) ;
console.log(arr ) ;