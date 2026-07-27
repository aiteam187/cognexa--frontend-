import { heroSolutions } from "../../data/heroSolutions";
import SolutionCard from "./SolutionCard";
import HeroCircuitOverlay from "./HeroCircuitOverlay";

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-80 w-full overflow-hidden sm:h-[560px]">
        <div
          className="hero-banner-img absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/home1.webp)" }}
        />
        {/* Flowing current along the circuit traces */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <HeroCircuitOverlay />
          <div className="hero-core">
            <span className="hero-core-glow" />
            <span className="hero-core-ring hero-core-ring-a" />
            <span className="hero-core-ring hero-core-ring-b" />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5">
        <div className="hero-heading -mt-10 mb-2.5 flex items-center justify-center gap-5 sm:-mt-24">
          <span className="hidden h-px w-24 bg-white/40 sm:block" />
          <h1 className="text-center text-xl font-semibold text-white sm:text-2xl">
            Custom IT services and solutions for your business
          </h1>
          <span className="hidden h-px w-24 bg-white/40 sm:block" />
        </div>
      </div>

      <ul className="mt-4 grid w-full grid-cols-2 gap-4 px-6 pb-10 sm:grid-cols-3 sm:px-16 md:px-24 lg:grid-cols-5 lg:px-32">
        {heroSolutions.map((solution, index) => (
          <SolutionCard
            key={solution.title}
            solution={solution}
            delay={index * 80}
            index={index}
          />
        ))}
      </ul>
    </section>
  );
}

export default Hero;
