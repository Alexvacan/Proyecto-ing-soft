import { mostrarCantidadDeItems, 
  mostrar_precio_neto, 
  obtenerImpuesto, 
  calcularPrecioTotal,
  obtenerDescuento,
  calcularPrecioTotalConImpuesto,
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
  it("debería devolver el impuesto correcto para cada estado", () => {
    expect(obtenerImpuesto("UT")).toBe(6.65);
    expect(obtenerImpuesto("NV")).toBe(8.00);
    expect(obtenerImpuesto("TX")).toBe(6.25);
    expect(obtenerImpuesto("AL")).toBe(4.00);
    expect(obtenerImpuesto("CA")).toBe(8.25);
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
    expect(calcularPrecioTotal(1200, "CA")).toEqual(1263);
  });
  it("debería calcular el precio total correctamente para Alabama con venta mayor a 3000", () => {
    expect(calcularPrecioTotal(3300, "AL")).toEqual(3267);
  });
  it("debería calcular el precio total correctamente para Texas con venta mayor a 7000", () => {
    expect(calcularPrecioTotal(7300, "TX")).toEqual(7245.25);
  });
  it("debería calcular el precio total correctamente para Nevada con venta mayor a 10000", () => {
    expect(calcularPrecioTotal(10300, "NV")).toEqual(10094);
  });
  it("debería calcular el precio total correctamente para Utah con venta mayor a 30000", () => {
    expect(calcularPrecioTotal(30300, "UT")).toEqual(27769.95);
  });

});