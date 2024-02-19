import React from 'react'
import { RouterProvider, createBrowserRouter } from "react-router-dom"
import AppLayout from './AppLayout'





const routes = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />
  }
])
const App = () => {
  return (
    <RouterProvider router={routes} />
  )
}

export default App