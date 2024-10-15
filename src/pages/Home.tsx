import { Hero, Event, Footer } from "../components/index";
import Team from "../pages/Team"

function Home() {
  return (
    <>
      <div className="w-full min-h-screen">
        <Hero />
        <Event />
        <Team />
        <Footer />
      </div>
    </>
  );
}

export default Home;
