function sort(arr,searchKey){
    var low=0;
    var height=arr.length-1;
    while(low<=height){
        var mid = Math.floor((low+height)/2);
        if(arr[mid]==searchKey) return searchKey;
        if(arr[low]<arr[mid]){
            if(searchKey>=arr[low] && searchKey<arr[mid]){
                height=mid-1;
            }else{
                low=mid+1;
            }
        }else{
            if(searchKey>arr[mid] && searchKey<=arr[height]){
                low=mid+1;
            }else{
                height=mid-1;
            }
        }
    }
    return -1;
}
var arr= [120,130,40,50,90,100]; //90
var arr4= [120,130,40,50,90,100]; //120
var arr1=[50,60,90,100,20,30,40]; //60
var arr3=[20,30,40,50,60,5,10]; //5
console.log(sort(arr,50));