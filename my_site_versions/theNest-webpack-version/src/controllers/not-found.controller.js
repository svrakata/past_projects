import $ from 'jquery';

import viewHandler from './../helpers/view-handler';

const notFoundController = {

    init() {
        this.cacheDom();
        this.$bucket.hide();
        return this.fetchView()
            .then(() => {
                this.attachEvents();
                this.render();
                this.$bucket.fadeIn(500);
                this.$loader.css('left', '-100%');
            });
    },

    cacheDom() {
        this.$bucket = $('.bucket');
        this.$loader = $('.loader');
        this.$contentWrapper = $('.content-wrapper');
    },

    fetchView() {
        return viewHandler('not-found')
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

export default notFoundController;
