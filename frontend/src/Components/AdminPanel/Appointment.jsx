import React from "react";
import { useNavigate } from "react-router-dom";
import appointments from "../../MockDatas/appointmentsData.js";
function Appointment() {
  const navigate = useNavigate();
  // sample data — keep your real data / props replacement later
  const statusClasses = {
    Confirmed: "bg-green-100 text-green-800",
    Pending: "bg-yellow-100 text-yellow-800",
    Cancelled: "bg-red-100 text-red-800",
  };

  return (
    <section className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {appointments.map((a) => (
          <article
            key={a.id}
            className="bg-white rounded-lg shadow-sm p-4 flex flex-col justify-between hover:shadow-md transition"
            aria-labelledby={`appt-${a.id}-title`}
          >
            <div>
              <h3 id={`appt-${a.id}-title`} className="text-lg font-medium">
                {a.name}{" "}
                <span className="text-sm text-gray-500">· {a.species}</span>
              </h3>
              <p className="text-sm text-gray-400">{a.services.join(", ")}</p>
              <p className="text-sm text-gray-600 mt-2">
                {new Date(a.time).toLocaleString()}
              </p>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <span
                className={`inline-flex items-center px-2.5 py-1 rounded text-sm font-medium ${
                  statusClasses[a.status] || "bg-gray-100 text-gray-800"
                }`}
              >
                {a.status}
              </span>

              <button
                type="button"
                className="text-sm px-3 py-1 rounded bg-[#CF4B00] text-white hover:bg-[#a03a00] transition"
                onClick={() => {
                  navigate(`/appointment-details/${a.id}`);
                  console.log("Open appointment", a.id);
                }}
              >
                View
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Appointment;
