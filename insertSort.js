var InsertSort = function (arr) {
    var len = arr.length;
    for (var i = 1; i < len; i++) {
        var ele = arr[i];
        var j = i - 1;
        while (j >= 0 && ele < arr[j]) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = ele;
    }
    return arr;
};
console.log( InsertSort([4,6,2,3,5 , 1]) );
