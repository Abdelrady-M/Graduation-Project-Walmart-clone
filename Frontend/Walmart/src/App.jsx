import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Electronics from "./pages/Electronics";
import Grocery from "./pages/Grocery.jsx";
import Home2 from "./pages/Home2.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Fashion from "./pages/Fashion.jsx";
import Details from "./pages/details/Details.jsx";
import Home from "./pages/HomePage/Home.jsx";


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


]);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
