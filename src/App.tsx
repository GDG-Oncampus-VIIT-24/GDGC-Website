import { Routes, Route, useLocation } from "react-router-dom";
import { Navbar, Footer, Articles, FeedbackForm, IndividualPastEvent, IndividualUpcomingEvent } from "./components/index.ts";
import {Home, Team , Events } from "./pages/index.ts"
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import "./App.css";

import { useEffect } from "react";

function App() {
  const location = useLocation();
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  })

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to top
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route index element={<Home />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/feedback" element={<FeedbackForm />} />
        <Route path="/contact" element={<Footer />} />
        <Route
          path="/events/PastEvents/:slug"
          element={<IndividualPastEvent />}
        />
        <Route
          path="/events/UpcomingEvents/:slug"
          element={<IndividualUpcomingEvent />}
        />
      </Routes>
    </>
  );
}

export default App;
