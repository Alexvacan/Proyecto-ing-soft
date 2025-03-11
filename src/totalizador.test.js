import {
  mostrarCantidadDeItems,
  mostrar_precio_neto,
  calcularPrecioTotal,
  calcularDescuento,
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

describe("Precio Total con Impuesto", () => {
  it("debería calcular el precio total correctamente para California", () => {
    expect(calcularPrecioTotal(100, "CA")).toEqual(108.25);
  });
  it("debería calcular el precio total correctamente para Alabama", () => {
    expect(calcularPrecioTotal(100, "AL")).toEqual(104.00);
  });
  it("debería calcular el precio total correctamente para Texas", () => {
    expect(calcularPrecioTotal(100, "TX")).toEqual(106.25);
  });
  it("debería calcular el precio total correctamente para Nevada", () => {
    expect(calcularPrecioTotal(100, "NV")).toEqual(108.00);
  });
  it("debería calcular el precio total correctamente para Utah", () => {
    expect(calcularPrecioTotal(100, "UT")).toEqual(106.65);
  });
});

describe("Precio Total con Impuesto y Descuento", () => {
  it("debería calcular el precio total con impuesto y descuento de 3% para 1000", () => {
    const precioNeto = 1000;
    const estado = "CA";
    const precioTotal = calcularPrecioTotal(precioNeto, estado);
    const { descuentoPorcentaje, descuento } = calcularDescuento(precioTotal);
    const precioConDescuento = precioTotal - descuento;

    expect(precioConDescuento).toBeCloseTo(1050.03, 2);  
});
});
