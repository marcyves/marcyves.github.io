import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { HashRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";

import Home from "./pages/Home";
import Cours from "./pages/Cours";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Formations from "./pages/Formations";
import Formation from "./pages/Formation";
import Platform from "./pages/Platform";
import Error from "./pages/Error404";

import Footer from "./components/Footer";
import Header from "./components/Header";

import "./index.css";

const navLink = [
  { name: "Formations", href: "/formations/" },
  { name: "A Propos", href: "/a-propos" },
  { name: "Contact", href: "/contact" },
];

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
    <Header navLink={navLink}/>
      <main>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/formations/" element={<Formations />} />
          <Route path="/formation/:id" element={<Formation />} />
          <Route path="/plateforme/:id" element={<Platform />} />
          <Route path="/cours/:id" element={<Cours />} />
          <Route path="/perdu" element={<Error type="default" />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/perdu" replace />} />
        </Routes>
      </main>
      <Footer />
    </HashRouter>
  </StrictMode>
);
