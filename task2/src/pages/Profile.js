
import React, { useState } from "react";

export default function Profile() {
  const [form, setForm] = useState({
    name: "Fatima Khan",
    email: "fatima9@example.com",
    password: "password123",
    phone: "+92 3421-1234",
    bio: "Freelance designer and developer. Passionate about UI/UX and web technologies."
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    alert("Profile updated!");
  }

  return (
    <div className="bg-white border-2 border-yellow-400 rounded-2xl shadow-xl p-8 max-w-lg mx-auto mt-8">
      <div className="font-bold text-yellow-400 text-2xl mb-2 flex items-center gap-2">
        <span className="material-icons text-yellow-400">person</span>
        Profile Settings
      </div>
      <div className="text-3xl font-bold text-black mb-6">Welcome back!</div>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold text-black">Name</label>
          <input
            className="w-full border-2 border-yellow-200 px-4 py-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-black">Email</label>
          <input
            className="w-full border-2 border-yellow-200 px-4 py-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-black">Phone</label>
          <input
            className="w-full border-2 border-yellow-200 px-4 py-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
            name="phone"
            type="tel"
            value={form.phone}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-black">Password</label>
          <input
            className="w-full border-2 border-yellow-200 px-4 py-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition"
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            required
            autoComplete="off"
          />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-black">Bio</label>
          <textarea
            className="w-full border-2 border-yellow-200 px-4 py-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-100 transition resize-none"
            name="bio"
            value={form.bio}
            onChange={handleChange}
            rows={3}
            required
          />
        </div>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-500 transition-transform" type="submit">
          <span className="material-icons align-middle mr-2 text-black">save</span>
          Save Changes
        </button>
      </form>
    </div>
  );
}
