import { getInputFromFile } from './fileReader';

describe('TEST getInputFromFile function', () => {
    test('invalid upper right corner input', () => {
        expect(() => getInputFromFile('testInputs/test1.txt')).toThrow(
            'Invalid input'
        );
    });

    test('invalid direction input', () => {
        expect(() => getInputFromFile('testInputs/test2.txt')).toThrow(
            'Invalid input'
        );
    });

    test('invalid command input', () => {
        expect(() => getInputFromFile('testInputs/test3.txt')).toThrow(
            'Invalid input'
        );
    });

    test('vaid input', () => {
        const result = getInputFromFile('testInputs/test4.txt');
        expect(result).toEqual({
            robotsData: [
                {
                    commands: 'LMLMLMLMM',
                    startDirection: 'N',
                    startPosition: { x: 1, y: 2 },
                },
                {
                    commands: 'MMRMMRMRRM',
                    startDirection: 'E',
                    startPosition: { x: 3, y: 3 },
                },
            ],
            upperRightCorner: { x: 5, y: 5 },
        });
    });
});
