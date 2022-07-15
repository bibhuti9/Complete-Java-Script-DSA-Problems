function fun(num){ // num=13
    var count = 0;
    while(num!=0){
        if((num &1 )==1){
            count++;
        }s
        num=num>>1;
    }
    console.log(count);
}
fun(13)