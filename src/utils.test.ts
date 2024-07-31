import { DIRECTION } from './types';
import { getFinalDestination, getNewPosition } from './utils';

describe('TEST getNewPosition function', () => {
    test('move to nord correctly', () => {
        const newPosition = getNewPosition({ x: 0, y: 0 }, DIRECTION.NORD, {
            x: 5,
            y: 5,
        });
        expect(newPosition.x).toBe(0);
        expect(newPosition.y).toBe(1);
    });

    test('move to south correctly', () => {
        const newPosition = getNewPosition({ x: 0, y: 1 }, DIRECTION.SOUTH, {
            x: 5,
            y: 5,
        });
        expect(newPosition.x).toBe(0);
        expect(newPosition.y).toBe(0);
    });

    test('move to west correctly', () => {
        const newPosition = getNewPosition({ x: 1, y: 1 }, DIRECTION.WEST, {
            x: 5,
            y: 5,
        });
        expect(newPosition.x).toBe(0);
        expect(newPosition.y).toBe(1);
    });

    test('move to east correctly', () => {
        const newPosition = getNewPosition({ x: 1, y: 1 }, DIRECTION.EAST, {
            x: 5,
            y: 5,
        });
        expect(newPosition.x).toBe(2);
        expect(newPosition.y).toBe(1);
    });

    test('move to south out of axis', () => {
        const newPosition = getNewPosition({ x: 0, y: 0 }, DIRECTION.SOUTH, {
            x: 5,
            y: 5,
        });
        expect(newPosition.x).toBe(0);
        expect(newPosition.y).toBe(0);
    });

    test('move to nord out of axis', () => {
        const newPosition = getNewPosition({ x: 5, y: 5 }, DIRECTION.NORD, {
            x: 5,
            y: 5,
        });
        expect(newPosition.x).toBe(5);
        expect(newPosition.y).toBe(5);
    });
});

describe('TEST getFinalDestination function', () => {
    test('final position calculated correctly', () => {
        const result = getFinalDestination(
            {
                startPosition: { x: 1, y: 1 },
                startDirection: DIRECTION.SOUTH,
                commands: 'MRMMMLMRRMMRMMLMRMLMMMRRM',
            },
            { x: 5, y: 5 }
        );
        expect(result.position.x).toBe(3);
        expect(result.position.y).toBe(4);
        expect(result.direction).toBe(DIRECTION.SOUTH);
    });

    test('throw unknown command error', () => {
        expect(() =>
            getFinalDestination(
                {
                    startPosition: { x: 1, y: 1 },
                    startDirection: DIRECTION.SOUTH,
                    commands: 'MRMMXLMRRMMRMMLMRMLMMMRRM',
                },
                { x: 5, y: 5 }
            )
        ).toThrow('Unknown command: X');
    });
});
