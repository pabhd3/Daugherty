# Java Script Fundamentals

### **Captcha Test**

Create a "captcha test" where a page will prompt the user with a simple question. If the user isn't a browsing "bot" but a real user, it should be able to answer the question. For this purpose, do the following:

* Generate two random positive integer numbers between 0 and 100.
* Prompt the user to input the result of adding both numbers. 
* Confirm that the user wants to enter that value("Accept" moves forward, and "Cancel" asks for a value again.)'
* If the result is correct, log to the console: "Human user identified."
* If the result isn't correct, ask the user to try again.

-------------------------------------------------------------------------------

### **Find the Biggest Factor**

Create a function `findBiggestFactor` that returns the biggest positive factor (also called the biggest positive divisor) of a given positive integer number greater than 0.

Also exclude the trivial factors from your result set - that is, when finding the biggest divisor of a given integer, don't consider that same integer (or `1`) as a valud result.

If no divisors were found, return `NaN`.

-------------------------------------------------------------------------------

### **Validate Email Address**

Create a function `isEmailValid` that checks the given string with an email address, and returns true if all the following basic validation rules pass (and false otherwise:)

* The given email address contains at least an “@” symbol
* The given email address contains at least a “.”
* The “.” appears after the “@” symbol

-------------------------------------------------------------------------------

### **Calculate Batting Average**

Create a function `calculateBattingAverage` that, given an array of Boolean values where `true` represents a strike, and `false` represents a successful batting attempt, returns a number with the batting average of the player.

-------------------------------------------------------------------------------

### **Finding the Year with Most Wins**

Create a function `logYearWithMostWins` that:

* Is given an Object as a parameter where the keys are the years, and the values are Objects with the stats for such year.
* Where every stats Object has the following properties: ‘wins’ (number of victories,) ‘loses’ (number of defeats) and ‘place’ (finishing place in the championship.)
* That logs to the console the year with most wins, the number of victories in that year, and the finishing place in the championship.

-------------------------------------------------------------------------------

### **Create a Baseball Player Object**

Create a new object class `BaseballPlayer` to represent a baseball player, that contains the following:

* `name`: a String with the name of the player. This should be provided as part of the constructor when creating a new object.
* `successfulBattingAttempts`: integer Number that tracks the amount of successful hits. Should be initialized with the value of 0.
* `strikes`: integer Number that tracks the amount of strikes. Should be initialized with the value of 0.
* `hit()`: function that takes no parameters, and that has a 50% chance of increasing the number of successful hits of this player by one, and a 50% chance of increasing the number of strikes by one.
* `getSuccessfulBattingAttempts()`: function that takes no parameters and returns the number of successful hits from the player
* `showSuccessfulBattingAttempts()`: function that takes no parameters, internally invokes getSuccessfulBattingAttempts(),  and logs to the console the name of the player, followed by a colon (:), followed the number of successful hits from the player, and ended in the word “hits.”
Then create a couple of object instances, execute four hits in each instance, and log the successful hits of each player.

-------------------------------------------------------------------------------

### **Create a Book Object**

Create a new object class `Book` with the following methods:

* `addPage(string)` – adds a new page to the book (passed as a parameter string)
* `countOccurrences(word)` – returns how many times a word appears in the book (provided as a string.) These matches should be case-insensitive. A partial match should not count as a match (i.e.: “king” in “kingdom” would not count as a match.) Assume that your pages contain no punctuation symbols, and that everything separated by a space is a word.
    * Note: creating a “countOccurrencesInPage(pageContents, word)” function as a utility function can help you split the problem in simpler fragments, and make your code more readable.
* `logAllText()` – logs to the console the whole text of the book.

-------------------------------------------------------------------------------

### **Word Count**

Create a function `wordCount` that takes a string parameter ‘str’.  The function should return the count of words in the ‘str’ parameter string. A word is considered any series of characters (letter, number, punctuation) separated by one or more spaces.

-------------------------------------------------------------------------------

### **String Capitalization**

Create a function `capitalize` that takes a parameter ‘str’.  The function should return a string with the first letter in each word capitalized.

-------------------------------------------------------------------------------

### **Fizz Buzz**

Create a JavaScript function `fizzBuzz` that takes 1 parameter, `n`.  The function should return a string that contains the following for each number between 1 and n.

* If n <= 0
    * Return an empty string
* If n > 0
    * Print the number
    * If the number is divisible by 3 write ‘fizz’
    * If the number is divisible by 5 write ‘buzz’
    * If the number is divisible by 3 and 5 write ‘fizzbuzz’
