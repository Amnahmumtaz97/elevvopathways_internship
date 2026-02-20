import React from "react";
export default function Contact() {
  return (
    <div style={{ maxWidth: 700, margin: "2rem auto", background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(52,152,219,0.07)", padding: "2.5rem 2rem" }}>
      <h2 style={{ color: "#3498db", marginBottom: 12 }}>Contact</h2>
      <p style={{ color: "#444", fontSize: "1.1rem" }}>
        Want to get in touch? Email me at <a href="mailto:alex@blog.com" style={{ color: "#217dbb" }}>alex@blog.com</a> or reach out on social media!
      </p>
    </div>
  );
}
