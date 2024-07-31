import { DIRECTION } from './types';

export const DIRECTIONS_MAP = Object.freeze({
    [DIRECTION.NORD]: { left: DIRECTION.WEST, right: DIRECTION.EAST },
    [DIRECTION.EAST]: { left: DIRECTION.NORD, right: DIRECTION.SOUTH },
    [DIRECTION.SOUTH]: { left: DIRECTION.EAST, right: DIRECTION.WEST },
    [DIRECTION.WEST]: { left: DIRECTION.SOUTH, right: DIRECTION.NORD },
});

export const MOVES = Object.freeze({
    [DIRECTION.NORD]: { x: 0, y: 1 },
    [DIRECTION.EAST]: { x: 1, y: 0 },
    [DIRECTION.SOUTH]: { x: 0, y: -1 },
    [DIRECTION.WEST]: { x: -1, y: 0 },
});
