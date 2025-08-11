/**
 * Main entry point for the Node.js application.
 * Exports a simple function for demonstration purposes.
 */

/**
 * A simple greeting function
 * @param {string} name - The name to greet
 * @returns {string} A greeting message
 */
function greet(name = 'World') {
  return `Hello, ${name}!`;
}

/**
 * A simple calculation function
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {number} The sum of a and b
 */
function add(a, b) {
  return a + b;
}

module.exports = {
  greet,
  add
};
