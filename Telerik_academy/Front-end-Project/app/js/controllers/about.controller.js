/* globals $ */

import viewHandler from 'view-handler';

const aboutController = {

    init() {
        this.cacheDom()
            .then(() => this.render());
    },

    cacheDom() {
        return viewHandler('about', this.user)
            .then((html) => { this.$html = $(html); });
    },

    render() {
        $('.content-bucket').html(this.$html);
        $('html, body').animate({ scrollTop: 0 }, 500);
    },

};

export default aboutController;
