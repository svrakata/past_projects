/* globals firebase */
import config from 'firebase-config';

firebase.initializeApp(config);


const dataBase = {
    register: (email, password) =>
        firebase.auth().createUserWithEmailAndPassword(email, password),

    readUserData() {
        const user = firebase.auth().currentUser;
        let userId;
        if (user !== null) {
            userId = user.uid;
            return firebase.database().ref(`users/${userId}`).once('value');
        }
        return Promise.reject('You\'re not logged!');
    },

    readDataOnce(path = '') { return firebase.database().ref(path).once('value'); },

    updateChild(path = '', data) { return firebase.database().ref(`/${path}`).update(data); },

    updateData(path = '', data) {
        const newPostKey = firebase.database().ref().child(path).push().key;
        const upload = data;
        upload.url = newPostKey;
        return firebase.database().ref(`/${path}/${newPostKey}`).update(data);
    },

    updateUserCollection(data, uid) {
        return firebase.database().ref(`users/${uid}`).update(data);
    },

    login(email, pass) { return firebase.auth().signInWithEmailAndPassword(email, pass); },

    checkIfLogged(loggedCallback, notLoggedCallback) {
        return firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                return loggedCallback(user);
            }
            return notLoggedCallback();
        });
    },

    logOut() { return firebase.auth().signOut(); },

};

export default dataBase;
