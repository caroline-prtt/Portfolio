import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from './components/Navbar/Navbar'
import Routing from './components/Routing/Routing';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <header>
        <Navbar/>
      </header>
      <main>
        <Routing />
      </main>
  </React.StrictMode>
);