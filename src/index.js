import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GymContextProvider } from './Context/gymContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GymContextProvider>
    <App />
    </GymContextProvider>
  </React.StrictMode>
);


