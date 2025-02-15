let nuevoDiv;
function crearElemento() {
  nuevoDiv = document.createElement("div");
  nuevoDiv.textContent = "Este es un Div creado con createElement";
  nuevoDiv.style.padding = "20px";
  nuevoDiv.style.border = "2px solid red";
  document.querySelector("#contenedor").appendChild(nuevoDiv);
}

function eliminarElemento() {
  if (nuevoDiv) {
    nuevoDiv.parentNode.removeChild(nuevoDiv);
    nuevoDiv = null;
  } else {
    alert("No existe un div para eliminar");
  }
}
