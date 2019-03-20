import router from 'router';
import { handleHtml } from 'htmlHandler';
import carousel from 'carousel';
import events from 'events';
import newUser from 'user-model';
import googleBook from 'book';
import loadingScreen from 'loadingScreen';


const controller = {
    home() {
        handleHtml('home', 'content')
            .then(() => {
                carousel.init();
                googleBook.updateComments();
                events.postComment();
                events.showComments();
                loadingScreen.containerShow();
            },
            );
    },
    search() {
        handleHtml('books-search', 'content')
            .then(() => {
                events.bookSearch();
                events.inSearchDescription();
                events.addUserInfo();
                loadingScreen.containerShow();
            },
            );
    },
    signUp() {
        handleHtml('signup', 'content')
            .then(() => {
                events.signUpForm();
                loadingScreen.containerShow();
            },
            );
    },
    logIn() {
        handleHtml('login', 'content')
            .then(() => {
                events.logInForm();
                loadingScreen.containerShow();
            },
            );
    },
    userPage() {
        handleHtml('userpage', 'content')
            .then(() => {
                newUser.getBooks();
                events.changeTheme();
                loadingScreen.containerShow();
            },
            );
    },
    about() {
        handleHtml('about', 'content')
            .then(() => {
                loadingScreen.containerShow();
            },
            );
    },
    logOut() {
        router.navigo.navigate('/home');
        newUser.logOut();
        loadingScreen.containerShow();
    },
    notFound() {
        handleHtml('error', 'content')
            .then(() => {
                loadingScreen.containerShow();
            },
            );
    },
};

export default controller;
