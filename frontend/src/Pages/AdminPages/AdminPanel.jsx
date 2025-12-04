// ...existing code...
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Appointment from "../../Components/AdminPanel/Appointment.jsx";
import Dashboard from "../../Components/AdminPanel/Dashboard.jsx";
import PointOfSale from "../../Components/AdminPanel/PointOfSale.jsx";
import StockManagement from "../../Components/AdminPanel/StockManagement.jsx";
import {
  FaCalendarCheck,
  FaBox,
  FaMoneyBillWave,
  FaGripHorizontal,
  FaDoorOpen,
} from "react-icons/fa";

function AdminPanel() {
  const navigate = useNavigate();
  const [activePanel, setActivePanel] = useState("appointments");

  const navItems = [
    { key: "dashboard", icon: FaGripHorizontal, label: "Dashboard" },
    { key: "appointments", icon: FaCalendarCheck, label: "Appointments" },
    { key: "inventory", icon: FaBox, label: "Inventory" },
    { key: "pos", icon: FaMoneyBillWave, label: "Point of Sale" },
  ];

  return (
    <div className="flex h-screen">
      {/* sidebar */}
      <aside className="flex flex-col justify-between items-center p-4 w-20 md:w-24 bg-gray-100">
        {/* logo */}
        <div className="w-full flex items-center justify-center">
          <button
            onClick={() => {
              setActivePanel("dashboard");
              navigate("/admin-panel");
            }}
            className="text-2xl font-bold"
            aria-label="Go to admin home"
          >
            PG
          </button>
        </div>

        {/* nav */}
        <nav className="flex-1 flex items-center justify-center w-full">
          <ul className="m-0 p-0 list-none flex flex-col items-center space-y-6 w-full">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activePanel === item.key;
              return (
                <li
                  key={item.key}
                  role="button"
                  tabIndex={0}
                  onClick={() => setActivePanel(item.key)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ")
                      setActivePanel(item.key);
                  }}
                  className={
                    "w-12 h-12 flex items-center justify-center rounded-md cursor-pointer " +
                    (isActive
                      ? "bg-[#CF4B00] text-white shadow"
                      : "hover:bg-gray-200")
                  }
                  aria-current={isActive ? "true" : undefined}
                  title={item.label}
                >
                  <Icon size={18} />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* bottom */}
        <div className="flex flex-col items-center w-full">
          <div className="w-12 h-12 md:w-16 md:h-16 bg-[#CF4B00] cursor-pointer border border-[#CF4B00] rounded-full" />
          <button
            className="mt-4 p-2 w-10 h-10 bg-red-500 text-white rounded-full cursor-pointer hover:bg-red-600 flex justify-center items-center"
            onClick={() => navigate("/login")}
            aria-label="Logout"
          >
            <FaDoorOpen size={16} />
          </button>
        </div>
      </aside>

      {/* main content */}
      <main className="flex-1 bg-transparent overflow-auto">
        <div className="p-6">
          <h1 className="text-2xl font-semibold p-4">
            {activePanel.charAt(0).toUpperCase() + activePanel.slice(1)}
          </h1>
          {activePanel === "dashboard" && <Dashboard />}
          {activePanel === "appointments" && <Appointment />}
          {activePanel === "pos" && <PointOfSale />}
          {activePanel === "inventory" && <StockManagement />}
        </div>
      </main>
    </div>
  );
}

export default AdminPanel;
