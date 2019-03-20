import $ from 'jquery';
import { home } from './index.js';

let $html;
let $skills;

const cacheDom = function cacheDomElements() {
    if ($('.home-header').length === 0) {
        return home.init()
            .then(() => {
                $html = $('html');
                $skills = $('.skills');
            });
    }

    $html = $('html');
    $skills = $('.skills');
    return Promise.resolve();
};

const scroll = function scrollPage() {
    const distance = $skills.offset().top - 110;
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
