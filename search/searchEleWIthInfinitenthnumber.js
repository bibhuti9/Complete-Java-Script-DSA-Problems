const array = require('../data');
var count=0;
function binarySort(arr,searchKey,low,heigh){
    count++;
    if(low>heigh) return -1;
    var mid = Math.floor((low+heigh)/2);
    if(arr[mid]==searchKey){
        return searchKey;
    } 
    if(searchKey>arr[mid]){
        return binarySort(arr,searchKey,mid+1,heigh);
    }else{
        return binarySort(arr,searchKey,low,mid-1);
    }
}
function sort(arr,searchKey){
    var low=1;
    var heigh=1;
    while(searchKey>arr[heigh]){
        low=heigh;
        heigh=heigh*2;
    }
    return binarySort(arr,searchKey,low,heigh);
}
array;
var searchKey=9355;
console.log(sort(array,searchKey));
console.log(count);

array.includes()