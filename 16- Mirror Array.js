function mirror(arr) {
    for (let i = arr.length-2; i >= 0; i--) {
        arr.push(arr[i]);
    }
    return arr;
}


console.log(mirror([0, 2, 4, 6]));
console.log(mirror([1, 2, 3, 4, 5]));