/* eslint-disable quote-props */

System.config({
    transpiler: 'plugin-babel',
    baseURL: './../',
    map: {
        'plugin-babel': './node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',
    },
    paths: {
        'navigo': 'node_modules/navigo/lib/navigo.min.js',
        'app': 'app/js/app.js',
        'router': 'app/js/router.js',
        'firebase-config': 'config/firebase.config.js',
        'base-data': 'app/js/data/base-data.js',
        'home-controller': 'app/js/controllers/home.controller.js',
        'layout-controller': 'app/js/controllers/layout.controller.js',
        'not-found-controller': 'app/js/controllers/not-found.controller.js',
        'category-controller': 'app/js/controllers/category.controller.js',
        'article-controller': 'app/js/controllers/article.controller.js',
        'auth-controller': 'app/js/controllers/auth.controller.js',
        'profile-controller': 'app/js/controllers/profile.controller.js',
        'search-controller': 'app/js/controllers/search.controller.js',
        'about-controller': 'app/js/controllers/about.controller.js',
        'scraper': 'app/js/data/scraper.js',
        'view-handler': 'app/js/helpers/view-handler.js',
        'handlebars-helpers': 'app/js/helpers/handlebars.helpers.js',
        'layout-helpers': 'app/js/helpers/layout.helpers.js',
        'validator-helpers': 'app/js/helpers/validator.helpers.js',
        'date-helpers': 'app/js/helpers/date.helpers.js',
    },
    packages: {
        '/': {
            defaultExtension: 'js',
        },
    },
});

