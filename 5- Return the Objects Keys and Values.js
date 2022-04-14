function keysAndValues(obj) {
    let objEntr = Object.entries(obj).sort();
    let arrKeys = [];
    let arrValue = [];
    for (let i = 0; i < objEntr.length; i++) {
        arrKeys[i] = objEntr[i][0];
        arrValue[i] = objEntr[i][1];
    }
    return [arrKeys, arrValue];
}


let array = keysAndValues({ c: 3, b: 2, a: 1 });
console.log(array);