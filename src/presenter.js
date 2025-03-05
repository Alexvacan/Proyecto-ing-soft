import sumar from "./sumador";
import {
  ingresarPrecio,
  mostrarCantidadDeItems,
  mostrar_precio_neto,
} from "./totalizador.js";

const items = document.querySelector("#items");
const cantidadI = document.querySelector("#cantidad-de-items");
const rescantidad = document.querySelector("#resultado-cantidad-de-items");

const precioInput = document.querySelector("#precio-input");
const precioForm = document.querySelector("#precio-form");
const resultadoDiv = document.querySelector("#resultado-div");

const precioNetoForm = document.querySelector("#precio-neto-form");
const resultadoPrecioNeto = document.querySelector("#resultado-precio-neto");

const totalizarForm = document.querySelector("#totalizar-form");
const resultadoTotalizar = document.querySelector("#resultado-totalizar");

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");

cantidadI.addEventListener("submit", (event) => {
  event.preventDefault();

  const Items = Number.parseInt(items.value);

  rescantidad.innerHTML = "<p>" + mostrarCantidadDeItems(Items) + "</p>";
});

precioForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseFloat(precioInput.value);

  if (!isNaN(precio)) {
    resultadoDiv.innerHTML = "<p>Precio ingresado: " + ingresarPrecio(precio) + "</p>";
  } else {
    resultadoDiv.innerHTML = "<p>Ingrese un número válido.</p>";
  }
})

precioNetoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseFloat(precioInput.value);
  const cantidad = Number.parseInt(items.value);

  if (!isNaN(precio) && !isNaN(cantidad)) {
    const precioNeto = mostrar_precio_neto(cantidad, precio);
    resultadoPrecioNeto.innerHTML = "<p>Precio neto: " + precioNeto + "</p>";
  } else {
    resultadoPrecioNeto.innerHTML = "<p>Ingrese valores válidos.</p>";
  }
});

totalizarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseFloat(precioInput.value);
  const cantidad = Number.parseInt(items.value);

  if (!isNaN(precio) && !isNaN(cantidad)) {
    const precioNeto = mostrar_precio_neto(cantidad, precio);
    resultadoTotalizar.innerHTML = `
      <p>Precio ingresado: ${precio}</p>
      <p>Cantidad de items: ${cantidad}</p>
      <p>Precio neto: ${precioNeto}</p>
    `;
  } else {
    resultadoTotalizar.innerHTML = "<p>Ingrese valores válidos.</p>";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});