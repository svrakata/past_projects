import Navigo from 'navigo';
import homeController from 'home-controller';
import notFoundController from 'not-found-controller';
import categoryController from 'category-controller';
import articleController from 'article-controller';
import authController from 'auth-controller';
import profileController from 'profile-controller';
import searchController from 'search-controller';
import aboutController from 'about-controller';

const router = new Navigo(null, true, '#');
const initRoutes = () => {
    router
        .on(() => { homeController.init(); })
        .on('home', () => { homeController.init(); })
        .on('profile', () => { profileController.init(); })
        .on('auth', () => { authController.init(); })
        .on('about', () => { aboutController.init(); })
        .on('search', (param, query) => { searchController.init(null, query); })
        .on('logout', () => { authController.logout(); })
        .on('category/:category', (param, query) => { categoryController.init(param, query); })
        .on('article/:articleId', (param) => { articleController.init(param); })
        .resolve();
    router
        .notFound(() => { notFoundController.init(); })
        .resolve();
};

export { router, initRoutes };
