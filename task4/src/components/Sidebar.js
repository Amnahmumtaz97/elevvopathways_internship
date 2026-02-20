import React, { useState } from "react";
import "./Sidebar.css";

const navItems = [
  { key: "home", label: "Home", icon: "🏠" },
  { key: "about", label: "About", icon: "👤" },
  { key: "categories", label: "Categories", icon: "📚" },
  { key: "contact", label: "Contact", icon: "✉️" },
];

export default function Sidebar({ page, setPage }) {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={`sidebar${collapsed ? " collapsed" : ""}`}> 
      <button
        className="sidebar-toggle"
        aria-label="Toggle sidebar"
        onClick={() => setCollapsed((c) => !c)}
      >
        ☰
      </button>
      <div className="sidebar-profile">
        <img
          src="https://randomuser.me/api/portraits/men/32.jpg"
          alt="Profile"
          className="sidebar-avatar"
        />
        <div className="sidebar-profile-info">
          <div className="sidebar-profile-name">Alex Morgan</div>
          <div className="sidebar-profile-role">Blogger & Explorer</div>
        </div>
      </div>
      <nav className="sidebar-nav">
        <ul>
          {navItems.map((item) => (
            <li key={item.key}>
              <button
                className={
                  "sidebar-link" + (page === item.key ? " active" : "")
                }
                onClick={() => setPage(item.key)}
              >
                <span className="sidebar-icon">{item.icon}</span> {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
      <div className="sidebar-widgets">
        <div className="widget widget-about">
          <h3>About Me</h3>
          <p>
            Hi! I'm Alex, a passionate blogger sharing insights on tech, travel, food, and lifestyle. Welcome to my digital home!
          </p>
        </div>
        <div className="widget widget-tags">
          <h3>Popular Tags</h3>
          <div className="tags">
            <span>Tech</span> <span>Travel</span> <span>Food</span> <span>Lifestyle</span> <span>AI</span> <span>Productivity</span>
          </div>
        </div>
        <div className="widget widget-featured">
          <h3>Featured Post</h3>
          <div className="featured-post">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=400&q=80"
              alt="Featured"
            />
            <div className="featured-title">The Power of Open Source</div>
          </div>
        </div>
        <div className="widget widget-social">
          <h3>Follow Me</h3>
          <div className="social-links">
            <a href="#" title="Twitter">
              <span className="sidebar-icon">🐦</span>
            </a>
            <a href="#" title="Instagram">
              <span className="sidebar-icon">📸</span>
            </a>
            <a href="#" title="LinkedIn">
              <span className="sidebar-icon">💼</span>
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
