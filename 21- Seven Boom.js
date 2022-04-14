function sevenBoom(arr) {
    let isSeven = arr.some(element => element == 7);
    if (isSeven) {
        return 'Boom!';
    }
    else return 'There is no 7 in the array';
}


console.log(sevenBoom([1, 2, 3, 4, 5, 6, 7]));
console.log(sevenBoom([8, 6, 33, 100]));