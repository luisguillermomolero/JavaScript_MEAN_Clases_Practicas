function calcularPrecioConIVA(precio: number, iva: number = 0.19) {
  return precio * (1 + iva);
}

const precioFinal = calcularPrecioConIVA(1000);
console.log(`Precio con IVA: ${precioFinal}`);
