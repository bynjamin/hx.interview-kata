import { getInputFromFile } from './src/fileReader';
import { getFinalDestination, printResult } from './src/utils';

const input = getInputFromFile('input.txt');
const results = input.robotsData.map((robotData) =>
    getFinalDestination(robotData, input.upperRightCorner)
);

results.forEach((result) => {
    printResult(result.position, result.direction);
});
