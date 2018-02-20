/**
 * Constructor of a Baseball Player object
 * @param name String with the name of the player
 */
// Your code goes here

// Creating instances and running them
var matt = new BaseballPlayer("Matt");
matt.hit();
matt.hit();
matt.hit();
matt.hit();

var greg = new BaseballPlayer("Greg");
greg.hit();
greg.hit();
greg.hit();
greg.hit();

matt.showSuccessfulBattingAttempts(); // In my case, it logged: Matt: 3 hits
greg.showSuccessfulBattingAttempts(); // In my case, it logged: Greg: 2 hits