function ascDesNone(arr, order) {
    switch (order) {
        case "Asc":
            return arr.sort((a,b) => {
                return a - b;
            })
            break;
            
        case "Des":
            return arr.sort((a,b) => {
                return b-a;
            })
            break;

        case "None":
            return arr;
    }
}


console.log(ascDesNone([4, 6, 2, 1], "Asc" ));
console.log(ascDesNone([4, 6, 2, 1], "Des" ));
console.log(ascDesNone([4, 6, 2, 1], "None" ));