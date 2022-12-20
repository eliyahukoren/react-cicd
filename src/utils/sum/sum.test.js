import { sum } from "./sum";

describe('testing sum function', () => {
    test('positive numbers: should apply sum for numbers', () => {
        expect(sum(2,3)).toBe(5);
    });

    test('negative numbers: should apply sum for numbers', () => {
        expect(sum(-5, -3)).toBe(-8);
    });

    test('positive & negative numbers: should apply sum for numbers', () => {
        expect(sum(12, -3)).toBe(9);
    });


})