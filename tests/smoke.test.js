/**
 * Smoke tests for the Node.js application
 * These tests verify that the basic functionality works as expected
 */

const { greet, add } = require('../src/index');

describe('Basic functionality tests', () => {
  describe('greet function', () => {
    test('should return default greeting', () => {
      expect(greet()).toBe('Hello, World!');
    });

    test('should return custom greeting', () => {
      expect(greet('Jest')).toBe('Hello, Jest!');
    });
  });

  describe('add function', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add negative numbers', () => {
      expect(add(-1, -2)).toBe(-3);
    });

    test('should handle zero', () => {
      expect(add(0, 5)).toBe(5);
      expect(add(5, 0)).toBe(5);
    });
  });
});
