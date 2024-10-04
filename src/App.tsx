// src/App.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar } from "./components/index.ts";
import { Home, Team, Event } from "./pages/index.ts";
import Articles from "./components/Articles"; 
import "./App.css";

import { AnimatePresence } from "framer-motion";

function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route index element={<Home />} />
          <Route path="/team" element={<Team />} />
          <Route path="/event" element={<Event />} />
        </Routes>
      </AnimatePresence>

      <Articles />
    </>
  );
}

export default App;
