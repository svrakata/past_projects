import $ from 'jquery';

const booksDatabase = {
    search: (data) => {
        const url = `https://www.googleapis.com/books/v1/volumes?q=${data}&maxResults=20`;
        return $.get(url);
    },
    // add more google books api features
};

export default booksDatabase;
