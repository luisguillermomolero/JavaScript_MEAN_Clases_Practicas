function MostrarMensaje() {
  const edad = prompt("Por favor, ingrese su edad");

  if (isNaN(edad) || edad == " ") {
    document.getElementById("mensaje").innerHTML =
      "Por favor, ingrese una edad valida";
  } else {
    if (edad >= 18) {
      document.getElementById("mensaje").innerHTML = "Tu eres mayor de edad";
    } else {
      document.getElementById("mensaje").innerHTML = "Tu eres menor de edad";
    }
  }
}

function generarLista() {
  const lista = document.getElementById("lista");

  // Bucle para crear 5 elementos en la lista
  for (let i = 1; i <= 5; i++) {
    const li = document.createElement("li"); // Crear un nuevo elemento de lista
    li.textContent = `Elemento ${i}`; // Define el texto del item
    lista.appendChild(li); // Agrega el elemto de la lista "En la lista"
  }
}

MostrarMensaje();
generarLista();
