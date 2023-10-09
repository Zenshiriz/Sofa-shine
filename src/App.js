import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Layout from "./pages/Layout";
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Furnitures from "./pages/Furnitures";
import FurnitureDatails from "./pages/FurnitureDatails";

export default function App() {
  const [windowScroll, setWindowScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 60) {
        // Compare with a number, not a string
        setWindowScroll(true);
      } else {
        setWindowScroll(false);
      }
    });

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, []); // Empty dependency array to run this effect only once
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout windowScroll={windowScroll} />}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contacts" element={<Contact />} />
          <Route path="/furnitures" element={<Furnitures />}/>
          <Route path=":id" exact element={<FurnitureDatails />}/>   
          </Route>
      </Routes>
    </BrowserRouter>
  );
}
