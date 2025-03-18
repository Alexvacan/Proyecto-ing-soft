import {
  ingresarPrecio,
  mostrarCantidadDeItems,
  mostrar_precio_neto,
  calcularPrecioTotal,
  obtenerImpuesto,
  obtenerDescuento,
  obtenerDescuentoPorCategoria,
  obtenerImpuestoPorCategoria

} from "./totalizador.js";

const precioInput = document.querySelector("#precio-input");
const itemsInput = document.querySelector("#items");
const estadoSelect = document.querySelector("#estado");
const categoriaSelect = document.querySelector("#categoria");
const totalizarForm = document.querySelector("#totalizar-form");
const resultadoTotalizar = document.querySelector("#resultado-totalizar");

totalizarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseFloat(precioInput.value);
  const cantidad = Number.parseInt(itemsInput.value);
  const estado = estadoSelect.value;
  const categoria = categoriaSelect.value;

  if (!isNaN(precio) && !isNaN(cantidad) !== undefined) {
    const precioNeto = mostrar_precio_neto(cantidad, precio);
    const precioTotal = calcularPrecioTotal(precioNeto, estado, categoria);
    const impuesto = obtenerImpuesto(estado); 
    const descuento = obtenerDescuento(precioNeto);
    const descuentoCategoria = obtenerDescuentoPorCategoria(categoria);
    const impuestoCategoria = obtenerImpuestoPorCategoria(categoria); 


    resultadoTotalizar.innerHTML = `
      <p>Precio ingresado: ${ingresarPrecio(precio)}</p>
      <p>Cantidad de ítems: ${mostrarCantidadDeItems(cantidad)}</p>
      <p>Precio neto: ${precioNeto}</p>
      <p>Descuento: ${descuento}%</p>
      <p>Código de estado: ${estado}</p>
      <p>Impuesto en ${estado}: ${impuesto}%</p>
      <p>Descuento por categoría: ${descuentoCategoria}%</p>
      <p>Impuesto por categoría: ${impuestoCategoria}%</p>
      <p>Precio total: $${precioTotal.toFixed(2)}</p>  <!-- Mostrar el precio total con impuesto -->
    `;
  } else {
    resultadoTotalizar.innerHTML = "<p>Ingrese valores válidos o seleccione un estado válido.</p>";
  }
});
