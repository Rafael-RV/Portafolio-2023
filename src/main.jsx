import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <HashRouter basename="/">
    <React.StrictMode>
      <Routes>
        <Route path="*" element={<App />} />
      </Routes>
    </React.StrictMode>
  </HashRouter>
);