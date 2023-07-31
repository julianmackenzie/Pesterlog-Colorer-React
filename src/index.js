import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// uncomment and comment out import below to switch back to browser router
/*
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
*/
import {
  createHashRouter,
  RouterProvider,
} from "react-router-dom";


import Header from './components/Header';
import Process from './pages/Process';
import Tutorial from './pages/Tutorial';
import Version from './components/Version';

// uncomment and comment out function definition below to switch back to browser router
/*
let basename = "/Pesterlog-Colorer-React";  // Assign subdirectory based on if it's on deployment or local

const router = createBrowserRouter([
*/
const router = createHashRouter([
  {
    path: "/",
    element: [<Header key="header" />, <App key="bodyelem" />, <Version key="version" />]
  },
  {
    path: "/pages/Process",
    element: [<Header key="header" />, <Process key="bodyelem" />, <Version key="version" />],
  },
  {
    path: "/pages/Tutorial",
    element: [<Header key="header" />, <Tutorial key="bodyelem" />, <Version key="version" />],
  },
]
// uncomment to switch back to browser router
/*
, {
  basename: basename,
}
*/
);

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
