import React, { lazy, Suspense } from "react"
import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../Layout/DefaultLayout/DefaultLayout";
import HomeLoader from "../components/homeLoader/homeLoader";

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
const Pay = lazy(()=> import("../pages/pay/Pay"));
const Success = lazy(() => import("../pages/success/Success"))


const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    children: [
      {
        path: "/",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <Home />
          </Suspense>,
      },
      {
        path: "/gigs",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <Gigs />
          </Suspense>,
      },
      {
        path: "/myGigs",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <MyGig />
          </Suspense>,
        },
      {
        path: "/orders",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <Orders />
          </Suspense>,
      },
      {
        path: "/messages",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <Messages />
          </Suspense>,
      },
      {
        path: "/message/:id",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <Message />
          </Suspense>,
      },
      {
        path: "/add",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <Add />
          </Suspense>,
      },
      {
        path: "/gig/:id",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <Gig />
          </Suspense>,
      },
      {
        path: "/login",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <Login />
          </Suspense>
      },
      {
        path: "/register",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <Register />
          </Suspense>
      },
      {
        path: "/pay/:id",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <Pay />
          </Suspense>
      },
      {
        path: "/success",
        element: 
          <Suspense fallback={<HomeLoader/>}>
            <Success />
          </Suspense>
      }
    ]
  }
])

export default router;