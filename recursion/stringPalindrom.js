function fun(str,start,end){
    if(start>=Math.floor(str.length)/2)
        return true;
    return (str[start]==str[end] && fun(str,start+1,end-1) );
    
}
var str = "12321";
console.log(fun(str,0,str.length-1))