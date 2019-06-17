import '@babel/polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Home from './pages/Welcome';

ReactDOM.render(
    <Home name="Use"/>,
    document.getElementById('app')
)
