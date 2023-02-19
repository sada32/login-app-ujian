import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import "bootstrap-icons/font/bootstrap-icons.css";
import 'react-toastify/dist/ReactToastify.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from "./App";
import {ToastContainer} from "react-toastify";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <div>
        <App />
        <ToastContainer position="top-center" />
    </div>


);
reportWebVitals();
