import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));//getting the div id root from index.html
//renders the html content in app.js
//using syntax <App/>
root.render(
  <React.StrictMode> //safe mode
    <App />
  </React.StrictMode>
);


