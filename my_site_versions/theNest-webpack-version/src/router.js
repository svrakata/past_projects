import Navigo from 'navigo';
import * as controllers from './controllers/index.js';

const router = new Navigo(null, true, '#');
const initRoutes = () => {
    router
        .on(() => { controllers.home.init(); })
        .on('home', () => { controllers.home.init(); })
        .on('about', () => { controllers.about.init(); })
        .on('skills', () => { controllers.skills.init(); })
        .on('contact', () => { controllers.contact.init(); })
        .on('projects', () => { controllers.projects.init(); })
        .on('blog', () => { controllers.blog.init(); })
        .resolve();
    router
        .notFound(() => { controllers.notFound.init(); })
        .resolve();
};

export { router, initRoutes };
