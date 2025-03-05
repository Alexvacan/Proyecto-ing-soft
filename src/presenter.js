import {
  ingresarPrecio,
  mostrarCantidadDeItems,
  mostrar_precio_neto,
} from "./totalizador.js";


const precioInput = document.querySelector("#precio-input");
const itemsInput = document.querySelector("#items");
const estadoSelect = document.querySelector("#estado");
const totalizarForm = document.querySelector("#totalizar-form");
const resultadoTotalizar = document.querySelector("#resultado-totalizar");


totalizarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseFloat(precioInput.value);
  const cantidad = Number.parseInt(itemsInput.value);
  const estado = estadoSelect.value;

  
  if (!isNaN(precio) && !isNaN(cantidad)) {
    
    const precioNeto = mostrar_precio_neto(cantidad, precio);

    resultadoTotalizar.innerHTML = `
      <p>Precio ingresado: ${ingresarPrecio(precio)}</p>
      <p>Cantidad de ítems: ${mostrarCantidadDeItems(cantidad)}</p>
      <p>Precio neto: ${precioNeto}</p>
      <p>Código de estado: ${estado}</p>
    `;
  } else {

    resultadoTotalizar.innerHTML = "<p>Ingrese valores válidos.</p>";
  }
});