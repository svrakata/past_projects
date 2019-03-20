const validator = {
    patterns: {
        password_pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}/,
        user_name_pattern: /\S[_a-zA-Z0-9]{5,10}/,
        email_pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/i,
    },

    messages: {
        invalid_password_message: 'The password must be at least 6 symbols long and contain at least one uppercase, lowercase and a number.',
        invalid_username_message: 'The username must be between 6 and 10 symbols and include only letters, numbers and underscores.',
        invalid_email_messages: 'The email is badly formatted.',
        empty_username_field: 'Please enter username.',
        empty_password_field: 'Please enter password.',
        empty_email_field: 'Please enter email address.',
    },

    username(username) {
        if (username === '') {
            throw this.messages.empty_username_field;
        }
        if (!this.patterns.user_name_pattern.test(username)) {
            throw this.messages.invalid_username_message;
        }
    },

    email(email) {
        if (email === '') {
            throw this.messages.empty_email_field;
        }
        if (!this.patterns.email_pattern.test(email)) {
            throw this.messages.invalid_email_messages;
        }
    },

    password(password) {
        if (password === '') {
            throw this.messages.empty_password_field;
        }

        if (!this.patterns.password_pattern.test(password)) {
            throw this.messages.invalid_password_message;
        }
    },

    registerValidation(username, email, password) {
        return Promise.resolve([
            this.username(username),
            this.email(email),
            this.password(password),
        ]);
    },
};

export default validator;
