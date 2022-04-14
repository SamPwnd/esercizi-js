function flatten(nestedArr) {
    console.log(nestedArr);
    //let flatArray = [].concat(...nestedArr);
    let flatArray = nestedArr.flat();
    return flatArray;
}


console.log(flatten([["a", "b"], ["c", "d"]]));