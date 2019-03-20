/* globals $ */

import viewHandler from 'view-handler';

const notFoundController = {

    init() {
        this.cacheDom()
            .then(() => this.render());
    },

    cacheDom() {
        return viewHandler('not-found')
            .then((html) => this.$html = $(html));
    },

    render() {
        $('.content-bucket').html(this.$html);
    },
};

export default notFoundController;
