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

