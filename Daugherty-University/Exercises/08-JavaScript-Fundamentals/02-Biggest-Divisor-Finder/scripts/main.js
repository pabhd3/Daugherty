function findBiggestDivisor (positiveInteger) {
    console.log("Finding the biggest divisor of: " + positiveInteger);
    let returnMsg = "Biggest divisor of " + positiveInteger.toString() + " is ";
    let GCD = 1;
    for(let i=1; i<positiveInteger; i++) {
        if(positiveInteger % i == 0) {
            if(i > GCD) {
                GCD = i;
            }
        }
    }
    if(GCD != 1) {
        returnMsg += GCD.toString() + "<br>";
    } else {
        returnMsg += "NaN<br>";
    }
    return returnMsg;
}

// Test it with different values
console.log(findBiggestDivisor(7));
document.write(findBiggestDivisor(7));
console.log(findBiggestDivisor(20));
document.write(findBiggestDivisor(20));
console.log(findBiggestDivisor(432));
document.write(findBiggestDivisor(432));
console.log(findBiggestDivisor(1958));
document.write(findBiggestDivisor(1958));
console.log(findBiggestDivisor(70831));
document.write(findBiggestDivisor(70831));