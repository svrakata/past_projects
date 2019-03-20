/* globals $ Handlebars */

function viewHandler(viewName, viewData = null) {
    return $.get(`views/${viewName}.hbs`)
        .then((view) => {
            const template = Handlebars.compile(view);
            return template(viewData);
        });
}

export default viewHandler;
