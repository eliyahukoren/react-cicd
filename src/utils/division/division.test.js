import { division } from "./division";

describe('testing division function', () => {
  test('positive numbers: should divide numbers', () => {
    expect(division(12, 4)).toBe(3);
  });

  test('negative numbers: should divide numbers', () => {
    expect(division(-20, -2)).toBe(10);
  });

  test('positive & negative numbers: should divide numbers', () => {
    expect(division(18, -3)).toBe(-6);
  });
});
