import React from "react";
import { useParams } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";
import appointments from "../../MockDatas/appointmentsData.js";
function AppointmentDetails() {
  const { id } = useParams();
  const appointment = appointments.find((a) => a.id === parseInt(id));
  return (
    <>
      <section className="flex justify-center items-center mt-4 mb-4">
        <div className="p-8 bg-white rounded-lg shadow-md w-[98%] h-full">
          <div className="flex items-center space-x-4 mb-4">
            <div className="w-4 h-4 bg-green-800 rounded-full" />
            <p className="text-green-800 font-semibold">Completed</p>
          </div>
          <div className="flex items-center justify-between p-4 rounded-md mb-6 bg-gradient-to-br from-[#FFF7ED] to-[#FFF3E6]">
            <div className="flex items-center">
              <FaExclamationTriangle
                className="text-red-500 inline-block m-2 bg-[#FCEAE4] rounded-md p-2"
                size={38}
              />
              <article className="flex flex-col">
                <h2 className="text-md font-semibold">
                  Richmond Gillaco Appointment Details
                </h2>
                <p className="text-sm text-gray-400">
                  Send a message for Richmond Gillaco appointment
                </p>
              </article>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
              Send Message
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="">
              <h3 className="text-2xl my-6 text-[#CF4B00] font-bold">
                Owner Profile
              </h3>
              <p>
                Full Name: <span>Richmond Gillaco</span>
              </p>
              <p>
                Mobile Number: <span>12893781739</span>
              </p>
              <p>
                Email Address: <span>richmond@example.com</span>
              </p>
              <p>
                Address: <span>123 Main St, Cityville</span>
              </p>
            </div>
            <div>
              <h3 className="text-2xl my-6 text-[#CF4B00] font-bold">
                Pet Profile
              </h3>
              <p>
                Pet Name: <span>Pappie</span>
              </p>
              <p>
                Pet Type: <span>Dog</span>
              </p>
              <p>
                Breed: <span>Labrador</span>
              </p>
              <p>
                Age: <span>5 years</span>
              </p>
              <p>
                Weight: <span>30 kg</span>
              </p>
            </div>
          </div>
          <div className="mt-6">
            <h3 className="text-2xl my-6 text-[#CF4B00] font-bold">
              Appointment Details
            </h3>
            <p>
              Services: Services: <span>Grooming, Vaccination</span>
            </p>
            <p>
              Notes: <span>Allergic to certain shampoos</span>
            </p>
            <h3 className="text-2xl my-6 text-[#CF4B00] font-bold">
              Appointment Schedule
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div>
                <p className="font-semibold">Preferred Date</p>
                <div className="flex justify-center items-center p-8 bg-gray-100 rounded-md text-xl font-semibold">
                  June 25, 2024
                </div>
              </div>
              <div>
                <p className="font-semibold">Preferred Time</p>
                <div className="flex justify-center items-center p-8 bg-gray-100 rounded-md text-xl font-semibold">
                  8:00 am
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AppointmentDetails;
