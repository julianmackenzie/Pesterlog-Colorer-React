import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Header from './components/Header';
import Process from './pages/Process';
import Tutorial from './pages/Tutorial';



const router = createBrowserRouter([
  {
    path: "/",
    element: [<Header />, <App />]
  },
  {
    path: "/pages/Process",
    element: [<Header />, <Process />],
  },
  {
    path: "/pages/Tutorial",
    element: [<Header />, <Tutorial />],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
