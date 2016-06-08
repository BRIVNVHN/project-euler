/* Problem 3 - Largest Prime Factor

The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143? */

var largestPrime = 0;
var num = 13195;

var isPrime = function(x) {
    for (var i = 2; i < x; i++) {
        if(x % i === 0) {
            return false;
        }
    }
    return true;
}

for (var a = 2; a < num; a++) {
    if (num % a === 0 && isPrime(a)) {
        largestPrime = a;
    }
}
console.log(largestPrime);