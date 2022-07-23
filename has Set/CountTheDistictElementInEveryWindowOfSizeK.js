// Count The element for every window of size K
// ex: a = [1,2,2,1,3,1,1,3]
// k = 4
// output:
// [1,2,2,1]=2
// [2,2,1,3]=3
// [2,1,3,1]=3
// [1,3,1,1]=2
// ...
var arr = [1,2,2,1,3,1,1,3];
function find(k){
    for(let i=0;i<arr.length-(k-1);i++){
        console.log(new Set(arr.slice(i,k+i)).size);
    }
}
find(4)
