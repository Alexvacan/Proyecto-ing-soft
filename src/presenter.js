import sumar from "./sumador";
import mostrar_cantidad_de_items from "./totalizador";

const items = document.querySelector("#items");
const cantidadI = document.querySelector("#cantidad-de-items")
const rescantidad = document.querySelector("#resultado-cantidad-de-items")


const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

cantidadI.addEventListener("submit",(event) => {
  event.preventDefault();

  const Items = Number.parseInt(items.value);

  rescantidad.innerHTML = "<p>" + mostrar_cantidad_de_items(Items) + "</p>";

});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
