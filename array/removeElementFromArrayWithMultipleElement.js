var valuesArr = ["v1", "v2", "v3", "v4", "v5"];   
var removeValFromIndex = ["v2","v4"]; // ascending

valuesArr.map((value,index)=>{
    if(removeValFromIndex.includes(value))
        valuesArr.splice(index,1);
})

console.log(valuesArr);