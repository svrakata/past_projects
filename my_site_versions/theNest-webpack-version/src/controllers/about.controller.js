import $ from 'jquery';
import { home } from './index.js';

let $html;
let $header;

const cacheDom = function cacheDomElements() {
    if ($('.home-header').length === 0) {
        return home.init()
            .then(() => {
                $html = $('html');
                $header = $('.main-header');
            });
    }

    $html = $('html');
    $header = $('.main-header');

    return Promise.resolve();
};

const scroll = function scrollPage() {
    let difference = $header.innerHeight();
    if (window.innerWidth < 768) {
        difference = 0;
    }
    $html.stop().animate({
        scrollTop: (window.innerHeight - difference),
    }, 1000, 'easeOutCirc');
};

const init = function initiate() {
    return cacheDom()
        .then(() => {
            scroll();
        });
};

export default { init };
