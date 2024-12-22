<<<<<<< HEAD
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
=======
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
>>>>>>> a7b0be932c49a4cde828a1338978f055d972656c

import './index.css'; // Tailwind or global styles

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);