/* globals $ */

import viewHandler from 'view-handler';
import dataBase from 'base-data';

const searchController = {

    init(param, query) {
        this.query = query;
        this.filterData()
            .then(() => this.cacheDom())
            .then(() => this.render());
    },

    cacheDom() {
        return viewHandler('search', { articles: this.result, resultCount: this.resultCount })
            .then((html) => { this.$html = $(html); });
    },

    render() {
        $('.content-bucket').html(this.$html);
    },

    attachEvents() {

    },

    filterData() {
        return dataBase.readDataOnce('/articles')
            .then((data) => {
                this.articles = Object.values(data.val());
                this.result = this.articles.filter(ele => ele.headline.toLowerCase().includes(this.query.toLowerCase()));
                this.resultCount = this.result.length;
                if (this.resultCount === 0) {
                    this.resultCount = `'${this.query}' does not match any article.`;
                } else {
                    this.resultCount = `${this.resultCount} articles found.`;
                }
            });
    },
};

export default searchController;
