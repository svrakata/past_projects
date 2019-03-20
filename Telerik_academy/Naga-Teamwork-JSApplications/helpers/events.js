import $ from 'jquery';
import newUser from 'user-model';
import googleBook from 'book';
import { handleHtml } from 'htmlHandler';
import router from 'router';
import Handlebars from 'handlebars';
import dataBase from 'database';
import booksFilter from 'booksFilter'
import 'bootstrap-js';

const events = {
    signUpForm() {
        const $form = $('#signup');
        $form.on('submit', (e) => {
            e.preventDefault();
            const data = $form.serializeArray();
            newUser.signUp(data);
        });
    },
    logInForm() {
        const $form = $('#logIn');
        $form.on('submit', (e) => {
            e.preventDefault();
            const data = $form.serializeArray();
            newUser.logIn(data);
        });
    },
    collapseMenu: (() => {
        $(document).on('click', 'a, span', '.navbar-collapse.in', () => {
            $('.navbar-collapse.in').collapse('hide');
        });
    })(),
    bookSearch() {
        $('#sfi-button').on('click', () => {
            const $input = $('#sfi-input');
            const data = $input.val();
            $input.val('');
            googleBook.search(data);
        });
    },
    windowScroll: (() => {
        const $returnToTop = $('#return-to-top');
        $(window).on('scroll', () => {
            if ($(window).scrollTop() >= 50) {
                $returnToTop.fadeIn(200);
            } else {
                $returnToTop.fadeOut(200);
            }
        });
        $returnToTop.on('click', () => {
            $('body,html').animate({
                scrollTop: 0,
            }, 500);
        });
    })(),
    headerSearch() {
        $('#header-button').on('click', () => {
            const $headerInput = $('#header-input');
            const $value = $headerInput.val();
            router.navigo.navigate('/search');
            $headerInput.val('');
            googleBook.search($value);
        });
    },
    startScroll() {
        $('body').on('scroll touchmove mousewheel', (e) => {
            e.preventDefault();
            e.stopPropagation();
            return false;
        });
    },
    inSearchDescription() {
        $('#resultsInfo').on('click.displayInfo', '.rid-button', (e) => {
            const $blur = $('#blur');
            const id = $(e.target).attr('index1');
            const obj = booksFilter.filteredData.find(element => element.id === id);
            events.startScroll();
            const html = Handlebars.templates.description(obj);
            $blur.html(html);
            events.descriptionOut();
            $blur.fadeIn();
        });
    },
    userInfoDescription(data) {
        $('#resultsInfo').on('click.displayUserInfo', '.rid-button', (e) => {
            const $blur = $('#blur');
            const id = $(e.target).attr('index1');
            const obj = data.find(element => element.id === id);
            events.startScroll();
            const html = Handlebars.templates.description(obj);
            $blur.html(html);
            events.descriptionOut();
            $blur.fadeIn();
        });
    },
    stopScroll() {
        $('body').off('scroll touchmove mousewheel');
    },
    descriptionOut() {
        $('.description-close').on('click', () => {
            $('#blur').html('').fadeOut();
            events.stopScroll();
        });
    },
    addUserInfo() {
        $('#resultsInfo').on('click.addBook','.add-button',e => {
            const $target = e.target;
            const index = $($target).attr('index2');
            const obj = booksFilter.filteredData.find(element => element.id === index);
            newUser.addBook(obj);
            $($target).html('book added');
            $($target).removeClass('add-button').addClass('added-button');
        });
    },
    removeBook() {
        $('#resultsInfo').on('click.removeItem','.remove-button', (e) => {
            const $target = e.target;
            const id = $($target).attr('index2');
            dataBase.removeNode(id);
            $($target).parents('.col-lg-3').remove();
        });
    },
    postComment() {
        $('#comment-button').on('click.postComment', () => {
            const $commentInput = $('#comment-input');
            const comment = $commentInput.val();
            $commentInput.val('');
            if (comment !== '') {
                googleBook.comment(comment);
            }
        });
    },
    changeTheme() {
        const $themeForm = $('#site-theme');
        $themeForm.on('submit', (e) => {
            e.preventDefault();
            let data = $themeForm.serializeArray();
            data = data[0].value;
            localStorage.setItem('theme', data);
            $('#theme').attr('href', `/assets/css/theme-${data}.css`);
        });
    },
    showComments() {
        const $commentContainer = $('#comment-container');
        const $showComments = $('#show-comments');
        $showComments.on('click', () => {
            if ($commentContainer.css('display') === 'none') {
                $showComments.html('Hide Comments');
                $commentContainer.fadeIn(700);
            } else {
                $showComments.html('Show Comments');
                $commentContainer.fadeOut(700);
            }
        });
    },
};

export default events;
