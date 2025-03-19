import {
  ingresarPrecio,
  mostrarCantidadDeItems,
  mostrar_precio_neto,
  calcularPrecioTotal,
  obtenerImpuesto,
  obtenerDescuento,
  obtenerDescuentoPorCategoria,
  obtenerImpuestoPorCategoria,
  obtenerPreciodeEnvio,
} from "./totalizador.js";

import {
  obtener_beneficio_segun_tipo_de_cliente,
  obtener_beneficio_con_condiciones_especiales
} from "./cliente_con_beneficios.js";

const precioInput = document.querySelector("#precio-input");
const itemsInput = document.querySelector("#items");
const pesoInput = document.querySelector("#peso");
const estadoSelect = document.querySelector("#estado");
const categoriaSelect = document.querySelector("#categoria");
const tipoClienteSelect = document.querySelector("#tipo-cliente"); // Nueva selección de tipo de cliente
const totalizarForm = document.querySelector("#totalizar-form");
const resultadoTotalizar = document.querySelector("#resultado-totalizar");

totalizarForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const precio = Number.parseFloat(precioInput.value);
  const cantidad = Number.parseInt(itemsInput.value);
  const peso = Number.parseInt(pesoInput.value);
  const estado = estadoSelect.value;
  const categoria = categoriaSelect.value;
  const tipoCliente = tipoClienteSelect.value; // Valor del tipo de cliente

  if (!isNaN(precio) && !isNaN(cantidad) !== undefined) {
    const precioNeto = mostrar_precio_neto(cantidad, precio);
    const precioEnvio = obtenerPreciodeEnvio(peso, cantidad);
    const precioTotal = calcularPrecioTotal(precioNeto, estado, categoria, precioEnvio);
    const impuesto = obtenerImpuesto(estado); 
    const descuento = obtenerDescuento(precioNeto);
    const descuentoCategoria = obtenerDescuentoPorCategoria(categoria);
    const impuestoCategoria = obtenerImpuestoPorCategoria(categoria); 

    // Obtener beneficios según tipo de cliente
    const beneficio = obtener_beneficio_segun_tipo_de_cliente(tipoCliente);
    const beneficioCondicional = obtener_beneficio_con_condiciones_especiales(tipoCliente, precioNeto, categoria);

    // Mostrar los resultados
    resultadoTotalizar.innerHTML = `
      <p>Precio ingresado: ${ingresarPrecio(precio)}</p>
      <p>Cantidad de ítems: ${mostrarCantidadDeItems(cantidad)}</p>
      <p>Precio neto: ${precioNeto}</p>
      <p>Descuento: ${descuento}%</p>
      <p>Código de estado: ${estado}</p>
      <p>Impuesto en ${estado}: ${impuesto}%</p>
      <p>Descuento por categoría: ${descuentoCategoria}%</p>
      <p>Impuesto por categoría: ${impuestoCategoria}%</p>
      <p>Precio de envío: $${precioEnvio.toFixed(2)}</p>
      <p>Precio total: $${precioTotal.toFixed(2)}</p> 
      <p>Beneficio de cliente: ${beneficio}%</p> <!-- Mostrar el beneficio -->
      <p>Beneficio condicional: $${beneficioCondicional}</p> <!-- Mostrar beneficio condicional -->
    `;
  } else {
    resultadoTotalizar.innerHTML = "<p>Ingrese valores válidos o seleccione un estado válido.</p>";
  }
});
