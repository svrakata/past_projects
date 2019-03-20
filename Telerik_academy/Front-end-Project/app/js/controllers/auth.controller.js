/* globals $ toastr */

import viewHandler from 'view-handler';
import dataBase from 'base-data';
import validator from 'validator-helpers';
import { router } from 'router';


const authController = {

    init() {
        this.cacheDom()
            .then(() => {
                this.attachEvents();
                this.render();
            });
    },

    cacheDom() {
        return viewHandler('auth')
            .then((html) => {
                this.$html = $(html);
                this.$showReg = this.$html.find('.auth-forms__register-btn');
                this.$showLog = this.$html.find('.auth-forms__login-btn');
                this.$loginForm = this.$html.find('.login-form');
                this.$registerForm = this.$html.find('.register-form');
            });
    },

    attachEvents() {
        this.$showReg.on('click', () => {
            this.$loginForm.hide();
            this.$registerForm.show();
        });

        this.$showLog.on('click', () => {
            this.$registerForm.hide();
            this.$loginForm.show();
        });

        this.$loginForm.on('submit', this.login.bind(this));
        this.$registerForm.on('submit', this.register.bind(this));
    },

    render() {
        $('.content-bucket').html(this.$html);
    },

    register(e) {
        e.preventDefault();
        const data = this.$registerForm.serializeArray();
        let usr;
        const validate = new Promise((resolve) => {
            validator.username(data[0].value);
            validator.email(data[1].value);
            validator.password(data[2].value);
            resolve();
        });
        validate
            .then(() => dataBase.register(data[1].value, data[2].value))
            .then((user) => {
                usr = { uid: user.uid, username: data[0].value, email: data[1].value, imageUrl: '/assets/images/default-profile.png' };
                $('.sub-nav__user-btn').html(usr.username);
                return user.updateProfile({ displayName: usr.username });
            })
            .then(() => dataBase.updateUserCollection(usr, usr.uid))
            .then(() => {
                toastr.success('Registration successful!');
                router.navigate('/home');
            })
            .catch((er) => {
                const msg = er.message || er;
                toastr.error(msg);
            });
    },

    login(e) {
        e.preventDefault();
        const data = this.$loginForm.serializeArray();
        const validate = new Promise((resolve) => {
            validator.email(data[0].value);
            resolve();
        });
        validate
            .then(() => dataBase.login(data[0].value, data[1].value))
            .then(() => {
                toastr.success('Logged in successfully!');
                router.navigate('/home');
            })
            .catch((er) => {
                const msg = er.message || er;
                toastr.error(msg);
            });
    },

    logout() {
        dataBase.logOut()
            .then(() => {
                toastr.success('Logged out successfully!');
                router.navigate('/home');
            });
    },

};

export default authController;
