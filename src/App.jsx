import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import Dashboard from "./page/admin";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "login",
      element: <Login />,
    },
    {
      path: "admin",
      element: <Dashboard />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
