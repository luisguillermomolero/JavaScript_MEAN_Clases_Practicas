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

// Lista de empleados creada con instancias de la clase Empleado
const empleados: Empleado[] = [
  new Empleado("Ana", 3000, "Ventas"),
  new Empleado("Luis", 4000, "TI"),
  new Empleado("María", 3500, "Recursos Humanos"),
  new Empleado("Carlos", 2800, "Logística"),
];

function mostrarEmpleados(): void {
  const listaEmpleados = document.getElementById("employee-list");

  if (!listaEmpleados) {
    console.error("No se encontró el contenedor para la lista de empleados");
    return;
  }

  listaEmpleados.innerHTML = "";

  empleados.forEach((empleado) => {
    const tarjetaEmpleado = document.createElement("div");
    tarjetaEmpleado.className = "employee-card";

    tarjetaEmpleado.innerHTML = `
    <h3>${empleado.nombre}</h3>
    <p>Departamento: ${empleado.departamento}</p>
    <p>Salario: $${empleado.salario.toFixed(2)}</p>
    <p>Bono Anual: $${empleado.calcularBono().toFixed(2)}</p>
    `;

    listaEmpleados.appendChild(tarjetaEmpleado);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarEmpleados();
});
