import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom'

import config from 'react-global-configuration';


config.set({
    base_url: "https://ticketbooking-12.appspot.com",
    local_url: "http://192.168.0.103:8080"
});

ReactDOM.render(
<BrowserRouter>
    <Home />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
