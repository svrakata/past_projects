import layout from './../../views/layout.hbs';
import home from './../../views/home.hbs';
import about from './../../views/about.hbs';
import blog from './../../views/blog.hbs';
import contact from './../../views/contact.hbs';
import notFound from './../../views/not-found.hbs';

const templates = {
    layout,
    home,
    about,
    blog,
    contact,
    notFound,
};

// partials are from earlier design but maybe useful for the blog for example

function viewHandler(viewName, viewData = null) {
    let html = '';
    if (typeof viewName === 'object') {
        const keys = Object.keys(viewName);
        const values = Object.values(viewName);
        const len = keys.length;

        for (let i = 0; i < len; i += 1) {
            html += templates[keys[i]](values[keys[i]]);
        }
    } else {
        html = templates[viewName](viewData);
    }

    return Promise.resolve(html);
}

// this returns all the templates

export default viewHandler;
