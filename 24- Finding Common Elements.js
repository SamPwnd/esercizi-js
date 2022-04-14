function commonElements(arr1, arr2) {
    let result = [];
    for (let i = 0; i < arr1.length; i++) {
        if(arr1.some(element => element == arr2[i])) {
            result.push(arr2[i]);
        }
    }
    return result;
}



console.log(commonElements([-1, 3, 4, 6, 7, 9], [1, 3]));
console.log(commonElements([1, 3, 4, 6, 7, 9], [1, 2, 3, 4, 7, 10]));