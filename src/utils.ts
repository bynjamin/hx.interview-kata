import { MOVES, DIRECTIONS_MAP } from './constants';
import { Coordinates, DIRECTION, COMMAND, RobotData } from './types';

export const getNewPosition = (
    position: Coordinates,
    direction: DIRECTION,
    upperRightCorner: Coordinates
) => {
    const newPosition = {
        x: position.x + MOVES[direction].x,
        y: position.y + MOVES[direction].y,
    };

    if (
        newPosition.x <= upperRightCorner.x &&
        newPosition.y <= upperRightCorner.y &&
        newPosition.x >= 0 &&
        newPosition.y >= 0
    ) {
        return newPosition;
    } else {
        return position; // don't move if out of axis
    }
};

export const getFinalDestination = (
    robotData: RobotData,
    upperRightCorner: Coordinates
) => {
    let direction = robotData.startDirection;
    let position = robotData.startPosition;

    for (const command of robotData.commands) {
        switch (command) {
            case COMMAND.LEFT:
                direction = DIRECTIONS_MAP[direction].left;
                break;
            case COMMAND.RIGHT:
                direction = DIRECTIONS_MAP[direction].right;
                break;
            case COMMAND.MOVE:
                position = getNewPosition(
                    position,
                    direction,
                    upperRightCorner
                );
                break;
            default:
                throw new Error(`Unknown command: ${command}`);
        }
    }

    return { position, direction };
};

export const printResult = (position: Coordinates, direction: DIRECTION) => {
    console.log(`${position.x} ${position.y} ${direction}`);
};
