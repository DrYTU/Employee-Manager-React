import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.js';
import 'bootstrap/dist/css/bootstrap.min.css';

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App/>)