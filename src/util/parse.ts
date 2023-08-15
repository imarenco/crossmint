import { CoordinateTree } from "../model/CoordinateTree";
import { SpaceObject, SpaceObjectType, SPACE } from '../model/SpaceObject';

export function getObjectOperations(goals: CoordinateTree): SpaceObject[] {
    const coordinates: SpaceObject[] = [];

    for (let rowIndex = 0; rowIndex < goals.length; rowIndex++) {
        const row = goals[rowIndex];
        for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
            const type: string = row[columnIndex];

            if (type !== SPACE) {
                const str = row[columnIndex].split('_');
                coordinates.push({
                    column: columnIndex.toString(),
                    row: rowIndex.toString(),
                    specification: str.length > 1 ? str?.[0]?.toLowerCase() : null,
                    type: (str.length > 1 ? str[1] : str[0]) as unknown as SpaceObjectType,
                });
            }
        }
    }

    return coordinates;
}