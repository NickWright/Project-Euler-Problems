/*The prime factors of 13195 are 5, 7, 13 and 29.

What is the largest prime factor of the number 600851475143 ?*/

var prime = 100; 
var arr = [];

function primeFinder(num){
    for (var i = 1; i < Math.sqrt(num); i+=2){
        if (isPrime(i)){
            if (num%i==0){
            arr.push(i)
            }
        }
    }
    console.log(arr);
}
function isPrime(num){
    for (var i = 2; i < num; i++){
        if (num%i===0){
            return false;
        }
    }
    return true;    
}
console.log(primeFinder(600851475143));

/*this algorithm takes a while :/... but it works :)
 -Nick Wright  						*/
