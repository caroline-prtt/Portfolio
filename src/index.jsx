import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from "./components/Navbar/Navbar";
import Routing from './components/Routing/Routing';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router basename="/Portfolio/">
      <Navbar/>
      <Routing />
    </Router>
  </React.StrictMode>
);