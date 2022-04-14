function allTruthy(...params) {
    console.log();
    for (let i = 0; i < params.length; i++) {
        if (params[i] == false) {
            return false;
        }
    }
    return true;
}


console.log(allTruthy(true, true, true)); 
console.log(allTruthy(true, false, true)); 
