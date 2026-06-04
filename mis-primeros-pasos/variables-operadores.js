// Ejercicio 1: 5 variables, una por tipo primitivo
// (string, number, boolean, null, undefined) 
let nombre = "juan";
const edad = 18;
let esEsudiante = true;
let direccion = null;
let telefono; // undefined = 
console.log(typeof
nombre)
console.log(typeof edad)
console.log(typeof esEsudiante)
console.log(typeof direccion)
console.log(typeof telefono)

// Ejercicio 2: área y perímetro de rectángulo
// base = 8, altura = 5. Imprimir con template literal.
const base = 8;
const altura = 5;
const area = base * altura;
console.log(`El área del rectángulo es ${area}`);
const perimetro = 2 * (base + altura);
console.log(`El perímetro del rectángulo es ${perimetro}`);
// Ejercicio 3: typeof a cada variable del ejercicio 1


// Ejercicio 4: 5 comparaciones con ===
console.log(5 === 5); // true
console.log("2" === "3"); // false

// Ejercicio 5: ¿puede votar? (edad >= 18 AND tieneDNI)
const edadVotante = 20;
const nombreVotante = "María";
const tieneDNI = true;
const puedeVotar = edadVotante >= 18 && tieneDNI;
console.log(`${nombreVotante} ¿Puede votar? ${puedeVotar}`);

// Ejercicio 6: saludo personalizado con template literal
const nombreSaludo = "Carlos";
const saludo = `¡Hola, ${nombreSaludo}! Bienvenido a la programación.`;
console.log(saludo);

// Ejercicio 7: precio con descuento (precio - precio * pct / 100)
const precio = 1500;
const descuento = 10; // porcentaje
const precioConDescuento = precio - (precio * descuento / 100);
console.log(`El precio con descuento es: ${precioConDescuento}
Precio original: ${precio}`);

// Ejercicio 8: ¿es par? (n % 2 === 0)
const numero = 1;
const esPar = numero % 2 === 0;
console.log(`${numero} es par: ${esPar}`);

// Ejercicio 9: convertir string a number antes de sumar
const num1 = "10";
const sumasegura = Number(num1) + 5;
console.log(sumasegura);

// Ejercicio 10: mini calculadora (suma, resta, *, /) con template multi-line
const a = 20;
const b = 5;
const calculadora =
`Suma: ${a} + ${b} = ${a + b}
Resta: ${a} - ${b} = ${a - b}
Multiplicación: ${a} * ${b} = ${a * b}
División: ${a} / ${b} = ${a / b}`;
console.log(calculadora);
