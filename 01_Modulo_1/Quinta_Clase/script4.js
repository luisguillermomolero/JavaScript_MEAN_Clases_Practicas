function botonClicleado() {
  const boton = document.querySelector("#miBoton");

  boton.addEventListener("click", function () {
    alert("El botón fue clicleado");
  });
}
