<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
=======
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { EventsProvider } from "./use-events";
import "./index.css";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <EventsProvider>
    <App />
  </EventsProvider>
);
>>>>>>> 583d53d57011b56a51b5fb0e108698aa7ea9b18b
