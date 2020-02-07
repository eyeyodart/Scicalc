// receive messages from main thread
onmessage = function(ev) {
    var n = ev.data;
    var max = [];
    max = n.split(",");

    var primes = [];
    for (var m = 0; m < max.length; m++) {
        for (var i = 2; i <= max[m]; i++) {
            var isPrime = true;
            for (var j = 0; j < primes.length; j++) {
                var p = primes[j];
                if (i % p === 0) {
                    //it is divisible by another prime, so it's not prime
                    isPrime = false;
                    break;
                }
                //you don't need to check primes bigger than sqrt(i)
                if (p * p > i)
                    break;
            }
            if (isPrime)
                primes.push(i);
        }
    }
    function uniquePrimes(primes){
        var uniqueArray = [];
        // Loop through array values
        for(i=0; i < primes.length; i++){
            if(uniqueArray.indexOf(primes[i]) === -1) {
                uniqueArray.push(primes[i]);
            }
        }
        return uniqueArray;
    }
    var uniprimes = uniquePrimes(primes);
    postMessage("Prime:" + uniprimes);
};
