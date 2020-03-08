// call backy, arrow funkce
// call backy pro asynchornní funkce = funkce volání na server, kdy nevíme kdy se nám vrátí odpověď, 

function a() {
    console.log('Print A');
}

function b(callback) {
    console.log('Print B');
    callback();
}

// voláme funkci b a dáváme do ní argument funkce a
// callback například při platbě v eshopu dostanu vědět, že došlo k platbě

b(a);

b(() => {
    console.log('TEST 1');
    console.log('Print C');
})

