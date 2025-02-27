import mostrar_cantidad_de_items from "./totalizador";

describe("Cantidad", () => {
    it("deberia mostrar la cantidad de items", () => {
      expect(mostrar_cantidad_de_items(3)).toEqual(3);
    });
  });