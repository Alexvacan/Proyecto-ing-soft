import { mostrarCantidadDeItems, mostrar_precio_neto, calcularPrecioTotal, calcularDescuento } from "./totalizador.js";

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
    expect(calcularPrecioTotal(100, "UT")).toBeCloseTo(106.65);
    expect(calcularPrecioTotal(100, "NV")).toBeCloseTo(108.00);
    expect(calcularPrecioTotal(100, "TX")).toBeCloseTo(106.25);
    expect(calcularPrecioTotal(100, "AL")).toBeCloseTo(104.00);
    expect(calcularPrecioTotal(100, "CA")).toBeCloseTo(108.25);
  });
});

describe("Precio Total con Impuesto", () => {
  it("debería calcular el precio total correctamente para California", () => {
    expect(calcularPrecioTotal(100, "CA")).toBeCloseTo(108.25);
  });
});

describe("Calcular Precio Total con Impuesto y Descuento", () => {
  it("debería calcular el precio total con impuesto y descuento de 3% para 1000", () => {
    const precioNeto = mostrar_precio_neto(1, 1000); 
    const estado = "CA";
    const precioTotal = calcularPrecioTotal(precioNeto, estado);
    const { descuentoPorcentaje, descuento } = calcularDescuento(precioTotal);
    const precioConDescuento = precioTotal - descuento;

    expect(precioConDescuento).toBeCloseTo(1050.025, 2);  // Precio final con descuento, considerando 3% de descuento
  });
});


