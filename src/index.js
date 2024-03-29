import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from "react-router-dom";
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <App />}/>
      <Route path="/:page" element={ <App />}/>
    </Routes>
  </BrowserRouter>
);
