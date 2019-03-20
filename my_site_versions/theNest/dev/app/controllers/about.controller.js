/* globals $ */

import viewHandler from 'view-handler';

const aboutController = {

    init() {
        this.cacheDom();
        this.$bucket.hide();
        return this.fetchView()
            .then(() => {
                this.$bucket.hide();
                this.attachEvents();
                this.render();
                this.$bucket.fadeIn(500);
                this.$loader.css('left', '-100%');
            });
    },

    cacheDom() {
        this.$bucket = $('.bucket');
        this.$contentWrapper = $('.content-wrapper');
        this.$loader = $('.loader');
    },

    fetchView() {
        return viewHandler('about')
            .then((html) => {
                this.$html = $(html);
            });
    },

    render() {
        $('.bucket').html(this.$html);
    },

    filterData() {
        // drop this from models
    },

    attachEvents() {

    },

};

export default aboutController;
