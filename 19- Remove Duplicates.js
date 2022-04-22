function removeDups(arr) {
    return arr.filter((element, index) => {
        return arr.indexOf(element) === index;
    });
}

function removeDups2(arr) {
    let result = arr.reduce((preVal, currVal) => {
        if(!preVal.includes(currVal)) {
            preVal.push(currVal);
        return preVal;
        }
    },[]);
    return result;
}


console.log(removeDups(["John", "Taylor", "John", "Taylor"]));

console.log(removeDups2(["John", "Taylor", "John", "Taylor"]));

