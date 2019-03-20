/* globals $ */

import viewHandler from 'view-handler';
import loadingScreen from 'loading-screen';

const homeController = {

    init() {
        this.cacheDom();
        loadingScreen.show();
        return this.fetchView()
            .then(() => {
                this.attachEvents();
                this.render();
                loadingScreen.hide();
            });
    },

    cacheDom() {
        this.$bucket = $('.bucket');
    },

    fetchView() {
        return viewHandler('home')
            .then((html) => {
                this.$html = $(html);
                // cache here anything related to the home only content
            });
    },

    render() {
        this.$bucket.html(this.$html);
    },

    filterData() {
        // drop this from models
    },

    attachEvents() {

    },

};

export default homeController;
