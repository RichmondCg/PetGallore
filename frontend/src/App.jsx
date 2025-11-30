import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./Components/Navigation.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Pages/About.jsx";
import Booking from "./Pages/Booking.jsx";
import Contact from "./Pages/Contact.jsx";
function App() {
  return (
    <Router>
      <Navigation />
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="*"
            element={
              <div className="p-12 text-center">404 - Page not found</div>
            }
          />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
