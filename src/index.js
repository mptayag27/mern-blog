import React from 'react';
import ReactDOM from '/Users/mptay/Desktop/myblog/node_modules/@types/react-dom/client';
import '/Users/mptay/Desktop/myblog/src/index.css';
import App from '/Users/mptay/Desktop/myblog/src/App';
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
