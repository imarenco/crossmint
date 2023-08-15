import { CoordinateTree } from "../model/CoordinateTree";
import { SpaceObject, SpaceObjectType, SPACE } from '../model/SpaceObject';

export function getObjectOperations(goals: CoordinateTree): SpaceObject[] {
    const coordinates: SpaceObject[] = [];

    for (let columnIndex = 0; columnIndex < goals.length; columnIndex++) {
        const column = goals[columnIndex];
        for (let rowIndex = 0; rowIndex < column.length; rowIndex++) {
            const type: string = column[rowIndex];

            if (type !== SPACE) {
                const str = column[rowIndex].split('_');
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