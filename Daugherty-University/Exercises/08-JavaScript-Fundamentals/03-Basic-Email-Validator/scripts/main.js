function isEmailValid (emailAddress) {
    console.log(emailAddress);
    document.write(emailAddress + "<br>");
    let validEmail = false;
    let atSymbolFirst = false;
    let dotAfterAtSymbol = false;
    for(let i=0; i<emailAddress.length; i++) {
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
    return validEmail + "<br>";
}

// Test it with these values
console.log(isEmailValid("invalidEmail.com")); // false
document.write(isEmailValid("invalidEmail.com")); // false
console.log(isEmailValid("invalidEmail@domain")); // false
document.write(isEmailValid("invalidEmail@domain")); // false
console.log(isEmailValid("invalid.Email@domain")); // false
document.write(isEmailValid("invalid.Email@domain")); // false
console.log(isEmailValid("validEmail@example.com")); // true
document.write(isEmailValid("validEmail@example.com")); // true