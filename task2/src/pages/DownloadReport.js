import React from "react";

export default function DownloadReport() {
  return (
    <div className="max-w-lg mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8">
      <h2 className="text-2xl font-bold mb-6 text-yellow-400">Download Report</h2>
      <p className="mb-6 text-gray-700">Click below to download your latest report.</p>
      <button className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-bold shadow-lg hover:bg-yellow-500 transition">Download</button>
    </div>
  );
}
