function logYearWithMostWins(yearlyStats) {
    let mostWinsIndex = 0;
    let mostWins = 0;
    for(let i in yearlyStats) {
        if(yearlyStats[i].wins > mostWins) {
            mostWins = yearlyStats[i].wins;
            mostWinsIndex = i;
        }
    }
    let msg = `The year with most wins was ${mostWinsIndex} with ${mostWins} victories, and the finishing place was ${yearlyStats[mostWinsIndex].place}`;
    console.log(msg);
}

// Test it with these values
var cardinalStats = {
    2015: {
        wins: 100,
        loses: 62,
        place: 1
    },
    2014: {
        wins: 90,
        loses: 72,
        place: 1
    },
    2013: {
        wins: 97,
        loses: 65,
        place: 1
    },
    2012: {
        wins: 88,
        loses: 74,
        place: 2
    },
    2011: {
        wins: 90,
        loses: 72,
        place: 2
    },
    2010: {
        wins: 88,
        loses: 76,
        place: 2
    }
};

logYearWithMostWins(cardinalStats); // Logs "The year with most wins was 2015 with 100 victories, and the finishing place was 1"

