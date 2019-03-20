import $ from 'jquery';

let $bucket;
let $loader;

const cache = function cacheDom() {
    $bucket = $('.bucket');
    $loader = $('.loader');
};


const show = function showLoadingScreen() {
    cache();
    $bucket.hide();
    $loader.css('left', '0px');
};

const hide = function hideLoadingScreen() {
    cache();
    $bucket.fadeIn(500);
    $loader.css('left', '-120%');
};

export default { cache, hide, show };
