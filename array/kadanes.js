var arr = [5,-4,-2,6,-1];
var cur=0;
var max=0;
for(var i=0;i<arr.length-1;i++){
    cur +=arr[i];
    if(cur>max){
        max=cur;
    }
    if(cur<0){
        cur=0;
    }
}
console.log(max);