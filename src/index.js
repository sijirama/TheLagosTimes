import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import LoadingStateProvider from './context/loading.js'
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
    <React.StrictMode>
    <LoadingStateProvider>
        <App />
    </LoadingStateProvider>
    </React.StrictMode>
);

