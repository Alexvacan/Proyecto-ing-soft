import { mostrarCantidadDeItems } from "./totalizador";

describe("Cantidad", () => {
  it("debería mostrar la cantidad de items", () => {
    expect(mostrarCantidadDeItems(3)).toEqual(3);
  });
});
