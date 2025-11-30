import React from "react";
import { Link } from "react-router-dom";
import {
  FaStethoscope,
  FaSyringe,
  FaBug,
  FaPaw,
  FaHandScissors,
  FaPills,
  FaStore,
} from "react-icons/fa";
function Hero() {
  return (
    <>
      <section className="h-[75vh] flex items-center">
        <div className="relative mx-auto text-center">
          <FaPaw
            size={200}
            className="absolute -right-40 -top-30 text-[#FFEDD5] opacity-100 rotate-40 -z-10"
          />
          <FaPaw
            size={200}
            className="absolute -left-40 -bottom-35 text-[#FFEDD5] opacity-100 rotate-320 -z-10"
          />
          <h1 className="text-6xl font-extrabold mb-4">
            Welcome to <span className="text-[#CF4B00]">PetGalore</span>
          </h1>
          <p className="text-lg mb-8">
            Your Trusted Partner in Pet Wellness - Healthy{" "}
            <span className="text-[#CF4B00]">pets.</span> Happy{" "}
            <span className="text-[#CF4B00]">families.</span> Compassionate{" "}
            <span className="text-[#CF4B00]">care.</span>
          </p>
          <Link
            to="/booking"
            className="bg-[#CF4B00] text-white px-6 py-3 rounded-full hover:bg-[#a03a00] transition duration-300"
          >
            Book an Appointment
          </Link>
        </div>
      </section>

      <section className="h-[90vh] flex flex-col items-center">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-[#CF4B00]">
            Our Services
          </h2>
          <p className="text-lg mb-8">
            We provide high-quality care from routine check-ups to essential
            treatments.
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 rounded-lg shadow-md ring-1 ring-orange-50 bg-gradient-to-br from-[#FFF7ED] to-[#FFF1E0]">
            <FaStethoscope className="mx-auto h-12 w-12 text-[#CF4B00]" />
            <h3 className="text-center text-xl font-semibold mt-4">
              General Check-Ups
            </h3>
            <p className="mt-2">
              Regular health exams for dogs, cats, and other small pets.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md ring-1 ring-amber-50 bg-gradient-to-br from-[#FFFDF2] to-[#FFF7E6]">
            <FaSyringe className="mx-auto h-12 w-12 text-[#CF4B00]" />
            <h3 className="text-center text-xl font-semibold mt-4">
              Vaccinations
            </h3>
            <p className="mt-2">
              Keep your pet protected with updated vaccines.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md ring-1 ring-orange-50 bg-gradient-to-br from-[#FFF8F0] to-[#FFF1E8]">
            <FaBug className="mx-auto h-12 w-12 text-[#CF4B00]" />
            <h3 className="text-center text-xl font-semibold mt-4">
              Deworming
            </h3>
            <p className="mt-2">Safe and effective parasite control.</p>
          </div>
          <div className="p-6 rounded-lg shadow-md ring-1 ring-orange-50 bg-gradient-to-br from-[#FFF7ED] to-[#FFF3E6]">
            <FaHandScissors className="mx-auto h-12 w-12 text-[#CF4B00]" />
            <h3 className="text-center text-xl font-semibold mt-4">
              Grooming Services
            </h3>
            <p className="mt-2">
              Bathing, hair trimming, nail cutting, and coat care.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md ring-1 ring-orange-50 bg-gradient-to-br from-[#FFF9F5] to-[#FFF2EA]">
            <FaPills className="mx-auto h-12 w-12 text-[#CF4B00]" />
            <h3 className="text-center text-xl font-semibold mt-4">
              Medicine Administration
            </h3>
            <p className="mt-2">
              Proper and safe medicine handling for your pet’s needs.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-md ring-1 ring-orange-50 bg-gradient-to-br from-[#FFF6F1] to-[#FFF0E4]">
            <FaStore className="mx-auto h-12 w-12 text-[#CF4B00]" />
            <h3 className="text-center text-xl font-semibold mt-4">
              Pet Products & Supplies
            </h3>
            <p className="mt-2">
              Food, accessories, hygiene products, and more.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold mb-4 text-[#CF4B00]">
            Why Choose Us?
          </h3>
          <p className="text-2xl">
            Compassionate Care From Pet Lovers Like You
          </p>
        </div>
        <table className="container mx-auto mt-6 text-lg border-separate border-spacing-y-3">
          <tr className="bg-white rounded-lg p-4 shadow-md h-18 hover:scale-105 transition-transform">
            <td className="p-4 text-xl">
              🐶 Experienced veterinarians and staff
            </td>
          </tr>
          <tr className="bg-white rounded-lg p-4 shadow-md h-18">
            <td className="p-4 text-xl">❤️ Pet-first approach</td>
          </tr>
          <tr className="bg-white rounded-lg p-4 shadow-md h-18">
            <td className="p-4 text-xl">📅 Easy online booking</td>
          </tr>
          <tr className="bg-white rounded-lg p-4 shadow-md h-18">
            <td className="p-4 text-xl">🔒 Secure pet medical records</td>
          </tr>
          <tr className="bg-white rounded-lg p-4 shadow-md h-18">
            <td className="p-4 text-xl">
              📱 Access your pet’s history anytime
            </td>
          </tr>
          <tr className="bg-white rounded-lg p-4 shadow-md h-18">
            <td className="p-4 text-xl">
              ⚕️ Trusted by families in the community
            </td>
          </tr>
        </table>
      </section>

      <section className="flex flex-col max-w-6xl mx-auto px-6 py-12">
        <div className="container mx-auto text-center mb-6">
          <h3 className="text-4xl font-bold mb-4 text-[#CF4B00]">
            Testimonials
          </h3>
          <p className="text-2xl">Happy Pets, Happy Owners</p>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-12">
          <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-[#CF4B00]/90 shadow-lg"></div>

          <div className="absolute -right-20 top-28 w-36 h-36 rounded-tr-3xl rounded-bl-3xl bg-blue-300/90 opacity-90"></div>

          <div className="relative bg-[#CF4B00]/70 text-white rounded-lg shadow-xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full border border-white/5 rounded-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 md:pl-14">
              <div className="md:col-span-2">
                <div className="flex items-start md:items-center">
                  <div className="mr-4 hidden md:block">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      className="text-white/60"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M7.17 6A5 5 0 0 0 2 11v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a5 5 0 0 0-3.83-5zM21 6a5 5 0 0 0-5.17 5v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a5 5 0 0 0-2.83-5z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-3xl font-extrabold">Maria</h3>
                    <p className="text-white/80 mt-1">Pet Owner</p>
                  </div>
                </div>

                <p className="mt-6 text-gray-100 leading-relaxed text-lg">
                  The best vet clinic! My dog’s grooming and vaccination have
                  never been easier.
                </p>

                <div className="mt-6 flex items-center space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.172L12 18.896l-7.336 3.96 1.402-8.172L.132 9.21l8.2-1.192L12 .587z"
                        fill="yellow"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="relative flex items-start md:items-center justify-end">
                <div className="relative -mt-12 md:-mt-0">
                  <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-white p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                        alt="testimonial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-6 bottom-4 text-white/20 text-6xl select-none">
              ”
            </div>
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto px-6 py-12">
          <div className="absolute -right-8 -top-8 w-44 h-44 rounded-full bg-[#CF4B00]/90 shadow-lg"></div>

          <div className="absolute -right-20 top-28 w-36 h-36 rounded-tr-3xl rounded-bl-3xl bg-blue-300/90 opacity-90"></div>

          <div className="relative bg-[#CF4B00]/70 text-white rounded-lg shadow-xl overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="w-full h-full border border-white/5 rounded-lg"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-10 md:pl-14">
              <div className="md:col-span-2">
                <div className="flex items-start md:items-center">
                  <div className="mr-4 hidden md:block">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      className="text-white/60"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path d="M7.17 6A5 5 0 0 0 2 11v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a5 5 0 0 0-3.83-5zM21 6a5 5 0 0 0-5.17 5v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a5 5 0 0 0-2.83-5z" />
                    </svg>
                  </div>

                  <div>
                    <h3 className="text-3xl font-extrabold">Kevin</h3>
                    <p className="text-white/80 mt-1">Pet Owner</p>
                  </div>
                </div>

                <p className="mt-6 text-gray-100 leading-relaxed text-lg">
                  Love the online history feature. I can see all my cat’s past
                  check-ups!
                </p>

                <div className="mt-6 flex items-center space-x-2">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <svg
                      key={i}
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      aria-hidden
                    >
                      <path
                        d="M12 .587l3.668 7.431 8.2 1.192-5.934 5.787 1.402 8.172L12 18.896l-7.336 3.96 1.402-8.172L.132 9.21l8.2-1.192L12 .587z"
                        fill="yellow"
                      />
                    </svg>
                  ))}
                </div>
              </div>

              <div className="relative flex items-start md:items-center justify-end">
                <div className="relative -mt-12 md:-mt-0">
                  <div className="w-40 h-40 md:w-44 md:h-44 rounded-full bg-white p-1">
                    <div className="w-full h-full rounded-full overflow-hidden">
                      <img
                        src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=placeholder"
                        alt="testimonial"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute right-6 bottom-4 text-white/20 text-6xl select-none">
              ”
            </div>
          </div>
        </div>
      </section>

      <footer className="flex justify-between bg-[#CF4B00] text-white py-8 px-6 mt-12 rounded-t-3xl">
        <div className="mb-6" id="contact">
          <h3 className="text-2xl mb-2">PetGalore</h3>
          <p>Your trusted partner in pet care.</p>
          <p className="text-center mt-6 text-sm text-white/80">
            Copyright © 2025 PetGalore. All rights reserved.
          </p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Visit Our Clinic</h3>
          <p>Address: Laur, Nueva Ecija</p>
          <p>Contact Number: (Number)</p>
          <p>Email: contact@petgalore.com</p>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Business Hours</h3>
          <p>Monday - Friday: 8:00 AM - 6:00 PM</p>
          <p>Saturday: 9:00 AM - 4:00 PM</p>
          <p>Sunday: Closed</p>
        </div>
      </footer>
    </>
  );
}

export default Hero;
