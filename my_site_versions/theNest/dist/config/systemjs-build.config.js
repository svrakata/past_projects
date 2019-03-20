/* eslint-disable quote-props */

System.config({
    transpiler: 'plugin-babel',
    baseURL: 'theNest',
    paths: {
        'plugin-babel': 'dev/libs/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': 'dev/libs/systemjs-plugin-babel/systemjs-babel-browser.js',
        'navigo': 'dev/libs/navigo/lib/navigo.min.js',
        'app': 'dev/app/app.js',
        'router': 'dev/app/router.js',
        'firebase-config': 'dev/app/config/firebase.config.js',
        'base-data': 'dev/app/data/base-data.js',
        'home-controller': 'dev/app/controllers/home.controller.js',
        'layout-controller': 'dev/app/controllers/layout.controller.js',
        'not-found-controller': 'dev/app/controllers/not-found.controller.js',
        'contact-controller': 'dev/app/controllers/contact.controller.js',
        'blog-controller': 'dev/app/controllers/blog.controller.js',
        'about-controller': 'dev/app/controllers/about.controller.js',
        'scraper': 'dev/app/data/scraper.js',
        'view-handler': 'dev/app/helpers/view-handler.js',
        'loading-screen': 'dev/app/helpers/loading-screen.js',
    },
    packages: {
        '/': {
            defaultExtension: 'js',
        },
    },
});