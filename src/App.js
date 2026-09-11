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
  const currentPath = (window.location.hash.replace(/^#/, "") || window.location.pathname).replace(/\/$/, "");

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



