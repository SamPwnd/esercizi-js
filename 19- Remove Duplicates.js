function removeDups(arr) {
    return arr.filter((element, index) => {
        return arr.indexOf(element) === index;
    });
}


console.log(removeDups(["John", "Taylor", "John", "Taylor"]));