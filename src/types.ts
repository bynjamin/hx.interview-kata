export interface Coordinates {
    x: number;
    y: number;
}

export enum DIRECTION {
    NORD = 'N',
    EAST = 'E',
    SOUTH = 'S',
    WEST = 'W',
}

export enum COMMAND {
    LEFT = 'L',
    RIGHT = 'R',
    MOVE = 'M',
}

export interface RobotData {
    startPosition: Coordinates;
    startDirection: DIRECTION;
    commands: string;
}
