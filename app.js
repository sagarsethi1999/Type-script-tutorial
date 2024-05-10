"use strict";
const num1Element = document.getElementById('num1');
const num2Element = document.getElementById('num2');
const buttonElement = document.querySelector('button');
const numResults = [];
const stringResults = [];
function add1(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 == 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 == 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printresult(resultOb) {
    console.log(resultOb.val);
}
buttonElement.addEventListener('click', () => {
    const num1 = num1Element.value;
    const num2 = num2Element.value;
    const result = add1(+num1, +num2);
    const stringResult = add1(num1, num2);
    numResults.push(result);
    stringResults.push(stringResult);
    //  console.log(result);
    //  console.log(stringResult);
    printresult({ val: result, timestamp: new Date() });
    console.log(numResults, stringResults);
});
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('It Worked!!!');
    }, 1000);
});
myPromise.then(result => {
    console.log(result.split('W'));
});
