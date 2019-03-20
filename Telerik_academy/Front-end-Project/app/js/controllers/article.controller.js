/* globals $ toastr */

import viewHandler from 'view-handler';
import dataBase from 'base-data';
import date from 'date-helpers';

const articleCategory = {
    init(param) {
        this.filterData(param)
            .then(() => this.cacheDom())
            .then(() => this.render())
            .then(() => this.stateCheck())
            .then(() => this.bindEvents());
    },

    cacheDom(comment) {
        if (comment) {
            return viewHandler('new-comment', comment)
                .then((html) => {
                    this.$comment = $(html);
                });
        }
        return viewHandler('article', {
            article: this.article,
            articleComments: this.articleComments,
            latestComments: this.latestComments,
        })
            .then((html) => {
                this.$html = $(html);
                this.$commentButton = this.$html.find('.article-comment-form__button');
                this.$commentInput = this.$html.find('.article-comment-form__textarea');
                this.$articleComments = this.$html.find('.article-comments');
                this.$countSpan = this.$html.find('.article-item__count-span');
            });
    },

    render() {
        $('.content-bucket').html(this.$html);
        $('html, body').animate({ scrollTop: 0 }, 500);
    },

    filterData(param) {
        this.articleId = param.articleId;
        return Promise.all([
            dataBase.readDataOnce(`/articles/${this.articleId}`),
            dataBase.readDataOnce('/comments'),
        ])
            .then((data) => {
                this.article = data[0].val();
                this.article.category = this.article.category.toLowerCase();
                if (data[1].val()) {
                    this.comments = Object.values(data[1].val());
                    this.articleComments = this.comments
                        .filter(ele => ele.articleId === this.articleId)
                        .reverse();
                    this.comments.reverse();
                    this.latestComments = this.comments.slice(0, 10);
                }
            });
    },

    bindEvents() {
        this.$commentButton.on('click', this.createComment.bind(this));
    },

    createComment() {
        const comment = {};
        comment.text = this.$commentInput.val();
        if (!this.user) {
            toastr.warning('Please log in or register to leave a reply.');
            return;
        }
        if (comment.text.trim().length === 0) {
            toastr.warning('You havn\'t written any comment.');
            return;
        }
        comment.username = this.user.displayName;
        comment.email = this.user.email;
        comment.articleId = this.articleId;
        comment.date = date.currentDate();
        dataBase.updateData('/comments', comment)
            .then(() => dataBase
                .updateChild(`/articles/${this.articleId}`, { commentCount: this.article.commentCount + 1 }))
            .then(() => this.cacheDom(comment))
            .then(() => {
                this.$commentInput.val('');
                const com = +this.$countSpan.html() + 1;
                this.$countSpan.html(com);
                this.$articleComments.prepend(this.$comment);
            });
    },

    stateCheck() {
        this.logged = (user) => {
            this.user = user;
        };

        this.notLogged = () => {
            this.$commentInput.attr('placeholder', 'Please log in or register to leave a reply.');
        };

        return dataBase.checkIfLogged(this.logged, this.notLogged);
    },

};

export default articleCategory;
