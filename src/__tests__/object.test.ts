test("equlity of objects", () => {
  const data: any = { name: "John", age: 30 };
  data["country"] = "USA";
  const expected = { name: "John", age: 30, country: "USA" };
  expect(data).toStrictEqual(expected);
});

test("equlity of object fields values", () => {
  const data: any = { name: "John", age: 30 };
  data["country"] = "ARG";
  const expected = { name: "Ariel", age: 33 };
  expect(data).not.toStrictEqual(expected);
});
