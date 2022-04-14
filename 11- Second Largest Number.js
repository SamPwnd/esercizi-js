function secondLargest(arr) {
    let max = arr[0];
    let second = 0;
    for (let i = 1; i < arr.length; i++) {
        if(arr[i] > max){
            second = max;
            max = arr[i];
        }
    }
    return second;
}


console.log(secondLargest([10, 40, 30, 20, 50,]));