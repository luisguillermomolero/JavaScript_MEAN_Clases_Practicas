var Empleado = /** @class */ (function () {
  function Empleado(nombre, salario, departamento) {
    this.nombre = nombre;
    this.salario = salario;
    this.departamento = departamento;
  }
  Empleado.prototype.calcularBono = function () {
    return this.salario * 0.1;
  };
  Empleado.prototype.obtenerDetalles = function () {
    return ""
      .concat(this.nombre, " (")
      .concat(this.departamento, "): Salario $")
      .concat(this.salario.toFixed(2), ", Bono $")
      .concat(this.calcularBono().toFixed(2));
  };
  return Empleado;
})();
// Lista de empleados creada con instancias de la clase Empleado
var empleados = [
  new Empleado("Ana", 3000, "Ventas"),
  new Empleado("Luis", 4000, "TI"),
  new Empleado("María", 3500, "Recursos Humanos"),
  new Empleado("Carlos", 2800, "Logística"),
  new Empleado("Ana", 3000, "Ventas"),
  new Empleado("Luis", 4000, "TI"),
  new Empleado("María", 3500, "Recursos Humanos"),
  new Empleado("Carlos", 2800, "Logística"),
];
function mostrarEmpleados() {
  var listaEmpleados = document.getElementById("employee-list");
  if (!listaEmpleados) {
    console.error("No se encontró el contenedor para la lista de empleados");
    return;
  }
  listaEmpleados.innerHTML = "";
  empleados.forEach(function (empleado) {
    var tarjetaEmpleado = document.createElement("div");
    tarjetaEmpleado.className = "employee-card";
    tarjetaEmpleado.innerHTML = "\n    <h3>"
      .concat(empleado.nombre, "</h3>\n    <p>Departamento: ")
      .concat(empleado.departamento, "</p>\n    <p>Salario: $")
      .concat(empleado.salario.toFixed(2), "</p>\n    <p>Bono Anual: $")
      .concat(empleado.calcularBono().toFixed(2), "</p>\n    ");
    listaEmpleados.appendChild(tarjetaEmpleado);
  });
}
document.addEventListener("DOMContentLoaded", function () {
  mostrarEmpleados();
});
