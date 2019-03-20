import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import firebase from './../../firebase';
import './Admin.css';

import Login from './Login';
import Panel from './Panel';

class Admin extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isSignedIn: false,
            loading: true,
        }
    }

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged((user) => {
            this.setState({ isSignedIn: !!user, userProfile: user, loading: false });
        });
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
        this.logOut();
    }

    logOut = () => {
        firebase.auth().signOut();
    }

    render() {
        return (
            <div className="admin">
                <header className="admin__header">
                    <Link className="admin__back" to="/">Back to site</Link>
                    <h1 className="admin__title">Content managment</h1>
                    {this.state.isSignedIn ?
                        <button className="admin__logout" onClick={this.logOut}>Log out</button> :
                        null}
                </header>

                <div className="admin__container">
                    {this.state.loading ? <h1>Loading</h1> : (this.state.isSignedIn ? <Panel></Panel> : <Login></Login>)}
                </div>

            </div>
        )
    }
}

export default Admin;

{/* <Route path="/admin/login" render={() => <Login props={this.state}></Login>}></Route>
<Route path="/admin/panel" render={() => {
    if (this.state.isSignedIn) {
        return <Panel></Panel>;
    } else {
        return <Redirect to="/admin/login"/>
    }
}}/> */}