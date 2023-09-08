const { 
	add, 
	subtract, 
	multiply, 
	divide 
} = require('../src/MathUtils');

describe('MathUtils', () => {
  test('add function', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
  });

  test('subtract function', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(1, 5)).toBe(-4);
  });

  test('multiply function', () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-1, 1)).toBe(-1);
  });

  test('divide function', () => {
    expect(divide(6, 2)).toBe(3);
    expect(() => divide(1, 0)).toThrow("Division by zero is not allowed.");
  });
});

