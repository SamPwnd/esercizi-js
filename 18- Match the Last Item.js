function matchLastItem(arr) {
    let last = arr[arr.length-1];
    arr.pop();
    elements = arr.join('');
    if (elements == last) {
        return true;
    }
    else return false;
}


console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]));

console.log(matchLastItem(["sq", "i", "g", "rsq6hig"]));