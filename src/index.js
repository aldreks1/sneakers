import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from "react-dom/client";
import './index.scss';
import 'macro-css';

import App from './App';
const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
);