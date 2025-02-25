function calcularPrecioConIVA(precio, iva) {
    if (iva === void 0) { iva = 0.19; }
    return precio * (1 + iva);
}
var precioFinal = calcularPrecioConIVA(1000);
console.log("Precio con IVA: ".concat(precioFinal));
