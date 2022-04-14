function intWithinBounds(num, low, up){
    if(!Number.isInteger(num)){
        return false;
    }
    if(num > low && num < up){
        return true;
    }
    else return false;
}


console.log(intWithinBounds(6, 2, 4));
