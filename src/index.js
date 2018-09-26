import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Home from './components/Home';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Link } from 'react-router-dom'


ReactDOM.render(
<BrowserRouter>
    <Home />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
