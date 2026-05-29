import MatrixRain from "./components/MatrixRain";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Countdown from "./sections/Countdown";
import Program from "./sections/Program";
import Guests from "./sections/Guests";
import Invite from "./sections/Invite";

export default function App() {
  return (
    <>
      <MatrixRain />
      <div className="bg-veil" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      <main>
        <Hero />
        <Countdown />
        <About />
        <Program />
        <Guests />
        <Invite />
      </main>
    </>
  );
}
