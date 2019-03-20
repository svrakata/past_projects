/* globals $ */

import viewHandler from 'view-handler';
import loadingScreen from 'loading-screen';

let $html;
let $bucket;
let $titleWord1;
let $titleWord2;
let $titleWord3;

const cacheDom = function cacheDomElements(html) {
    $html = $(html);
    $bucket = $('.bucket');
    $titleWord1 = $html.find('.home-title__word1');
    $titleWord2 = $html.find('.home-title__word2');
    $titleWord3 = $html.find('.home-title__word3');
};

const events = function attachEventListeners() {

};

const render = function renderDom() {
    $bucket.html($html);
};

const moveTitle = function animateTitleWords() {
    $titleWord1
        .css({
            transform: 'translate(80px, 0px)',
            opacity: '1',
        });
    $titleWord2
        .css({
            transform: 'translate(-40px, 0px)',
            opacity: '1',
        });
    $titleWord3
        .css({
            transform: 'translate(40px, 0px)',
            opacity: '1',
        });
};

const init = function initiate() {
    loadingScreen.show();
    return viewHandler('home')
        .then((html) => {
            cacheDom(html);
            events();
            render();
            loadingScreen.hide();
            moveTitle();
        });
};

export default { init };
