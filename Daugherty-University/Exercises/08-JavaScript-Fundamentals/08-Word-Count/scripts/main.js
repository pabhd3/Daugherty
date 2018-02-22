function wordCount(string) {
    let wordCount = 0;
    let splitString = string.split(" ");
    for(let i in splitString) {
        if(splitString[i] != "") {
            wordCount++;
        }
    }
    return wordCount;
}

console.log("This is a short sentence!");
console.log(wordCount("This is a short sentence!"));  // returns 5
document.write("This is a short sentence!<br>");
document.write(wordCount("This is a short sentence!") + "<br>");  // returns 5

console.log("ThisIsA!$ReallyLongWord");
console.log(wordCount("ThisIsA!$ReallyLongWord")); // returns 1
document.write("ThisIsA!$ReallyLongWord<br>");
document.write(wordCount("ThisIsA!$ReallyLongWord") + "<br>"); // returns 1

console.log("     ");
console.log(wordCount("     ")); // returns 0
document.write("     <br>");
document.write(wordCount("     ")); // returns 0