// stole this like a boss
const validator = (() => {
    const PATTERNS = {
        NAME_PATTERN: /[^a-zA-Z]/,
        PASSWORD_PATTERN: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,
        USER_NAME_PATTERN: /\S[_a-zA-Z0-9]{5,10}/,
        EMAIL_PATTERN: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
        RESTRICTED_SYMBOLS_PATTERN: /[<>$@#&]/gm,
    };

    const MESSAGES = {
        INVALID_PASSWORD_MESSAGE: 'The password must be at least 6 symbols long and contain at least one uppercase, lowercase and a number.',
        INVALID_USERNAME_MESSAGE: 'The username must be between 6 and 10 symbols and include only letters, numbers and underscores.',
        INVALID_EMAIL_MESSAGES: 'The email is badly formatted.',
        INVALID_PASSWORD_CONFIRM_MESSAGE: 'Passwords does not match.',
        EMPTY_USERNAME_FIELD: 'Please enter username.',
        EMPTY_PASSWORD_FIELD: 'Please enter password.',
        EMPTY_EMAIL_FIELD: 'Please enter email address.',
    };

    function validateUsername(username) {
        if (username === '') {
            throw MESSAGES.EMPTY_USERNAME_FIELD;
        }
        if (!PATTERNS.USER_NAME_PATTERN.test(username)) {
            throw MESSAGES.INVALID_USERNAME_MESSAGE;
        }
    }

    function validateEmail(email) {
        if (email === '') {
            throw MESSAGES.EMPTY_EMAIL_FIELD;
        }
        if (!PATTERNS.EMAIL_PATTERN.test(email)) {
            throw MESSAGES.INVALID_EMAIL_MESSAGES;
        }
    }

    function confirmPassword(password, passwordConfirm) {
        if (password === '' || passwordConfirm === '') {
            throw MESSAGES.EMPTY_PASSWORD_FIELD;
        }

        if (!PATTERNS.PASSWORD_PATTERN.test(password)) {
            throw MESSAGES.INVALID_PASSWORD_MESSAGE;
        }

        if (password !== passwordConfirm) {
            throw MESSAGES.INVALID_PASSWORD_CONFIRM_MESSAGE;
        }
    }

    function validateSignUpForm(data) {
        const username = data[0].value;
        const email = data[1].value;
        const password = data[2].value;
        const passwordConfirm = data[3].value;

        validateUsername(username);
        validateEmail(email);
        confirmPassword(password, passwordConfirm);
    }
    return {
        validateSignUpForm,
        validateUsername,
        validateEmail,
        confirmPassword,
    };
})();

export default validator;
