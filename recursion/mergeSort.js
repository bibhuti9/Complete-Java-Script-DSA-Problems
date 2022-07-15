function merge(arr,l,mid,r){
    var i = l;
    var j = mid+1;
    var k = l;

}
function merge(arr,l,r){
    if(l<r){
        let mid = Math.floor((l+r)/2);
        merge(arr,l,mid);
        merge(arr,mid+1,r);
        console.log(`${l} ${mid} ${r}`);
        merge(arr,l,mid,r);
    }
}
merge([1,3,4,5,6,7,9],0,6);