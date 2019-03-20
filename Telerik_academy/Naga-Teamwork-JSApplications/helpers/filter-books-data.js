const booksFilter = {
    filteredData: [],
    defaultFilter(data) {
        this.filteredData = [];
        data.map((element) => {
            let title;
            let authors;
            let description;
            let imageLink;
            const infoLink = element.volumeInfo.infoLink;
            const id = element.id;
            const hasProperty = Object.prototype.hasOwnProperty;
            if (hasProperty.call(element.volumeInfo, 'title')) {
                title = element.volumeInfo.title;
            } else {
                title = 'There is no information about the title.';
            }
            if (hasProperty.call(element.volumeInfo, 'authors')) {
                authors = element.volumeInfo.authors;
            } else {
                authors = ['There is no information about the authors.'];
            }
            if (hasProperty.call(element.volumeInfo, 'description')) {
                description = element.volumeInfo.description;
            } else {
                description = 'There is no description provided.';
            }
            if (hasProperty.call(element.volumeInfo, 'imageLinks')) {
                imageLink = element.volumeInfo.imageLinks.thumbnail;
            } else {
                imageLink = '/assets/img/nopreview.png';
            }
            this.filteredData.push({
                title,
                authors,
                description,
                imageLink,
                infoLink,
                id,
            });
        });
    },
};

export default booksFilter;
