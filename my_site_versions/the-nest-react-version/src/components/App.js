import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './layout/Header';
import Home from './pages/Home';
import About from './pages/About';
import Skills from './pages/Skills';
import Work from './pages/Work';
import Contact from './pages/Contact';
import NotFound from './layout/NotFound';

import './App.css';

function App(props) {
    return (
        <React.Fragment>
            <Header></Header>
            <div className='content'>
                <Switch>
                    <Route exact={true} path='/' component={Home}></Route>
                    <Route path='/about' component={About}></Route>
                    <Route path='/skills' component={Skills}></Route>
                    <Route path='/work' component={Work}></Route>
                    <Route path='/contact' component={Contact}></Route>
                    <Route component={NotFound}></Route>
                </Switch>
            </div>
        </React.Fragment>
    )
}

export default App;