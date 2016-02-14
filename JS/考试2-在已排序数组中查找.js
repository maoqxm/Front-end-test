​function search(arr,dst){
    var start = 0, stop = arr.length - 1, middle = Math.floor((start+stop)/2); //利用二分法查找，初始化查找范围
    while(arr[middle] != dst && start < stop){
        if (dst < arr[middle]){
            stop = middle - 1 ; //调整查找范围
        } else if (dst > arr[middle]){
            start = middle + 1; //调整查找范围
        }
        middle = Math.floor((start + stop)/2); //调整middle值
    }
    return (arr[middle] != dst)?-1:middle; //如果数组中没有则返回-1
}
