import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Electronics from "./pages/Electronics";
import Login from "./pages/login";
import Register from "./pages/register";
import GroceriesEessentials from "./pages/GroceriesEssentials.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  { path: "/electronics", element: <Electronics /> },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/GrocerieEessentials",
    element: <GroceriesEessentials />,
  },
]);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
