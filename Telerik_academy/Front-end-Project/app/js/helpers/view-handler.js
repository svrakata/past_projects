/* globals $ Handlebars */

function viewHandler(viewName, viewData = null) {
    return $.get(`views/${viewName}.handlebars`)
        .then((view) => {
            const template = Handlebars.compile(view);
            return template(viewData);
        });
}

export default viewHandler;
