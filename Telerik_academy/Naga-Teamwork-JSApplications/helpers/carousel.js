import $ from 'jquery';
import 'owl-carousel';

const carousel = {
    init: () => {
        const $owl = $('.owl-carousel');
        $owl.owlCarousel({
            loop: true,
            margin: 10,
            autoHeight: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: false,
            responsive: {
                0: {
                    items: 1,
                },
                600: {
                    items: 3,
                },
                1000: {
                    items: 5,
                },
            },
        });
    },
};


export default carousel;

