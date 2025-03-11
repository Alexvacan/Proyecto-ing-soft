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

export function calcularDescuento(precioNeto) {
    let descuentoPorcentaje = 0;
    let descuento = 0;

    if (precioNeto >= 1000 && precioNeto < 3000) {
        descuentoPorcentaje = 3;
    } else if (precioNeto >= 3000 && precioNeto < 7000) {
        descuentoPorcentaje = 5;
    }

    descuento = (precioNeto * descuentoPorcentaje) / 100;
    return { descuentoPorcentaje, descuento };
}
