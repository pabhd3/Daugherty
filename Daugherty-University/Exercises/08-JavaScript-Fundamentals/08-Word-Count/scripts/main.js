function wordCount(string) {
    let wordCount = 0;
    let splitString = string.split(" ");
    for(let i in splitString) {
        if(splitString != "") {
            wordCount++;
        }
    }
    return wordCount;
}

console.log("This is a short sentence!");
console.log(wordCount("This is a short sentence!"));  // returns 5

console.log("ThisIsA!$ReallyLongWord");
console.log(wordCount("ThisIsA!$ReallyLongWord")); // returns 1

console.log("     ");
console.log(wordCount("     ")); // returns 0