import React from "react";
import { useNavigate } from "react-router-dom";
import { FaPaw } from "react-icons/fa";

export default function Booking() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-start justify-center py-12 px-4 relative">
      <FaPaw className="absolute top-1 right-50 text-[128px] text-[#CF4B00] opacity-80 rotate-45" />
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-4xl bg-white p-8 rounded-tl-[50px] rounded-br-[50px] shadow-lg space-y-6"
        aria-label="Booking form"
      >
        <h1 className="text-2xl font-bold">Pet Information</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="petName" className="block text-sm font-medium mb-1">
              Pet Name
            </label>
            <input
              id="petName"
              name="petName"
              type="text"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:bg-orange-100"
            />
          </div>

          <div>
            <label htmlFor="petType" className="block text-sm font-medium mb-1">
              Pet Type
            </label>
            <input
              id="petType"
              name="petType"
              type="text"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:bg-orange-100"
            />
          </div>

          <div>
            <label htmlFor="breed" className="block text-sm font-medium mb-1">
              Breed
            </label>
            <input
              id="breed"
              name="breed"
              type="text"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:bg-orange-100"
            />
          </div>

          <div>
            <label htmlFor="age" className="block text-sm font-medium mb-1">
              Age
            </label>
            <input
              id="age"
              name="age"
              type="number"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:bg-orange-100"
            />
          </div>

          <div>
            <label htmlFor="weight" className="block text-sm font-medium mb-1">
              Weight
            </label>
            <input
              id="weight"
              name="weight"
              type="number"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:bg-orange-100"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold pt-2">Owner Information</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="fullName"
              className="block text-sm font-medium mb-1"
            >
              Full Name
            </label>
            <input
              id="fullName"
              name="fullName"
              type="text"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:bg-orange-100"
            />
          </div>

          <div>
            <label
              htmlFor="mobileNumber"
              className="block text-sm font-medium mb-1"
            >
              Mobile Number
            </label>
            <input
              id="mobileNumber"
              name="mobileNumber"
              type="text"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:bg-orange-100"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:bg-orange-100"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium mb-1">
              Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:bg-orange-100"
            />
          </div>
        </div>

        <h2 className="text-2xl font-bold pt-2">Service Selection</h2>

        <fieldset className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <legend className="sr-only">Choose Service</legend>

          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              id="checkup"
              name="service"
              value="checkup"
              className="w-4 h-4 accent-[#CF4B00]"
            />
            <span>General Check-up</span>
          </label>

          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              id="vaccination"
              name="service"
              value="vaccination"
              className="w-4 h-4 accent-[#CF4B00]"
            />
            <span>Vaccination</span>
          </label>

          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              id="deworming"
              name="service"
              value="deworming"
              className="w-4 h-4 accent-[#CF4B00]"
            />
            <span>Deworming</span>
          </label>

          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              id="grooming"
              name="service"
              value="grooming"
              className="w-4 h-4 accent-[#CF4B00]"
            />
            <span>Grooming</span>
          </label>

          <label className="inline-flex items-center space-x-2">
            <input
              type="checkbox"
              id="nailtrimming"
              name="service"
              value="nailtrimming"
              className="w-4 h-4 accent-[#CF4B00]"
            />
            <span>Nail Trimming</span>
          </label>

          <div className="col-span-1 sm:col-span-2">
            <label htmlFor="others" className="block text-sm font-medium mb-1">
              Others (please specify)
            </label>
            <input
              id="others"
              name="service"
              type="text"
              className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:bg-orange-100"
            />
          </div>
        </fieldset>

        <div>
          <label
            htmlFor="additionalNotes"
            className="block text-sm font-medium mb-1"
          >
            Additional Notes
          </label>
          <textarea
            id="additionalNotes"
            name="additionalNotes"
            className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-orange-300 focus:bg-orange-100"
            rows={4}
          ></textarea>
        </div>

        <h2 className="text-2xl font-bold pt-2">Appointment Schedule</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
          <div>
            <label
              htmlFor="preferredDate"
              className="block text-sm font-medium mb-1"
            >
              Preferred Date
            </label>
            <input
              id="preferredDate"
              name="preferredDate"
              type="date"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="preferredTime"
              className="block text-sm font-medium mb-1"
            >
              Preferred Time
            </label>
            <input
              id="preferredTime"
              name="preferredTime"
              type="time"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>

          <div>
            <label
              htmlFor="alternateDate"
              className="block text-sm font-medium mb-1"
            >
              Alternate Date
            </label>
            <input
              id="alternateDate"
              name="alternateDate"
              type="date"
              className="w-full border rounded-md px-3 py-2"
            />
          </div>
        </div>

        <h3 className="text-lg font-semibold pt-2">Consent & Policies</h3>

        <div className="grid grid-cols-1 gap-2">
          <label className="inline-flex items-start space-x-2">
            <input
              type="checkbox"
              id="consent"
              name="consent"
              className="mt-1 w-4 h-4 accent-[#CF4B00]"
            />
            <span>I agree to the terms and conditions and privacy policy.</span>
          </label>

          <label className="inline-flex items-start space-x-2">
            <input
              type="checkbox"
              id="consentConfirmation"
              name="consentConfirmation"
              className="mt-1 w-4 h-4 accent-[#CF4B00]"
            />
            <span>
              I agree that this booking is subject to confirmation by the
              clinic.
            </span>
          </label>

          <label className="inline-flex items-start space-x-2">
            <input
              type="checkbox"
              id="consentCancellation"
              name="consentCancellation"
              className="mt-1 w-4 h-4 accent-[#CF4B00]"
            />
            <span>
              I understand that cancellation must be done at least 24 hours
              before the appointment.
            </span>
          </label>

          <label className="inline-flex items-start space-x-2">
            <input
              type="checkbox"
              id="consentContact"
              name="consentContact"
              className="mt-1 w-4 h-4 accent-[#CF4B00]"
            />
            <span>
              I allow the clinic to contact me regarding this appointment.
            </span>
          </label>
        </div>

        <div className="flex items-center justify-end space-x-3 pt-4">
          <button
            type="button"
            onClick={() => navigate("/")}
            className="px-4 py-2 rounded-md border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
          >
            Cancel / Back to Home
          </button>

          <button
            type="submit"
            className="px-5 py-2 rounded-md bg-[#CF4B00] text-white font-semibold hover:bg-[#a03a00] shadow"
          >
            Submit Booking
          </button>
        </div>
      </form>
    </div>
  );
}
