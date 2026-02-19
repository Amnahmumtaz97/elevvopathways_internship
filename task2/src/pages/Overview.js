

import React from "react";
import { useNavigate } from "react-router-dom";
import { Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(ArcElement, CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);



const analyticsData = {
  labels: ["Performance"],
  datasets: [
    {
      data: [90, 10],
      backgroundColor: ["rgba(238, 179, 42, 1)", "#E5E7EB"],
      borderWidth: 0,
    },
  ],
};

const earningsData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
  datasets: [
    {
      label: "Income",
      data: [3200, 4100, 3800, 5500, 4200, 4800, 5569, 4300, 3900, 4700, 5200, 6000],
      borderColor: "#FBBF24",
      backgroundColor: "rgba(251,191,36,0.1)",
      tension: 0.4,
      fill: true,
      pointRadius: 5,
      pointBackgroundColor: "#FBBF24",
    },
  ],
};

const initialProjects = [
  { name: "E-commerce Website", client: "Ali Raza", price: "₨120,000", delivery: "2 days 4 hours", progress: 90, avatar: "https://i.pravatar.cc/40?img=1" },
  { name: "Mobile App Development", client: "Fatima Khan", price: "₨85,000", delivery: "5 days 6 hours", progress: 50, avatar: "https://i.pravatar.cc/40?img=2" },
  { name: "Urdu Translator", client: "Bilal Ahmed", price: "₨150,000", delivery: "10 days 2 hours", progress: 95, avatar: "https://i.pravatar.cc/40?img=3" },
  { name: "Data Analytics Dashboard", client: "Ayesha Siddiqui", price: "₨110,000", delivery: "7 days 12 hours", progress: 20, avatar: "https://i.pravatar.cc/40?img=4" },
];

const initialApplicationStatus = [
  { title: "Chinese Translator", tags: ["Remote", "Contract"], status: "applied", color: "bg-yellow-100 text-yellow-700" },
  { title: "Frontend Developer (Junior)", tags: ["Freelance", "1-3 years exp"], status: "rejected", color: "bg-red-100 text-red-700" },
  { title: "Website Designer", tags: ["Interview", "3 months contract"], status: "interview", color: "bg-green-100 text-green-700" },
  { title: "Senior UI/UX Designer", tags: ["Interview"], status: "interview", color: "bg-green-100 text-green-700" },
];



import { useState } from "react";

export default function Overview() {
  const [showProjectModal, setShowProjectModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [projects, setProjects] = useState(initialProjects);
  const [applicationStatus, setApplicationStatus] = useState(initialApplicationStatus);
  const [newProject, setNewProject] = useState({
    name: '',
    client: '',
    price: '',
    delivery: '',
    progress: 0,
    avatar: '',
  });
  const [formError, setFormError] = useState('');
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 bg-black min-h-screen">
      {/* Main content */}
      <div className="lg:col-span-2 space-y-8">
        <div className="flex items-center justify-between">
          <h1 className="text-3xl font-bold text-yellow-400">Welcome back!</h1>
          <div className="flex gap-2">
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition font-semibold" onClick={() => navigate("/edit-profile")}>Edit Profile</button>
            <button className="bg-yellow-100 text-black px-4 py-2 rounded hover:bg-yellow-400 transition font-semibold border-2 border-yellow-400" onClick={() => navigate("/download-report")}>Download Report</button>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-500 transition font-semibold" onClick={() => navigate("/settings")}>Messages</button>
            <button className="bg-yellow-100 text-black px-4 py-2 rounded hover:bg-yellow-400 transition font-semibold border-2 border-yellow-400" onClick={() => navigate("/stats")}>Statistics</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Analytics Donut */}
          <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8 flex flex-col items-center">
            <div className="flex items-center justify-between w-full mb-4">
              <span className="text-lg font-semibold text-black-400">Analytics</span>
              <span className="material-icons text-black-400">trending_up</span>
            </div>
            <div className="w-full flex justify-center">
              <div style={{ maxWidth: 260, width: "100%", height: 200 }}>
                <Doughnut data={{
                  ...analyticsData,
                  datasets: analyticsData.datasets.map(ds => ({
                    ...ds,
                    backgroundColor: ["#090701ff", "#f4c416ff"],
                  }))
                }} options={{ cutout: "75%", plugins: { legend: { display: false } }, maintainAspectRatio: true }} />
              </div>
            </div>
            <div className="flex justify-between w-full mt-6">
              <div className="text-center">
                <div className="text-yellow-400 text-xl font-bold">90%</div>
                <div className="text-black text-sm">Responded</div>
              </div>
              <div className="text-center">
                <div className="text-yellow-400 text-xl font-bold">1,298</div>
                <div className="text-black-400 text-sm">Order completion</div>
              </div>
            </div>
          </div>
          {/* Earnings Line Chart */}
          <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8 flex flex-col">
            <div className="flex items-center justify-between w-full mb-4">
              <span className="text-lg font-semibold text-black">Earning reports</span>
              <span className="material-icons text-yellow-400">show_chart</span>
            </div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">₨108.9k</div>
            <div className="text-black mb-4">Yearly <span className="text-yellow-400 font-semibold">+2.3%</span></div>
            <div className="w-full flex justify-center">
              <div style={{ maxWidth: 600, width: "100%", height: 260 }}>
                <Line data={{
                  ...earningsData,
                  borderColor: '#FBBF24',
                  backgroundColor: 'rgba(251,191,36,0.1)',
                  pointBackgroundColor: '#FBBF24',
                  datasets: earningsData.datasets.map(ds => ({
                    ...ds,
                    borderColor: '#FBBF24',
                    backgroundColor: 'rgba(251,191,36,0.1)',
                    pointBackgroundColor: '#FBBF24',
                  }))
                }} options={{ responsive: true, plugins: { legend: { display: false } }, animation: { duration: 1200 }, maintainAspectRatio: true }} />
              </div>
            </div>
          </div>
        </div>
        {/* Project List */}
        <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8">
          <div className="flex items-center justify-between mb-6">
            <span className="text-lg font-semibold text-gray-900">Active projects</span>
            <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-500 transition" onClick={() => setShowProjectModal(true)}>Add new project</button>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full text-left">
              <thead>
                <tr>
                  <th className="py-2 px-4">Client</th>
                  <th className="py-2 px-4">Project</th>
                  <th className="py-2 px-4">Price</th>
                  <th className="py-2 px-4">Delivered in</th>
                  <th className="py-2 px-4">Progress</th>
                </tr>
              </thead>
              <tbody>
                {projects.map((p, idx) => (
                  <tr key={idx} className="hover:bg-yellow-100">
                    <td className="py-2 px-4 flex items-center gap-2">
                      <img src={p.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
                      <span className="font-medium text-gray-900">{p.client}</span>
                    </td>
                    <td className="py-2 px-4">{p.name}</td>
                    <td className="py-2 px-4">{p.price}</td>
                    <td className="py-2 px-4">{p.delivery}</td>
                    <td className="py-2 px-4">
                      <div className="w-32 bg-gray-200 rounded-full h-2">
                        <div className="bg-yellow-400 h-2 rounded-full" style={{ width: `${p.progress}%` }}></div>
                      </div>
                      <span className="text-xs text-gray-500 ml-2">{p.progress}%</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* Modals */}
        {showProjectModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Add New Project</h2>
              <form
                onSubmit={e => {
                  e.preventDefault();
                  if (!newProject.name || !newProject.client || !newProject.price || !newProject.delivery) {
                    setFormError('Please fill all required fields.');
                    return;
                  }
                  setFormError('');
                  setProjects(prev => [...prev, newProject]);
                  setShowProjectModal(false);
                  setNewProject({ name: '', client: '', price: '', delivery: '', progress: 0, avatar: '' });
                }}
              >
                <div className="mb-3">
                  <label className="block font-semibold mb-1">Project Name *</label>
                  <input className="w-full border rounded px-3 py-2" value={newProject.name} onChange={e => setNewProject(p => ({ ...p, name: e.target.value }))} required />
                </div>
                <div className="mb-3">
                  <label className="block font-semibold mb-1">Client *</label>
                  <input className="w-full border rounded px-3 py-2" value={newProject.client} onChange={e => setNewProject(p => ({ ...p, client: e.target.value }))} required />
                </div>
                <div className="mb-3">
                  <label className="block font-semibold mb-1">Price *</label>
                  <input className="w-full border rounded px-3 py-2" value={newProject.price} onChange={e => setNewProject(p => ({ ...p, price: e.target.value }))} required />
                </div>
                <div className="mb-3">
                  <label className="block font-semibold mb-1">Delivery *</label>
                  <input className="w-full border rounded px-3 py-2" value={newProject.delivery} onChange={e => setNewProject(p => ({ ...p, delivery: e.target.value }))} required />
                </div>
                <div className="mb-3">
                  <label className="block font-semibold mb-1">Progress (%)</label>
                  <input type="number" min="0" max="100" className="w-full border rounded px-3 py-2" value={newProject.progress} onChange={e => setNewProject(p => ({ ...p, progress: Math.max(0, Math.min(100, Number(e.target.value))) }))} />
                </div>
                <div className="mb-3">
                  <label className="block font-semibold mb-1">Avatar URL</label>
                  <input className="w-full border rounded px-3 py-2" value={newProject.avatar} onChange={e => setNewProject(p => ({ ...p, avatar: e.target.value }))} />
                </div>
                {formError && <div className="text-red-500 mb-2">{formError}</div>}
                <div className="flex gap-2 mt-6">
                  <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-500 transition">Add Project</button>
                  <button type="button" className="bg-black text-yellow-400 px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-400 hover:text-black transition border-2 border-yellow-400" onClick={() => setShowProjectModal(false)}>Cancel</button>
                </div>
              </form>
            </div>
          </div>
        )}
        {showReportModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Download Report</h2>
              <p className="mb-4">Report download functionality coming soon.</p>
              <button className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-500 transition" onClick={() => setShowReportModal(false)}>Close</button>
            </div>
          </div>
        )}
      </div>
      {/* Right sidebar */}
      <div className="space-y-8 lg:sticky lg:top-8 h-fit">
        {/* Profile Card */}
        <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8 flex flex-col items-center">
          <div className="text-xl font-bold text-black mb-1">Fatima Khan</div>
          <div className="text-yellow-600 mb-4">Karachi, Pakistan</div>
          <button className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-500 transition" onClick={() => navigate("/edit-profile")}>Edit profile</button>
        </div>
        {showProfileModal && (
          <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
              <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
              {/* Profile edit form here */}
              <button className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-500 transition" onClick={() => setShowProfileModal(false)}>Close</button>
            </div>
          </div>
        )}
        {/* Application Status */}
        <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8">
          <div className="text-lg font-semibold text-black mb-4">Application status</div>
          <ul className="space-y-4">
            {applicationStatus.map((a, idx) => (
              <li key={idx} className="flex flex-col">
                <div className="flex items-center gap-2 mb-1">
                  <span className={`px-2 py-1 rounded font-bold text-xs ${a.color.replace('bg-yellow-100', 'bg-yellow-400').replace('text-yellow-700', 'text-black').replace('bg-red-100', 'bg-black').replace('text-red-700', 'text-yellow-400').replace('bg-green-100', 'bg-yellow-100').replace('text-green-700', 'text-black')}`}>{a.status.charAt(0).toUpperCase() + a.status.slice(1)}</span>
                  <span className="font-medium text-black">{a.title}</span>
                </div>
                <div className="flex gap-2">
                  {a.tags.map((tag, i) => (
                    <span key={i} className="bg-yellow-100 text-black px-2 py-1 rounded text-xs font-medium">{tag}</span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
        {/* Quick Stats Panel - Enhanced */}
        <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-6 flex flex-col items-center">
          <div className="text-lg font-semibold text-black mb-4">Quick Stats</div>
          <div className="grid grid-cols-2 gap-4 w-full mb-4">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-yellow-400">{projects.length}</span>
              <span className="text-xs text-black">Total Projects</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-green-500">{projects.filter(p => p.progress === 100).length}</span>
              <span className="text-xs text-black">Completed</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-yellow-400">{projects.filter(p => p.progress > 0 && p.progress < 100).length}</span>
              <span className="text-xs text-black">Ongoing</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-black">₨{projects.reduce((sum, p) => sum + Number((p.price||'').replace(/[^\d]/g, '')), 0).toLocaleString()}</span>
              <span className="text-xs text-black">Total Earnings</span>
            </div>
          </div>
          {/* Motivational Quote */}
          <div className="bg-yellow-100 text-black rounded-lg px-4 py-2 text-center text-sm font-medium mb-4 w-full">
            "Success is the sum of small efforts, repeated day in and day out."
          </div>
          {/* View All Projects Button */}
          <button
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold shadow hover:bg-yellow-500 transition w-full"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            View All Projects
          </button>
        </div>
      </div>
    </div>
  );
}
