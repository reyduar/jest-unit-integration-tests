import { createNewArray } from "../utilities";

describe("Array functions", () => {
  test("Should be return array", () => {
    const [letters, numbers] = createNewArray();
    expect(letters).toBe("ABC");
    expect(numbers).toBe(123);

    expect(typeof letters).toBe("string");
    expect(typeof numbers).toBe("number");

    expect(letters).toEqual(expect.any(String));
  });
});
