import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AppLayout from "./AppLayout";
import Electronics from "./pages/Electronics";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
  },
  {
    path: "/electronics",
    element: <Electronics />,
  },
]);
const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
