// Programa que permite determinar si una persona es mayor de edad y si tiene acceso a diferentes servicios:
// Compras en línea, registro en web, entre otros.

// Solicitar que el ususario introduzca su edad
// Verificar su edad
// Determinar si es apto para el servicio

function validarEdad() {
  const edad = parseInt(prompt("Ingrese su edad")); //Captura la edad y la convierte en un número entero

  const resultadoDiv = document.getElementById("resultado");
  resultadoDiv.innerHTML = "";

  if (isNaN(edad)) {
    resultadoDiv.innerHTML = "<p>Por favor, introduzca un número valido. </p>";
    return;
  }

  if (edad >= 18) {
    resultadoDiv.innerHTML += "<p>Acceso permitido a los servicios</p>";
  } else {
    resultadoDiv.innerHTML += "<p>Acceso denegado a los servicios</p>";
  }

  switch (true) {
    case edad < 18:
      resultadoDiv.innerHTML +=
        "<p>Solo tendrá acceso a contenidos para menores de edad </p>";
      break;
    case edad >= 18 && edad < 50:
      resultadoDiv.innerHTML +=
        "<p>Por ser mayor de edad, tiene acceso a todos los contenidos </p>";
      break;
    default:
      resultadoDiv.innerHTML +=
        "<p>Tiene acceso a contenido para adulto mayor </p>";
  }
}
