import $ from 'jquery';
import viewHandler from './../helpers/view-handler';

let $html;
let $headerButton;
let $mobileNav;
let $mobileNavAnchor;
let $contentWrapper;
let $background;

const $img = $('<img></img>');


const cacheDom = function cacheDomElements(html) {
    $html = $(html);
    $headerButton = $html.find('.mobile-header__button');
    $mobileNav = $html.siblings('.mobile-nav');
    $mobileNavAnchor = $html.find('.mobile-nav__a');
    $contentWrapper = $('.content-wrapper');
    $background = $('.background');
};

const hamburgerAnimation = function menuButtonAnimation() {
    $headerButton.toggleClass('mobile-header__button--clicked');
};

const showHideMenu = function showAndHideMenuOnClick() {
    const height = $mobileNav.css('height');
    if (height === `${window.innerHeight}px`) {
        $mobileNavAnchor.toggleClass('mobile-nav__a--no-transition');
        $mobileNav.css('height', '0px');
        $mobileNavAnchor
            .css('right', '-40%')
            .css('opacity', '0');
    } else {
        $mobileNavAnchor.toggleClass('mobile-nav__a--no-transition');
        $mobileNav.css('height', '100%');
        $mobileNavAnchor
            .css('right', '0px')
            .css('opacity', '1');
    }
};

const closeMenu = function closeMenuOnClick() {
    $mobileNav.css('height', '0px');
    $mobileNavAnchor
        .css('opacity', '0')
        .toggleClass('mobile-nav__a--no-transition');
    hamburgerAnimation();
};

const activeLink = function activeLink() {
    const { hash } = window.location;
    const $anchor = $(`.main-nav__a[href="${hash}"]`);
    if ($anchor.length) {
        $('.main-nav__a--active').removeClass('main-nav__a--active');
        $anchor.addClass('main-nav__a--active');
    } else {
        $('.main-nav__a--active').removeClass('main-nav__a--active');
    }
};

const backgroundImageUrl = '/assets/mapOfMe.svg';
$img.attr('src', backgroundImageUrl);

const loadBackground = function loadBodyBackground() {
    $background
        .css('background-image', `url(${backgroundImageUrl})`)
        .css('opacity', '1');
};

const events = function attachEventListeners() {
    $headerButton
        .on('click', hamburgerAnimation)
        .on('click', showHideMenu);

    $mobileNavAnchor
        .on('click', closeMenu);

    $(window)
        .on('hashchange', activeLink);

    $img
        .on('load', loadBackground)
        .map((index, element) => {
            if (element.complete) {
                loadBackground();
            }
            return false;
        });
};

const render = function renderDom() {
    $contentWrapper.html($html);
};

const init = function initiate() {
    return viewHandler('layout')
        .then((html) => {
            cacheDom(html);
            events();
            render();
        });
};

export default { init };

