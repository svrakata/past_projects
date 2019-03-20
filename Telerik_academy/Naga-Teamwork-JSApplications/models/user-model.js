import dataBase from 'database';
import router from 'router';
import errorHandler from 'errorHandler';
import validator from 'validator';
import header from 'header';
import Handlebars from 'handlebars';
import { bookInfoHbars } from 'hbars'
import events from 'events';

class User {
    signUp(data) {
        const name = data[0].value, email = data[1].value, password = data[2].value;
        try {
            validator.validateSignUpForm(data);
            dataBase.createUser(email,password)
                .then(() => {dataBase.writeUserData({username: name, email: email})
                    .catch( err => { errorHandler.error(err)})})
                .then(() => { router.navigo.navigate('/home');})
                .catch(err => {errorHandler.error(err);});
        } catch(err) {
            errorHandler.error(err);
        }
    }
    logIn(data){
        const email = data[0].value, password = data[1].value;
        const validate = new Promise(() => { validator.validateEmail(email);});
        validate
            .then(dataBase.loginUser(email,password)
                .then(() => { router.navigo.navigate('/home'); })
                .catch( err => {errorHandler.error(err);}))
            .catch((err) => {errorHandler.error(err);})
    }
    logOut(){
         dataBase.logOut()
             .then(() => { header.loggedOut(); router.navigo.navigate('/home');})
             .catch((err) => { errorHandler.error(err); })
    }
    addBook(data){
        const obj = {};
        obj['/books/' + data.id] = data;
        dataBase.updateUserData(obj);
    }
    getBooks(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user) {
                dataBase.readUserDataOnce('books')
                    .then(result => {
                        let obj = Object.values(result.val());
                        const $resultInfo = $('#resultsInfo');
                        obj.forEach(element => {
                            const html = Handlebars.templates['user-data'](element);
                            $resultInfo.append(html);
                        });
                        events.userInfoDescription(obj);
                        events.removeBook();
                    })
                    .catch( () => {console.log('there is nothing in the books list')});
            } else {
                //not logged
            }
        });
    }
}

const newUser = new User();
export default newUser;
