/* globals $ */

import viewHandler from 'view-handler';
import dataBase from 'base-data';

const homeController = {

    init() {
        this.filterData()
            .then(() => this.cacheDom())
            .then(() => {
                this.render();
                this.initCarousel();
            });
    },

    cacheDom() {
        return viewHandler('home', {
            articles: this.articles,
            carouselArticles: this.carouselArticles,
            mainArticles: this.mainArticles,
            popularArticles: this.popularArticles,
        })
            .then((html) => {
                this.$html = $(html);
                this.$contentBucket = $('.content-bucket');
            });
    },

    render() {
        this.$contentBucket.html(this.$html);
    },

    filterData() {
        return dataBase.readDataOnce('/articles')
            .then((data) => {
                this.articles = Object.values(data.val());
                this.carouselArticles = this.articles.reverse().slice(0, 5);
                this.mainArticles = this.articles.slice(5, 11);
                this.popularArticles = this.articles.filter(ele => ele.commentCount > 2).slice(0, 3);
            });
    },

    initCarousel() {
        $('.owl-carousel').owlCarousel(
            {
                nav: true,
                loop: true,
                margin: 0,
                navText: [$('.small-carousel__right-button'), $('.small-carousel__left-button')],
                responsive: {
                    0: { items: 3 },
                    400: { items: 5 },
                    768: { items: 8 },
                },
            });
    },
};

export default homeController;
