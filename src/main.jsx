import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";

import Home from "./components/Home.jsx";
import AutomateTask from "./components/AutomateTask.jsx";
import CompleteTask from "./components/CompleteTask.jsx";
import Login from "./components/Login.jsx";
import Signup from "./components/Signup.jsx";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "home",
//         element: <Home />,
//         children: [
//           {
//             path: "automate-task",
//             element: <AutomateTask />,
//           },
//           {
//             path: "complete-task",
//             element: <CompleteTask />,
//           },
//         ],
//       },

//       {
//         path: "sign-up",
//         element: <Signup />,
//       },
//     ],
//   },
// ]);


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App/>
  </React.StrictMode>
);
