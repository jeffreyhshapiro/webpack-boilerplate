import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';

import App from '../components/App.js';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/"  component={App} />
        </div>
    </Router>,
    document.getElementById('root')
)