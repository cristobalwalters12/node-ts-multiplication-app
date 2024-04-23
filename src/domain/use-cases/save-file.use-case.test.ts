import { SaveFile } from "./save-file.use-case";
import fs from "fs";

describe("SaveFileUseCase", () => {
  test("should save a file", () => {
    const saveFile = new SaveFile();
    const file = saveFile.execute({
      fileContent: "Hello World",
      fileDestination: "outputs",
      fileName: "test",
    });
    expect(saveFile).toBeInstanceOf(SaveFile);
    expect(file).toBe(true);
    const checkfile = fs.existsSync("outputs/test.txt");
    expect(checkfile).toBe(true);
  });
  afterEach(() => {
    fs.rmSync("outputs", { recursive: true, force: true });
  });
  test("should be file with custom values", () => {
    const saveFile = new SaveFile();
    const file = saveFile.execute({
      fileContent: "Hello World",
      fileDestination: "outputs",
      fileName: "test2",
    });
    expect(saveFile).toBeInstanceOf(SaveFile);
    expect(file).toBe(true);
    const checkfile = fs.existsSync("outputs/test.txt");
    expect(checkfile).toBe(true);
  });
  test("should be error when file exists", () => {
    const saveFile = new SaveFile();
    const file = saveFile.execute({
      fileContent: "Hello World",
      fileDestination: "outputs",
      fileName: "test3",
    });
    expect(saveFile).toBeInstanceOf(SaveFile);
    expect(file).toBe(true);
    const checkfile = fs.existsSync("outputs/test.txt");
    expect(checkfile).toBe(true);
    const file2 = saveFile.execute({
      fileContent: "Hello World",
      fileDestination: "outputs",
      fileName: "test3",
    });
    expect(file2).toBe(false);
  });
});
