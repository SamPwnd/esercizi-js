function getLength(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr = arr.flat();
    }
    return arr.length;
}



let array1 = getLength([1, [2, 3]]); //➞ 3
let array2 = getLength([1, [2, [3, 4]]]); //➞ 4
let array3 = getLength([1, [2, [3, [4, [5, 6]]]]]); //➞ 6

console.log(array1, array2, array3);