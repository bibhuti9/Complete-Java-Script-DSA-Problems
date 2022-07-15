var tmp=0;
function fun(num) {
    if (num == 0) {
        return;
    }
    fun(Math.floor(num/10));
    console.log(num);
}
fun(232);
console.log(tmp);