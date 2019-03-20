import Navigo from 'navigo';
import controller from 'controller';

const router = {
    navigo: (() => new Navigo(null, true, '#'))(),
    initRoutes() {
        this.navigo
            .on(() => { controller.home(); })
            .on('home', () => { controller.home(); })
            .on('search', () => { controller.search(); })
            .on('signup', () => { controller.signUp(); })
            .on('login', () => { controller.logIn(); })
            .on('userpage', () => { controller.userPage(); })
            .on('about', () => { controller.about(); })
            .on('logout', () => { controller.logOut(); })
            .resolve();
        this.navigo.notFound(() => { controller.notFound(); }).resolve();
    },
};

export default router;