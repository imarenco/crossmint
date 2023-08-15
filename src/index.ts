import { createSpaceObject } from "./util/http";
import { logger } from "./util/logger";
import { getObjectOperations } from "./util/parse";
import { getGoalCoordinates } from "./util/request";

async function startCreation() {
    try {
        const goalCoords = await getGoalCoordinates();
        const objectOperations = getObjectOperations(goalCoords);
        for (let index = 0; index < objectOperations.length; index++) {
            await createSpaceObject(objectOperations[index]);
        }
    } catch (e) {
        logger.error(e);
    }
}

startCreation();
