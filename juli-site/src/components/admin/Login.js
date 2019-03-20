import React, { Component } from 'react';
import firebase from './../../firebase';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }

    }

    handleEmail = (event) => {
        // validations here

        this.setState({ email: event.target.value });
    }

    handlePassword = (event) => {
        // validations here

        this.setState({ password: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
            .catch((error) => {
                alert(error.message);
            });
    }

    render() {
        return (
            <form className="admin__form" onSubmit={this.handleSubmit}>
                <div className="admin__form-group">
                    <label className="admin__label">email</label>
                    <input className="admin__input" type="email" value={this.state.email} onChange={this.handleEmail} placeholder="ykirilova@gmail.com"/>
                </div>

                <div className="admin__form-group">
                    <label className="admin__label">password</label>
                    <input className="admin__input" type="password" value={this.state.password} onChange={this.handlePassword} />
                </div>

                <button className="admin__login" type="submit">enter sandman</button>
            </form>
        )
    }
}

export default Login;