import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Electronics from "./pages/Electronics";
import Register from "./pages/register";
import "bootstrap/dist/css/bootstrap.min.css";
import GroceriesEessentials from "./pages/GroceriesEssentials.jsx";
import DetailsPage from "./pages/details/Details.jsx";
import Details from "./pages/details/Details.jsx";
import Home from "./pages/HomePage/Home.jsx";
import Login from './pages/login/login.jsx';


const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "details",
        element: <Details />
      },
      {
        path: "/electronics",
        element: <Electronics />
      },
      {
        path: "/GrocerieEessentials",
        element: <GroceriesEessentials />,
      },
      
    ]
  },

  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },

]);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
