let array1 = [1, 2, 3];
let array2 = [4, 5];
let array3 = [6, 7, 8];

function arrayConcat(...arrays) {
    //console.log(arrays)
    return arrays.reduce((previous, current) => 
        previous = [...previous, ...current]);
}

let arrayCombined = arrayConcat(array1, array2, array3);
console.log(arrayCombined);
