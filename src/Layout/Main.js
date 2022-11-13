import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import Nav from "../Pages/Shared/Nav/Nav";

const Main = () => {
  return (
    <section>
      <section className="">
        <Nav></Nav>
      </section>
      <Outlet></Outlet>
      <Footer></Footer>
    </section>
  );
};

export default Main;
