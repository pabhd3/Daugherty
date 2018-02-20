function isEmailValid (emailAddress) {
    console.log(emailAddress);
    var validEmail = false;
    var atSymbolFirst = false;
    var dotAfterAtSymbol = false;
    for(var i=0; i<emailAddress.length; i++) {
        if(emailAddress[i] == "@") {
            atSymbolFirst = true;
        }
        if(atSymbolFirst) {
            if(emailAddress[i] == ".") {
                dotAfterAtSymbol = true;
            }
        }
    }
    if(atSymbolFirst && dotAfterAtSymbol) {
        validEmail = true;
    }
    return validEmail;
}

// Test it with these values
console.log(isEmailValid("invalidEmail.com")); // false
console.log(isEmailValid("invalidEmail@domain")); // false
console.log(isEmailValid("invalid.Email@domain")); // false
console.log(isEmailValid("validEmail@example.com")); // true

