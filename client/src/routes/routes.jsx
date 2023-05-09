import React, { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
// import Home from "../pages/home/Home";
// import Gigs from "../pages/gigs/Gigs"
// import MyGig from "../pages/myGigs/MyGig"
// import Orders from "../pages/orders/Orders"
// import Message from "../pages/message/Message"
// import Messages from "../pages/messages/Messages";
// import Gig from "../pages/gig/Gig";
// import Add from "../pages/add/Add"
// import Register from "../pages/register/Register";

const Home = lazy(()=> import("../pages/home/Home"));
const Login = lazy(()=> import("../pages/login/Login"));
const Gigs = lazy(()=> import("../pages/gigs/Gigs"));
const MyGig = lazy(()=> import("../pages/myGigs/MyGig"));
const Orders = lazy(()=> import("../pages/orders/Orders"));
const Message = lazy(()=> import("../pages/message/Message"));
const Messages = lazy(()=> import("../pages/messages/Messages"));
const Gig = lazy(()=> import("../pages/gig/Gig"));
const Add = lazy(()=> import("../pages/add/Add"));
const Register = lazy(()=> import("../pages/register/Register"));


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Home />
          </Suspense>,
      },
      {
        path: "/gigs",
        element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Gigs />
          </Suspense>,
      },
      {
        path: "/myGigs",
        element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <MyGig />
          </Suspense>,
        },
      {
        path: "/orders",
        element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Orders />
          </Suspense>,
      },
      {
        path: "/messages",
        element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Messages />
          </Suspense>,
      },
      {
        path: "/message/:id",
        element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Message />
          </Suspense>,
      },
      {
        path: "/add",
        element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Add />
          </Suspense>,
      },
      {
        path: "/gig/:id",
        element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Gig />
          </Suspense>,
      },
      {
        path: "/login",
        element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Login />
          </Suspense>
      },
      {
        path: "/register",
        element: 
          <Suspense fallback={<h1>Loading...</h1>}>
            <Register />
          </Suspense>
      }
    ]
  }
])

export default router;