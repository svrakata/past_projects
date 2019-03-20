import $ from 'jquery';
import jqEasing from 'jquery.easing';
import layoutController from './controllers/layout.controller';
import { initRoutes } from './router';
import skillsAnimation from './helpers/skills-animate';

$(() => {
    layoutController.init()
        .then(() => {
            initRoutes();
            skillsAnimation.init();
        });
});
