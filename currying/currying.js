
function fullName(fisrtName) {

    return function(lastName) {
        return fisrtName + " " + lastName;
    }
}


console.log(fullName('Pablo')('Cavalcante'))