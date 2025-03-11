export function ingresarPrecio(precio) {
    return precio;
}

export function mostrarCantidadDeItems(item) {
    return item;
}

export function mostrar_precio_neto(cantidad, precio) {
    return cantidad * precio;
}

export function obtenerImpuesto(estado) {
    const impuestos = {
      UT: 6.65,
      NV: 8.00,
      TX: 6.25,
      AL: 4.00,
      CA: 8.25
    };
    return impuestos[estado] || 0;
}

export function calcularPrecioTotal(precioNeto, estado) {
    const impuestoPorcentaje = obtenerImpuesto(estado);
    const impuesto = (precioNeto * impuestoPorcentaje) / 100;
    const precioTotal = precioNeto + impuesto;
    return precioTotal;
}


