const arr = [1,4,3,2,6,5,8,9] ;

const mergeSort = function( arr ) {
    // 如果数组中元素为1则返回该数组
    if( arr.length === 1 )
        return arr ;

    //如果数组中元素不为1则开始分解
    const mid = Math.ceil(arr.length / 2) ;
    const left = arr.slice( 0 , mid ) ;
    const right = arr.slice( mid ) ;

    //进行对比排序
    return merge(
        mergeSort( left ) ,
        mergeSort(right)
    );
};

const merge = function( left , right ){
    const result = [] ;

    // 当左右数组都不为空时 , 对比元素大小
    while( left.length > 0 && right.length > 0 ) {
        if( left[0] < right[0]) {
            result.push( left.shift() ) ;
        } else {
            result.push( right.shift() ) ;
        }
    }

    // 将剩余元素放到结果数组中
    return result.concat( left , right )
};
console.log( mergeSort( arr )) ; // [ 1,2,3,4,5,6,8,9]