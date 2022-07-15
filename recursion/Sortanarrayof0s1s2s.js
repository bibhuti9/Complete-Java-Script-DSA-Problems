function sort012(a,n)
{
    var zero = 0, one = 0, two = 0;
    for (let i = 0; i < n; i++) {
        if (a[i] == 0)
            zero++;
        if (a[i] == 1) one++;
        if (a[i] == 2) two++;
    }
    console.log(`${zero} ${one} ${two}`);
    for (let i = 0; i < n; i++) {
        if (zero) {
            a[i] = 0;
            console.log(a);
            zero--;
        }
        else if (one) {
            a[i] = 1;
            console.log(a);
            one--;
        }
        else if (two) {
            a[i] = 2;
            console.log(a);
            two--;
        }
    }
}

sort012([0,2,1,2,0],5);