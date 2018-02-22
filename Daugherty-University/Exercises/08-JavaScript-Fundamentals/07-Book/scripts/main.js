class Book {
    constructor() {
        this.page = [];
    }

    addPage(str) {
        this.page.push(str);
    }

    countOccurrences(word) {
        let count = 0;
        let allWords = this.page.join(" ").split(" ");

        for(let i in allWords) {
            if(allWords[i].toUpperCase() == word.toUpperCase()) {
                count++;
            }
        }
        return count;
    }

    logAllText() {
        for(let i in this.page) {
            console.log(this.page[i]);
        }
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
