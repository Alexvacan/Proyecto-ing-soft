import { mostrarCantidadDeItems, mostrar_precio_neto, obtenerImpuesto, calcularPrecioTotal} from "./totalizador.js";

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
    expect(calcularPrecioTotal(100, "CA")).toEqual(108.25);
  });
  it("debería calcular el precio total correctamente para Alabama", () => {
    expect(calcularPrecioTotal(100, "AL")).toEqual(104.00);
  });
});