export function ingresarPrecio(precio) {
    return precio;
}

export function mostrarCantidadDeItems(item) {
    return item;
}

export function mostrar_precio_neto(cantidad, precio) {
    return cantidad * precio;
}

export function calcularPrecioTotal(precioNeto, estado) {
    const impuestos = {
        UT: 6.65,
        NV: 8.00,
        TX: 6.25,
        AL: 4.00,
        CA: 8.25,
    };
    
    const impuesto = impuestos[estado];
    if (impuesto === undefined) {
        throw new Error(`El estado ${estado} no tiene un impuesto registrado.`);
    }
    const impuestoTotal = (precioNeto * impuesto) / 100;
    return precioNeto + impuestoTotal;
}

export function obtenerImpuestoPorCategoria(categoria) {
    const categorias = {
      "Alimentos": 0,
      "Bebidas Alcohólicas": 7.00,
      "Material de escritorio": 0,
      "Muebles": 3,
      "Electrónicos": 4,
      "Vestimenta": 2,
      "Varios": 0
    };
    return categorias[categoria] ;
}

export function obtenerDescuentoPorCategoria(categoria) {
    const categorias = {
      "Alimentos": 2,
      "Bebidas Alcohólicas": 0,
      "Material de escritorio": 1.5,
      "Muebles": 0,
      "Electrónicos": 1,
      "Vestimenta": 0,
      "Varios": 0
    };
    return categorias[categoria] ;
}

export function obtenerDescuento(precioNeto) {
    const descuentos = {
      1000: 3,
      3000: 5,
      7000: 7,
      10000: 10,
      30000: 15
    };
    let descuentoAplicable = 0;
    for (let descuento in descuentos) {
      if (precioNeto >= parseInt(descuento)) {
        descuentoAplicable = descuentos[descuento];
      }
     
    }
    return descuentoAplicable;
}
export function calcularPrecioTotalConImpuesto(precioNeto, estado) {
    const impuestoPorcentaje = obtenerImpuesto(estado);
    const impuesto = (precioNeto * impuestoPorcentaje) / 100;
    const precioTotal = precioNeto + impuesto;
    return precioTotal;
}

export function calcularPrecioTotalConDescuento(precioNeto, estado) {
    const impuestoPorcentaje = obtenerImpuesto(estado);
    const descuentoPorcentaje = obtenerDescuento(precioNeto);
    const precioDescuento = (precioNeto * descuentoPorcentaje) / 100;
    const impuesto = (precioNeto * impuestoPorcentaje) / 100;
    const precioTotal = precioNeto + impuesto - precioDescuento;
    return precioTotal;
}

export function calcularPrecioTotal(precioNeto, estado, categoria) {
    const impuestoPorCategoria = (precioNeto * obtenerImpuestoPorCategoria(categoria))/100;
    const descuentoPorCategoria = (precioNeto * obtenerDescuentoPorCategoria(categoria))/100;
    const impuestoPorcentaje = obtenerImpuesto(estado);
    const descuentoPorcentaje = obtenerDescuento(precioNeto);
    const precioDescuento = (precioNeto * descuentoPorcentaje) / 100;
    const impuesto = (precioNeto * impuestoPorcentaje) / 100;
    const precioTotal = precioNeto + impuesto - precioDescuento + impuestoPorCategoria - descuentoPorCategoria;
    return precioTotal;
}


