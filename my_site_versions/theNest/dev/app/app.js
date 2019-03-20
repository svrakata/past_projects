/* globals $ */

import layoutController from 'layout-controller';
import { initRoutes } from 'router';

$(() => {
    $.easing.def = 'easeInOutExpo';
    layoutController.init()
        .then(() => initRoutes());
});
