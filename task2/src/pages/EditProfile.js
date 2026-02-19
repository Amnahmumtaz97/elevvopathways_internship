import React from "react";

export default function EditProfile() {
  return (
    <div className="max-w-lg mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">Edit Profile</h2>
      {/* Profile form fields here */}
      <form className="space-y-6">
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Name</label>
          <input className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition" name="name" placeholder="Enter your name" />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Email</label>
          <input className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition" name="email" type="email" placeholder="Enter your email" />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Phone</label>
          <input className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition" name="phone" type="tel" placeholder="Enter your phone" />
        </div>
        <div>
          <label className="block mb-2 font-semibold text-gray-700">Bio</label>
          <textarea className="w-full border-2 border-gray-200 px-4 py-3 rounded-lg focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400 transition resize-none" name="bio" rows={3} placeholder="Write something about yourself" />
        </div>
        <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-500 transition" type="submit">Save Changes</button>
      </form>
    </div>
  );
}
