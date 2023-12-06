import React from 'react'
import ReactDOM from 'react-dom/client'
import Icons from './Icons.jsx'
import Landing from './Landing.jsx'
import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Icons />
    <Landing />
  </React.StrictMode>,
);
