import React, { useState } from "react";
import posts from "../samplePosts";

const categories = ["All", ...Array.from(new Set(posts.map((p) => p.category)))];

export default function BlogHome() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [page, setPage] = useState(1);
  const POSTS_PER_PAGE = 4;

  const filtered = posts.filter(
    (post) =>
      (category === "All" || post.category === category) &&
      post.title.toLowerCase().includes(search.toLowerCase())
  );
  const totalPages = Math.ceil(filtered.length / POSTS_PER_PAGE);
  const postsToShow = filtered.slice((page - 1) * POSTS_PER_PAGE, page * POSTS_PER_PAGE);

  return (
    <div style={{ maxWidth: 1200, margin: "0 auto", padding: "2.5rem 1rem 1rem 1rem" }}>
      <div style={{ display: "flex", justifyContent: "center", gap: 16, marginBottom: 32 }}>
        <input
          type="text"
          placeholder="Search posts..."
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(1);
          }}
          style={{ padding: "0.7em 1.2em", borderRadius: 8, border: "1px solid #bcdffb", fontSize: "1.08rem", background: "#fff", color: "#222", minWidth: 220 }}
        />
        <select
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            setPage(1);
          }}
          style={{ padding: "0.7em 1.2em", borderRadius: 8, border: "1px solid #bcdffb", fontSize: "1.08rem", background: "#fff", color: "#222" }}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
        {postsToShow.map((post, i) => (
          <div key={i} style={{ background: "#fff", borderRadius: 16, boxShadow: "0 2px 12px rgba(52,152,219,0.07)", overflow: "hidden", display: "flex", flexDirection: "column", transition: "transform 0.15s", minHeight: 340 }}>
            <img src={post.image} alt={post.title} style={{ width: "100%", height: 180, objectFit: "cover" }} />
            <div style={{ padding: "1.1rem 1.2rem 1.2rem 1.2rem", flex: 1, display: "flex", flexDirection: "column" }}>
              <div style={{ fontSize: "1.2rem", fontWeight: "bold", marginBottom: 8, color: "#3498db" }}>{post.title}</div>
              <div style={{ fontSize: "1rem", color: "#444", marginBottom: 12, flex: 1 }}>{post.description}</div>
              <div style={{ fontSize: "0.97rem", color: "#888", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <span>{post.category}</span>
                <span>{post.date}</span>
              </div>
            </div>
          </div>
        ))}
        {postsToShow.length === 0 && (
          <div style={{ gridColumn: "1/-1", textAlign: "center", color: "#b8860b" }}>No posts found.</div>
        )}
      </div>
      {totalPages > 1 && (
        <div style={{ display: "flex", justifyContent: "center", gap: 8, margin: "2rem 0" }}>
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => setPage(i + 1)}
              style={{
                background: page === i + 1 ? "#3498db" : "#fff",
                color: page === i + 1 ? "#fff" : "#3498db",
                border: "1px solid #bcdffb",
                borderRadius: 6,
                padding: "0.5em 1.2em",
                fontSize: "1.08rem",
                cursor: "pointer",
                transition: "background 0.15s",
                fontWeight: 500,
              }}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
