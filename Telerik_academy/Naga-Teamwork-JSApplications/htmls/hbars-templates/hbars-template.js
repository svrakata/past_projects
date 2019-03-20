import Handlebars from 'handlebars';

const bookInfoHbars = (function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['book-info'] = template({"1":function(container,depth0,helpers,partials,data) {
        return "                <h5>"
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "</h5>\n";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return "<div class=\"col-lg-3 col-sm-6 col-md-4 col-xs-12 \">\n    <div class=\"search-container result-div\" >\n        <div class=\"rid-button\" index1=\""
            + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
            + "\">description</div>\n        <div class=\"add-button\" index2=\""
            + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
            + "\">Want to read</div>\n        <div class=\"search-image-container\">\n            <img src=\""
            + alias4(((helper = (helper = helpers.imageLink || (depth0 != null ? depth0.imageLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageLink","hash":{},"data":data}) : helper)))
            + "\" alt=\"book cover\" class=\"img-responsive\">\n        </div>\n        <div class=\"info-container\">\n            <h4>"
            + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
            + "</h4>\n"
            + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "        </div>\n    </div>\n</div>\n";
    },"useData":true});
})();

const descriptionHbars = (function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['description'] = template({"1":function(container,depth0,helpers,partials,data) {
        return "        <h2>"
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "</h2>\n";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return "<div class=\"description-div\" >\n    <h1>"
            + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
            + "</h1>\n    <hr>\n"
            + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "    <p>\n        "
            + alias4(((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"description","hash":{},"data":data}) : helper)))
            + "\n    </p>\n    <a href=\""
            + alias4(((helper = (helper = helpers.infoLink || (depth0 != null ? depth0.infoLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"infoLink","hash":{},"data":data}) : helper)))
            + "\" class=\"google-button\">Read on Google Books</a>\n    <button class=\"description-close\">X</button>\n</div>\n";
    },"useData":true});
})();

const userDataHbars = (function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['user-data'] = template({"1":function(container,depth0,helpers,partials,data) {
        return "                <h5>"
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "</h5>\n";
    },"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
        var stack1, helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return "<div class=\"col-lg-3 col-sm-6 col-md-4 col-xs-12 \">\n    <div class=\"search-container result-div\" >\n        <div class=\"rid-button\" index1=\""
            + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
            + "\">description</div>\n        <div class=\"remove-button\" index2=\""
            + alias4(((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"id","hash":{},"data":data}) : helper)))
            + "\">X</div>\n        <div class=\"search-image-container\">\n            <img src=\""
            + alias4(((helper = (helper = helpers.imageLink || (depth0 != null ? depth0.imageLink : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"imageLink","hash":{},"data":data}) : helper)))
            + "\" alt=\"book cover\" class=\"img-responsive\">\n        </div>\n        <div class=\"info-container\">\n            <h4>"
            + alias4(((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"title","hash":{},"data":data}) : helper)))
            + "</h4>\n"
            + ((stack1 = helpers.each.call(alias1,(depth0 != null ? depth0.authors : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
            + "        </div>\n    </div>\n</div>";
    },"useData":true});
})();

const commentsHbars = (function() {
    var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
    templates['comments'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
        var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

        return "<div class=\"comment-box\">\n    <div class=\"comment-info\">\n        <span>"
            + alias4(((helper = (helper = helpers.usr || (depth0 != null ? depth0.usr : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"usr","hash":{},"data":data}) : helper)))
            + "</span>\n        <span>"
            + alias4(((helper = (helper = helpers.date || (depth0 != null ? depth0.date : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"date","hash":{},"data":data}) : helper)))
            + "</span>\n    </div>\n    <p>"
            + alias4(((helper = (helper = helpers.comment || (depth0 != null ? depth0.comment : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"comment","hash":{},"data":data}) : helper)))
            + "</p>\n</div>";
    },"useData":true});
})();


export { bookInfoHbars, userDataHbars, descriptionHbars, commentsHbars };
