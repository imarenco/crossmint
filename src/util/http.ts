import { POLYANET, COMETH, SOLOON, SpaceObject, SpaceObjectType } from "../model/SpaceObject";
import { logger } from "./logger";
import { createCometh, createPolyanets, createSoloon } from "./request";

function delay(time: number) {
    return new Promise(resolve => setTimeout(resolve, time));
}

async function responseResolver(fn: any, req: any, retries: number = 5, time: number = 1000) {
    for (let index = 0; index < retries; index++) {
        try {
            if (index > 0) {
                await delay(time);
            }
            const response = await fn(req);
            return response;
        } catch (e) {
            logger.info(`${index} Retries ${req.type} on row: ${req.row} and column: ${req.column}`)
            if (retries <= index + 1) {
                logger.error(e);
            }
        }
    }
};

export async function createSpaceObject(operation: SpaceObject) {
    switch (operation.type.toString()) {
        case POLYANET:
            await responseResolver(createPolyanets, operation);
            break;
        case SOLOON:
            await responseResolver(createSoloon, operation);
            break;
        case COMETH:
            await responseResolver(createCometh, operation);
            break;
        default:
            break;
    }
}