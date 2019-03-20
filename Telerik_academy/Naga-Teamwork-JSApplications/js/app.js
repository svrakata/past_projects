import router from 'router';
import  loadingScreen  from 'loadingScreen';
import dataBase from 'database';
import carousel from 'helpers/carousel';
import events from 'events';
import $ from 'jquery';

$(document).ready(() => {
    dataBase.checkIfLogged();
    router.initRoutes();
    loadingScreen.swapShow();
    events.headerSearch();
    carousel.init();
    loadingScreen.show();
    loadingScreen.swapHide();
});
