// Parent = index/2
// left child = 2*i
// Right child = 
var arr = [50];
function insert(value){
    arr.push(value);
    let i = arr.length-1;
    while(i>0){
        let parent = i/2;
        if(arr[parent]<arr[i]){
            let tmp = arr[parent];
            arr[parent] = arr[i];
            arr[i]=tmp;
            i=parent;
        }else{
            return;
        }
    }
}
insert(40);
console.log(arr);
insert(30);
console.log(arr);
insert(60);
console.log(arr);
// insert(45);
// console.log(arr);
// insert(60);
// console.log(arr);
// insert(80);
// console.log(arr);


