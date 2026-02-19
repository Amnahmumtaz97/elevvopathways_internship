

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

// Statistics relevant to freelance admin dashboard
const statsData = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "Projects",
      data: [5, 8, 6, 10, 7, 9],
      backgroundColor: "#FBBF24",
    },
    {
      label: "Applications",
      data: [12, 15, 14, 18, 16, 20],
      backgroundColor: "#FBBF24",
    },
  ],
};

const projectTypeData = {
  labels: ["Web", "Mobile", "Data", "Design"],
  datasets: [
    {
      data: [12, 7, 5, 8],
      backgroundColor: ["#FBBF24", "#FBBF24", "#10B981", "#F472B6"],
      borderWidth: 0,
    },
  ],
};

const topClients = [
  { name: "Ali Raza", projects: 4, total: "₨320,000" },
  { name: "Fatima Khan", projects: 3, total: "₨210,000" },
  { name: "Bilal Ahmed", projects: 2, total: "₨180,000" },
];

export default function Statistics() {
  return (
    <div className="max-w-5xl mx-auto mt-12 bg-white rounded-2xl shadow-xl p-8 border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-black">Statistics</h2>
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-black text-yellow-400 rounded-xl p-6 flex flex-col items-center border border-gray-900">
          <div className="text-3xl font-bold mb-2">₨1,280,000</div>
          <div className="text-lg">Total Earnings</div>
        </div>
        <div className="bg-yellow-400 text-black rounded-xl p-6 flex flex-col items-center border border-yellow-400">
          <div className="text-3xl font-bold mb-2">27</div>
          <div className="text-lg">Projects Completed</div>
        </div>
        <div className="bg-gray-100 text-black rounded-xl p-6 flex flex-col items-center border border-gray-300">
          <div className="text-3xl font-bold mb-2">18</div>
          <div className="text-lg">Clients Served</div>
        </div>
      </div>
      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
          <div className="font-semibold mb-2 text-black">Projects & Applications (6 months)</div>
          <Bar data={{
            ...statsData,
            datasets: statsData.datasets.map((ds, i) => ({
              ...ds,
              backgroundColor: i === 0 ? '#FBBF24' : '#222',
              borderRadius: 6,
            }))
          }} options={{
            responsive: true,
            plugins: { legend: { position: "top", labels: { color: '#222' } } },
            maintainAspectRatio: true,
            scales: { x: { ticks: { color: '#222' } }, y: { ticks: { color: '#222' } } }
          }} />
        </div>
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center border border-gray-200">
          <div className="font-semibold mb-2 text-black">Project Types</div>
          <div style={{ maxWidth: 260, width: "100%", height: 200 }}>
            <Doughnut data={{
              ...projectTypeData,
              datasets: projectTypeData.datasets.map(ds => ({
                ...ds,
                backgroundColor: ["#FBBF24", "#222", "#fff", "#FFD600"],
                borderColor: ["#222", "#FFD600", "#FBBF24", "#fff"],
                borderWidth: 2,
              }))
            }} options={{
              cutout: "70%",
              plugins: { legend: { display: true, position: "bottom", labels: { color: '#222' } } },
              maintainAspectRatio: true,
            }} />
          </div>
        </div>
      </div>
      {/* Top Clients Table */}
      <div className="bg-gray-50 rounded-xl p-6 border border-gray-200">
        <div className="font-semibold mb-4 text-black">Top Clients</div>
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2 px-4 text-black">Client</th>
              <th className="py-2 px-4 text-black">Projects</th>
              <th className="py-2 px-4 text-black">Total</th>
            </tr>
          </thead>
          <tbody>
            {topClients.map((c, idx) => (
              <tr key={idx} className="hover:bg-yellow-100">
                <td className="py-2 px-4 font-medium text-black">{c.name}</td>
                <td className="py-2 px-4 text-black">{c.projects}</td>
                <td className="py-2 px-4 text-black">{c.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
import { Bar, Doughnut } from "react-chartjs-2";
