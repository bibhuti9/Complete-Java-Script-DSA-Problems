var arr = [5, 10, 5, 4, 5, 9];
var arr2 = [5, 3, 5, 10, 8,];
var con = [];

// Method1
for (let i = 0; i < arr.concat(arr2).length; i++) {
    if (arr.concat(arr2).slice(i + 1, arr.concat(arr2).length.length).includes(arr.concat(arr2)[i])) {
    } else {
        con.push(arr.concat(arr2)[i]);
    }
}
console.log(con)

// Method2
console.log([...new Set([...arr,...arr2])]);