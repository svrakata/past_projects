import $ from 'jquery';

import viewHandler from './../helpers/view-handler';
import loadingScreen from './../helpers/loading-screen';

let $html;
let $bucket;
let $homeHeader;
let $homeContent;
let $homeTitle;

const cacheDom = function cacheDomElements(html) {
    $html = $(html);
    $bucket = $('.bucket');
    $homeHeader = $html.find('.home-header');
    $homeContent = $html.find('.home-content');
    $homeTitle = $('.home-title');
};

const calcHeight = function calcHeightBucket() {
    let windowHeight = window.innerHeight - 70;
    if (window.innerWidth < 768) {
        windowHeight = window.innerHeight;
    }
    $homeContent.css('min-height', windowHeight);
};

const events = function attachEventListeners() {
    $(window).on('resize', calcHeight);
};

const render = function renderDom() {
    $bucket.html($html);
};

const scroll = function scrollPage() {
    $homeTitle.css('animation', '0.8s 1.5s fadeUp backwards ease-out');
    $('html').stop().animate({
        scrollTop: 0,
    }, 1500, 'easeOutCirc');
};

const init = function initiate() {
    if ($('.home-content').length) {
        scroll();
        return Promise.resolve();
    }
    return viewHandler({ home: null, about: null, contact: null })
        .then((html) => {
            cacheDom(html);
            events();
            calcHeight();
            render();
            scroll();
        });
};

export default { init };
