import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Page/Home/Home";
import Login from "./Component/Login/Login";
import Dashboard from "./Component/Dashboatd/Dashboard";
import Add from "./Component/Add/Add";
import See from "./Component/See/See";
import SignUp from "./Component/signUp/SignUp";
import ContextApi from "./ContextApi/ContextApi";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/addTodo",
        element: <Add />,
      },
      {
        path: "/dashboard/seeTodo",
        element: <See />,
      },
    ],
  },
  {
    path: "/signUp",
    element: <SignUp />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="container mx-auto">
      <ContextApi>
        <RouterProvider router={router} />
      </ContextApi>
    </div>
  </React.StrictMode>
);
