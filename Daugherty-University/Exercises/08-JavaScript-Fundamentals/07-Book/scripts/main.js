class Book {
    constructor() {
        this.page = "";
    }

    addPage(string) {
        this.page += " " + string;
    }

    countOccurrences(word) {
        let allWords = this.page.split(" ");
        let count = 0;
        for(let i in allWords) {
            if(allWords[i].toUpperCase() == word.toUpperCase()) {
                count++;
            }
        }
        return count;
    }

    logAllText() {
        console.log(this.page);
    }
}


// Creating an instance
var lordOfTheRings = new Book();
lordOfTheRings.addPage("Upon great pedestals founded in the deep waters stood two great kings of stone");
lordOfTheRings.addPage("The left hand of each was raised palm outwards in gesture of warning");
lordOfTheRings.addPage("Great power and majesty they still wore the silent wardens of a long-vanished kingdom");

lordOfTheRings.logAllText();
console.log("The word 'king' appears " + lordOfTheRings.countOccurrences("king") + " times");
// Logs: "The word 'king' appears 0 times"
console.log("The word 'great' appears " + lordOfTheRings.countOccurrences("great") + " times");
// Logs: "The word 'great' appears 3 times"
