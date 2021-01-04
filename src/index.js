import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.jsx';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import Store from "./redux_store/store";
import { Provider } from "react-redux";

ReactDOM.render(
    <React.StrictMode>
        <Provider store={Store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);

reportWebVitals();
