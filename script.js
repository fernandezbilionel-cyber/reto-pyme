function recuperar() {
  document.getElementById("error").style.display = "none";
}

function cambiarModo() {
  document.body.classList.toggle("claro");
  var boton = document.getElementById("btnModo");
  if (document.body.classList.contains("claro")) {
    boton.textContent = "Modo Oscuro";
  } else {
    boton.textContent = "Modo Claro";
  }
}

function abrirChat() {
  document.getElementById("chat").style.display = "flex";
}

function cerrarChat() {
  document.getElementById("chat").style.display = "none";
}

function enviarChat() {
  var input = document.getElementById("textoChat");
  var texto = input.value;
  if (texto === "") return;

  var mensajes = document.getElementById("mensajes");

  var user = document.createElement("p");
  user.className = "user";
  user.textContent = texto;
  mensajes.appendChild(user);

  var respuesta = responder(texto);
  var bot = document.createElement("p");
  bot.className = "bot";
  bot.textContent = respuesta;
  mensajes.appendChild(bot);

  input.value = "";
}

function responder(texto) {
  texto = texto.toLowerCase();
  if (texto.includes("hola")) return "Hola! Bienvenido a El Fenix RD.";
  if (texto.includes("cafe")) return "Tenemos cafe premium a RD$500 la libra.";
  if (texto.includes("precio")) return "Libra RD$500, Suscripcion RD$900, Cata RD$250.";
  if (texto.includes("envio") || texto.includes("delivery")) return "Hacemos delivery en Santo Domingo y Santiago.";
  if (texto.includes("historia")) return "Fuimos borrados digitalmente y renacimos. Lee la seccion Historia.";
  if (texto.includes("contacto")) return "Escribenos por el formulario o visitanos en Santo Domingo.";
  if (texto.includes("gracias")) return "Con gusto! Viva El Fenix RD.";
  return "No entiendo. Preguntame por cafe, precios, envios, historia o contacto.";
}

function calcular() {
  var nombre = document.getElementById("nombreCliente").value;
  var precio = parseFloat(document.getElementById("producto").value);
  var cantidad = parseInt(document.getElementById("cantidad").value);
  var total = precio * cantidad;
  document.getElementById("total").textContent = nombre + ", tu total es: RD$" + total;
}

function enviarFormulario() {
  var nombre = document.getElementById("nombre").value;
  if (nombre === "") {
    document.getElementById("respuesta").textContent = "Por favor escribe tu nombre.";
    return;
  }
  document.getElementById("respuesta").textContent = "Mensaje enviado. Gracias " + nombre + "!";
}

var palabra = "";
document.addEventListener("keydown", function(e) {
  palabra = palabra + e.key.toUpperCase();
  if (palabra.length > 5) {
    palabra = palabra.slice(-5);
  }
  if (palabra === "FENIX") {
    mostrarSecreto();
    palabra = "";
  }
});

function mostrarSecreto() {
  if (document.getElementById("secreto")) return;
  var div = document.createElement("div");
  div.id = "secreto";
  div.style.position = "fixed";
  div.style.top = "0";
  div.style.left = "0";
  div.style.width = "100%";
  div.style.height = "100%";
  div.style.background = "rgba(0,0,0,0.9)";
  div.style.color = "#ffcc00";
  div.style.textAlign = "center";
  div.style.paddingTop = "150px";
  div.style.zIndex = "9999";
  div.innerHTML = "<h2>SECRETO DESBLOQUEADO</h2>" +
    "<p>Encontramos al responsable del ataque.</p>" +
    "<p>Era un competidor que queria eliminar El Fenix.</p>" +
    "<p>Pero renacimos, y ahora estamos preparados.</p>" +
    "<p>Codigo secreto: FENIX2025</p>" +
    "<button onclick='cerrarSecreto()'>Cerrar</button>";
  document.body.appendChild(div);
}

function cerrarSecreto() {
  document.getElementById("secreto").remove();
}
