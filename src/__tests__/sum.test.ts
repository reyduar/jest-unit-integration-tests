import { sum } from "../utilities/sum";

test("should sum two numbers", () => {
  // Arrange
  const a = 20;
  const b = 25;
  const expected = 46;
  // Act
  const result = sum(a, b);
  // Assert
  expect(result).toBe(expected);
});
