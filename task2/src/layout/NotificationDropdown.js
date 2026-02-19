
import React, { useState } from "react";

const mockNotifications = [
  { id: 1, message: "New project assigned: Website Redesign", time: "2m ago" },
  { id: 2, message: "Invoice #1234 paid", time: "1h ago" },
  { id: 3, message: "Profile updated successfully", time: "3h ago" },
  { id: 4, message: "Client messaged about deadline", time: "4h ago" },
  { id: 5, message: "App UI project marked as completed", time: "6h ago" },
  { id: 6, message: "New client registered", time: "8h ago" },
];

export default function NotificationDropdown() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        className="relative focus:outline-none group"
        onClick={() => setOpen((o) => !o)}
        aria-label="Show notifications"
      >
        <span className="material-icons text-yellow-400 text-3xl group-hover:animate-bounce">notifications</span>
        <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1.5 font-bold shadow-md animate-pulse">
          {mockNotifications.length}
        </span>
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-gradient-to-br from-blue-50 via-white to-yellow-100 shadow-2xl rounded-xl z-30 animate-fade-in">
          <div className="p-4 border-b font-bold text-black-900 text-lg flex items-center gap-2">
            <span className="material-icons text-yellow-400">notifications</span>
            Notifications
          </div>
          <ul>
            {mockNotifications.map((n) => (
              <li key={n.id} className="px-4 py-3 hover:bg-yellow-50 text-base flex justify-between items-center border-b last:border-b-0 transition-all">
                <span className="text-black-900 font-medium">{n.message}</span>
                <span className="text-gray-400 ml-2 whitespace-nowrap text-xs">{n.time}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
      <style>{`
        .animate-fade-in { animation: fadeIn 0.3s ease; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(-10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
