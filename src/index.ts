import { CoordinateTree } from "./model/CoordinateTree";
import { SpaceObject } from "./model/SpaceObject";
import { createSpaceObject } from "./util/http";
import { logger } from "./util/logger";
import { getObjectOperations } from "./util/parse";
import { getGoalCoordinates } from "./util/request";

async function startCreation() {
    try {
        const goalCoords: CoordinateTree = await getGoalCoordinates();
        const objectOperations: SpaceObject[] = getObjectOperations(goalCoords);

        // I did not make requests in parallel here because the api has a low rate limit.
        for (let index = 0; index < objectOperations.length; index++) {
            await createSpaceObject(objectOperations[index]);
        }
    } catch (e) {
        logger.error(e);
    }
}

startCreation();
