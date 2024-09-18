import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./page/home";
import Login from "./page/login";
import Dashboard from "./page/admin";
import PrivateRoute from "./component/private-route";

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
      element: <PrivateRoute />,
      children: [
        {
          path: "dashboard",
          element: <Dashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

// Single Page Application
// chỉ sử dụng 1 trang duy nhất
// khi chuyển trang => thay đổi cái nội dung bên trong trang web
