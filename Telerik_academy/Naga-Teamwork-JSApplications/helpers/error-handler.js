import $ from 'jquery';

const errorHandler = {
    error: (err) => {
        let cErr = err;
        cErr = cErr.message || cErr;
        const $container = $('#error-container');
        $container.children().html(cErr);
        $container.fadeIn(1000);
        setTimeout(() => {
            $container.hide();
        }, 3000);
    },
};

export default errorHandler;
