function arrayOfMultiples(num, max) {
    let arr = [];
    for(i=1; i<=max; i++) {
        arr.push(num*i);
    }
    return arr;
}

let array = arrayOfMultiples(7, 5);
console.log(array);