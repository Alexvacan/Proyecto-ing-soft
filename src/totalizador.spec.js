import { ingresarPrecio } from "./totalizador.js";

describe("Totalizador", () => {
  it("debería devolver el precio ingresado", () => {
    expect(ingresarPrecio(10)).toBe(10);
  });
});
