import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout(props) {
  const { windowScroll } = props;
  return (
    <>
      <Header windowScroll={windowScroll} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
