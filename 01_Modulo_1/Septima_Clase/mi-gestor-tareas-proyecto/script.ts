class Tarea {
  id: number;
  titulo: string;
  descripcion: string;
  completado: boolean;

  constructor(
    id: number,
    titulo: string,
    descripcion: string,
    completado: boolean
  ) {
    this.id = id;
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.completado = completado;
  }
}

const tareas: Tarea[] = [
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

function renderizarTareas(): void {
  const listaTareas = document.getElementById("lista-tareas");

  if (!listaTareas) {
    console.error("No se encontró el contenedor de la lista");
    return;
  }

  listaTareas.innerHTML = "";

  tareas.forEach((tarea) => {
    const tareaElemento = document.createElement("div");

    tareaElemento.className = `tarea ${tarea.completado ? "completada" : ""}`;
    tareaElemento.innerHTML = `
        <h3>${tarea.titulo}</h3>
        <p>${tarea.descripcion}</p>
        <p><strong>Estado:</strong> ${
          tarea.completado ? "Completada" : "Pendiente"
        }</p>
    `;
    listaTareas.appendChild(tareaElemento);
  });
}

document.addEventListener("DOMContentLoaded", renderizarTareas);
