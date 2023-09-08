/**
 * MathUtils - A simple math utility library.
 *
 * @module MathUtils
 */

/**
 * Adds two numbers.
 *
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number} The sum of the two numbers.
 * 
 * @example
 * add(10, 15); // 25
 * add(2.5, 2.5); // 5
 * 
 */

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}

module.exports = {
  add,
  subtract,
  multiply,
  divide,
};

