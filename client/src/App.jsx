import React from 'react'
import { RouterProvider } from 'react-router-dom'
import "./globals.css"
import router from "./routes"

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
