var arr = [4, 3, 7, 1, 5];
function bubbleSort() {
    for (let i = 0; i < arr.length - 1; i++) {
        let swap = false;
        for (let j = 0; j < arr.length - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                swap = true;
                let tmp = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = tmp;
            }
        }
        if(!swap) break;
        console.log(arr);
    }

}

console.log([9,4,7,6,3,1,5].sort((a,b)=>{return b-a}));

bubbleSort();