
export const SPACE = 'SPACE';
export const POLYANET = 'POLYANET';
export const SOLOON = 'SOLOON';
export const COMETH = 'COMETH';

export enum SpaceObjectType {
    POLYANET,
    SOLOON,
    COMETH,
    SPACE
}

export type SpaceObject = {
    row: string;
    type: SpaceObjectType;
    column: string;
    specification: string | null | undefined;
};