import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import BlogHome from "./pages/BlogHome";
import About from "./pages/About";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";

const PAGES = {
  home: BlogHome,
  about: About,
  categories: Categories,
  contact: Contact,
};

export default function App() {
  const [page, setPage] = useState("home");
  const PageComponent = PAGES[page] || BlogHome;
  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <Sidebar page={page} setPage={setPage} />
      <main style={{ flex: 1, marginLeft: 0, background: "#e6f0fa" }}>
        <PageComponent />
      </main>
    </div>
  );
}
