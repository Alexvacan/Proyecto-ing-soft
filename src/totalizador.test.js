import { calcularPrecioTotal, calcularDescuento } from "./totalizador.js";

describe("Precio Total con Impuesto y Descuento", () => {
  it("debería calcular el precio total con impuesto y descuento de 3% para 1000", () => {
    const precioNeto = 1000;
    const estado = "CA";
    const precioTotal = calcularPrecioTotal(precioNeto, estado);
    const { descuentoPorcentaje, descuento } = calcularDescuento(precioNeto);
    const precioConDescuento = precioTotal - descuento;

    expect(descuentoPorcentaje).toBe(3);
    expect(precioConDescuento).toBeCloseTo(1052.50, 2);
  });

  it("debería calcular el precio total con impuesto y descuento de 3% para 1500", () => {
    const precioNeto = 1500;
    const estado = "TX";
    const precioTotal = calcularPrecioTotal(precioNeto, estado);
    const { descuentoPorcentaje, descuento } = calcularDescuento(precioNeto);
    const precioConDescuento = precioTotal - descuento;

    expect(descuentoPorcentaje).toBe(3);
    expect(precioConDescuento).toBeCloseTo(1548.75, 2);
  });

  it("debería calcular el precio total con impuesto y descuento de 5% para 3000", () => {
    const precioNeto = 3000;
    const estado = "TX";
    const precioTotal = calcularPrecioTotal(precioNeto, estado);
    const { descuentoPorcentaje, descuento } = calcularDescuento(precioNeto);
    const precioConDescuento = precioTotal - descuento;

    expect(descuentoPorcentaje).toBe(5);
    expect(precioConDescuento).toBeCloseTo(3037.5, 2);
  });
});
