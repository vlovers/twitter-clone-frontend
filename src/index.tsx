import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { Provider } from 'react-redux';

import { store } from './store/ducks/store';
import App from './App';
import { theme } from './theme'
import  './style.css'
import {BrowserRouter as Router} from 'react-router-dom';
ReactDOM.render(
    // <React.StrictMode>
        <ThemeProvider theme={theme}>
            <Provider store={store}>
                <Router>
                    <App />
                </Router>
            </Provider>
        </ThemeProvider>,
    // </React.StrictMode>,
    document.getElementById('root')
);
