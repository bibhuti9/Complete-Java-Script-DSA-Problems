function fun(num){
    if(num==0) return 0;
    return (num%10) + fun(Math.floor(num/10));
}
console.log(fun(9987));