import {
  mostrarCantidadDeItems,
  mostrar_precio_neto,
  calcularPrecioTotal,
  obtenerDescuento,
  calcularPrecioTotalConImpuesto,
  calcularPrecioTotalConDescuento,
  obtenerImpuestoPorCategoria,
  obtenerDescuentoPorCategoria,

} from "./totalizador.js";

describe("Cantidad de Ítems", () => {
  it("debería mostrar la cantidad de items", () => {
    expect(mostrarCantidadDeItems(3)).toEqual(3);
  });
});

describe("Precio Neto", () => {
  it("debería calcular el precio neto correctamente", () => {
    expect(mostrar_precio_neto(5, 10)).toEqual(50);
  });

  it("debería calcular el precio neto correctamente, otro caso", () => {
    expect(mostrar_precio_neto(15, 2)).toEqual(30);
  });
});

describe("Impuestos", () => {
  it("debería calcular el impuesto correcto para cada estado", () => {
    expect(calcularPrecioTotal(100, "UT")).toBe(106.65); 
    expect(calcularPrecioTotal(100, "NV")).toBe(108.00);
    expect(calcularPrecioTotal(100, "TX")).toBe(106.25); 
    expect(calcularPrecioTotal(100, "AL")).toBe(104.00); 
    expect(calcularPrecioTotal(100, "CA")).toBe(108.25); 
  });
});

describe("Impuestos Por Categoria", () => {
  it("debería devolver el impuesto correcto para cada estado", () => {
    expect(obtenerImpuestoPorCategoria("Alimentos")).toBe(0);
    expect(obtenerImpuestoPorCategoria("Bebidas Alcohólicas")).toBe(7);
    expect(obtenerImpuestoPorCategoria("Material de escritorio")).toBe(0);
    expect(obtenerImpuestoPorCategoria("Muebles")).toBe(3);
    expect(obtenerImpuestoPorCategoria("Electrónicos")).toBe(4);
    expect(obtenerImpuestoPorCategoria("Vestimenta")).toBe(2);
    expect(obtenerImpuestoPorCategoria("Varios")).toBe(0);
    
  });
});

describe("Descuentos Por Categoria", () => {
  it("debería devolver el descuento correcto para cada categoria", () => {
    expect(obtenerDescuentoPorCategoria("Alimentos")).toBe(2);
    expect(obtenerDescuentoPorCategoria("Bebidas Alcohólicas")).toBe(0);
    expect(obtenerDescuentoPorCategoria("Material de escritorio")).toBe(1.5);
    expect(obtenerDescuentoPorCategoria("Muebles")).toBe(0);
    expect(obtenerDescuentoPorCategoria("Electrónicos")).toBe(1);
    expect(obtenerDescuentoPorCategoria("Vestimenta")).toBe(0);
    expect(obtenerDescuentoPorCategoria("Varios")).toBe(0);
  });
});

describe("Precio Total con Impuesto", () => {
  it("debería calcular el precio total correctamente para California", () => {
    expect(calcularPrecioTotalConImpuesto(100, "CA")).toEqual(108.25);
  });
  it("debería calcular el precio total correctamente para Alabama", () => {
    expect(calcularPrecioTotalConImpuesto(100, "AL")).toEqual(104.00);
  });
  it("debería calcular el precio total correctamente para Texas", () => {
    expect(calcularPrecioTotalConImpuesto(100, "TX")).toEqual(106.25);
  });
  it("debería calcular el precio total correctamente para Nevada", () => {
    expect(calcularPrecioTotalConImpuesto(100, "NV")).toEqual(108.00);
  });
  it("debería calcular el precio total correctamente para Utah", () => {
    expect(calcularPrecioTotalConImpuesto(100, "UT")).toEqual(106.65);
  });
});

describe("Descuentos", () => {
  it("debería devolver el descuento correcto para una compra mayor a 1000", () => {
    expect(obtenerDescuento(1300)).toBe(3);
  });
  it("debería devolver el descuento correcto para una compra mayor a 3000", () => {
    expect(obtenerDescuento(3300)).toBe(5);
  });
  it("debería devolver el descuento correcto para una compra mayor a 7000", () => {
    expect(obtenerDescuento(7300)).toBe(7);
  });

  it("debería devolver el descuento correcto para una compra mayor a 10000", () => {
    expect(obtenerDescuento(10300)).toBe(10);
  });
  it("debería devolver el descuento correcto para una compra mayor a 30000", () => {
    expect(obtenerDescuento(30300)).toBe(15);
  });
  it("debería devolver 0 si no hay descuento", () => {
    expect(obtenerDescuento(500)).toBe(0);
  });
});

describe("Precio Total", () => {
  it("debería calcular el precio total correctamente para California con venta mayor a 1000", () => {
    expect(calcularPrecioTotalConDescuento(1200, "CA")).toEqual(1263);
  });
  it("debería calcular el precio total correctamente para Alabama con venta mayor a 3000", () => {
    expect(calcularPrecioTotalConDescuento(3300, "AL")).toEqual(3267);
  });
  it("debería calcular el precio total correctamente para Texas con venta mayor a 7000", () => {
    expect(calcularPrecioTotalConDescuento(7300, "TX")).toEqual(7245.25);
  });
  it("debería calcular el precio total correctamente para Nevada con venta mayor a 10000", () => {
    expect(calcularPrecioTotalConDescuento(10300, "NV")).toEqual(10094);
  });
  it("debería calcular el precio total correctamente para Utah con venta mayor a 30000", () => {
    expect(calcularPrecioTotalConDescuento(30300, "UT")).toEqual(27769.95);
  });


});