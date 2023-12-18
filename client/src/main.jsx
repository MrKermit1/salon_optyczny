import React from 'react'
import * as ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './components/App.jsx'
import './components/index.css'
import {NextUIProvider} from "@nextui-org/react";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <NextUIProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
       
    </NextUIProvider>
  </React.StrictMode>,
)
