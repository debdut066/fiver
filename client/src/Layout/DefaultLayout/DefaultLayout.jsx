import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";
import "./DefaultLayout.scss";

const DefaultLayout = () => {
  return (
    <div className="wrapper">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default DefaultLayout;
