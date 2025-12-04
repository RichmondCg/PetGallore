import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navigation from "./Components/Navigation.jsx";
import Hero from "./Components/Hero.jsx";
import About from "./Pages/About.jsx";
import Booking from "./Pages/Booking.jsx";
import Contact from "./Pages/Contact.jsx";
import SignUp from "./Pages/SignUp.jsx";
import Login from "./Pages/Login.jsx";
import AdminPanel from "./Pages/AdminPages/AdminPanel.jsx";
import AppointmentDetails from "./Components/AdminPanel/AppointmentDetails.jsx";

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

function AppContent() {
  const location = useLocation();
  const hideNav =
    location.pathname.startsWith("/admin-panel") ||
    location.pathname.startsWith("/login");

  return (
    <>
      {!hideNav && <Navigation />}
      <main className="min-h-screen">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/about" element={<About />} />
          <Route path="/booking" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/admin-panel/*" element={<AdminPanel />} />
          <Route
            path="/appointment-details/:id"
            element={<AppointmentDetails />}
          />
          <Route
            path="*"
            element={
              <div className="p-12 text-center">404 - Page not found</div>
            }
          />
        </Routes>
      </main>
    </>
  );
}

export default App;
