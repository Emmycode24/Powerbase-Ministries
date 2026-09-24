import React, { useEffect, useState } from "react";
import Admin from "./Admin";
import Hero from "./hero";
import About from "./about";
import Messages from "./messages";
import Contact from "./contact";
import Giving, { GivingPage } from "./giving";
import Footer from "./footer";
import PublicContent from "./content";
import Navbar from "./navbar";
import { AboutPage, ContactPage, EventsPage, VisitPage } from "./pages";

const App = () => {
  const [currentPath, setCurrentPath] = useState(() => getCurrentPath());

  useEffect(() => {
    const handleHashChange = () => setCurrentPath(getCurrentPath());
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

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

  if (currentPath.endsWith("/giving")) {
    return (
      <div className="site-shell inner-page min-h-screen">
        <Navbar />
        <GivingPage />
        <Footer />
      </div>
    );
  }

  return (
    <div className="site-shell page-transition">
      <Navbar />
      <section id="hero"><Hero /></section>
      <section id="about"><About /></section>
      <section id="messages"><Messages /></section>
      <section id="contact"><Contact /></section>
      <Giving />
      <PublicContent />
      <Footer />
    </div>
  );
};

const getCurrentPath = () =>
  (window.location.hash.replace(/^#/, "") || window.location.pathname).replace(/\/$/, "");

export default App;



