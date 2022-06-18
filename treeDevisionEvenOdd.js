var total=0;
function devision(array){
    var first = array.splice(0,Math.floor(array.length/2) );
    var second = array.splice(0);        
    if(first.length>1){
        devision(first)
    }   
    if(second.length>1){
        devision(second)
    } 
    if(first.length!=0){
        total+=parseInt(first);
    }
    if(second.length!=0){
        total+=parseInt(second);
    }
}
function demo(){
    var array = [ 1,2,3,4,5 ];
    devision(array);
    console.log(total);
}              


demo();