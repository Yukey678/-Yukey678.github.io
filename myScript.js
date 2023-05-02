"use strict";

function fib(n) {
    let result = '';
    let f1 = 0;
    let f2 = 1;
    for(let i = 0; i < n; i += 1) {
        if(i === 0) { 
            result = f1;    
        } else if(i === 1) {
            result = f2;
            f1 = f2;
        } else {
            result = f2 + f1;
            f1 = f2;
            f2 = result;
        };  
    }
    return result;
};
console.log('--' + fib(3)); // 2
console.log('--' + fib(5)); // 5
console.log('--' + fib(10)); // 55


function fizzBuzz(begin,end) {
    if(begin > end) return;
    let result = '';
    for (let i = begin; i <= end; i += 1) {
        if(i % 3 === 0 && i % 5 === 0) {
            result += "FizzBuzz"; 
        } else if(i % 3 === 0) {
            result += "Fizz";
        } else if(i % 5 === 0) {
            result += 'Buzz';
        } else {
            result += i; 
        };
        result += '\n';
    }
    console.log(result);
};
fizzBuzz(11, 20);


function reverseInt(number) {
    let str = Math.abs(number) + '';
    let result = '';
    if(number < 0) {
        result = '-';
    };
    for (let i = str.length - 1; i >= 0; i -= 1) {
        result += str[i];
    };
    return result;
};
console.log(reverseInt(5469));
console.log(reverseInt(0));
console.log(reverseInt(-5138));

function isHappyTicket(str) {
    let sum1 = 0;
    let sum2 = 0;
    let result = false;
    if (!parseInt(str)) result = false;
    if (str.length % 2 !== 0 ) result = false;
    for (let i = 0; i < str.length / 2; i +=1) {
        sum1 += parseInt(str[i]);
    };
    for (let j = str.length / 2; j < str.length; j +=1) {
        sum2 += parseInt(str[j]);
    };
    if (sum1 == sum2) result = true;
    return result;
};
console.log(isHappyTicket('56487'));
console.log(isHappyTicket('rr'));
console.log(isHappyTicket('5648'));
console.log(isHappyTicket('392572'));

function isPerfect(num) {
    let sumDevider = 0;
    for (let i = 1; i < num; i += 1){
        if (num % i === 0) sumDevider += i;
    };
    if(num === sumDevider) return true;

    return false;
};

console.log(isPerfect(5));
console.log(isPerfect(6));
console.log(isPerfect(28));