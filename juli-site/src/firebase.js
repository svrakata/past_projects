import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const config = {
    apiKey: "AIzaSyD91kmRr54j02PTXenr45ic9zHRq454Y8Q",
    authDomain: "juli-site-api.firebaseapp.com",
    databaseURL: "https://juli-site-api.firebaseio.com",
    projectId: "juli-site-api",
    storageBucket: "juli-site-api.appspot.com",
    messagingSenderId: "546724026778"
};

export default firebase.initializeApp(config);

