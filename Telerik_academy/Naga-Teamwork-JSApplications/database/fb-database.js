import fire from 'firebaseConfig';
import header from 'header';

const dataBase = {
    createUser: (email, password) => firebase.auth().createUserWithEmailAndPassword(email, password),
    writeUserData: (data) => {
        const user = firebase.auth().currentUser;
        const userId = user.uid;
        return fire.database.ref('users/' + userId).set(data);
    },
    readUserDataOnce: (path) => {
        let cPath = path;
        cPath = cPath || '';
        const user = firebase.auth().currentUser;
        let userId;
        if (user !== null) {
            userId = user.uid;
            return fire.database.ref(`users/${userId}/${cPath}`).once('value');
        }
        return Promise.resolve(false);
    },
    readDataOnce: (path) => {
        let cPath = path;
        cPath = cPath || '';
        return fire.database.ref(cPath).once('value');
    },
    updateData: (path, data) => {
        let cPath = path;
        cPath = cPath || '';
        const newPostKey = fire.database.ref().child(cPath).push().key;
        return fire.database.ref(`/${cPath}/${newPostKey}`).update(data);
    },
    updateUserData: (data) => {
        const user = firebase.auth().currentUser;
        if (user === null) {
            throw new Error('You are not logged in');
        }
        const userId = user.uid;
        fire.database.ref('users/' + userId).update(data);
    },
    loginUser:(email, pass) => firebase.auth().signInWithEmailAndPassword(email, pass),
    checkIfLogged: () => {
        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                header.setTheme();
                header.setUserName();
            } else {
                header.setDefaultTheme();
                header.loggedOut();
            }
        });
    },
    logOut: () => firebase.auth().signOut(),
    removeNode: (id) => {
        const user = firebase.auth().currentUser;
        const userId = user.uid;
        fire.database.ref(`users/${userId}/books/${id}`).remove();
    },
};

export default dataBase;



