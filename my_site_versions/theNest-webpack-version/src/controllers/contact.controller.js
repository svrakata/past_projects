import $ from 'jquery';
import { home } from './index.js';


const contactController = {

    init() {
        return this.cacheDom()
            .then(() => {
                this.scroll();
            });
    },

    cacheDom() {
        this.$html = $('html');
        if ($('.home-header').length === 0) {
            home.init();
            return Promise.resolve();
        }
        return Promise.resolve();
    },

    fetchView() {

    },

    render() {

    },

    filterData() {
        // drop this from models
    },

    attachEvents() {

    },

    scroll() {
        this.$contactSection = $('.contact');
        const distance = this.$contactSection.offset().top - 130;
        this.$html.stop().animate({
            scrollTop: distance,
        }, 1500, 'easeOutCirc');
    },

};

export default contactController;
