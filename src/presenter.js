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

  const impuestos = {
    UT: 6.65,
    NV: 8.00,
    TX: 6.25,
    AL: 4.00,
    CA: 8.25,
  };

  const impuestoEstado = impuestos[estado];

  if (!isNaN(precio) && !isNaN(cantidad) && impuestoEstado !== undefined) {
    const precioNeto = mostrar_precio_neto(cantidad, precio);
    const precioConImpuesto = calcularPrecioTotal(precioNeto, estado);
    const impuesto = precioConImpuesto - precioNeto;
    const { descuentoPorcentaje, descuento } = calcularDescuento(precioConImpuesto);
    const precioFinal = precioConImpuesto - descuento;

    resultadoTotalizar.innerHTML = `
      <p>Precio ingresado: ${ingresarPrecio(precio)}</p>
      <p>Cantidad de ítems: ${mostrarCantidadDeItems(cantidad)}</p>
      <p>Precio neto: ${precioNeto}</p>
      <p>Impuesto para ${estado}: ${impuestoEstado}%</p>
      <p>Impuesto: ${impuesto.toFixed(2)}</p>
      <p>Descuento: ${descuentoPorcentaje}%</p>
      <p>Precio final con impuestos y descuento: ${precioFinal.toFixed(2)}</p>
    `;
  } else {
    resultadoTotalizar.innerHTML = "<p>Ingrese valores válidos o seleccione un estado válido.</p>";
  }
});
