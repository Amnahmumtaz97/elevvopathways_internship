import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Sidebar from "./layout/Sidebar";
import Header from "./layout/Header";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import DownloadReport from "./pages/DownloadReport";
import Messages from "./pages/Messages";
import Statistics from "./pages/Statistics";

function App() {
  return (
    <div className="min-h-screen bg-black flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 p-4 overflow-auto">
            <Routes>
            <Route path="/" element={<Navigate to="/overview" />} />
            <Route path="/overview" element={<Overview />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/edit-profile" element={<EditProfile />} />
            <Route path="/download-report" element={<DownloadReport />} />
            <Route path="/settings" element={<Messages />} />
            <Route path="/stats" element={<Statistics />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}

export default App;
