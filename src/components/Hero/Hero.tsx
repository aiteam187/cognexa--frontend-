import { heroSolutions } from "../../data/heroSolutions";
import SolutionCard from "./SolutionCard";
import HeroCircuitOverlay from "./HeroCircuitOverlay";

function Hero() {
  return (
    <section className="relative">
      <div className="relative h-80 w-full overflow-hidden sm:h-[560px]">
        <img
          src="/home1.webp"
          alt=""
          aria-hidden
          fetchPriority="high"
          className="hero-banner-img absolute inset-0 h-full w-full object-cover"
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
          <h1 className="mx-auto max-w-xs rounded-full bg-gray-950/70 px-5 py-2 text-center text-xl font-semibold text-white backdrop-blur-sm sm:max-w-none sm:bg-transparent sm:px-0 sm:py-0 sm:text-2xl sm:backdrop-blur-none">
            Custom IT services and solutions for your business
          </h1>
          <span className="hidden h-px w-24 bg-white/40 sm:block" />
        </div>
      </div>

      <ul className="mt-4 grid w-full grid-cols-2 gap-4 px-6 pb-10 sm:grid-cols-3 sm:px-16 md:px-24 lg:grid-cols-6 lg:px-16">
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
