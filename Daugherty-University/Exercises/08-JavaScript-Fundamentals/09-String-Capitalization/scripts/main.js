function capitalize(str) {
    let capitalized = "";
    let count = 0;
    for(let i=0; i<str.length; i++) {
        if(i == 0) {
            capitalized += str[0].toUpperCase();
        } else if(str[i] == " ") {
            capitalized += " ";
            capitalized += str[i+1].toUpperCase();
            i++;
        } else {
            capitalized += str[i];
        }
    }
    return capitalized;
}

console.log("i love to code!");
console.log(capitalize("i love to code!"));

console.log("i wanted to get a second test of the code!!!");
console.log(capitalize("i wanted to get a second test of the code!!!"));