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

const impuestos = {
  UT: 6.65,
  NV: 8.00,
  TX: 6.25,
  AL: 4.00,
  CA: 8.25
};

totalizarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseFloat(precioInput.value);
  const cantidad = Number.parseInt(itemsInput.value);
  const estado = estadoSelect.value;

  if (!isNaN(precio) && !isNaN(cantidad)) {
    const precioNeto = mostrar_precio_neto(cantidad, precio);
    const impuesto = impuestos[estado];  

    resultadoTotalizar.innerHTML = `
      <p>Precio ingresado: ${ingresarPrecio(precio)}</p>
      <p>Cantidad de ítems: ${mostrarCantidadDeItems(cantidad)}</p>
      <p>Precio neto: ${precioNeto}</p>
      <p>Código de estado: ${estado}</p>
      <p>Impuesto en ${estado}: ${impuesto}%</p>  <!-- Mostrar impuesto solo al presionar Totalizar -->
    `;
  } else {
    resultadoTotalizar.innerHTML = "<p>Ingrese valores válidos.</p>";
  }
});
