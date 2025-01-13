// sum.test.js
import { expect, test, describe } from 'vitest';
import { sum, addArray } from '../../src/helpers/sum';

describe('add Function', () => {
  test('adds 1 + 2 to equal 3', () => {
    //Preparacion
    const a = 1;
    const b = 2;

    //estimulo
    const result = sum(a, b);

    //comportamiento esperado
    expect(result).toBe(a + b);
  });
});

describe('addArray function', () => {
  test('should return 0 if the array is empty', () => {
    //Preparacion
    const numberArray = [0];

    //estimulo
    const result = addArray(numberArray);

    //comportamiento esperado
    expect(result).toBe(0);
  });

  test('should return the proper value of the addArray function', () => {
    //Preparacion
    const numberArray = [1, 2, 3, 4, 5];

    //estimulo
    const result = addArray(numberArray);

    //comportamiento esperado
    expect(result).toBe(15);
  });
});
