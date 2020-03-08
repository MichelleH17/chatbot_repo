// call backy, u zanoření není žádné omezení
// na eventy - event listener - co dělá uživatel - na základě nějaké události na stránce, přejetí, zmáčknutí tlačítka, do argumentu dáme callback

const print1 = (result) => {
    console.log('Result:');
    console.log(result);
    console.log('End of result');
}

const print2 = (result) => {
    console.log(result);
}

const sum2Nums = (a,b, decorator) => {
    const res = a + b;
    decorator(res);
}

sum2Nums(1,1, print1);
sum2Nums(5,5, print2);
sum2Nums(3,3, res => console.log(res));