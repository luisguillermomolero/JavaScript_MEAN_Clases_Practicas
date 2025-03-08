var Tarea = /** @class */ (function () {
  function Tarea(id, titulo, descripcion, completado) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completado = completado;
  }
  return Tarea;
})();
var tareas = [
  new Tarea(
    1,
    "Comprar víveres",
    "Comprar pan, leche y huevos en el supermercado.",
    false
  ),
  new Tarea(
    2,
    "Revisar correo",
    "Leer y responder correos electrónicos importantes.",
    true
  ),
  new Tarea(
    3,
    "Hacer ejercicio",
    "Correr durante 30 minutos en el parque.",
    false
  ),
  new Tarea(
    4,
    "Estudiar TypeScript",
    "Repasar conceptos de TypeScript y practicar.",
    true
  ),
];
function renderizarTareas() {
  var listaTareas = document.getElementById("lista-tareas");
  if (!listaTareas) {
    console.error("No se encontró el contenedor de la lista");
    return;
  }
  listaTareas.innerHTML = "";
  tareas.forEach(function (tarea) {
    var tareaElemento = document.createElement("div");
    tareaElemento.className = "tarea ".concat(
      tarea.completado ? "completada" : ""
    );
    tareaElemento.innerHTML = "\n        <h3>"
      .concat(tarea.titulo, "</h3>\n        <p>")
      .concat(tarea.descripcion, "</p>\n        <p><strong>Estado:</strong> ")
      .concat(tarea.completado ? "Completada" : "Pendiente", "</p>\n    ");
    listaTareas.appendChild(tareaElemento);
  });
}
document.addEventListener("DOMContentLoaded", renderizarTareas);
