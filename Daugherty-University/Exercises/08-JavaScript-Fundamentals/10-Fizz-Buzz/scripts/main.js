function fizzBuzz(n) {
    var toReturn = '';
    if (n === 0) {
        toReturn = '';
        return toReturn;
    } else {
        for (var i=1; i<=n; i++) {
            if (i === 1) {
                toReturn += `${i}`;
            } else {
            if (i % 3 === 0 && i % 5 === 0)
                toReturn += `, ${i}fizzbuzz`;
            else if (i % 3 === 0)
                toReturn += `, ${i}fizz`;
            else if (i % 5 === 0)
                toReturn += `, ${i}buzz`;
            else
                toReturn += `, ${i}`;
            }
        }
        return toReturn;
    }
};

console.log(fizzBuzz(5));
console.log(fizzBuzz(9));
console.log(fizzBuzz(15));
document.write(fizzBuzz(5) + "<br>");
document.write(fizzBuzz(9) + "<br>");
document.write(fizzBuzz(15));