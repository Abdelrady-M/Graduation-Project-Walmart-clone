import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Electronics from "./pages/Electronics";
import Register from "./pages/register";
// import "bootstrap/dist/css/bootstrap.min.css";
import Grocery from "./pages/Grocery.jsx";
import Home2 from "./pages/Home2.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Fashion from "./pages/Fashion.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
//import GroceriesEessentials from "./pages/GroceriesEssentials.jsx";
//import DetailsPage from "./pages/details/Details.jsx";
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
        element: <Home />,
      },
      {
        path: "details",
        element: <Details />,
      },
      {
        path: "/electronics",
        element: <Electronics />,
      },
      {
        path: "/Grocery",
        element: <Grocery />,
      },
      {
        path: "/Home2",
        element: <Home2 />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      { path: "/fashion", element: <Fashion /> },
    ],
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
