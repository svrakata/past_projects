import Navigo from 'navigo';
import homeController from 'home-controller';
import aboutController from 'about-controller';
import blogController from 'blog-controller';
import contactController from 'contact-controller';
import notFoundController from 'not-found-controller';


const router = new Navigo(null, true, '#');
const initRoutes = () => {
    router
        .on(() => { homeController.init(); })
        .on('home', () => { homeController.init(); })
        .on('about', () => { aboutController.init(); })
        .on('blog', () => { blogController.init(); })
        .on('contact', () => { contactController.init(); })
        .resolve();
    router
        .notFound(() => { notFoundController.init(); })
        .resolve();
};

export { router, initRoutes };
