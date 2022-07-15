function stockBySell(){
    var arr = [3,1,4,8,7,2,5];
    var min = arr[0];
    var maxP=0;
    for(var i=0;i<arr.length;i++){
        if(min>arr[i]){
            min=arr[i];
            // console.log(`min ${min}`);
        }
        if(maxP<(arr[i]-min)){
            maxP=arr[i]-min;
            // console.log(maxP);
        }
    }
    console.log(maxP);
}
stockBySell();