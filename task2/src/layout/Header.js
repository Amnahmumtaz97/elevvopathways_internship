

import React from "react";
import NotificationDropdown from "./NotificationDropdown";

export default function Header() {
  return (
    <header className="flex items-center justify-between bg-black px-8 py-6 shadow-lg sticky top-0 z-20 rounded-b-3xl border-b-4 border-yellow-400">
      <div className="flex items-center gap-4">
        <button className="md:hidden bg-yellow-400 text-black rounded-full p-2 shadow-lg">
          <span className="material-icons">menu</span>
        </button>
        <span className="font-bold text-2xl text-yellow-400">Dashboard</span>
      </div>
      <div className="flex items-center gap-6 ml-auto">
        <div className="relative">
          <input
            type="text"
            placeholder="Search something here..."
            className="bg-white rounded-xl px-4 py-2 text-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-sm text-black"
          />
          <span className="material-icons absolute right-2 top-2 text-yellow-400">search</span>
        </div>
        <NotificationDropdown />
        <img
          src="https://cdn-icons-png.flaticon.com/512/6997/6997662.png"
          alt="profile"
          className="w-12 h-12 rounded-full border-4 border-yellow-400 shadow-md bg-white object-cover transition-transform hover:scale-105"
        />
      </div>
    </header>
  );
}
