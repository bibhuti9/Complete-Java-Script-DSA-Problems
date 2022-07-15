var tmp=0;
function fun(num,k) {
    if (num == 0 || num==1) {
        return k;
    }
    return fun(num-1,k*num);
}
console.log(fun(5,1));