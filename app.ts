const num1Element = document.getElementById('num1') as HTMLInputElement;
const num2Element = document.getElementById('num2') as HTMLInputElement;
const buttonElement =  document.querySelector('button')!;

const numResults: Array<number> = [];
const stringResults: string[] = [];

type NumOrString = number | string;
type Result = {val: number; timestamp: Date};

interface ResultObj {
    val: number;
    timestamp: Date;
}

function add1(num1: NumOrString, num2: NumOrString) {
    if(typeof num1 === 'number' && typeof num2 == 'number'){

        return num1 + num2;
    }
    else if(typeof num1 === 'string' && typeof num2 == 'string'){
        return num1+' '+num2;
    }

    return +num1 + +num2 ; 

}
function printresult(resultOb: { val: number; timestamp: Date }){
    console.log(resultOb.val);
}

buttonElement.addEventListener('click', () => {
     const num1 = num1Element.value;
     const num2 = num2Element.value;
     const result = add1(+num1, +num2);
     const stringResult = add1(num1, num2);
     numResults.push(result as number);
     stringResults.push(stringResult as string);
    //  console.log(result);
    //  console.log(stringResult);
     printresult({val: result as number, timestamp: new Date()});
     console.log(numResults, stringResults)
     
})

const myPromise = new Promise<string>((resolve, reject) => {
    setTimeout(() => {
        resolve('It Worked!!!');
    }, 1000);
});

myPromise.then(result => {
    console.log(result.split('W'));
})