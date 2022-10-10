import { useState } from "react";
import { Routes, Route, Link } from "react-router-dom";
// import { Home, About, Services, Faq, Contact } from './pages'
// import { Home } from "./pages";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<p>asdad</p>} />
      {/* <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="faq" element={<Faq />} />
      <Route path="contact" element={<Contact />} /> */}
    </Routes>
  );
}

export default App;
