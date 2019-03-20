/* globals $ toastr */

import viewHandler from 'view-handler';
import dataBase from 'base-data';
import layoutHelpers from 'layout-helpers';
import hbHelpers from 'handlebars-helpers';
import { router } from 'router';


const layoutController = {

    init() {
        hbHelpers.registerHelpers();
        this.toastrOptions();
        return this.filterData()
            .then(() => this.cacheDom())
            .then(() => {
                this.attachEvents();
                this.render();
                this.colapseMenu();
                this.checkUserStatus();
            });
    },

    toastrOptions() {
        toastr.options.positionClass = 'toast-top-left';
        toastr.options.closeButton = true;
        toastr.options.newestOnTop = false;
        toastr.options.showEasing = 'swing';
        toastr.options.hideEasing = 'swing';
        toastr.options.closeEasing = 'swing';
        toastr.options.showMethod = 'slideDown';
        toastr.options.preventDuplicates = true;
        toastr.options.timeOut = 2000;
        toastr.options.extendedTimeOut = 2000;
    },

    cacheDom() {
        return viewHandler('layout', { articles: this.articles, comments: this.comments })
            .then((html) => {
                this.$html = $(html);
                this.$headerSearchForm = this.$html.find('.header-search-form');
                this.$searchFormInput = this.$html.find('.header-search-form__input');
            });
    },

    render() {
        $('body').html(this.$html);
    },

    filterData() {
        return Promise.all([
            dataBase.readDataOnce('/comments'),
            dataBase.readDataOnce('/articles'),
        ])
            .then((data) => {
                if (data[0].val() || data[1].val()) {
                    this.comments = Object.values(data[0].val());
                    this.comments = this.comments.reverse().slice(0, 4);
                    this.articles = Object.values(data[1].val());
                    this.articles = this.articles.reverse().slice(0, 4);
                }
            });
    },

    checkUserStatus() {
        dataBase.checkIfLogged(
            layoutHelpers.loggedControls,
            layoutHelpers.notLoggedControls,
        );
    },

    colapseMenu() {
        $(document).on('click', 'a, span', '.navbar-collapse.in', () => {
            $('.navbar-collapse.in').collapse('hide');
        });
    },

    attachEvents() {
        this.$headerSearchForm.on('submit', this.search.bind(this));
    },

    search(e) {
        e.preventDefault();
        const query = this.$searchFormInput.val();
        if (query.trim().length === 0) {
            toastr.warning('You havn\'t written any search criteria.');
            return;
        }
        this.$searchFormInput.val('');
        router.navigate(`/search?${query}`);
    },

};

export default layoutController;
