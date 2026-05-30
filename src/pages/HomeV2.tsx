import MatrixRain from "../components/MatrixRain";
import Hero from "../sections/Hero";
import About from "../sections/About";
import CountdownV2 from "../sections/CountdownV2";
import Program from "../sections/Program";
import InviteV2 from "../sections/InviteV2";

export default function HomeV2() {
  return (
    <>
      <MatrixRain />
      <div className="bg-veil" aria-hidden="true" />
      <div className="scanlines" aria-hidden="true" />

      <main>
        <Hero />
        <CountdownV2 />
        <About />
        <Program />
        <InviteV2 />
      </main>
    </>
  );
}
