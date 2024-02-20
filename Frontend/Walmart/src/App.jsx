import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
// import Electronics from "./pages/Electronics";
import Login from "./pages/login"
import Register from "./pages/register"

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  }
]);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
