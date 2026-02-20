import React from "react";
import "./WeatherDashboard.css";

export default function WeatherDashboard() {
  return (
    <div className="weather-dashboard">
      <aside className="sidebar">
        <h2>Weather Dashboard</h2>
        <nav>
          <ul>
            <li>Overview</li>
            <li>Map</li>
            <li>Alerts</li>
            <li>Settings</li>
          </ul>
        </nav>
      </aside>
      <main className="main-content">
        <header className="main-header">
          <h1>Current Weather</h1>
          <input className="search-bar" placeholder="Search city..." />
        </header>
        <section className="weather-content">
          {/* Weather cards, map, and alerts will go here */}
          <div className="weather-card">Sample Weather Card</div>
        </section>
      </main>
    </div>
  );
}
