/* globals $ */

import viewHandler from 'view-handler';
import dataBase from 'base-data';

const profileController = {

    init() {
        this.filterData()
            .then(() => this.cacheDom())
            .then(() => this.render());
    },

    cacheDom() {
        return viewHandler('profile', this.user)
            .then((html) => { this.$html = $(html); });
    },

    render() {
        $('.content-bucket').html(this.$html);
    },

    attachEvents() {
        // upload
    },

    filterData() {
        return dataBase.readUserData()
            .then((user) => {
                this.user = user.val();
            });
    },
};

export default profileController;
