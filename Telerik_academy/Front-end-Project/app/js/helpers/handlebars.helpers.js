/* globals Handlebars */

const hbHelpers = {

    compare() {
        Handlebars
            .registerHelper('compare', (par1, par2, options) => {
                if (par1 === par2) {
                    return options.fn(this);
                }
                return options.inverse(this);
            });
    },

    clearOdd() {
        Handlebars
            .registerHelper('clearfix-odd', (par1, par2, options) => {
                if ((par1 - 2) % par2 === 0) {
                    return options.fn(this);
                }
                return options.inverse(this);
            });
    },

    isOdd() {
        Handlebars
            .registerHelper('is-odd', (par1, options) => {
                if ((par1 % 2) === 1) {
                    return options.fn(this);
                }
                return options.inverse(this);
            });
    },

    generateElements() {
        Handlebars
            .registerHelper('generator', (par1, category, options) => {
                let html = '';
                for (let index = 0; index < par1; index += 1) {
                    html += options.fn({ number: index + 1, category, page: index });
                }
                return html;
            });
    },

    subHeaders() {
        Handlebars
            .registerHelper('subheader', (category) => {
                let html = '';
                if (category === 'environment') {
                    html = new Handlebars.SafeString('<h2 class="category-header__h2">The environment - everything that isn\'t me</h2>');
                } else if (category === 'science') {
                    html = new Handlebars.SafeString('<h2 class="category-header__h2">From a grain of sand to the vast galaxy, science uncovers secrets around you and me</h2>');
                } else {
                    html = new Handlebars.SafeString('<h2 class="category-header__h2">New technologies, tech reviews, showcases and other content</h2>');
                }
                return html;
            });
    },

    registerHelpers() {
        hbHelpers.compare();
        hbHelpers.clearOdd();
        hbHelpers.isOdd();
        hbHelpers.generateElements();
        hbHelpers.subHeaders();
    },

};

export default hbHelpers;
