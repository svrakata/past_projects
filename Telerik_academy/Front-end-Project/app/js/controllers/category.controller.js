/* globals $ */

import viewHandler from 'view-handler';
import dataBase from 'base-data';

const categoryController = {

    init(param, query) {
        this.firstVisit = false;
        this.filterData(param, query)
            .then(() => this.cacheDom())
            .then(() => {
                this.render();
                this.visited = true;
            });
    },

    cacheDom() {
        if (this.page !== '' && this.articles && !this.firstVisit) {
            return viewHandler('category-article', { articlesFragment: this.articlesFragment })
                .then((html) => {
                    this.$htmlFragment = $(html);
                });
        }
        return viewHandler('category', { category: this.category, pages: this.pages, archive: this.archive })
            .then((html) => {
                this.$html = $(html);
                this.$categoryBucket = this.$html.find('.category-articles__bucket');
                return viewHandler('category-article', { articlesFragment: this.articlesFragment });
            })
            .then((html) => {
                this.$htmlFragment = $(html);
            });
    },

    render() {
        if (this.page !== '' && this.articles && !this.firstVisit) {
            $(this.$categoryBucket).hide();
            $(this.$categoryBucket).html(this.$htmlFragment);
            $(this.$categoryBucket).fadeIn(800);
            $('html, body').animate({ scrollTop: 0 }, 500);
        } else {
            this.$categoryBucket.html(this.$htmlFragment);
            $('.content-bucket').html(this.$html);
            $(this.$categoryBucket).hide();
            $(this.$categoryBucket).fadeIn(800);
            $('html, body').animate({ scrollTop: 0 }, 500);
        }
    },

    filterData(param, query) {
        this.category = param.category;
        this.page = query;
        if (this.category.indexOf('?') !== -1) {
            this.category = this.category.split('?');
            this.category = this.category[0];
            this.firstVisit = true;
        }
        if (this.page !== '' && this.articles) {
            this.articlesFragment = this.articles.slice(this.page * 3, (this.page * 3) + 3);
            return Promise.resolve(this.articlesFragment);
        }
        return dataBase.readDataOnce('/articles')
            .then((data) => {
                this.articles = Object.values(data.val());
                this.articles = this.articles
                    .filter(ele => ele.category.toLowerCase() === this.category);
                this.arLength = this.articles.length;
                this.pages = Math.ceil(this.arLength / 3);
                this.archive = this.articles.slice(this.arLength - 5, this.arLength - 1);
                this.articlesFragment = this.articles.slice(this.page * 3, (this.page * 3) + 3);
            });
    },
};

export default categoryController;
