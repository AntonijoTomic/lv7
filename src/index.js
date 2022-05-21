import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import Ucitaj from './Ucitaj';
import Add from './dodavanje';

const root = ReactDOMClient.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
<Routes>
<Route path="/" element={<App />} />
<Route path="dodaj" element={<Add />} />
</Routes>
</BrowserRouter>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

