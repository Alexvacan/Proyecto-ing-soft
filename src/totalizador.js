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
        1000: 3,   
        3000: 5,    
        7000: 7,   
        10000: 10,  
        30000: 15,  
    };

    let descuentoPorcentaje = 0;

    Object.keys(descuentos).forEach((key) => {
        if (precioTotal >= key) {
            descuentoPorcentaje = descuentos[key];
        }
    });

    const descuento = (precioTotal * descuentoPorcentaje) / 100;
    return { descuentoPorcentaje, descuento };
}
