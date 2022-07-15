function fun(arr){
    var profit=0;
    for(let i=1;i<arr.length;i++){
        if(arr[i]>arr[i-1]){
            profit+=arr[i]-arr[i-1];
        }
    } 
    return profit;
}
console.log(fun([5,2,7,3,6,1,2,4]));