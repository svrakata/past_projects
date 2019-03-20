/* globals $ */

import dataBase from 'base-data';

const newsApiRequest = () => {
    const url = 'https://content.guardianapis.com/search?api-key=f93068f8-2f5e-43b5-8f2b-b76905e4ab38&page=2&page-size=200&show-fields=headline,trailText,thumbnail,bodyText';
    $.get(url)
        .then((data) => {
            const arr = [];
            const articles = data.response.results
                .filter(item =>
                    item.sectionId === 'environment'
                    || item.sectionId === 'science'
                    || item.sectionId === 'technology');
            articles.forEach((elem) => {
                const articleData = {
                    category: elem.sectionName,
                    text: elem.fields.bodyText,
                    headline: elem.fields.headline,
                    thumbnail: elem.fields.thumbnail || '/assets/images/default-img.png',
                    trailText: elem.fields.trailText,
                    date: elem.webPublicationDate.split('T')[0],
                    commentCount: 0,
                };
                arr.push(articleData);
            });
            dataBase.readDataOnce('/articles')
                .then((e) => {
                    if (e.val() === null) {
                        arr.forEach((ele) => {
                            dataBase.updateData('/articles', ele);
                        });
                    } else {
                        let currentArticles = e.val();
                        currentArticles = Object.values(currentArticles);
                        arr.forEach((ele) => {
                            const chep = currentArticles.find(p => ele.headline === p.headline);
                            if (!chep) {
                                dataBase.updateData('/articles', ele);
                            }
                        });
                    }
                });
        });
};

export default newsApiRequest;
