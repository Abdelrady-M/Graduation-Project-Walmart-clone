import React from "react";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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
import PersonalCare from "./pages/PersonalCare/PersonalCare.jsx";
import HomeImprovement from "./pages/HomeImprovement/HomeImprovement.jsx";
import AutoTires from "./pages/AutoTires/AutoTires.jsx";
import BabyProducts from "./pages/BabyProducts/BabyProducts.jsx";
import Login from "./pages/login/login.jsx";
import Register from "./pages/register/register.jsx";
import PhoneVerification from "./pages/PhoneVerification/PhoneVerification.jsx";
import NotFound from "./pages/NotFound/NotFound.jsx";
import Toys from "./pages/Toys/Toys.jsx";
import AllDepartments from "./pages/AllDepartments/AllDepartments.jsx";
import AllServices from './pages/AllServices/AllServices.jsx'
import TermsOfUse from "./pages/TermsOfUse/TermsOfUse.jsx";
import Account from "./pages/Account/Account.jsx";
import store from "./store/store.js";


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
        path: "/details",
        element: <Details />,
      },
      {
        path: "/termsOfUse",
        element: <TermsOfUse />,
      },
      {
        path: "/account",
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
        path: "/Home2",
        element: <Home2 />,
      },
      {
        path: "/PatioGarden",
        element: <PatioGarden />,
      },
      {
        path: "/HomeImprovement",
        element: <HomeImprovement />,
      },
      {
        path: "/AutoTires",
        element: <AutoTires />,
      },
      {
        path: "/BabyProducts",
        element: <BabyProducts />,
      },
      {
        path: "/toys",
        element: <Toys />,
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
      { path: "/beauty", element: <Beauty /> },
      { path: "/personalCare", element: <PersonalCare /> },
      { path: "/allDepartments", element: <AllDepartments /> },
      { path: "/allServices", element: <AllServices /> },
    ],
  },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/phoneverification", element: <PhoneVerification /> },
]);
const App = () => {
  return (
    <>
      <Provider store={store}>
        <RouterProvider router={routes} />;
      </Provider>
    </>

  )

};

export default App;
