import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

import Client from './Client';
import Admin from './components/admin/Admin';

const App = () => {
    return (
        <React.Fragment>
            <Route exact path="/" component={Client} />
            <Route path="/admin" component={Admin} />
        </React.Fragment>
    );
}

ReactDOM.render((<Router><App /></Router>), document.getElementById('root'));
registerServiceWorker();