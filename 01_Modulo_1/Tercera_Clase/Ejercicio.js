/* Condicional if */

const numero = 10;

if (numero == 10) {
  //código..
  console.log("El número es correcto");
}

if (numero == 9) {
  //código...
  console.log("EL número es incorrecto");
} else {
  //código...
  console.log("El número es correcto");
}

// Sentencias Switch

const fruta = "Banano";

switch (fruta) {
  case "manzana":
    // código del caso
    console.log("La Manzana es la correcta");
    break;
  case "Pera":
    // código del caso
    console.log("La Pera es la correcta");
    break;
  default:
    console.log("La fruta no existe");
    break;
}

// Bucle For

for (let index = 0; index <= 4; index++) {
  //codigo
  console.log("Esta es la iteración número:" + index);
}

for (let i = 4; i > 0; i--) {
  //codigo
  console.log("Esta es la iteración número:" + i);
}

// Bucle While
let ciclo = 0;

while (ciclo < 5) {
  console.log("Ciclo While " + ciclo);
  ciclo++;
}

// Bucle Do-While

let ciclo2 = 0;

do {
  console.log("Ciclo Do While " + ciclo2);
  ciclo2++;
} while (ciclo2 < 5);
