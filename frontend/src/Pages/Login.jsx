import React from "react";
import { useNavigate } from "react-router-dom";
function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login form submitted");
  };
  return (
    <>
      <div className="flex items-center justify-center h-3/4 min-h-[calc(100vh-5rem)]">
        <div className="flex items-center justify-evenly bg-white w-3/4 h-3/4 px-4 py-4 shadow-lg rounded-lg">
          <div className="relative w-120 h-120 rounded-md">
            <h1 className="absolute top-4 left-4 text-2xl font-bold text-white">
              PetGalore
            </h1>
            <img
              src="./src/assets/pets.png"
              alt="PetGalore Logo"
              className="object-fit w-120 h-120 rounded-md"
            />
          </div>
          <div className="w-100 max-w-md">
            <form onSubmit={handleSubmit}>
              <h1 className="text-3xl font-bold mb-2 text-[#CF4B00]">Log In</h1>
              <p className="mb-6">
                Doesn't have an account?{" "}
                <a href="/signup" className="underline text-[#CF4B00]">
                  Sign up
                </a>
              </p>
              <div className="flex mb-4 justify-center">
                <button className="border border-2 border-[#CF4B00] text-[#CF4B00] w-full rounded-md px-4 py-2 font-bold focus:outline-none focus:shadow-outline hover:bg-[#FCEAE4]">
                  Continue with Google
                </button>
              </div>
              <div className="mb-4">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-6">
                <label
                  className="block text-gray-700 text-sm font-bold mb-2"
                  htmlFor="password"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex items-center justify-between mt-6">
                <button
                  onClick={() => navigate("/admin-panel")}
                  className="bg-[#CF4B00] hover:bg-[#B03E00] text-white font-bold py-4 px-6 w-full rounded-full focus:outline-none focus:shadow-outline"
                >
                  Log In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
