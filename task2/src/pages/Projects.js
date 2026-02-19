

import React, { useState } from "react";

const initialProjects = [
  { id: 1, name: "Website Redesign", status: "In Progress", deadline: "2026-03-01", icon: "web", color: "bg-yellow-100 text-yellow-700" },
  { id: 2, name: "App UI", status: "Completed", deadline: "2026-02-10", icon: "phone_android", color: "bg-green-100 text-green-700" },
  { id: 3, name: "Logo Design", status: "In Review", deadline: "2026-02-20", icon: "brush", color: "bg-yellow-100 text-yellow-700" },
  { id: 4, name: "SEO Optimization", status: "In Progress", deadline: "2026-03-15", icon: "trending_up", color: "bg-yellow-100 text-yellow-700" },
  { id: 5, name: "Brand Identity", status: "Completed", deadline: "2026-01-30", icon: "palette", color: "bg-green-100 text-green-700" },
  { id: 6, name: "Client Portal", status: "In Review", deadline: "2026-02-25", icon: "account_circle", color: "bg-yellow-100 text-yellow-700" },
];

export default function Projects() {
  const [projects, setProjects] = useState(initialProjects);
  const [form, setForm] = useState({
    name: '',
    status: 'In Progress',
    deadline: '',
    icon: 'web',
    color: 'bg-yellow-100 text-yellow-700',
  });
  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!form.name || !form.deadline) return;
    setProjects(prev => [
      ...prev,
      { ...form, id: prev.length + 1 }
    ]);
    setForm({ name: '', status: 'In Progress', deadline: '', icon: 'web', color: 'bg-yellow-100 text-yellow-700' });
  }
  return (
    <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8">
      <div className="font-bold text-yellow-400 text-2xl mb-6 flex items-center gap-2">
        <span className="material-icons text-yellow-400">folder_open</span>
        Projects
      </div>
      <form onSubmit={handleSubmit} className="mb-8 flex flex-wrap gap-2 items-end">
        <input name="name" value={form.name} onChange={handleChange} placeholder="Project Name" className="border px-2 py-1 rounded" required />
        <input name="deadline" value={form.deadline} onChange={handleChange} placeholder="Deadline" className="border px-2 py-1 rounded" required />
        <select name="status" value={form.status} onChange={handleChange} className="border px-2 py-1 rounded">
          <option>In Progress</option>
          <option>Completed</option>
          <option>In Review</option>
        </select>
        <select name="icon" value={form.icon} onChange={handleChange} className="border px-2 py-1 rounded">
          <option value="web">Web</option>
          <option value="phone_android">App</option>
          <option value="brush">Logo</option>
          <option value="trending_up">SEO</option>
          <option value="palette">Brand</option>
          <option value="account_circle">Portal</option>
        </select>
        <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded font-bold">Add Project</button>
      </form>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <div key={p.id} className="flex items-center gap-4 bg-yellow-50 rounded-xl shadow-md p-6 hover:scale-105 transition-transform">
            <span className={`material-icons text-3xl ${p.color}`}>{p.icon}</span>
            <div className="flex-1">
              <div className="text-xl font-semibold text-black mb-1">{p.name}</div>
              <div className="flex items-center gap-2 text-sm">
                <span className={`px-2 py-1 rounded font-bold ${p.color}`}>{p.status}</span>
                <span className="material-icons text-yellow-400 text-base">calendar_today</span>
                <span className="text-black">{p.deadline}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
