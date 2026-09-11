<<<<<<< HEAD
import React from "react";
import Admin from "./Admin";
import Hero from "./hero";
import About from "./about";
import Messages from "./messages";
import Contact from "./contact";
import Footer from "./footer";
import PublicContent from "./content";
import Navbar from "./navbar";
import { AboutPage, ContactPage, EventsPage, VisitPage } from "./pages";

const App = () => {
  const currentPath = window.location.pathname.replace(/\/$/, "");

  if (currentPath.endsWith("/admin")) {
    return <Admin />;
  }

  if (currentPath.endsWith("/about")) {
    return <AboutPage />;
  }

  if (currentPath.endsWith("/events")) {
    return <EventsPage />;
  }

  if (currentPath.endsWith("/contact")) {
    return <ContactPage />;
  }

  if (currentPath.endsWith("/visit")) {
    return <VisitPage />;
  }

  return (
    <div>
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="messages"><Messages /></section>
      <section id="contact"><Contact /></section>
      <PublicContent />
      <Footer />
    </div>
  );
};

export default App;



=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Events from "./events";
import AdminDashboard from "./admin-dashboard";
import { ModalProvider, useModal } from "./modal-context";
import ServiceModal from "./service-modal";

import "./index.css";
function App() {
  return (
    <ModalProvider>
      <BrowserRouter basename="/Powerbase-Ministries">
        <Navbar />
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/events" element={<Events />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </BrowserRouter>
      <ModalRenderer />
    </ModalProvider>
  );
}

function ModalRenderer() {
  const { isOpen, service, closeModal } = useModal();
  if (!isOpen || !service) return null;
  return <ServiceModal service={service} onClose={closeModal} />;
}

export default App;

>>>>>>> 583d53d57011b56a51b5fb0e108698aa7ea9b18b
