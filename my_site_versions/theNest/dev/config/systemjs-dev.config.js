/* eslint-disable quote-props */

System.config({
    transpiler: 'plugin-babel',
    baseURL: '/',
    paths: {
        'plugin-babel': 'libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'libs/systemjs-plugin-babel/systemjs-babel-browser.js',
        'navigo': 'libs/navigo/lib/navigo.min.js',
        'app': 'app/app.js',
        'router': 'app/router.js',
        'firebase-config': 'app/config/firebase.config.js',
        'home-controller': 'app/controllers/home.controller.js',
        'layout-controller': 'app/controllers/layout.controller.js',
        'not-found-controller': '/app/controllers/not-found.controller.js',
        'contact-controller': 'app/controllers/contact.controller.js',
        'blog-controller': 'app/controllers/blog.controller.js',
        'about-controller': 'app/controllers/about.controller.js',
        'scraper': 'app/data/scraper.js',
        'view-handler': 'app/helpers/view-handler.js',
        'loading-screen': 'app/helpers/loading-screen.js',
    },
    packages: {
        '/': {
            defaultExtension: 'js',
        },
    },
});
