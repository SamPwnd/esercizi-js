function rev(num) {
    let numStr = num.toString();
    let revNum = [];

    for (let i = 0; i < numStr.length; i++) {
        revNum.unshift(numStr[i]);
    }
    revNum = parseInt(revNum.join(''));
    return revNum;
}


console.log(rev(5121));