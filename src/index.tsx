

import "./main.scss";


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      {/* <Provider> */}
        <App />
      {/* </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);

