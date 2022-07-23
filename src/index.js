import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'
// HashRouter is needed instead if BroswerRouter for github pages
import {HashRouter} from 'react-router-dom'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
    
  </React.StrictMode>
);


