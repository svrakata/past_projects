/* globals $ */

// needs fix ugly AF
// F firebase bug with displayName

const layoutHelpers = {
    loggedControls(user) {
        const username = user.displayName;
        $('.sub-nav__ul').hide();
        $('.sub-nav__user-btn').html(username);
        $('.sub-nav__login-btn').hide();
        $('.sub-nav__user-btn').show();
        $('.sub-nav__logout-btn').show();
        $('.sub-nav__ul').fadeIn(500);
        return '';
    },
    notLoggedControls() {
        $('.sub-nav__ul').hide();
        $('.sub-nav__login-btn').show();
        $('.sub-nav__user-btn').hide();
        $('.sub-nav__logout-btn').hide();
        $('.sub-nav__ul').fadeIn(500);
    },
};

export default layoutHelpers;
