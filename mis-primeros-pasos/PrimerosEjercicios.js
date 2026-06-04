//1er Ejercicio: Imprime los números del 1 al 100 
for (let x = 1; x <= 100; x++) {
    console.log(x); } 

//2do Ejercicio Tabala de multiplicar del 5
let numero = 5;

for (let i = 1; i <= 10; i++) {
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}`);
}
//3er Ejercicio: FizzBuzz Hasta el 100 

for (let i = 1; i <= 100; i++) {

    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz"); }
    else if (i % 3 === 0) {
        console.log("Fizz"); }
    else if (i % 5 === 0) {
        console.log("Buzz"); }
    else {
        console.log(i);
    }}



//4to Ejercicio: Imprime los números primos hasta el 20
    
let n = 20;
 

for (let numero = 2; numero <= n; numero++) {

    let esPrimo = true;

    for (let i = 2; i < numero; i++) {

        if (numero % i === 0) {
            esPrimo = false;
            break;
        }}
    if (esPrimo) {
        console.log(numero); }}