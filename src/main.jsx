import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import { HashRouter, Routes, Route } from 'react-router-dom';

try {
  ReactDOM.createRoot(document.getElementById('root')).render(
    <HashRouter>
      <React.StrictMode>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </React.StrictMode>
    </HashRouter>
  );
} catch (error) {
  console.error('Error during rendering:', error);
}