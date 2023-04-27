import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import Router from './Routers/Router.jsx';
import { DataProvider } from './Context/Context.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <DataProvider>
      <RouterProvider router={Router} />
    </DataProvider>
  </React.StrictMode>,
)
