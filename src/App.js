import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import LegalNotices from "./pages/LegalNotices";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./styles.css";

export default function App() {
  return (
    <div>

      { /* Barre de navigation */ }

      <header className="sticky-top">

        <Nav />

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/services" element={<Services />} />

          <Route path="/portfolio" element={<Projects />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/mentions-legales" element={<LegalNotices />} />
          
        </Routes>

      </header>

    </div>
  );
}
