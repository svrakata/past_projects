/* globals $ */

import layoutController from 'layout-controller';
import { initRoutes } from 'router';
// import newsApiRequesrt from 'scraper';

$(() => {
    // newsApiRequesrt();
    layoutController.init()
        .then(() => initRoutes());
});
