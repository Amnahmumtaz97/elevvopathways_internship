

import React from "react";
import { NavLink } from "react-router-dom";

const navItems = [
  { name: "Dashboard", path: "/overview", icon: "dashboard" },
  { name: "Search Job", path: "/projects", icon: "search" },
  { name: "Applications", path: "/profile", icon: "assignment" },
  { name: "Messages", path: "/settings", icon: "mail" },
  { name: "Statistics", path: "/stats", icon: "bar_chart" },
];

export default function Sidebar() {
  return (
    <aside className="w-72 h-full hidden md:flex flex-col bg-black border-r-4 border-yellow-400 rounded-r-3xl shadow-2xl">
      <div className="flex items-center gap-3 p-8 pb-4">
        <div className="bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center shadow-lg">
          <span className="material-icons text-black text-3xl">work</span>
        </div>
        <span className="text-yellow-400 font-extrabold text-2xl tracking-wide">Freelance Admin Portal</span>
      </div>
      <nav className="mt-6 flex-1">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-200 mb-2 ${
                isActive
                  ? "bg-yellow-400 text-black shadow-lg"
                  : "text-white hover:bg-yellow-100 hover:text-black"
              }`
            }
          >
            <span className="material-icons text-2xl">{item.icon}</span>
            {item.name}
          </NavLink>
        ))}
      </nav>
      <div className="mt-auto p-8 text-xs text-yellow-200">
        <span className="material-icons align-middle mr-1">copyright</span>
        2026 Elevvo Internship
      </div>
    </aside>
  );
}
