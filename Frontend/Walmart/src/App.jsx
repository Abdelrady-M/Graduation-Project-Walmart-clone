import React, { useEffect } from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter, useNavigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import Electronics from "./pages/Electronics/Electronics.jsx";
import Grocery from "./pages/Grocery/Grocery.jsx";
import Home2 from "./pages/Home2/Home2.jsx";
import PatioGarden from "./pages/PatioGarden/PatioGarden.jsx";
import Cart from "./pages/Cart/Cart.jsx";
import Checkout from "./pages/Checkout/Checkout.jsx";
import Fashion from "./pages/Fashion/Fashion.jsx";
import Details from "./pages/details/Details.jsx";
import Home from "./pages/HomePage/Home.jsx";
import Beauty from "./pages/Beauty/Beauty.jsx";
import HomeImprovement from "./pages/HomeImprovement/HomeImprovement.jsx";
import AutoTires from "./pages/AutoTires/AutoTires.jsx";
import BabyProducts from "./pages/BabyProducts/BabyProducts.jsx";
import Login from './pages/login/login.jsx';
import Register from './pages/register/register.jsx';
import PhoneVerification from "./pages/PhoneVerification/PhoneVerification.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import TermsOfUs from "./pages/TermsOfUs/TermsOfUs.jsx";
import Account from "./pages/Account/Account.jsx";
import Payment from "./pages/Payment/Payment.jsx";
// import Wishlist from "./pages/Wishlist/WishList.jsx";
import store from "./store/store.js";
// import WishList from "./pages/wishlist/WishList.jsx";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const initialOptions = {
  clientId: "AfV2ZxANOOjrWZ5UnMfXeqetA4nM-RC8MmN8zu6Sym5EBmFa0IE6SfodYWMN0K-6VT8NtH8JRkaBCXjU",
  currency: "USD",
  intent: "capture",
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <Details />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      // {
      //   path: "/Wishlist",
      //   element: <Wishlist />,
      // },
      {
        path: "/termsOfUs",
        element: <TermsOfUs />,
      },
      {
        path: "/account/:id",
        element: <Account />,
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
        path: "/Home",
        element: <Home2 />,
      },
      {
        path: "/PatioGarden",
        element: <PatioGarden />,
      },
      {
        path: "/Home-Improvement",
        element: <HomeImprovement />,
      },
      {
        path: "/Auto&Tires",
        element: <AutoTires />,
      },
      {
        path: "/Baby",
        element: <BabyProducts />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      // {
      //   path: "/wishlist", element: <WishList />
      // },
      { path: "/fashion", element: <Fashion /> },
      { path: "/beauty", element: <Beauty /> },
    ],
  },
  // {
  //   path: '/',
  //   element: !isLoggedIn ? <Home /> : <Navigate to="/" />,
  //   children: [
  //     { path: '/login', element: <Login /> },


  //   ],
  // },

  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/phoneverification", element: <PhoneVerification /> },

]);
const App = () => {
  return (
    <>
      <PayPalScriptProvider options={initialOptions}>
        <Provider store={store}>
          <RouterProvider router={routes} />

        </Provider>
      </PayPalScriptProvider>
    </>

  )

};

export default App;
