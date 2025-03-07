class Producto {
  private nombre: string;
  private precio: number;

  constructor(nombre: string, precio: number) {
    this.nombre = nombre;
    this.precio = precio;
  }

  public obtenerDetalles(): string {
    return `${this.nombre} tiene un valor de $${this.precio}`;
  }
}

const portatil = new Producto("Portatíl", 5000);
const computador = new Producto("Pc", 2500);

console.log(portatil.obtenerDetalles());
console.log(computador.obtenerDetalles());
