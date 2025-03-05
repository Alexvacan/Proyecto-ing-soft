import sumar from "./sumador";
import {mostrar_cantidad_de_items,mostrar_precio_neto} from "./totalizador";

const items = document.querySelector("#items");
const cantidadI = document.querySelector("#cantidad-de-items")
const rescantidad = document.querySelector("#resultado-cantidad-de-items")

const precioNetoInput = document.querySelector("#precio-input");
const precioNetoForm = document.querySelector("#precio-form");
const resultadoPrecioNeto = document.querySelector("#resultado-precio-neto");

const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

cantidadI.addEventListener("submit",(event) => {
  event.preventDefault();

  const Items = Number.parseInt(items.value);

  rescantidad.innerHTML = "<p>" + mostrar_cantidad_de_items(Items) + "</p>";

});

precioNetoForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseFloat(precioNetoInput.value);
  const cantidad = Number.parseInt(items.value);

  if (!isNaN(precio) && !isNaN(cantidad)) {
    const precioNeto = mostrar_precio_neto(cantidad, precio);
    resultadoPrecioNeto.innerHTML = "<p>Precio neto: " + precioNeto + "</p>";
  } else {
    resultadoPrecioNeto.innerHTML = "<p>Ingrese valores válidos.</p>";
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
