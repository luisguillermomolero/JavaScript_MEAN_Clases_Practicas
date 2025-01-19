// Variables

var Nombre = "Luis"; // define variables globales MODIFICADOR DE ACCESO <<public>>
let apellido = "Molero"; //Variables tipo bloques {} MODIFICADOR DE ACCESO <<protectec>> <<private>>
const pi = 3.14; // Definición de constantes

// Tipos de datos primitivos

let numero = 10; // Number
let cadena = "Hola Mundo"; // String
let booleano = true; // Boolean
let undefinedVariable; // Undefined
let nullVariable = null; // Null

// Operadores aritméticos

let suma = numero + 5;
let resta = numero - 5;
let multiplicacion = numero * 5;
let division = numero / 5;
let modulo = numero % 5;

// Operadores de comparación

let mayorQue = numero > 5;
let menorQue = numero < 5;
let igualQue = numero === 5;
let diferenteQue = numero !== 5;
let mayorIgualQue = numero >= 5;

// Operadores lógicos

let and = numero > 5 && numero < 10;
let or = numero > 5 || numero < 10;
let not = !numero > 5;

// Funciones básicas en Js: <<Declarativas>> <<Anónimas>> <<Arrow function>>

// Función declarativa

function calcularIva(subtotal) {
  const iva = subtotal * 0.19;
  console.log("Factura");
  console.log(`La compra hizo un subtotal de ${subtotal} mas el iva de ${iva}`); //backtick ó acento grave ALT+96
  return;
}

calcularIva(200000);

// Función anónima

const calcularIva2 = function (subtotal) {
  const iva = subtotal * 0.19;
  console.log(`La compra hizo un subtotal de ${subtotal} mas el iva de ${iva}`); //backtick ó acento grave ALT+96
  return;
};

calcularIva2(200000);

// Arrow function

const calcularIva3 = (subtotal) => {
  const iva = subtotal * 0.19;
  console.log(`La compra hizo un subtotal de ${subtotal} mas el iva de ${iva}`); //backtick ó acento grave ALT+96
  return;
};

calcularIva3(200000);

// Ejercicio: Función que permite calcular el iva y el total de un mercado

// Función declarativa

function calcularTotal(subtotal) {
  const iva = subtotal * 0.19;
  const total = subtotal + iva;
  console.log(
    `El mercado tiene un subtotal de ${subtotal} mas el iva de ${iva} lo que genero un total de ${total}`
  );
  return;
}

calcularTotal(100000);

// Arrow functions

const calcularFactura = (subtotal) => {
  const iva = subtotal * 0.19;
  const total = subtotal + iva;
  console.log(
    `El mercado tiene un Subtotal de ${subtotal}, con un IVA de ${iva} lo que genero un Total de: ${total}`
  );
  return;
};

calcularFactura(100000);

// ejercicio: Crea una función que reciba una lista de clientes y devuelva solo los activos.

// Función declarativa

const clientes = [
  { nombre: "Ana", activo: true },
  { nombre: "Juan", activo: false },
  { nombre: "Luis", activo: true },
];

function filtrarClientesActivos(clientes) {
  const activos = clientes.filter(function (cliente) {
    return cliente.activo;
  });
  return activos;
}

// Solución
console.log(filtrarClientesActivos(clientes));

// Arrow function

const filtrarClientesActivos2 = (clientes) =>
  clientes.filter((cliente) => cliente.activo);

// Ejemplo de uso
console.log(filtrarClientesActivos2(clientes));
// Salida: [ { nombre: 'Juan', activo: true }, { nombre: 'Luis', activo: true } ]
