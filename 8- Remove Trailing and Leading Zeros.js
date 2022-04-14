function removeLeadingTrailing(num) {
    let zeroLead = true;
    while(zeroLead == true){
        if(num[0] == '0'){
            num = num.substr(1,num.length);
        }
        else {
            zeroLead = false;
        }
    }

    if(num.indexOf('.')!= -1) {
        return parseFloat(num).toString();
    }    

    return num;
}

newNumber = removeLeadingTrailing("020300.010");
console.log(newNumber);

