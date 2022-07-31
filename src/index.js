import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app';
import navbar from './componets/nav';
import "./style.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from './componets/CartWidget';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

