import React from "react";
function Navigation() {
  return (
    <header className="flex justify-between items-center sticky top-0 h-20 z-1000 bg-[#CF4B00] text-white">
      <div className="text-3xl font-bold ml-6">
        <h1>PetGalore</h1>
      </div>
      <nav className="hidden md:flex space-x-6">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
      <div className="mr-6">
        <button className="border border-2 rounded-md px-4 py-2 font-bold">
          Sign In
        </button>
      </div>
    </header>
  );
}

export default Navigation;
