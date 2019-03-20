SystemJS.config({
    transpiler: 'plugin-babel',
    map: {
        // libs
        'plugin-babel': './../libs/script/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': './../libs/script/systemjs-plugin-babel/systemjs-babel-browser.js',
        'firebase': './../libs/script/firebase.js',
        'jquery': './../libs/script/jquery-3.2.1.min.js',
        'handlebars': './../libs/script/handlebars.js',
        'navigo': './../libs/script/navigo.min.js',
        'owl-carousel': './../libs/script/owl.carousel.min.js',
        'bootstrap-js': './../libs/script/bootstrap.min.js',

        // paths
        'firebaseConfig': './../config/firebase.config.js',
        'database': './../database/fb-database.js',
        'user-model': './../models/user-model.js',
        'router': './../config/router.config.js',
        'htmlHandler': './../helpers/html.handler.js',
        'loadingScreen': './../helpers/loading-screen.js',
        'events': './../helpers/events.js',
        'validator': './../helpers/validator.js',
        'errorHandler': './../helpers/error-handler.js',
        'carousel': './../helpers/carousel.js',
        'header': './../helpers/header-changer.js',
        'book': './../models/book-model.js',
        'hbars': './../htmls/hbars-templates/hbars-template.js',
        'booksDatabase': './../database/books-database.js',
        'booksFilter': './../helpers/filter-books-data.js',
        'controller': './../controller/controller.js',


        // app scripts
        'main': './../js/app.js',
        'unit-tests': '../tests/tests.js',
    },
    packages: {
        '/': {
            defaultExtension: 'js',
        },
    },
});

// System.import('main')
// called from index.html to separate test
