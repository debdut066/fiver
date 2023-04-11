import React from "react"
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import Gigs from "../pages/gigs/Gigs"
import MyGig from "../pages/myGigs/MyGig"
import Orders from "../pages/orders/Orders"
import Message from "../pages/message/Message"
import Messages from "../pages/messages/Messages";
import Gig from "../pages/gig/Gig";
import Add from "../pages/add/Add"
import Register from "../pages/register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/gigs",
        element: <Gigs />,
      },
      {
        path: "/myGigs",
        element: <MyGig />,
      },
      {
        path: "/orders",
        element: <Orders />,
      },
      {
        path: "/messages",
        element: <Messages />,
      },
      {
        path: "/message/:id",
        element: <Message />,
      },
      {
        path: "/add",
        element: <Add />,
      },
      {
        path: "/gig/:id",
        element: <Gig />,
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      }
    ]
  }
])

export default router;