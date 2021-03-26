console.time("time-taken");
let count = 0;
const nthPrime = 50000;
let nthPrimeNumber;

const numbers = {};

for (let i = 0; count < nthPrime + 1; i++) {
  if (i % 2 === 0 && i !== 2) {
    continue;
  }
  const isNumberPrime = isPrime(i);
  if (isNumberPrime) {
    count++;
    if (count === nthPrime + 1) {
      nthPrimeNumber = i;
      console.timeEnd("time-taken");
    }
  }
}

function isPrime(num) {
  for (var i = 2; i < num; i++) {
    if (i % 2 === 0) {
      continue;
    }

    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
}

console.log("primeNumbers: ", nthPrimeNumber);
