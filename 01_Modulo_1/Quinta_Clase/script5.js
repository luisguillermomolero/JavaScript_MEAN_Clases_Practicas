// Desarrollar la siguiente web a partir de:

// Descripción:
// 1.- Un encabezado y un párrafo.
// 2.- Un botón que al hacer clic cambie el color de fondo de la página.
// 3.- Un campo de texto donde el usuario pueda escribir algo y al presionar <Enter> se
// agregue una nueva lista de elementos
// 4.- Un botón que permta eliminar el último elemento de la lista.

document.getElementById("cambiarColor").addEventListener("click", function () {
  document.body.style.backgroundColor = "red";
});

document
  .getElementById("agregarElemento")
  .addEventListener("click", function () {
    const inputTexto = document.getElementById("inputTexto");
    const nuevoElemento = document.createElement("li");
    nuevoElemento.textContent = inputTexto.value;
    document.getElementById("lista").appendChild(nuevoElemento);
    inputTexto.value = "";
  });

document
  .getElementById("eliminarElemento")
  .addEventListener("click", function () {
    const lista = document.getElementById("lista");
    if (lista.lastChild) {
      lista.removeChild(lista.lastChild);
    }
  });
