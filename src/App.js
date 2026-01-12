import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./navbar";
import Home from "./home";
import About from "./about";
import Contact from "./contact";
import Events from "./events";
import AdminDashboard from "./admin-dashboard";

import "./index.css";
function App() {
  return (
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
  );
}

export default App;

