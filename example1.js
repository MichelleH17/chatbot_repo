console.log('Hello world!');

let variable1 = 5;
const variable2 = 10;

const result = variable1 + variable2;
console.log(result);

let variable3 = "string";
// 3 způsoby zápisu funkce se stejným výsledkem
function myFcn(arg) {
    console.log('my Fcn CALL! ' + arg);

    return 5;
}
const result2 = myFcn('TEST');
console.log(result2);



const myFcn = function(arg) {
    console.log('my Fcn CALL! ' + arg);

    return 5;
}


const myFcn = arg => {
    console.log('my Fcn CALL! ' + arg);

    return 5;

}
myFcn('TEST');