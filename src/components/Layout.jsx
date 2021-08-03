import React from "react";
import Navbar from "./Navbar";
import Footer from "./footer";

import "normalize.css";
import "../assets/css/main.css";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default Layout;
