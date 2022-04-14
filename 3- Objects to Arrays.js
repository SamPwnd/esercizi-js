function toArray(obj) {
    return Object.entries(obj);
}

let arr = toArray({ a: 1, b: 2 });
console.log(arr);