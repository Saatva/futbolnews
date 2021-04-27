import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { MattressesProvider } from './context/mattressesContext';

ReactDOM.render(
    <MattressesProvider>
        <App />
    </MattressesProvider>,
    document.getElementById('root')
);