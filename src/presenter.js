import {
  ingresarPrecio,
  mostrarCantidadDeItems,
  mostrar_precio_neto,
  calcularPrecioTotal,
  calcularDescuento,
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
    const precioNeto = mostrar_precio_neto(cantidad, precio); // Calcular precio neto
    const precioConImpuesto = calcularPrecioTotal(precioNeto, estado); // Calcular precio con impuesto
    const { descuentoPorcentaje, descuento } = calcularDescuento(precioConImpuesto); // Calcular descuento
    const precioFinal = precioConImpuesto - descuento; // Precio final con descuento aplicado

    resultadoTotalizar.innerHTML = `
      <p>Precio ingresado: ${ingresarPrecio(precio)}</p>
      <p>Cantidad de ítems: ${mostrarCantidadDeItems(cantidad)}</p>
      <p>Precio neto: ${precioNeto}</p>
      <p>Impuesto en ${estado}: ${precioConImpuesto - precioNeto}</p>  <!-- Muestra solo el impuesto -->
      <p>Descuento: ${descuentoPorcentaje}%</p>
      <p>Precio final con descuento: ${precioFinal}</p>
    `;
  } else {
    resultadoTotalizar.innerHTML = "<p>Ingrese valores válidos.</p>";
  }
});
