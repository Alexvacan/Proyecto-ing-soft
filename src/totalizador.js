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

export function calcularDescuento(precioTotal) {
    const descuentos = {
        1000: 3,    // 3% descuento
        3000: 5,    // 5% descuento
        7000: 7,    // 7% descuento
        10000: 10,  // 10% descuento
        30000: 15,  // 15% descuento
    };

    let descuentoPorcentaje = 0;

    // Iteramos sobre las claves de los descuentos para encontrar el más alto aplicable
    Object.keys(descuentos).forEach((key) => {
        if (precioTotal >= key) {
            descuentoPorcentaje = descuentos[key];
        }
    });

    const descuento = (precioTotal * descuentoPorcentaje) / 100;
    return { descuentoPorcentaje, descuento };
}
