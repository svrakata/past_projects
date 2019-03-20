import $ from 'jquery';
import { home } from './index.js';

let $html;
let $header;
let $projects;

const cacheDom = function cacheDomElements() {
    if ($('.home-header').length === 0) {
        return home.init()
            .then(() => {
                $html = $('html');
                $header = $('.main-header');
                $projects = $('.projects');
            });
    }

    $html = $('html');
    $header = $('.main-header');
    $projects = $('.projects');

    return Promise.resolve();
};

const scroll = function scrollPage() {
    const distance = $projects.offset().top - 110;
    $html.stop().animate({
        scrollTop: distance,
    }, 1000, 'easeOutCirc');
};

const init = function initiate() {
    return cacheDom()
        .then(() => {
            scroll();
        });
};

export default { init };
