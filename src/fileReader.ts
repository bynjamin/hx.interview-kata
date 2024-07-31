import fs from 'fs';
import { Coordinates, DIRECTION, RobotData } from './types';

const throwInvalidInputError = () => {
    throw new Error('Invalid input');
};

export const getInputFromFile = (fileName: string) => {
    const robotsData: RobotData[] = [];
    const allFileContents = fs.readFileSync(fileName, 'utf-8');
    let lines = allFileContents.split(/\r?\n/);
    lines = lines.map((line) => line.trim());
    if (lines.length < 3) {
        throwInvalidInputError();
    }
    const firstLine = lines[0];
    if (!firstLine.match(/^\d+\s\d+$/g)) {
        throwInvalidInputError();
    }
    const upperRightCornerCoordinatesArray = firstLine.split(/\s/);
    const upperRightCorner: Coordinates = {
        x: Number(upperRightCornerCoordinatesArray[0]),
        y: Number(upperRightCornerCoordinatesArray[1]),
    };

    const robotsInstructions = lines.slice(1);
    robotsInstructions.forEach((line, idx, arr) => {
        if (idx % 2 === 0) {
            if (!line.match(/^\d+\s\d+\s[NSEW]$/g)) {
                throwInvalidInputError();
            }
            const commands = arr[idx + 1];
            if (!commands.match(/^[LRM]+$/g)) {
                throwInvalidInputError();
            }
            const robotPositionArray = line.split(/\s/);
            const robotData: RobotData = {
                startPosition: {
                    x: Number(robotPositionArray[0]),
                    y: Number(robotPositionArray[1]),
                },
                startDirection: robotPositionArray[2] as DIRECTION,
                commands,
            };
            robotsData.push(robotData);
        }
    });

    return { robotsData, upperRightCorner };
};
