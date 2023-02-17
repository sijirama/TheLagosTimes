import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoadingStateProvider from './context/loading.js'
import App from './App';
import {BrowserRouter as Router} from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    //<React.StrictMode>
    <LoadingStateProvider>
    <Router>
        <App />
    </Router>
    </LoadingStateProvider>
    //</React.StrictMode>
);

