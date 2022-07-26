var arr = [10, 30, 50, 20, 35,15];
for (let i = (arr.length/2)-1; i >= 0; i--) {
    
    if (arr[(2 * i)+1] != undefined) {
        if (arr[i] < arr[(2 * i)+1]) {
            let tmp = arr[i];
            arr[i] = arr[(2 * i)+1];
            arr[(2 * i)+1] = tmp;
        }
    }
    if (arr[(2 * i +1)+1] != undefined) {
        if (arr[i] < arr[(2 * i +1)+1]) {
            let tmp = arr[i];
            arr[i] = arr[(2 * i +1)+1];
            arr[(2 * i +1)+1] = tmp;
        }
    }
}
console.log(arr);
