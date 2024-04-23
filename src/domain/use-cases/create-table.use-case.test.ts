import { CreateTable } from "./create-table.use-case";

describe("CreateTableUseCase", () => {
  test("should return a multiplication table", () => {
    const createTable = new CreateTable();
    const table = createTable.execute({ base: 2, limit: 3 });
    // el tobeinstanceof es para verificar si es una instancia de la clase
    expect(createTable).toBeInstanceOf(CreateTable);
    // el tobe es para verificar si es igual a algo
    expect(table).toBe("2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n");
  });
});
