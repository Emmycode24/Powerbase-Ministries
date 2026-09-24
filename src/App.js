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

  useEffect(() => {
    const shell = document.querySelector(".site-shell");
    if (!shell) return undefined;

    const revealTargets = shell.querySelectorAll(
      ".scroll-reveal, .site-shell section, .site-shell > main, .site-shell > .page-hero, .site-shell > .route-intro, .site-shell > footer"
    );
    if (!revealTargets.length) return undefined;

    revealTargets.forEach((target) => target.classList.add("scroll-reveal"));

    const reveal = (target) => target.classList.add("is-visible");
    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver((entries, currentObserver) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            reveal(entry.target);
            currentObserver.unobserve(entry.target);
          });
        }, { threshold: 0.18, rootMargin: "0px 0px -12%" })
      : null;

    revealTargets.forEach((target) => observer ? observer.observe(target) : reveal(target));
    const fallback = window.setTimeout(() => revealTargets.forEach(reveal), 1400);

    return () => {
      window.clearTimeout(fallback);
      observer?.disconnect();
    };
  }, [currentPath]);

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



