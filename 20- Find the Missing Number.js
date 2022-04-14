function missingNum(arr) {
    let number = undefined;
    for (let i = 1; i < arr.length; i++) {
        number = arr[i-1]+1;
        if(arr[i] != number) {
           return number;
        }
    }
    return 'No missing number'
}


console.log(missingNum([1, 2, 3, 4, 6, 7, 8, 9, 10]));