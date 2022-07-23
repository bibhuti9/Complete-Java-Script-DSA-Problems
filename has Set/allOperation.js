// Has set basically used for store unique value
var set = new Set();
set.add({x:10,y:20,z:35});
set.add(40)
set.add({x:12,y:18,z:19});
function fun(val1,val2,set){
    console.log(val1);
}
console.log([...set].slice(0,1));