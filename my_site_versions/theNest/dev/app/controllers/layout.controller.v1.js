/* globals $ */

import viewHandler from 'view-handler';

const layoutController = {

    init() {
        this.cacheDom();
        return this.fetchView()
            .then(() => {
                this.attachEvents();
                this.render();
            });
    },

    cacheDom() {
        this.$contentWrapper = $('.content-wrapper');
    },

    fetchView() {
        return viewHandler('layout')
            .then((html) => {
                this.$html = $(html);
                this.$headerButton = this.$html.find('.mobile-header__button');
                this.$mobileNav = this.$html.siblings('.mobile-nav');
                this.$mobileNavAnchor = this.$html.find('.mobile-nav__a');
            });
    },

    render() {
        this.$contentWrapper.html(this.$html);
    },

    filterData() {
        // drop this from models
    },

    attachEvents() {
        this.$headerButton
            .on('click', this.hamburgerAnimation.bind(this))
            .on('click', this.showHideMenu.bind(this));

        this.$mobileNavAnchor
            .on('click', this.closeMenu.bind(this));

        $(window)
            .on('hashchange', this.activeLink.bind(this));
    },

    hamburgerAnimation() {
        this.$headerButton.toggleClass('mobile-header__button--clicked');
    },

    showHideMenu() {
        const height = this.$mobileNav.css('height');
        if (height === `${window.innerHeight}px`) {
            this.$mobileNavAnchor.toggleClass('mobile-nav__a--no-transition');
            this.$mobileNav.css('height', '0px');
            this.$mobileNavAnchor
                .css('right', '-40%')
                .css('opacity', '0');
        } else {
            this.$mobileNavAnchor.toggleClass('mobile-nav__a--no-transition');
            this.$mobileNav.css('height', '100%');
            this.$mobileNavAnchor
                .css('right', '0px')
                .css('opacity', '1');
        }
    },

    closeMenu() {
        this.$mobileNav.css('height', '0px');
        this.$mobileNavAnchor
            .css('opacity', '0')
            .toggleClass('mobile-nav__a--no-transition');
        this.hamburgerAnimation();
    },

    activeLink() {
        const hash = window.location.hash;
        const $anchor = $(`.main-nav__a[href="${hash}"]`);
        if ($anchor.length) {
            $('.main-nav__a--active').removeClass('main-nav__a--active');
            $anchor.addClass('main-nav__a--active');
        } else {
            $('.main-nav__a--active').removeClass('main-nav__a--active');
        }
    },

};

export default layoutController;
