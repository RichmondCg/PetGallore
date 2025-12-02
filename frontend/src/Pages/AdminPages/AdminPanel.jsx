import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaCalendarCheck,
  FaBox,
  FaMoneyBillWave,
  FaGripHorizontal,
  FaDoorOpen,
} from "react-icons/fa";
function AdminPanel() {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-col justify-between items-center mb-2 space-x-4 pt-4 pb-4 w-1/12 bg-gray-100">
          <div>
            <h1
              className="text-3xl font-bold pl-4 hover:cursor-pointer"
              onClick={() => navigate("/admin-panel")}
            >
              PG
            </h1>
          </div>
          <div>
            <ul className=" pl-4 list-none space-y-12 text-lg font-medium hover:cursor-pointer">
              <li>
                <FaGripHorizontal />
              </li>
              <li>
                <FaCalendarCheck />
              </li>
              <li>
                <FaBox />
              </li>
              <li>
                <FaMoneyBillWave />
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white border border-black rounded-full"></div>
            <button
              className="mt-4 px-4 py-2 h-12 w-12 bg-red-500 text-white rounded-full hover:cursor-pointer"
              onClick={() => navigate("/login")}
            >
              <FaDoorOpen size={18} />
            </button>
          </div>
        </div>
        <div className="w-11/12 bg-transparent">main panel</div>
      </div>
    </>
  );
}

export default AdminPanel;
