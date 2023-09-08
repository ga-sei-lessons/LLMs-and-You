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
});

