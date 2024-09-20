const { describe, expect, test } = require('@jest/globals')
const { classifyEvenOdd } = require('./classifyEvenOdd')

describe('classifyEvenOdd', () => {
    test('should classify even numbers correctly', () => {
        expect(classifyEvenOdd(4)).toBe('even');
        expect(classifyEvenOdd(0)).toBe('even');
        expect(classifyEvenOdd(-2)).toBe('even');
    });

    test('should classify odd numbers correctly', () => {
        expect(classifyEvenOdd(5)).toBe('odd');
        expect(classifyEvenOdd(-3)).toBe('odd');
    });

    test('should throw an error for non-number inputs', () => {
        expect(() => classifyEvenOdd('string')).toThrow('Input must be a number');
        expect(() => classifyEvenOdd(null)).toThrow('Input must be a number');
        expect(() => classifyEvenOdd(undefined)).toThrow('Input must be a number');
    });
});