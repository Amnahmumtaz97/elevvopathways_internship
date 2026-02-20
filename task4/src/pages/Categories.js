import React from "react";
const categories = ["Tech", "Travel", "Food", "Lifestyle", "AI", "Productivity"];
export default function Categories() {
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(52,152,219,0.07)", padding: "2.5rem 2rem" }}>
      <h2 style={{ color: "#3498db", marginBottom: 12 }}>Categories</h2>
      <ul style={{ padding: 0, listStyle: "none", display: "flex", flexWrap: "wrap", gap: 16 }}>
        {categories.map((cat) => (
          <li key={cat} style={{ background: "#e6f0fa", color: "#217dbb", borderRadius: 8, padding: "0.7em 1.3em", fontWeight: 500, fontSize: "1.08rem" }}>{cat}</li>
        ))}
      </ul>
    </div>
  );
}
