
function num_of_digits(num) {
    let digits = num.toString().length;
    console.log(digits);
}

num_of_digits(201);

function num_of_digits2(num) {
    let digits = num.toString().split('');
    let realDigits = digits.map(Number);
    for (let i = 0; i < realDigits.length; i++) {
        if(isNaN(realDigits[i]))
            realDigits.splice(i,1);
    }
    console.log(realDigits.length);
}

num_of_digits2(267.46);