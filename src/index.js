import React from 'react';
import {createRoot} from 'react-dom/client'; 
import { BrowserRouter as Router } from "react-router-dom";
import MouseContextProvider from "./context/mouse-context";
import "./../node_modules/bootstrap/scss/bootstrap.scss";
import './index.scss';
import '@fortawesome/fontawesome-free/css/all.css'

import App from './pages/App';

const container = document.getElementById('root')
const root = createRoot(container)


root.render(
  <MouseContextProvider>
    <Router>
      <App/> 
    </Router>
  </MouseContextProvider>,
);
