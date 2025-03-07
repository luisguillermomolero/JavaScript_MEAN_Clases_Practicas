class Empleado {
  constructor(
    public nombre: string,
    public salario: number,
    public departamento: string
  ) {}

  public calcularBono(): number {
    return this.salario * 0.1;
  }

  public obtenerDetalles(): string {
    return `${this.nombre} (${
      this.departamento
    }): Salario $${this.salario.toFixed(
      2
    )}, Bono $${this.calcularBono().toFixed(2)}`;
  }
}

const empleados: Empleado[] = [
  new Empleado("Carlos Luis", 3000, "Venta"),
  new Empleado("Ana Maria", 2500, "Marketing"),
  new Empleado("Juan Pablo", 2800, "Producción"),
  new Empleado("Maria Pedroza", 3200, "Ventas"),
  new Empleado("José María", 3500, "Marketing"),
];
