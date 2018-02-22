/**
 * Function that calculates the batting average
 * @param strikes Array with Boolean values. True represents a strike, while false is not a strike (and hence, assumed a hit.)
 * @returns Number with the batting average of the player
 */
function calculateBattingAverage (strikes) {
    var demStrikes = 0;
    var count = 0;
    for(var i in strikes) {
        if(strikes[i] === false) {
            demStrikes++;
        }
        count++;
    }
    return demStrikes/count;
}

// Test it with these values
var exampleStrikes = [true, true, false, true, false, true, true, true, true, false, false, true, true, true, true];
console.log("exampleStrikes: " + exampleStrikes);
document.write("exampleStrikes: " + exampleStrikes);
console.log(calculateBattingAverage(exampleStrikes)); // returns 0.26666666666666666
document.write("<br>" + calculateBattingAverage(exampleStrikes)); // returns 0.26666666666666666

