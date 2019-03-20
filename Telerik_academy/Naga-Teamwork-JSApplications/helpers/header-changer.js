import $ from 'jquery';
import dataBase from 'database';

const header = {
    logged() {
        $('#headerSignup, #headerLogin').hide();
        $('#headerLogout, #headerUser').fadeIn(600);
    },
    loggedOut() {
        $('#headerLogout, #headerUser').hide();
        $('#headerSignup, #headerLogin').fadeIn(600);
    },
    setUserName() {
        dataBase.readUserDataOnce().then((data) => {
            const userdata = data.val();
            localStorage.setItem('currentUser', userdata.username);
            $('#usernameSpan').text(` ${userdata.username}'s books`);
        },
        ).then(header.logged);
    },
    setTheme() {
        const data = localStorage.getItem('theme');
        $('#theme').attr('href', `/assets/css/theme-${data}.css`);
    },
    setDefaultTheme() {
        $('#theme').attr('href', '/assets/css/theme-default.css');
    },
};

export default header;
