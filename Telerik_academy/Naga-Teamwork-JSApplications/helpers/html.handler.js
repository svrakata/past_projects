import $ from 'jquery';

function handleHtml(content, target) {
    $('#content').hide();
    return $.get(`htmls/${content}.html`, (data) => {
        $(`#${target}`).html(data);
    });
}

export { handleHtml };
